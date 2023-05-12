import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
import { sizes } from '../utils';

const BackButton = () => {
  const { height, width } = Dimensions.get('window');

  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        height: size.sHeight(0.055),
        width: size.sWidth(0.4),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: appColor.grayBlue2,
      }}
    >
      <Text
        style={{
          fontSize: size.fontSize(16),
          fontFamily: 'Urbanist-Bold',
          color: appColor.maintext,
          textAlign: 'center',
        }}
      >
        Back
      </Text>
    </View>
  );
};

export default BackButton;
