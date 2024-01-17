import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  Pressable,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';
import ArrowRight from '../../../assets/images/svg/Settings/ArrowRight';
import XIcon from '../../../assets/images/svg/Settings/XIcon';
import DiscordSvg from '../../../assets/images/svg/Settings/DiscordSvg';
import SupportEmailSvg from '../../../assets/images/svg/Settings/SupportEmailSvg';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Support = () => {
  const emailparas = {
    to: 'support@townesquare.xyz',
    subject: 'Mobile Application Support',
    body: 'Hello Townesquare Team.',
  };

  const emailUrl = `mailto:${emailparas.to}?subject=${encodeURIComponent(
    emailparas.subject
  )}&body=${encodeURIComponent(emailparas.body)}`;
  const handleSupport = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occured', err));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Support" />
      <Pressable
        onPress={() => {
          handleSupport(emailUrl);
        }}
        style={styles.row}
      >
        <SupportEmailSvg size={size.getHeightSize(32)} />
        <Text style={styles.text}>Send us an email</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => {
          handleSupport('https://discord.gg/xnTQh7SsRZ');
        }}
        style={styles.row2}
      >
        <DiscordSvg size={size.getHeightSize(32)} />
        <Text style={styles.text}>Find us on Discord</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => {
          handleSupport('https://twitter.com/TowneSquarexyz');
        }}
        style={styles.row2}
      >
        <XIcon size={size.getHeightSize(32)} />
        <Text style={styles.text}>Find us on X</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Support;
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(8),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },

  row2: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(8),
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },

  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    flex: 1,
  },
});
