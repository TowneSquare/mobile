import { View, Text, Dimensions, Pressable } from 'react-native';
import React, { useRef, useState, useContext, createContext } from 'react';
import { useFonts } from 'expo-font';
import { sizes } from '../utils';
import Stepper from '../components/Stepper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, fonts } from '../constants';
import BackButton from '../components/BackButton';
import ContinueButton from '../components/ContinueButton';
import Topics from '../components/Topics';
const ChooseTopics = () => {
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
      <Stepper steps={2} />
      <Text
        style={{
          top: size.sHeight(0.04),
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(38),
          fontFamily: 'Urbanist-Bold',
        }}
      >
        Choose Topics
      </Text>
      <Text
        style={{
          marginTop: size.sHeight(0.07),
          fontSize: size.fontSize(18),
          fontFamily: 'Urbanist-Bold',
          color: appColor.maintext,
          alignSelf: 'flex-start',
          marginLeft: size.sWidth(0.07),
        }}
      >
        Topics
      </Text>
      <Topics />
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          bottom: -size.sHeight(0.5),
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

export default ChooseTopics;
