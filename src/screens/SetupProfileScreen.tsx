import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import BackButton from '../components/BackButton';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Stepper from '../components/Stepper';
import { appColor, fonts } from '../constants';
import Usernamefield from '../components/Usernamefield';
import ContinueButton from '../components/ContinueButton';
const SetupProfileScreen = () => {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.APPBACKGROUNDCOLOR,
        alignItems: 'center',
      }}
    >
      <StatusBar style="light" />
      <Stepper steps={1} />
      <Text
        style={{
          top: size.sHeight(0.04),
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(38),
          fontFamily: 'Urbanist-Bold',
        }}
      >
        Set up profile
      </Text>
      <Usernamefield />
      <Text
        style={{
          marginLeft: size.sWidth(0.05),
          marginTop: size.sHeight(0.025),
          alignSelf: 'flex-start',
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(16),
          fontFamily: 'UrbanistSemiBold',
        }}
      >
        Choose your profile picture
      </Text>
      <View
        style={{
          marginTop: size.sHeight(0.025),
          marginLeft: size.sWidth(0.05),
          height: size.sHeight(0.1),
          width: size.sWidth(0.22),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          backgroundColor: appColor.grayBlue,
          borderRadius: 100,
        }}
      >
        <Ionicons name="ios-add-sharp" color="white" size={35} />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          bottom: -size.sHeight(0.3775),
          width: size.sWidth(1),
          alignSelf: 'baseline',
          backgroundColor: appColor.menuColor,
          height: size.sHeight(0.12),
          paddingTop: size.sHeight(0.015),
        }}
      >
        <BackButton />
        <ContinueButton />
      </View>
    </SafeAreaView>
  );
};

export default SetupProfileScreen;
