import { View, Text, Dimensions, ImageBackground } from 'react-native';
import React,{useEffect} from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { sizes } from '../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wallets from '../components/Wallets';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const ChooseProfile = () => {
  const navigation = useNavigation();
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('SetPfp'));
    }, 4000);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kStatusBarNaviDark} />
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
        resizeMode="cover"
        source={images.background1}
      >
        <Text
          style={{
            top: size.sHeight(0.04),
            color: appColor.kTextColor,
            fontWeight: '600',
            fontSize: size.fontSize(38),
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
          }}
        >
          Choose your wallet
        </Text>
        <Wallets />
        <Text
          style={{
            
            color: appColor.kTextColor,
            fontSize: size.fontSize(18),
            fontFamily: 'Outfit-Bold',
            marginTop:size.vMargin(190),
            
          }}
        >
          BACK
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChooseProfile;
