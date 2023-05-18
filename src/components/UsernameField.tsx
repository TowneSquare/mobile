import { View, Text, Dimensions, TextInput } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
const UsernameField = () => {
  const { height, width } = Dimensions.get('window');

  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: size.sHeight(0.1),
        width: size.sWidth(0.9),
        alignItems: 'center',
      }}
    >
      <TextInput
        cursorColor={appColor.kDisabledColor}
        placeholder="Insert username"
        placeholderTextColor={appColor.kSecondaryNavy}
        style={{
          marginTop: size.sHeight(0.01),
          width: size.sWidth(0.9),
          height: size.sHeight(0.07),
          borderRadius: 40,
          borderWidth: 1,
          borderColor: appColor.kSecondaryButtonColor,
          paddingHorizontal: size.sWidth(0.03),
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-Medium',
          color: appColor.kTextColor,
          backgroundColor: appColor.kStatusBarNaviDark,
        }}
      />
      <Text
        style={{
          marginTop: size.sHeight(0.008),
          color: appColor.kErrorText,
          fontSize: size.fontSize(16),
            marginLeft:3,
          alignSelf: 'flex-start',
        }}
      >
        Username taken
      </Text>
    </View>
  );
};

export default UsernameField;
