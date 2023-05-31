import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { appColor, fonts, images } from '../constants';
import Robot from '../images/svg/Robot';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import UserFriends from '../images/svg/UserFriends';
import SealChecks from '../images/svg/SealChecks';
import Clap from '../images/svg/Clap';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
import Link from '../images/svg/Link';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
const size = new sizes(height, width);
const ConnectSocialsAndVrify = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.signUpBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <ProfileSetUpHeader
        SvgImage={<Link />}
        stepDescription="Connect socials & verify"
        title="Connect socials & verify"
        sub_title="Connect your socials, help us fight bots, and get rewarded!"
        steps={2}
        subTitleWidth={328}
      />
      <View style={{ flex: 1 }} />
      <View
        style={{
          width: size.getWidthSize(328),
          alignSelf: 'center',
          height: size.getHeightSize(224),
          alignItems: 'center',
        }}
      >
        <View style={[styles.row]}>
          <SealChecks />
          <Text style={styles.description}>
            Gain status points in TowneSquare
          </Text>
        </View>
        <View style={styles.row}>
          <UserFriends />
          <Text style={styles.description}>Find your friends faster</Text>
        </View>
        <View style={styles.row}>
          <Clap />
          <Text style={styles.description}>Build trust with others</Text>
        </View>
        <View style={styles.row}>
          <Robot />
          <Text style={styles.description}>Bye to bots & spammers</Text>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton navigateTo="ConnectSocials" />
        <BackButton marginTop={16} />
      </View>
    </SafeAreaView>
  );
};

export default ConnectSocialsAndVrify;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: size.getHeightSize(56),
    width: size.getWidthSize(339),
    alignSelf: 'center',
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(12),
    gap: size.getWidthSize(8),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
  },
});
