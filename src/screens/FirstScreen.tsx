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
import { SvgXml } from 'react-native-svg';
import Twitter from '../../assets/svg/Twitter';
import { useFonts } from 'expo-font';
import { Avatar } from 'react-native-elements';
import Apple from '../images/svg/Apple';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../utils';
import Background1 from '../images/svg/Background1';
import { StackActions } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { FirstScreenProps } from '../utils/NavigationTypes';
import Description from '../images/svg/Description';
import Discord from '../images/svg/Discord';
import Google from '../images/svg/Google';
import Mail from '../images/svg/Mail';
import Logo from '../images/svg/Logo';
import Description2 from '../images/svg/Description2';
const size = new sizes(height, width);
const FirstScreen = ({ navigation }: FirstScreenProps) => {
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Urbanist-ExtraBold': fonts.EXTRABOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
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
      <StatusBar backgroundColor={appColor.kStatusBarColor} style="light" />

      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
        }}
        source={images.background2}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: size.widthSize(65.56),
            marginRight: size.widthSize(108.44),
            marginTop: size.heightSize(40.19),
          }}
        >
          <Logo />
          <Text
            style={{
              marginLeft: size.widthSize(4.42),
              color: appColor.kTextColor,
              fontSize: size.fontSize(29.47),
              fontFamily: 'Urbanist-ExtraBold',
              fontStyle: 'normal',
              lineHeight: size.heightSize(35),
              textAlign: 'right',
            }}
          >
            TowneSquare
          </Text>
        </View>

        <Description
          style={{
            alignSelf: 'flex-start',
            marginTop: size.heightSize(85.81),
            width: size.widthSize(355.7),
            height: size.heightSize(61.45),
          }}
        />
        <Description2
          style={{
            alignSelf: 'flex-end',
            width: size.widthSize(355.7),
            height: size.getHeightSize(61.45),
          }}
        />
        <Text
          style={{
            marginTop: size.getHeightSize(24.47),
            textAlign: 'center',
            color: appColor.kTextColor,
            fontFamily: 'Outfit-SemiBold',
            fontSize: size.fontSize(16),
            marginLeft: size.getWidthSize(49),
            marginRight: size.getHeightSize(42),
            lineHeight: size.getHeightSize(21),
            fontStyle: 'normal',
          }}
        >
          Social, create, build, and transact with anyone anywhere
        </Text>
        <Pressable
          onPress={() => navigation.navigate('ChooseProfile')}
          style={{
            marginTop: size.getHeightSize(129),
            width: size.getWidthSize(328),
            height: size.getHeightSize(48),
            justifyContent: 'center',
            backgroundColor: appColor.kButtonBackgroundColor,
            alignSelf: 'center',
            borderRadius: 40,
            flexGrow: 0,
            gap: size.getWidthSize(8),
            paddingHorizontal: size.getWidthSize(8),
            paddingVertical: size.getHeightSize(16),
            display: 'flex',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: appColor.kButtonTextColor,
              fontFamily: 'Outfit-Bold',
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(20),
              fontStyle: 'normal',
              textTransform: 'uppercase',
            }}
          >
            CONNECT WALLET
          </Text>
        </Pressable>
        <Text
          style={{
            color: appColor.kTextColor,
            textAlign: 'center',
            fontFamily: 'Outfit-Regular',
            fontSize: size.fontSize(20),
            marginTop: size.getHeightSize(24),
            fontStyle: 'normal',
            lineHeight: size.getHeightSize(25),
          }}
        >
          or
        </Text>
        <View
          style={{
            marginTop: size.getHeightSize(24),
            flexDirection: 'row',
            width: size.getWidthSize(328),
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Twitter />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Discord />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Apple />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Google />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Mail />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  socials: {
    height: size.getHeightSize(48),
    width: size.getWidthSize(48),
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
