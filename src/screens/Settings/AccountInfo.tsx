import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MagicIcon from '../../../assets/images/svg/Settings/MagicIcon';
import { appColor } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
import Header from '../../shared/Feed/Header';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AccountInfo = () => {
  const {username, nickname,walletAddress,email} = useAppSelector((state) => ({
    username: state.USER.UserData.username,
    nickname:state.USER.UserData.nickname,
    walletAddress: state.USER.UserData.aptosWallet,
    email: state.USER.UserData.email
  }))
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Account info" />
      <View style={[styles.view, { paddingTop: size.getHeightSize(8) }]}>
        <Text style={styles.leadingText}>DISPLAY NAME</Text>
        <Text style={styles.text}>{nickname}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.leadingText}>USERNAME</Text>
        <Text style={styles.text}>{`@${username}`}</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.leadingText}>CONNECTED WALLET</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.getWidthSize(4),
          }}
        >
          <MagicIcon size={size.getHeightSize(20)} />
          <Text style={styles.text}>Magic wallet</Text>
        </View>
        <View
          style={{
            gap: size.getHeightSize(4),
            marginTop: size.getHeightSize(12),
          }}
        >
          <Text style={styles.leadingText}>ADDRESS</Text>
          <Text style={styles.text}>
            {walletAddress}
          </Text>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.leadingText}>EMAIL</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  leadingText: {
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Medium',

    textTransform: 'uppercase',
  },
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
  },
  view: {
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),
    paddingTop: size.getHeightSize(12),
    borderBottomWidth: 1,
    borderColor: appColor.kGrayLight3,
    paddingBottom: size.getHeightSize(12),
  },
});
