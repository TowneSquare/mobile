import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import SuperStarBottomSheet from '../../components/Profile/About/SuperStarBottomSheet';
import Header from '../../components/Profile/Header';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import TheirProfileBottomSheet from '../../components/Profile/About/TheirProfileBottomSheet';
import ProfileTabNavigation from '../../navigations/ProfileTabNavigation';
const size = new sizes(height, width);
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateSuperStarBottomSheet } from '../../controller/BottomSheetController';
import {
  updateToastToShow,
  updateShowCustomToast,
} from '../../controller/createPost';
import CustomToast from '../../shared/Feed/CustomToast';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
const TheirProfileScreen = () => {
  const dispatch = useAppDispatch();
  const toastType = useAppSelector(
    (state) => state.CreatePostController.toastType
  );
  type ToastType = 'none' | 'reportUser' | 'blockUser' | 'reportPost';
  const handleToast = (type: ToastType) => {
    dispatch(updateToastToShow(type));
    dispatch(updateShowCustomToast(true));
  };
  const title = 'Real JC';
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} typeOfProfile="theirProfile" />
      <ProfileTabNavigation typeOfProfile="theirProfile" />
      <TheirProfileBottomSheet />
      <SuperStarBottomSheet
        handleVisibility={() => {
          dispatch(updateSuperStarBottomSheet(false));
        }}
        typeOfProfile="theirProfile"
      />
      <ReportUserModal handleToastView={() => handleToast('reportUser')} />
      <ReportPanel />
      <ReportPostModal handleToastView={() => handleToast('reportPost')} />
      <BlockUserModal handleToastView={() => handleToast('blockUser')} />
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

export default TheirProfileScreen;
