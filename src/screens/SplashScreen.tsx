import { View, Text, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import { appColor, images, fonts } from '../constants';
import { SplashScreenProps } from '../utils/NavigationTypes';

import { StackActions } from '@react-navigation/native';
const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('LoginScreen'));
    }, 4000);
  }, []);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.APPBACKGROUNDCOLOR,
        flex: 1,

        alignItems: 'center',
      }}
    >
      <StatusBar style="light" />
      <Image
        style={{
          top: size.sHeight(0.35),
        }}
        source={images.towneSquare}
      />
      <Text
        style={{
          color: appColor.maintext,
          top: size.sHeight(0.38),
          fontSize: size.fontSize(38),
          fontFamily: 'Urbanist-Bold',
          fontWeight: '600',
        }}
      >
        TowneSquare
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          top: size.sHeight(0.72),
        }}
      >
        <Image source={images.aptos} />
        <Text
          style={{
            color: appColor.maintext,
            marginLeft: 5,
            fontSize: size.fontSize(16),
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          POWERED BY APTOS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
