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

import CustomToast from '../../shared/Feed/CustomToast';
import BlockUserModal from '../../components/Feed/BlockUserModal';
import ReportPanel from '../../components/Feed/ReportPanel';
import ReportPostModal from '../../components/Feed/ReportPostModal';
import ReportUserModal from '../../components/Feed/ReportUserModal';
const TheirProfileScreen = () => {
  const dispatch = useAppDispatch();

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
      <ReportUserModal />
      <ReportPanel />
      <ReportPostModal />
      <BlockUserModal />
    </SafeAreaView>
  );
};

export default TheirProfileScreen;
