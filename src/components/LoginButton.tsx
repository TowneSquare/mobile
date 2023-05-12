import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
interface Props {
  navigateTo?: string;
  top: number;
  label: string;
  onPress?(): void;
}
const LoginButton = (Props: Props) => {
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  const { navigateTo, top, label } = Props;
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={Props.onPress}
      style={{
        backgroundColor: appColor.buttonColor,
        justifyContent: 'center',
        width: size.sWidth(0.9),
        height: size.sHeight(0.065),
        marginTop: size.sHeight(top),
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(16),
          textAlign: 'center',
          fontFamily: 'Urbanist-Bold',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
