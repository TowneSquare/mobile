import { View, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { appColor } from '../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

type fontFamily =
  | 'Outfit-Bold'
  | 'Outfit-Medium'
  | 'Outfit-Regular'
  | 'Outfit-SemiBold';
interface Props {
  disable?: boolean;
  callBack?: () => void;
  title: string;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  fontFamily?: fontFamily;
  fontColor?: string;
  buttonBackgroundColor?: string;
  disableOpacity?: string;
  ButtonTypetype?: 'warning';
}
const ActionButton = ({
  callBack,
  disable,
  title,
  buttonBackgroundColor,
  disableOpacity,
  fontColor,
  fontFamily,
  fontSize,
  ButtonTypetype,
  letterSpacing,
  lineHeight,
}: Props) => {
  let bgColor: string;
  if (disable && buttonBackgroundColor) {
    bgColor = `${buttonBackgroundColor}`;
  } else if (buttonBackgroundColor) {
    bgColor = buttonBackgroundColor;
  } else if (disable) {
    bgColor = '#FFFFFF60';
  } else {
    bgColor = appColor.kWhiteColor;
  }
  if (ButtonTypetype === 'warning') {
    bgColor = appColor.kErrorText;
  }
  return (
    <Pressable
      disabled={disable ? disable : false}
      onPress={callBack}
      style={{
        backgroundColor: bgColor,
        alignSelf: 'center',
        width: '100%',
        borderRadius: 40,
        minHeight: size.getHeightSize(48),
        justifyContent: 'center',
        paddingVertical: size.getHeightSize(12.5),
        opacity: disable ? 0.4 : 1,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: fontColor ? fontColor : appColor.kButtonTextColor,
          fontSize: fontSize ? size.fontSize(fontSize) : size.fontSize(18),
          fontFamily: fontFamily ? fontFamily : 'Outfit-Medium',
          lineHeight: lineHeight ? size.getHeightSize(lineHeight) : undefined,
          letterSpacing: letterSpacing ? letterSpacing : 0.36,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ActionButton;
