import { View, Text, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../utils';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
import { useAppSelector, useAppDispatch } from '../controller/hooks';
import { updateNickname } from '../controller/SignUpController';
const NickNameField = () => {
  const dispatch = useAppDispatch();
  const nickNameError = useAppSelector(
    (state) => state.signUpController.errors.nicknameError
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
        placeholder="Nickname"
        placeholderTextColor={appColor.kgrayTextColor}
        
        onChangeText={(text)=>dispatch(updateNickname(text))}
        style={{
          width: size.getWidthSize(328),
          height: size.getHeightSize(48),
          borderRadius: 48,
          borderWidth: 1,
          borderColor: nickNameError
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
      {nickNameError && (
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
            Username can be max. 30 characters long
          </Text>
        </View>
      )}
    </View>
  );
};

export default NickNameField;
