import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Dimensions,
} from 'react-native';
import React, { ReactNode, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  steps?: number;
  stepDescription?: string;
  title?: string;
  sub_title?: string;
  SvgImage?: ReactNode;
  addOpacity?: boolean;
  subTitleWidth?: number;
  subTitleHeight?: number;
  iconMarginTop?: number;
}
const ScrollableHeaderContent = ({
  steps,
  stepDescription,
  title,
  sub_title,
  SvgImage,
  addOpacity,
  subTitleWidth,
  subTitleHeight,
  iconMarginTop,
}: Props) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <View
        style={{
          alignSelf: 'center',
        }}
      >
        {SvgImage}
      </View>
      <View
        style={{
          // height: size.getHeightSize(37),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: addOpacity
              ? appColor.kWhiteColorWithOpacity
              : appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
            marginTop: size.getHeightSize(8),
            lineHeight: size.getHeightSize(37),
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(8),
          width: subTitleWidth ? size.getWidthSize(subTitleWidth) : undefined,
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: addOpacity
              ? appColor.kWhiteColorWithOpacity
              : appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            lineHeight: size.getHeightSize(21),
          }}
        >
          {sub_title.replace(/\\n/g, '\n')}
        </Text>
      </View>
    </>
  );
};

export default ScrollableHeaderContent;
