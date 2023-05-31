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
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  steps: number;
  stepDescription: string;
  title: string;
  sub_title: string;
  SvgImage: ReactNode;
  addOpacity?: boolean;
  subTitleWidth?: number;
  subTitleHeight?: number;
  iconMarginTop?: number;
}
const ProfileSetUpHeader = ({
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

  const size = new sizes(height, width);
  return (
    <>
      <View
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(46),
        }}
      >
        <Text
          style={{
            color: addOpacity
              ? appColor.kWhiteColorWithOpacity
              : appColor.kTextColor,
            fontFamily: 'Outfit-Regular',
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: size.getWidthSize(257),
          }}
        >
          Next Step: {stepDescription}
        </Text>
        <View
          style={{
            marginTop: size.getHeightSize(8),
            width: size.getWidthSize(306),
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 1
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 2
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 3
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 4
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 5
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 6
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: iconMarginTop ? iconMarginTop : size.getHeightSize(32),
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
          width: subTitleWidth ? subTitleWidth : undefined,
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

export default ProfileSetUpHeader;
