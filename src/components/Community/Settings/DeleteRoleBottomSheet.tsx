import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InfoWarningIcon from '../../../../assets/images/svg/InfoWarningIcon';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const DeleteRoleBottomSheet = ({ callBack, onClose, visibility }: Props) => {
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
            <Text style={styles.title}>Delete Role</Text>

            <Text style={styles.description}>
              Are you sure you want to delete this role?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: size.getWidthSize(16),
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: size.getWidthSize(16),
                paddingVertical: size.getHeightSize(16),
                borderColor: appColor.kErrorText,
              }}
            >
              <InfoWarningIcon size={size.getHeightSize(24)} />
              <Text
                style={[
                  styles.description,
                  { flex: 1, marginBottom: 0, marginTop: 0, textAlign: 'left' },
                ]}
              >
                Upon deleting, all the members with this role will get the
                Default role
              </Text>
            </View>
            <Pressable style={styles.removeButton} onPress={onClose}>
              <Text style={styles.removeText}>Remove</Text>
            </Pressable>
            <View
              style={[
                {
                  backgroundColor: 'transparent',
                  paddingVertical: size.getHeightSize(12.5),
                  marginBottom: size.getHeightSize(16),
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

export default DeleteRoleBottomSheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
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
  removeButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(8),
    backgroundColor: appColor.kErrorText,
    marginTop: size.getHeightSize(32),
  },

  removeText: {
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
