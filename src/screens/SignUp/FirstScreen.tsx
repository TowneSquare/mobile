import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import Twitter from '../../../assets/images/svg/Twitter';
import { useFonts } from 'expo-font';
import Apple from '../../../assets/images/svg/Apple';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import { FirstScreenProps } from '../../navigations/NavigationTypes';
import Description from '../../../assets/images/svg/Description';
import Discord from '../../../assets/images/svg/Discord';
import Google from '../../../assets/images/svg/Google';
import Mail from '../../../assets/images/svg/Mail';
import Logo from '../../../assets/images/svg/Logo';
import Description2 from '../../../assets/images/svg/Description2';
const size = new sizes(height, width);

import * as Linking from 'expo-linking';
import { useAppDispatch } from '../../controller/hooks';
import {
  updateAccountInfo,
  updateDidToken,
} from '../../controller/UserController';

const FirstScreen = ({ magic }: FirstScreenProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const loginGoogle = async () => {
    const token = await magic.oauth.loginWithPopup({
      provider: 'google',
      redirectURI: Linking.createURL('SignUp'),
    });
    console.log(JSON.stringify(token));
    dispatch(updateDidToken(token));

    const accountInfo = await magic.aptos.getAccountInfo();
    console.log(accountInfo);
    dispatch(updateAccountInfo(accountInfo));
  };

  const loginDiscord = async () => {
    const token = await magic.oauth.loginWithPopup({
      provider: 'discord',
      redirectURI: Linking.createURL('SignUp'),
    });
    console.log(token);
    dispatch(updateDidToken(token));

    const accountInfo = await magic.aptos.getAccountInfo();
    console.log(accountInfo);
    dispatch(updateAccountInfo(accountInfo));
  };

  const loginApple = async () => {
    const token = await magic.oauth.loginWithPopup({
      provider: "apple",
      redirectURI: Linking.createURL("SignUp"),
    });
    console.log(token);
    dispatch(updateDidToken(token));

    const accountInfo = await magic.aptos.getAccountInfo();
    console.log(accountInfo);
    dispatch(updateAccountInfo(accountInfo));
  };

  const loginX = async () => {
    const token = await magic.oauth.loginWithPopup({
      provider: "twitter",
      redirectURI: Linking.createURL("SignUp"),
    });
    console.log(token);
    dispatch(updateDidToken(token));

    const accountInfo = await magic.aptos.getAccountIngo();
    console.log(accountInfo);
    dispatch(updateAccountInfo(accountInfo));
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
            top: 18.58,

            left: size.widthSize(16),

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
              fontSize: size.fontSize(29.47),
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
            width: size.widthSize(360),
            height: size.heightSize(83),
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
          onPress={() => navigation.navigate('ChooseWallet')}
          style={{
            marginTop: size.getHeightSize(129),
            width: size.getWidthSize(328),
            height: size.getHeightSize(48),
            justifyContent: 'center',
            backgroundColor: appColor.kButtonBackgroundColor,
            alignSelf: 'center',
            borderRadius: 40,
            paddingHorizontal: size.getWidthSize(8.51064),
            paddingVertical: size.getHeightSize(14),
            alignItems: 'center',
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
            onPress={() => loginX()}
            style={styles.socials}
          >
            <Twitter
              width={size.getWidthSize(26)}
              height={size.getHeightSize(24)}
            />
          </Pressable>
          <Pressable 
            onPress={() => loginDiscord()} 
            style={styles.socials}
          >
            <Discord />
          </Pressable>
          <Pressable
            onPress={() => loginApple()}
            style={styles.socials}
          >
            <Apple
              height={size.getHeightSize(28)}
              width={size.getWidthSize(24)}
            />
          </Pressable>
          <Pressable 
            onPress={() => loginGoogle()} 
            style={styles.socials}
          >
            <Google />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('EmailLogin')}
            style={styles.socials}
          >
            <Mail size={size.getHeightSize(32)} />
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  socials: {
    height: size.getHeightSize(48),
    width: size.getHeightSize(48),
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
