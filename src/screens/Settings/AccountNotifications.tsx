import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';
import ArrowRight from '../../../assets/images/svg/Settings/ArrowRight';
import ToggleButton from '../../shared/ToggleButton';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AccountNotifications = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Notifications" />
      <View style={styles.view}>
        <View
          style={{
            flex: 1,
            gap: size.getHeightSize(2),
          }}
        >
          <Text style={styles.leadingText}>
            Push notifications are disabled in your phone settings
          </Text>
          <Text style={styles.text}>Tap here to enable them</Text>
        </View>
        <ArrowRight size={size.getHeightSize(24)} />
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          gap: size.getWidthSize(8),
          paddingVertical: size.getHeightSize(16),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={[styles.leadingText, { flex: 1 }]}>
          Push notifications
        </Text>
        <ToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </View>
    </SafeAreaView>
  );
};

export default AccountNotifications;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    paddingTop: size.getHeightSize(16),
    borderBottomWidth: 1,
    borderColor: appColor.kGrayLight3,
    paddingBottom: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Medium',
  },
  leadingText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-Medium',
  },
});
