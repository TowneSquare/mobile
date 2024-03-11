import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  title: string;
}
const NotificationSettingsToggle = ({ title }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>{title}</Text>
      <SwitchToggle
        switchOn={isEnabled}
        onPress={toggleSwitch}
        circleColorOff={appColor.grayLight}
        circleColorOn={appColor.kWhiteColor}
        backgroundColorOn="#9264F8"
        backgroundColorOff={appColor.grayDark}
        containerStyle={{
          width: size.getWidthSize(44),
          height: size.getHeightSize(24),
          borderRadius: 25,
          padding: size.getHeightSize(5),
        }}
        circleStyle={{
          height: size.getHeightSize(16),
          width: size.getHeightSize(16),
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default NotificationSettingsToggle;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  rowText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    flex:1
  },
});
