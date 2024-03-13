import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { appColor } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface SettingToggleProps {
  isEnabled: boolean;
  toggleSwitch: () => void;
}
const ToggleButton = ({ isEnabled, toggleSwitch }: SettingToggleProps) => {
  return (
    <SwitchToggle
      switchOn={isEnabled}
      onPress={toggleSwitch}
      circleColorOff={appColor.grayLight}
      circleColorOn={appColor.kWhiteColor}
      backgroundColorOn="#9264F8"
      backgroundColorOff={appColor.grayDark}
      containerStyle={{
        width: size.getWidthSize(44),
        height: size.getHeightSize(25.6),
        borderRadius: 25,
        padding: size.getHeightSize(5),
      }}
      circleStyle={{
        height: size.getHeightSize(16),
        width: size.getHeightSize(16),
        borderRadius: 20,
      }}
    />
  );
};

export default ToggleButton;

const styles = StyleSheet.create({});
