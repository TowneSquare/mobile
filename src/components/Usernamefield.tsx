import { View, Text, TextInput, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { sizes } from '../utils';
import React from 'react';
import { appColor, fonts } from '../constants';
const Usernamefield = () => {
  const { height, width } = Dimensions.get('window');

  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        marginTop: size.sHeight(0.1),
        width: size.sWidth(0.9),
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          //
          alignSelf: 'flex-start',
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(18),
          fontFamily: 'UrbanistSemiBold',
        }}
      >
        Insert your username
      </Text>
      <TextInput
        cursorColor={appColor.cursorColor}
        placeholder="Username"
        placeholderTextColor={appColor.maintext}
        style={{
          marginTop: size.sHeight(0.01),
          width: size.sWidth(0.9),
          height: size.sHeight(0.06),
          borderRadius: 12,
          borderWidth: 1,
          borderColor: appColor.textInputColor,
          paddingHorizontal: size.sWidth(0.03),
          fontSize: size.fontSize(16),
          fontFamily: 'Urbanist-Bold',
          color: appColor.maintext,
        }}
      />
      <Text
        style={{
          marginTop: size.sHeight(0.015),
          color: '#FDA29B',
          fontSize: size.fontSize(16),

          alignSelf: 'flex-start',
        }}
      >
        Username taken
      </Text>
    </View>
  );
};

export default Usernamefield;
