import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useEffect } from 'react';
import Background2 from '../images/svg/Background2';
import { useFonts } from 'expo-font';
import { Avatar } from 'react-native-elements';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import Congrats from '../images/svg/Congrats';
import { StackActions } from '@react-navigation/native';
import LetGoButton from '../components/LetGoButton';
const { height, width } = Dimensions.get('window');
import { FirstScreenProps } from '../utils/NavigationTypes';
const size = new sizes(height, width);
const Congratulations = () => {
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <Background2
        style={{
          position: 'absolute',
        }}
      />
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Congrats />
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(30),
            fontFamily: 'Outfit-Bold',
            marginTop: 10,
          }}
        >
          Congrats!
        </Text>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(30),
            fontFamily: 'Outfit-Bold',
          }}
        >
          You made it!
        </Text>
        <LetGoButton navigateTo="ChooseUsername" />
      </View>
    </SafeAreaView>
  );
};

export default Congratulations;
