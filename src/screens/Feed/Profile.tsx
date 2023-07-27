import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import Header from '../../components/Profile/Header';
import Wallet from '../../components/Profile/Wallet';
import About from '../../components/Profile/About';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditProfileModal from '../../components/Profile/About/EditProfileModal';
import ProfileTabNavigation from '../../navigations/ProfileTabNavigation';
const title = 'Real JC';

const size = new sizes(height, width);

export const tabBar = (props: any) => (
  <MaterialTabBar
    {...props}
    indicatorStyle={styles.focusedTab}
    tabStyle={styles.tabStyle}
    labelStyle={{ fontSize: size.fontSize(15), fontFamily: 'Outfit-Bold' }}
    activeColor={appColor.kWhiteColor}
    inactiveColor={appColor.kWhiteColor}
    contentContainerStyle={{ borderRadius: 40 }}
  />
);

const Profile = () => {
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
      <Header title={title} />
      <ProfileTabNavigation />
    </SafeAreaView>
    // <Tabs.Container renderHeader={header} renderTabBar={tabBar}>
    //   <Tabs.Tab name="Profile" label="Profile">
    //     <Tabs.ScrollView>
    //       <About />
    //     </Tabs.ScrollView>
    //     <EditProfileModal />
    //   </Tabs.Tab>
    //   <Tabs.Tab name="Wallet" label="Wallet">
    //     <Tabs.ScrollView>
    //       <Wallet />
    //     </Tabs.ScrollView>
    //   </Tabs.Tab>
    // </Tabs.Container>
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
