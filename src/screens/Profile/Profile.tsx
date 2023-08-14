import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useState, createContext, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { useFonts } from 'expo-font';
import Header from '../../components/Profile/Header';
import Wallet from '../Wallet';
import About from '../../components/Profile/About';
import ReportUserModal from '../../components/Feed/ReportUserModal';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import MyPostPanel from '../../shared/Feed/MyPostPanel';
import VerificationModal from '../../components/Profile/About/VerificationModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import SuperStarBottomSheet from '../../components/Profile/About/SuperStarBottomSheet';
import EditProfileModal from '../../components/Profile/About/EditProfileModal';
import ProfileTabNavigation from '../../navigations/ProfileTabNavigation';
import { updateSuperStarBottomSheet } from '../../controller/BottomSheetController';
import {
  updateToastToShow,
  updateShowCustomToast,
} from '../../controller/createPost';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import CustomToast from '../../shared/Feed/CustomToast';
import DeleteMyPostPanel from '../../shared/Feed/DeleteMyPostPanel';

const title = 'Real JC';

const size = new sizes(height, width);
type ToastType = 'none' | 'reportUser' | 'blockUser' | 'reportPost';
// export const tabBar = (props: any) => (
//   <MaterialTabBar
//     {...props}
//     indicatorStyle={styles.focusedTab}
//     tabStyle={styles.tabStyle}
//     labelStyle={{ fontSize: size.fontSize(15), fontFamily: 'Outfit-Bold' }}
//     activeColor={appColor.kWhiteColor}
//     inactiveColor={appColor.kWhiteColor}
//     contentContainerStyle={{ borderRadius: 40 }}
//   />
// );

const Profile = () => {
  const dispatch = useAppDispatch();
  const toastType = useAppSelector(
    (state) => state.CreatePostController.toastType
  );
  const handleToast = (type: ToastType) => {
    dispatch(updateToastToShow(type));
    dispatch(updateShowCustomToast(true));
  };
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <Header title={title} typeOfProfile="myProfile" />
      <ProfileTabNavigation typeOfProfile="myProfile" />
      <SuperStarBottomSheet
        handleVisibility={() => {
          dispatch(updateSuperStarBottomSheet(false));
        }}
        typeOfProfile="myProfile"
      />
      <EditProfileModal />
      <ReportUserModal handleToastView={() => handleToast('reportUser')} />
      <ReportPanel />
      <ReportPostModal handleToastView={() => handleToast('reportPost')} />
      <BlockUserModal handleToastView={() => handleToast('blockUser')} />
      <DeleteMyPostPanel />
      <MyPostPanel />
      <VerificationModal />
      {toastType !== 'none' && toastType !== 'publish' && (
        <CustomToast
          type="sucess"
          marginVertical={24}
          position="top"
          text={
            toastType === 'reportUser'
              ? 'JohnFlock is reported successfully'
              : toastType === 'blockUser'
              ? 'You have blocked JohnFlock'
              : toastType === 'reportPost'
              ? 'Post is reported successfully'
              : null
          }
          functions={[
            () => {
              dispatch(updateToastToShow('none')),
                dispatch(updateShowCustomToast(false));
            },
          ]}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: appColor.kgrayDark2,
    color: appColor.kTextColor,
    textAlign: 'center',
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
  },
});

export default Profile;
