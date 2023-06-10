import { View, Text, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../utils';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import Info from '../../images/svg/Info';
import { updateUsername } from '../../controller/User';
const UsernameField = () => {
  const dispatch = useAppDispatch();
  const userNameError = useAppSelector(
    (state) => state.USER.errors.usernameError
  );
  const ErrorMessage = useAppSelector(
    (state) => state.USER.errors.usernameErrorMessage
  );
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
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
        cursorColor={appColor.klightPurple}
        placeholder="@username"
        placeholderTextColor={appColor.kgrayTextColor}
        onChangeText={(text) => dispatch(updateUsername(text))}
        style={{
          width: size.getWidthSize(328),
          height: size.getHeightSize(48),
          borderRadius: 48,
          borderWidth: 1,
          borderColor: userNameError
            ? appColor.kErrorText
            : appColor.kGrayscale,
          paddingHorizontal: size.getWidthSize(16),
          paddingVertical: size.getHeightSize(8),
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-Regular',
          color: appColor.kTextColor,
          backgroundColor: appColor.kGrayscaleDart,
          marginHorizontal: size.getWidthSize(16),
        }}
      />
      {userNameError && (
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
              fontFamily: 'Outfit-Regular',
            }}
          >
            {ErrorMessage}
          </Text>
        </View>
      )}
      <View
        style={{
          paddingBottom: size.getHeightSize(16),
          paddingLeft: size.getWidthSize(10),
          paddingRight: size.getWidthSize(16),
          // height: size.getHeightSize(95),
          width: size.getWidthSize(328),
          backgroundColor: 'transparent',
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 8,
          marginTop: size.getHeightSize(8),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Info />
        <View
          style={{
            flexShrink: 1,
            width: size.getWidthSize(264),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(16),
              color: appColor.kTextColor,
              textAlign: 'left',
              marginLeft: size.getWidthSize(6),
              lineHeight: 21,
              fontFamily: 'Outfit-Regular',
            }}
          >
            Username can contain alphanumeric characters (letters A-Z, numbers
            0-9) with the exception of underscores.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UsernameField;
