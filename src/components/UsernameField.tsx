import { View, Text, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../utils';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
const UsernameField = () => {
  const { height, width } = Dimensions.get('window');
  const [error, setError] = useState(false);
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
        width: size.getWidthSize(328),
        alignItems: 'center',
      }}
    >
      <TextInput
        cursorColor={appColor.kgrayColor}
        placeholder="Insert username"
        placeholderTextColor={appColor.kSecondaryNavy}
        style={{
          width: size.getWidthSize(328),
          height: size.getHeightSize(48),
          borderRadius: 48,
          borderWidth: 1,
          borderColor: error
            ? appColor.kErrorText
            : appColor.kSecondaryButtonColor,
          paddingHorizontal: size.getWidthSize(16),
          paddingVertical: size.getHeightSize(8),
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-Medium',
          color: appColor.kTextColor,
          backgroundColor: appColor.kStatusBarNaviDark,
          marginHorizontal: size.getWidthSize(16),
        }}
      />
      {error && (
        <View
          style={{
            alignSelf: 'flex-start',
          }}
        >
          <Text
            style={{
              marginTop: size.getHeightSize(8),
              color: appColor.kErrorText,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              marginLeft: size.getWidthSize(16),
              fontFamily: 'Outfit-Medium',
            }}
          >
            Error message
          </Text>
        </View>
      )}
    </View>
  );
};

export default UsernameField;
