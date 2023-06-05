import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import NickNameField from '../../components/SignUp/NickNameField';
import User from '../../images/svg/User';
import ProfileSetUpHeader from '../../components/SignUp/ProfileSetUpHeader';
import UsernameField from '../../components/SignUp/UsernameField';
import { sizes } from '../../utils';
import { useAppSelector } from '../../controller/hooks';
import { useNavigation } from '@react-navigation/native';

import TranslationForwardButton from '../../components/SignUp/TranslationForwardButton';
import TransitionBackButton from '../../components/SignUp/TransitionBackButton';

import { Transition, Transitioning } from 'react-native-reanimated';
const size = new sizes(height, width);
const ChooseUsername = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const usernameError = useAppSelector(
    (state) => state.USER.errors.usernameError
  );
  const nickNameError = useAppSelector(
    (state) => state.USER.errors.nicknameError
  );
  const userNameLength = useAppSelector(
    (state) => state.USER.details.username.length
  );
  const size = new sizes(height, width);
  const nickNameLength = useAppSelector(
    (state) => state.USER.details.Nickname.length
  );
  const navigation = useNavigation();
  const disabled =  usernameError || nickNameError || userNameLength < 1 || nickNameLength < 1
  const transitionConfig = {
    duration: 500,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.signUpBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ProfileSetUpHeader
          SvgImage={<User />}
          stepDescription="Next Step: Connect socials & verify"
          title="Choose your username"
          sub_title={`Stand out in Towne Square with a Nickname and a unique username.`}
          steps={1}
          iconMarginTop={32}
        />
        <View style={{ height: size.getHeightSize(113.5) }} />
        <View>
          <NickNameField />
          <View style={{ height: size.getHeightSize(32) }} />
          <UsernameField />
        </View>

        <View style={{ flex: 1 }} />
        <View
          style={{
            height: size.getHeightSize(124),
            marginBottom: size.getHeightSize(24),
          }}
        >
          {/* <ContinueButton
            disabled={
              usernameError ||
              nickNameError ||
              userNameLength < 1 ||
              nickNameLength < 1
            }
            navigateTo="ConnectSocialsAndVrify"
          /> */}
           <Pressable
            disabled={disabled}
             onPress={() => {
        

            navigation.navigate("ConnectSocialsAndVrify" as never);
          }}
          style={{
            backgroundColor: disabled
              ? appColor.kWhiteColorWithOpacity
              : appColor.kWhiteColor,
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            // height: size.getHeightSize(48),
            justifyContent: 'center',
            marginTop: 0 ? size.getHeightSize(8) : 8,
            paddingVertical:size.getHeightSize(14)
          }}
        >
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kButtonTextColor,
            fontSize: size.fontSize(18),
            fontFamily: 'Outfit-SemiBold',
            fontStyle: 'normal',
            lineHeight: size.getHeightSize(20),
            letterSpacing: 0.01,
          
          }}
          >
            Continue
          </Text>
          </Pressable>
          <TranslationForwardButton action={() => {}} />
          <TransitionBackButton action={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseUsername;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: size.getHeightSize(56),
    width: size.getWidthSize(339),
    alignSelf: 'center',
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(12),
    gap: size.getWidthSize(8),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
  },
});
