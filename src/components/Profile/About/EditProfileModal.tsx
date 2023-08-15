import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  BackHandler,
} from 'react-native';
import CustomHandler from '../../Feed/CustomHandler';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
import { updateEditProfile } from '../../../controller/UserController';
import EditProfilePen from '../../../../assets/images/svg/EditProfile';
import GetVerifiedBadge from '../../../../assets/images/svg/GetVerifiedBadge';
import { EditProfileProps } from '../../../navigations/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { updateVerificationModal } from '../../../controller/BottomSheetController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const EditProfileModal = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const navigation = useNavigation();
  const isModalVisible = useAppSelector((state) => state.USER.editProfile);

  const closeModal = () => {
    bottomSheetRef.current?.close();
    dispatch(updateEditProfile(false));
  };
  useEffect(() => {
    if (isModalVisible === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [isModalVisible]);
  const handleSheetChanges = useCallback((index: number) => {}, []);
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
        opacity={0.5}
      />
    ),
    []
  );
  useEffect(() => {
    const handleBackButton = () => {
      if (isModalVisible === true) {
        closeModal();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [isModalVisible]);
  return (
    <>
      {!isModalVisible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={closeModal}
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
          <BottomSheetView onLayout={handleContentLayout}>
            <Pressable
              style={styles.container}
              onPress={() => {
                closeModal();
                navigation.navigate('EditProfileScreen'); //Edit Profile
              }}
            >
              <EditProfilePen />
              <Text style={styles.text}>Edit Profile</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                closeModal();
                dispatch(updateVerificationModal(true));
              }}
              style={styles.container}
            >
              <GetVerifiedBadge />
              <Text style={styles.text}>Get Verified</Text>
            </Pressable>
            <View style={{ height: size.getHeightSize(44) }} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default EditProfileModal;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(16),
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
  },
});
