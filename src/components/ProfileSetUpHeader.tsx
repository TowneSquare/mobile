import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Dimensions,
} from 'react-native';
import React,{ReactNode} from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  steps: number;
  stepDescription: string;
  title: string;
  sub_title: string;
  SvgImage:ReactNode
  addOpacity?: boolean;
}
const ProfileSetUpHeader = ({
  steps,
  stepDescription,
  title,
  sub_title,
  SvgImage,
  addOpacity,
}: Props) => {
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <>
      <View
        style={{
          width: size.sWidth(0.9),
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            marginTop: size.vMargin(5),
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
          marginTop: size.vMargin(80),
          alignSelf: 'center',
        }}
      >

        {SvgImage}
      </View>
      <Text
        style={{
          color: addOpacity
            ? appColor.kWhiteColorWithOpacity
            : appColor.kTextColor,
          fontSize: size.fontSize(39),
          fontFamily: 'Outfit-Bold',
          textAlign: 'center',
          marginTop: size.vMargin(40),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: addOpacity
            ? appColor.kWhiteColorWithOpacity
            : appColor.kTextColor,
          fontSize: size.fontSize(19),
          fontFamily: 'Outfit-Medium',
          textAlign: 'center',
          marginTop: size.vMargin(20),
          marginHorizontal: size.hMargin(80),
        }}
      >
        {sub_title}
      </Text>
    </>
  );
};

export default ProfileSetUpHeader;