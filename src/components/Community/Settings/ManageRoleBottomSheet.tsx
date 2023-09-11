import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  BackHandler,
  Pressable,
} from 'react-native';
import React, {
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
import DefaultButton from '../../../../assets/images/svg/DefaultButton';
import RadioButton from '../../../../assets/images/png/RadioButton';
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
  onKickPressed: () => void;
  onBanPressed: () => void;
}
const ManageRoleBottomSheet = ({
  callBack,
  onClose,
  visibility,
  onBanPressed,
  onKickPressed,
}: Props) => {
  const [role, setRole] = useState<'admin' | 'moderator' | 'member'>(
    'moderator'
  );
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
            <Text style={styles.title}>Manage role</Text>
            <View
              style={{
                gap: size.getHeightSize(8),
                marginVertical: size.getHeightSize(24),
              }}
            >
              <Pressable onPress={() => setRole('admin')} style={styles.row}>
                {role === 'admin' ? (
                  <RadioButton size={size.getHeightSize(24)} />
                ) : (
                  <DefaultButton size={size.getHeightSize(24)} />
                )}
                <Text style={styles.text}>Admin</Text>
              </Pressable>
              <Pressable
                onPress={() => setRole('moderator')}
                style={styles.row}
              >
                {role === 'moderator' ? (
                  <RadioButton size={size.getHeightSize(24)} />
                ) : (
                  <DefaultButton size={size.getHeightSize(24)} />
                )}
                <Text style={styles.text}>Moderator</Text>
              </Pressable>
              <Pressable onPress={() => setRole('member')} style={styles.row}>
                {role === 'member' ? (
                  <RadioButton size={size.getHeightSize(24)} />
                ) : (
                  <DefaultButton size={size.getHeightSize(24)} />
                )}
                <Text style={styles.text}>Member</Text>
              </Pressable>
            </View>
            <View
              style={{
                alignSelf: 'center',
                paddingTop: size.getHeightSize(24),
                borderTopWidth: 1,
                borderTopColor: appColor.grayDark,
                gap: size.getHeightSize(8),
                paddingHorizontal: size.getWidthSize(16),
                width: '100%',
                marginBottom: size.getHeightSize(32),
              }}
            >
              <Pressable
                onPress={onKickPressed}
                style={{
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                <Text style={styles.kickMember}>Kick Member</Text>
              </Pressable>
              <Pressable
                onPress={onBanPressed}
                style={{
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                <Text style={styles.ban}>Ban Member</Text>
              </Pressable>
            </View>
            <Pressable
              onPress={onClose}
              style={[
                styles.saveButton,
                {
                  backgroundColor: appColor.kWhiteColor,
                },
              ]}
            >
              <Text style={styles.saveText}>Save changes</Text>
            </Pressable>
            <View style={styles.dontSaceButton}>
              <Text onPress={onClose} style={styles.dontSaveText}>
                Don't save
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ManageRoleBottomSheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(10),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  kickMember: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  ban: {
    color: appColor.kErrorText,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  saveButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12.5),
    marginVertical: size.getHeightSize(8),
  },
  saveText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  dontSaveText: {
    fontStyle: 'normal',
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',

    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  dontSaceButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    marginBottom: size.getHeightSize(16),
    paddingVertical: size.getHeightSize(12.5),
  },
});
