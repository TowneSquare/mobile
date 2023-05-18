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
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import ContinueButton from '../components/ContinueButton';
import BackButton from '../components/BackButton';
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
        image={images.link}
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
            <Image source={images.checked} />
            <Text style={styles.description}>
              Gain status points in TowneSquare
            </Text>
          </View>
          <View style={styles.row}>
            <Image source={images.users} />
            <Text style={styles.description}>Find your friends faster</Text>
          </View>
          <View style={styles.row}>
            <Image source={images.hands} />
            <Text style={styles.description}>Build trust with others</Text>
          </View>
          <View style={styles.row}>
            <Image source={images.robot} />
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
