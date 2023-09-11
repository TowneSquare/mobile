import { View, Alert, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../../utils';
import SwitchToggle from 'react-native-switch-toggle';
import { appColor } from '../../../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface SettingToggleProps {
  title: string;
  body: string;
  disable?: boolean;
  dangerous?: boolean;
}
const SettingsToggle = ({
  body,
  title,
  disable,
  dangerous,
}: SettingToggleProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    dangerous
      ? Alert.alert(
          'Dangerous Permissions',
          'This feature requires dangerous permissions and cannot be turned on.',
          [{ text: 'OK', onPress: () => {} }]
        )
      : setIsEnabled((previousState) => !previousState);
  };
  return (
    <View>
      <View
        style={{
          height: size.getHeightSize(24),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-SemiBold',
            fontWeight: '600',
            lineHeight: size.getHeightSize(21),
            color: appColor.kTextColor,
            flex: 1,
          }}
        >
          {title}
        </Text>
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
      </View>
      <View>
        <Text
          style={{
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            fontWeight: '400',
            paddingTop: size.getHeightSize(5),
            lineHeight: size.getHeightSize(21),
            marginRight: size.getWidthSize(36),
            color: appColor.grayLight,
          }}
        >
          {body}
        </Text>
        {dangerous && (
          <Text
            style={{
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Regular',
              fontWeight: '400',
              lineHeight: size.getHeightSize(21),
              paddingRight: size.getWidthSize(36),
              paddingBottom: size.getHeightSize(16),
              color: '#FFAD33',
            }}
          >
            This is a very dangerous permission to grant!
          </Text>
        )}
      </View>
    </View>
  );
};

export default SettingsToggle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    letterSpacing: 0.36,
    fontWeight: '500',
    fontFamily: 'Outfit-Regular',
  },
});
