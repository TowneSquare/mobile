import { View, Text, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  navigateTo?: string;
  marginTop?: number;
  closeModal?: boolean;
  disabled?: boolean;
}
const LetGoButton = ({ navigateTo }: Props) => {
  const size = new sizes(height, width);
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(navigateTo as never);
      }}
      style={{
        backgroundColor: appColor.kWhiteColor,
        alignSelf: 'center',
        width: size.sWidth(0.6),
        borderRadius: 40,
        height: size.sHeight(0.075),
        justifyContent: 'center',
        marginTop:size.vMargin(60)
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kButtonTextColor,
          fontSize: size.fontSize(23),
          fontFamily: 'Outfit-Bold',
        }}
      >
        LET'S GOOO!
      </Text>
    </Pressable>
  );
};

export default LetGoButton;
