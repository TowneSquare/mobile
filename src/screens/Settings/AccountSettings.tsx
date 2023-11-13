import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';
import ArrowRight from '../../../assets/images/svg/Settings/ArrowRight';
import { AccountSettingsProps } from '../../navigations/NavigationTypes';
import PersonIcon from '../../../assets/images/svg/Settings/PersonIcon';
import TowneSquareVerificationIcon from '../../../assets/images/svg/Settings/TowneSquareVerificationIcon';
import NotificationIcon from '../../../assets/images/svg/Settings/NotificationIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AccountSettings = ({ navigation }: AccountSettingsProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Setings" />
      <Pressable
        onPress={() => navigation.navigate('AccountInfo')}
        style={styles.row}
      >
        <PersonIcon size={size.getHeightSize(24)} />
        <Text style={styles.text}>Account info</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('AccountNotifications')}
        style={styles.row2}
      >
        <NotificationIcon size={size.getHeightSize(24)} />
        <Text style={styles.text}>Notifications</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('TownesquareVerification')}
        style={styles.row2}
      >
        <TowneSquareVerificationIcon size={size.getHeightSize(24)} />
        <Text style={styles.text}>TowneSquare verification</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <View style={{ flex: 1 }} />
      <Text
        style={{
          paddingBottom: size.getHeightSize(16),
          paddingHorizontal: size.getWidthSize(16),
          fontSize: size.fontSize(13),
          lineHeight: size.getHeightSize(16),
          color: appColor.kTextColor,
          fontFamily: 'Outfit-Regular',
        }}
      >
        App version 0.01
      </Text>
    </SafeAreaView>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    flex: 1,
  },
  row: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(12),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },
  row2: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(12),
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },
});
