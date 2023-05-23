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
      <StatusBar style="light" backgroundColor={appColor.kStatusBarColor} />

      <View>
        <Background1
          style={{
            position: 'absolute',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: size.sWidth(0.1),
          marginTop: size.sHeight(0.03),
        }}
      >
        <Logo />
        <Text
          style={{
            marginLeft: size.sWidth(0.03),
            color: appColor.kTextColor,
            fontSize: size.fontSize(30),
            fontFamily: 'Outfit-Bold',
          }}
        >
          TowneSquare
        </Text>
      </View>
      <Description
        style={{
          alignSelf: 'flex-start',
          marginTop: 20,
        }}
      />
      <Description2
        style={{
          alignSelf: 'flex-end',
        }}
      />
      <Text
        style={{
          marginTop: size.vMargin(21),
          textAlign: 'center',
          color: appColor.kTextColor,
          fontFamily: 'Outfit-Bold',
          fontSize: size.fontSize(23),
          marginHorizontal: size.hMargin(100),
        }}
      >
        Social, create, build, and transact with anyone anywhere
      </Text>
      <Pressable
        onPress={() => navigation.navigate('ChooseProfile')}
        style={{
          top: size.vMargin(200),
          width: size.sWidth(0.9),
          height: size.heightSize(55),
          justifyContent: 'center',
          backgroundColor: appColor.kButtonBackgroundColor,
          alignSelf: 'center',
          borderRadius: 40,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kButtonTextColor,
            fontFamily: 'Outfit-Bold',
            fontSize: size.fontSize(16),
          }}
        >
          CONNECT WALLET
        </Text>
      </Pressable>
      <Text
        style={{
          color: appColor.kTextColor,
          textAlign: 'center',
          fontFamily: 'Outfit-Bold',
          fontSize: size.fontSize(20),
          top: size.vMargin(250),
        }}
      >
        or
      </Text>
      <View
        style={{
          top: size.vMargin(300),
          flexDirection: 'row',
          width: size.sWidth(0.9),
          justifyContent: 'space-between',
          alignSelf: 'center',
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
    </SafeAreaView>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  socials: {
    height: 55,
    width: 55,
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
