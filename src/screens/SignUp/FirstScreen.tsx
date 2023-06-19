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
import Twitter from '../../../assets/images/svg/Twitter';
import { useFonts } from 'expo-font';
import { Avatar } from 'react-native-elements';
import Apple from '../../../assets/images/svg/Apple';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../utils';
import Background1 from '../../../assets/images/svg/Background1';
import { StackActions } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { FirstScreenProps } from '../../navigations/NavigationTypes';
import Description from '../../../assets/images/svg/Description';
import Discord from '../../../assets/images/svg/Discord';
import Google from '../../../assets/images/svg/Google';
import Mail from '../../../assets/images/svg/Mail';
import Logo from '../../../assets/images/svg/Logo';
import Description2 from '../../../assets/images/svg/Description2';
import TowneSquareLogo from '../../../assets/images/svg/TownesquareLogo';
const size = new sizes(height, width);
const FirstScreen = ({ navigation }: FirstScreenProps) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />

      <ImageBackground
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
        }}
        source={images.background2}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: size.widthSize(18.58),

            top: 18.58,
            bottom: 76.96,
            left: size.widthSize(18.58),
            right: size.widthSize(37.15),
            // width: size.widthSize(224),
            gap: size.widthSize(4.42),
            marginTop: size.getHeightSize(40),
          }}
        >
          <Logo />
          <Text
            style={{
              marginLeft: size.widthSize(4.42),
              color: appColor.kTextColor,
              fontSize: size.fontSize(31.3587),
              fontFamily: 'Outfit-Bold',
              fontStyle: 'normal',
              lineHeight: size.heightSize(38),
              textAlign: 'right',
            }}
          >
            TowneSquare
          </Text>
        </View>

        <Description
          style={{
            alignSelf: 'flex-start',
            marginTop: size.heightSize(103.71),
            width: size.widthSize(355.7),
            height: size.heightSize(61.45),
          }}
        />
        <Description2
          style={{
            alignSelf: 'flex-end',
            width: size.widthSize(355.7),
            height: size.getHeightSize(61.45),
            marginTop: size.heightSize(11.55),
          }}
        />
        <Text
          style={{
            marginTop: size.getHeightSize(24.47),
            textAlign: 'center',
            color: appColor.kTextColor,
            fontFamily: 'Outfit-SemiBold',
            fontSize: size.fontSize(17.0213),
            marginLeft: size.getWidthSize(49),
            marginRight: size.getHeightSize(42),
            lineHeight: size.getHeightSize(22),
            fontStyle: 'normal',
          }}
        >
          Social, create, build, and transact {'\n'} with anyone anywhere
        </Text>
        <Pressable
          onPress={() => navigation.navigate('ChooseProfile')}
          style={{
            marginTop: size.getHeightSize(129),
            width: size.getWidthSize(348.94),
            //  height: size.getHeightSize(51.06),
            justifyContent: 'center',
            backgroundColor: appColor.kButtonBackgroundColor,
            alignSelf: 'center',
            borderRadius: 40,
            flexGrow: 0,
            gap: size.getWidthSize(8),
            paddingHorizontal: size.getWidthSize(8.51064),
            paddingVertical: size.getHeightSize(17.0213),
            display: 'flex',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: appColor.kButtonTextColor,
              fontFamily: 'Outfit-Bold',
              fontSize: size.fontSize(17.0213),
              lineHeight: size.getHeightSize(21),
              fontStyle: 'normal',
              textTransform: 'uppercase',
            }}
          >
            Connect Wallet
          </Text>
        </Pressable>
        <Text
          style={{
            color: appColor.kTextColor,
            textAlign: 'center',
            fontFamily: 'Outfit-Regular',
            fontSize: size.fontSize(21.2766),
            marginTop: size.getHeightSize(24),
            fontStyle: 'normal',
            lineHeight: size.getHeightSize(27),
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
            onPress={() => navigation.navigate('ChooseUsernameSlide')}
            style={styles.socials}
          >
            <Twitter />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ChooseUsernameSlide')}
            style={styles.socials}
          >
            <Discord />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ChooseUsernameSlide')}
            style={styles.socials}
          >
            <Apple />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ChooseUsernameSlide')}
            style={styles.socials}
          >
            <Google />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ChooseUsernameSlide')}
            style={styles.socials}
          >
            <Mail />
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  socials: {
    height: size.getHeightSize(51.06),
    width: size.getHeightSize(51.06),
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
