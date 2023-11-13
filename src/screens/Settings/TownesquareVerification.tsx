import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import CheckedIcon from '../../../assets/images/svg/Settings/CheckedIcon';
import Header from '../../shared/Feed/Header';
import XIcon from '../../../assets/images/svg/Settings/XIcon';
import VerifiedBadge from '../../../assets/images/svg/Settings/VerifiedBadge';
import DiscordSvg from '../../../assets/images/svg/Settings/DiscordSvg';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TownesquareVerification = () => {
  const [isXConected, setXConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);

  const handleXConnection = () => {
    setXConnected(!isXConected);
  };
  const handleDiscordConnection = () => {
    setDiscordConnected(!isDiscordConnected);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="TowneSquare verification" />
      <View style={{ paddingHorizontal: size.getWidthSize(16), flex: 1 }}>
        <VerifiedBadge
          size={size.getHeightSize(100)}
          style={{
            marginTop: size.getHeightSize(30),
            alignSelf: 'center',
            opacity: isDiscordConnected && isXConected ? 1 : 0.7,
          }}
        />

        {isDiscordConnected && isXConected ? (
          <Text style={styles.text}>Prime Citizen</Text>
        ) : (
          <Text style={styles.notVerifiedText}>
            Get verified and receive a Prime Citizen badge!
          </Text>
        )}
        {isDiscordConnected && isXConected ? (
          <Text style={styles.verified}>
            Your TowneSquare account is verified!
          </Text>
        ) : (
          <Text style={styles.verified}>
            Connect your X & Discord accounts and get the{' '}
            <Text style={{ fontFamily: 'Outfit-Bold' }}>
              Prime Citizen badge!
            </Text>
          </Text>
        )}
        <View
          style={{
            gap: size.getHeightSize(22),
            marginTop:
              isDiscordConnected && isXConected
                ? size.getHeightSize(111)
                : size.getHeightSize(48),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <XIcon size={size.getHeightSize(44)} />

            <Text style={styles.socialText}>X</Text>
            {isXConected ? (
              <Pressable onPress={handleXConnection} style={styles.isConnected}>
                <CheckedIcon size={size.getHeightSize(24)} />
                <Text style={styles.isConnectedText}>Connected</Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleXConnection} style={styles.button}>
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
            <DiscordSvg size={size.getHeightSize(44)} />
            <Text style={styles.socialText}>Discord</Text>
            {isDiscordConnected ? (
              <Pressable
                onPress={handleDiscordConnection}
                style={styles.isConnected}
              >
                <CheckedIcon size={size.getHeightSize(24)} />
                <Text style={styles.isConnectedText}>Connected</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleDiscordConnection}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Connect</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TownesquareVerification;

const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    marginTop: size.getHeightSize(8),
    textAlign: 'center',
  },
  notVerifiedText: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    marginTop: size.getHeightSize(30),
    textAlign: 'center',
  },
  verified: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    marginTop: size.getHeightSize(12),
    textAlign: 'center',
  },

  text3: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    marginTop: size.getHeightSize(12),
    textAlign: 'center',
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
});
