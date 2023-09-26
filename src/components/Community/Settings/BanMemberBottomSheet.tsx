import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  BackHandler,
  Pressable,
} from 'react-native';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
import BanIcon from '../../../../assets/images/svg/BanIcon';
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
  banType: 'kick' | 'ban' | 'unban';
}
const BanMemberBottomSheet = ({
  callBack,
  onClose,
  visibility,
  banType,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onClose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visibility]);
  let title: string;
  let description: string;
  let buttonText: string;
  switch (banType) {
    case 'ban':
      title = ' Are you sure you want to ban [Member name]?';
      description =
        "[Member name] won't be able to join this community anymore";
      buttonText = 'Ban Member';
      break;
    case 'kick':
      title = 'Are you sure you want to kick [Member name]?';
      description =
        '[Member name] will be kicked out of the community but will be able to rejoin';
      buttonText = 'Kick Member';
      break;
    case 'unban':
      title = 'Remove ban';
      description =
        'Are you sure you want to remove “Member name” from the ban list?';
      buttonText = 'Remove';
      break;
    default:
      break;
  }

  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onClose();
          }}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={CustomHandler}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <BanIcon
              size={size.getHeightSize(60)}
              style={{
                marginTop: size.getHeightSize(24),
                alignSelf: 'center',
              }}
            />

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>{description}</Text>

            <Pressable
              onPress={onClose}
              style={
                banType === 'ban' || banType === 'unban'
                  ? styles.banButton
                  : styles.button
              }
            >
              <Text
                style={
                  banType === 'ban' || banType === 'unban'
                    ? styles.banText
                    : styles.buttonText
                }
              >
                {buttonText}
              </Text>
            </Pressable>
            <View
              style={[
                {
                  backgroundColor: 'transparent',
                  paddingVertical: size.getHeightSize(4),
                  marginBottom: size.getHeightSize(32),
                },
              ]}
            >
              <Text onPress={onClose} style={styles.cancel}>
                Cancel
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default BanMemberBottomSheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    marginBottom: size.getHeightSize(24),
  },
  banButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12.5),
    marginVertical: size.getHeightSize(8),
    backgroundColor: appColor.kErrorText,
  },
  buttonText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  button: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12.5),
    marginVertical: size.getHeightSize(8),
    backgroundColor: appColor.kWhiteColor,
  },
  banText: {
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  cancel: {
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
});
