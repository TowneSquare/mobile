import { View, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
interface Props {
  navigateTo?: string;
  marginTop?: number;
}
const ContinueButton = ({ navigateTo, marginTop }: Props) => {
  
  const navigation = useNavigation();
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
    <Pressable
      onPress={() => navigation.navigate(navigateTo as never)}
      style={{
        backgroundColor: appColor.kWhiteColor,
        alignSelf: 'center',
        width: size.sWidth(0.9),
        borderRadius: 40,
        height: size.sHeight(0.075),
        justifyContent: 'center',
        marginTop: marginTop ? size.vMargin(marginTop) : 0,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kButtonTextColor,
          fontSize: size.fontSize(18),
          fontFamily: 'Outfit-Bold',
        }}
      >
        CONTINUE
      </Text>
    </Pressable>
  );
};

export default ContinueButton;
