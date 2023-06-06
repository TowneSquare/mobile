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
import Link from '../images/svg/Link';
import Checked from '../images/svg/Checked';
import DiscordBG from '../images/svg/DiscordBG';
import TwitterBG from '../images/svg/TwitterBg';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
const size = new sizes(height, width);


const ConnectSocials = () => {
  const [isTwitterConected, setTwitterConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const handleTwitterConnection = () => {
    setTwitterConnected(!isTwitterConected);
  };
  const handleDiscordConnection = () => {
    setDiscordConnected(!isDiscordConnected);
  };
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
        stepDescription="Select socials"
        title="Connect your socials"
        sub_title="Connect both to receive extra \n credentials in your profile"
        steps={3}
        subTitleWidth={304}
      />
      <View
        style={{
          flex: 1,
        }}
      />
      <View
        style={{
          // height: size.getHeightSize(343),
          width: size.getWidthSize(328),
          alignSelf: 'center',
          justifyContent: 'center',
          gap: size.getHeightSize(16),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TwitterBG />
          <Text style={styles.socialText}>Twitter</Text>
          {isTwitterConected ? (
            <Pressable
              onPress={handleTwitterConnection}
              style={styles.isConnected}
            >
              <Checked />
              <Text style={styles.isConnectedText}>Connected</Text>
            </Pressable>
          ) : (
            <Pressable onPress={handleTwitterConnection} style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <DiscordBG />
          <Text style={styles.socialText}>Discord</Text>
          {isDiscordConnected ? (
            <Pressable
              onPress={handleDiscordConnection}
              style={styles.isConnected}
            >
              <Checked />
              <Text style={styles.isConnectedText}>Connected</Text>
            </Pressable>
          ) : (
            <Pressable onPress={handleDiscordConnection} style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
          )}
        </View>
      </View>
      <View style={{ flex: 1 }} />

      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton navigateTo="FindFriends" />
        <BackButton marginTop={20} />
      </View>
    </SafeAreaView>
  );
};

export default ConnectSocials;
const styles = StyleSheet.create({
  socialText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    paddingLeft: size.getWidthSize(16),
    color: appColor.kTextColor,
    flex: 1,
    lineHeight: size.getHeightSize(16),
    fontStyle: 'normal',
  },
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    justifyContent: 'center',
    height: size.getHeightSize(38),
    // width: size.getWidthSize(100),
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  isConnected: {
    paddingVertical: size.getHeightSize(10),
    justifyContent: 'center',
    flexDirection: 'row',
    width: size.getWidthSize(113),
    height: size.getHeightSize(38),
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  isConnectedText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
    fontStyle: 'normal',
  },
});
