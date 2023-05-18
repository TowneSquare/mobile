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
const ConnectSocials = () => {
  const [isTwitterConected, setTwitterConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
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
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <ProfileSetUpHeader
        image={images.link}
        stepDescription="Select socials"
        title="Connect your socials"
        sub_title="Connect both to receive extra credentials in your profile"
        steps={3}
      />
      <View
        style={{
          width: size.sWidth(0.9),
          marginTop: size.vMargin(40),
          alignSelf: 'center',
          //   justifyContent: 'space-between',

          paddingTop: size.vMargin(100),
          flex: 1,
        }}
      >
        <View
          style={{
            height: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image source={images.twitter2} />
            <Text style={styles.socialText}>Twitter</Text>
            {isTwitterConected ? (
              <Pressable
                onPress={handleTwitterConnection}
                style={styles.isConnected}
              >
                <Image source={images.connected} />
                <Text style={styles.isConnectedText}>CONNECTED</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleTwitterConnection}
                style={styles.button}
              >
                <Text style={styles.buttonText}>CONNECT</Text>
              </Pressable>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: size.vMargin(40),
            }}
          >
            <Image source={images.discord2} />
            <Text style={styles.socialText}>Discord</Text>
            {isDiscordConnected ? (
              <Pressable
                onPress={handleDiscordConnection}
                style={styles.isConnected}
              >
                <Image source={images.connected} />
                <Text style={styles.isConnectedText}>CONNECTED</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleDiscordConnection}
                style={styles.button}
              >
                <Text style={styles.buttonText}>CONNECT</Text>
              </Pressable>
            )}
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
        <ContinueButton navigateTo="FindFriends" marginTop={2} />
        <BackButton marginTop={50} />
      </View>
    </SafeAreaView>
  );
};

export default ConnectSocials;
const styles = StyleSheet.create({
  socialText: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    paddingLeft: size.hMargin(50),
    color: appColor.kTextColor,
    flex: 1,
  },
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 20,
    paddingHorizontal: size.hMargin(50),
    paddingVertical: size.vMargin(10),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
  },
  isConnected: {
    paddingVertical: size.vMargin(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  isConnectedText: {
    fontSize: size.fontSize(19),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    color: appColor.kTextColor,
    marginLeft: size.hMargin(30),
  },
});
