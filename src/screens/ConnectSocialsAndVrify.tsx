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
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <ProfileSetUpHeader
     SvgImage={<Link/>}
        stepDescription="Select socials"
        title="Connect socials & verify"
        sub_title="Bots and spam accounts are a huge problem for social apps. But there are ways to fight them."
        steps={2}
      />
      <View
        style={{
          width: size.sWidth(0.9),
          marginTop: size.vMargin(70),
          alignSelf: 'center',

          flex: 1,
        }}
      >
        <View
          style={{
            height: '90%',

            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(20),
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
            }}
          >
            Connect your social accounts, verify your account and get rewarded!
          </Text>
          <View style={styles.row}>
           <SealChecks/>
            <Text style={styles.description}>
              Gain status points in TowneSquare
            </Text>
          </View>
          <View style={styles.row}>
            <UserFriends/>
            <Text style={styles.description}>Find your friends faster</Text>
          </View>
          <View style={styles.row}>
           <Clap/>
            <Text style={styles.description}>Build trust with others</Text>
          </View>
          <View style={styles.row}>
            <Robot/>
            <Text style={styles.description}>Bye to bots & spammers</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          alignSelf: 'baseline',

          alignItems: 'center',
          width: '100%',

          height: 150,
        }}
      >
        <ContinueButton navigateTo="ConnectSocials" marginTop={2} />
        <BackButton marginTop={50} />
      </View>
    </SafeAreaView>
  );
};

export default ConnectSocialsAndVrify;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginLeft: size.hMargin(20),
  },
});
