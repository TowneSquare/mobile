import { View, Text, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import { StackActions } from '@react-navigation/native';
import { WalletAddedScreenProps } from '../utils/NavigationTypes';
const { height, width } = Dimensions.get('window');
const WalletAddedScreen = ({ navigation }: WalletAddedScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('SetupProfileScreen'));
    }, 4000);
  }, []);
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
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
      <Image
        source={images.opaqueBlob}
        style={{
          width: size.sWidth(1),
          position: 'absolute',
        }}
      />
      <Image
        style={{
          top: size.sHeight(0.45),
          // alignSelf: 'center',
        }}
        source={images.checked}
      />
      <Text
        style={{
          top: size.sHeight(0.45),
          color: appColor.maintext,
          fontWeight: '600',
          fontSize: size.fontSize(38),
          fontFamily: 'Urbanist-Bold',
        }}
      >
        Wallet Added
      </Text>
    </SafeAreaView>
  );
};

export default WalletAddedScreen;
