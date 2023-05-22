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

const { height, width } = Dimensions.get('window');
import { FirstScreenProps } from '../utils/NavigationTypes';

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
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
        source={images.background2}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: size.sWidth(0.1),
            marginTop: size.sHeight(0.03),
          }}
        >
          <Image source={images.logo} />
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
        <Text
          style={{
            marginTop: size.vMargin(85),
            color: appColor.kTextColor,
            fontSize: size.fontSize(66),
            fontFamily: 'Outfit-Bold',
            textShadowColor: appColor.kTextShadowColor,
            textShadowOffset: { width: 4, height: 4 },
            textShadowRadius: 3,
            marginLeft:15,
            
          }}
        >
          All you need,
        </Text>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(66),
            fontFamily: 'Outfit-Bold',
            textAlign: 'right',
            textShadowColor: appColor.kTextShadowColor,
            textShadowOffset: { width: 4, height: 4 },
            textShadowRadius: 3,
            marginRight:15,
          }}
        >
          in one place
        </Text>
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
            <Image source={images.twitter} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Image source={images.discord} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Image source={images.apple} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Image source={images.google} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Congratulations')}
            style={styles.socials}
          >
            <Image source={images.email} />
          </Pressable>
        </View>
      </ImageBackground>
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
