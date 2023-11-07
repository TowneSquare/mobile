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
  paddingVertical?: number;
}
const ActionButton2 = ({
  callBack,
  disable,
  title,
  fontColor,
  fontFamily,
  fontSize,

  letterSpacing,
  lineHeight,
  paddingVertical,
}: Props) => {
  return (
    <Pressable
      disabled={disable ? disable : false}
      onPress={callBack}
      style={{
        alignSelf: 'center',
        width: '100%',
        borderRadius: 40,
        minHeight: size.getHeightSize(48),
        justifyContent: 'center',
        paddingVertical: paddingVertical
          ? size.getHeightSize(paddingVertical)
          : size.getHeightSize(12.5),
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kTextColor,
          fontSize: fontSize ? size.fontSize(fontSize) : size.fontSize(18),
          fontFamily: fontFamily ? fontFamily : 'Outfit-Medium',
          lineHeight: lineHeight ? size.getHeightSize(lineHeight) : undefined,
          letterSpacing: letterSpacing ? letterSpacing : 0,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ActionButton2;
