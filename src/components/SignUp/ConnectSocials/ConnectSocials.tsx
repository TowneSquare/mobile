import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../../utils';
import { appColor } from '../../../constants';
import DiscordBG from '../../../../assets/images/svg/DiscordBG';
import XBG from '../../../../assets/images/svg/XBg';
import Checked from '../../../../assets/images/svg/Checked';
import Header from '../Header';
import Link from '../../../../assets/images/svg/Link';
import * as Linking from 'expo-linking';
import {
  updateAccountInfo,
  updateSocialconnect,
  updateDidToken,
  updateMetadata,
  disableContinueButton,
} from '../../../controller/UserController';
import { useAppDispatch } from '../../../controller/hooks';
import { updateConnectedSocial } from '../../../api';
import { useAppSelector } from '../../../controller/hooks';
import useBackHandler from '../../../hooks/useBackhandler';
const { width, height } = Dimensions.get('window');
const size = new sizes(height, width);

const ConnectSocials = ({ magic }: { magic: any }) => {
  const continueButtonDisable = useAppSelector(
    (state) => state.USER.isSignUpContinueButtonDisable
  );
  const [isXConected, setXConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);
  useBackHandler(() => {
    if (continueButtonDisable) {
      dispatch(disableContinueButton(false));
      return true;
    } else {
      return false;
    }
  });
  const dispatch = useAppDispatch();
  const handleXConnection = async () => {
    if (!isXConected) {
      dispatch(disableContinueButton(true));
      try {
        const token = await magic.oauth.loginWithPopup({
          provider: 'twitter',
          redirectURI: Linking.createURL('SignUp'),
        });
        const metadata = await magic.user.getMetadata();
        dispatch(updateSocialconnect({ twitter: metadata.email }));
        token ? setXConnected(true) : setXConnected(false);
      } catch {
        setXConnected(false);
      } finally {
        dispatch(disableContinueButton(false));
      }
    } else {
      setXConnected(false);
      dispatch(updateSocialconnect({ twitter: '' }));
    }
  };
  const handleDiscordConnection = async () => {
    if (!isDiscordConnected) {
      dispatch(disableContinueButton(true));
      const token = await magic.oauth.loginWithPopup({
        provider: 'discord',
        redirectURI: Linking.createURL('SignUp'),
      });
      const metadata = await magic.user.getMetadata();
      dispatch(updateSocialconnect({ discord: metadata.email }));
      token ? setDiscordConnected(true) : setDiscordConnected(false);
    } else {
      dispatch(updateSocialconnect({ discord: '' }));
      setDiscordConnected(false);
    }
    dispatch(disableContinueButton(true));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        SvgImage={<Link />}
        title="Connect your socials"
        subtitle="Connect both to receive extra credentials in your profile"
        subTitleWidth={328}
      />
      <View
        style={{
          width: size.getWidthSize(328),
          alignSelf: 'center',
          justifyContent: 'center',
          gap: size.getHeightSize(16),
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <XBG size={size.getHeightSize(45)} />

          <Text style={styles.socialText}>X</Text>
          {isXConected ? (
            <Pressable onPress={handleXConnection} style={styles.isConnected}>
              <Checked />
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
    </View>
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
