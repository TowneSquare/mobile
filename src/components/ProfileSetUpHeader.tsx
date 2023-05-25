import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Dimensions,
} from 'react-native';
import React, { ReactNode } from 'react';
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
}: Props) => {
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
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
          marginTop: size.getHeightSize(34),
        }}
      >
        <Text
          style={{
            color: addOpacity
              ? appColor.kWhiteColorWithOpacity
              : appColor.kTextColor,
            fontFamily: 'Outfit-Medium',
            fontSize: size.fontSize(16),
          }}
        >
          Next Step: {stepDescription}
        </Text>
        <View
          style={{
            marginTop: size.vMargin(5),
            width: size.sWidth(0.9),
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 1
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 2
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 3
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 4
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 5
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 6
                  ? appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: size.getHeightSize(63.5),
          alignSelf: 'center',
        }}
      >
        {SvgImage}
      </View>
      <View
        style={{
          width: size.getWidthSize(355),
          height: size.getHeightSize(37),
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
          height: subTitleHeight ? subTitleHeight : size.getHeightSize(42),
          width: subTitleWidth ? subTitleWidth : undefined,
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
          {sub_title}
        </Text>
      </View>
    </>
  );
};

export default ProfileSetUpHeader;
