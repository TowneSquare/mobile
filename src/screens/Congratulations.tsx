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
import { useFonts } from 'expo-font';
import { Avatar } from 'react-native-elements';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
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
      <StatusBar style="light" backgroundColor={appColor.kBackgroundColor2} />
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems:"center",
          justifyContent:"center"
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.congratulations} />
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(30),
              fontFamily: 'Outfit-Bold',
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
          <LetGoButton navigateTo='ChooseUsername'/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Congratulations;
