import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { useRef, useEffect } from "react";
import X from '../../../assets/images/svg/X';
import { useFonts } from 'expo-font';
import Apple from '../../../assets/images/svg/Apple';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { getLoginSession, setLoginSession, sizes } from '../../utils';
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
  updateMetadata,
} from '../../controller/UserController';
import { checkSignup } from "../../api";
import Loader from "../../../assets/svg/Loader";

const FirstScreen = ({ magic }: FirstScreenProps) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const loaderRef = useRef();

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  useEffect(() => {
    const checkSession = async () => {
      const session = await getLoginSession();
      if (session) navigation.navigate("Congratulations");
    };
    checkSession();
  }, []);

  const showLoader = (show = true) => {
    if (loaderRef.current && show)
      (loaderRef.current as any).setNativeProps({ style: { display: "flex" } });

    if (loaderRef.current && !show)
      (loaderRef.current as any).setNativeProps({ style: { display: "none" } });
  };
  const loginWith = async (provider: string) => {
    try {
      showLoader(true);

      const token = await magic.oauth.loginWithPopup({
        provider,
        redirectURI: Linking.createURL("FirstScreen"),
      });
      dispatch(updateDidToken(token.magic.idToken));

      const accountInfo = await magic.aptos.getAccountInfo();
      dispatch(updateAccountInfo(accountInfo));

      const metadata = await magic.user.getMetadata();
      dispatch(updateMetadata(metadata));

      const res = await checkSignup(token.magic.idToken);

      showLoader(false);

      if (res.isExist && res.isExist == true) {
        await setLoginSession(res.wallet);
        navigation.navigate("Congratulations");
      } else {
        navigation.navigate("SignUp");
      }
    } catch (error) {
      console.log("Catch: ", error);
      showLoader(false);
    }
  };

  const loginGoogle = async () => {
    loginWith("google");
  };

  const loginDiscord = async () => {
    loginWith("discord");
  };

  const loginApple = async () => {
    loginWith("apple");
  };

  const loginX = async () => {
    loginWith("X");
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />

      <TouchableOpacity
        style={{
          display: "none",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#000000a0",
          zIndex: 999,
          justifyContent: "center",
          alignItems: "center"
        }}
        ref={loaderRef}
      >
        <Loader />
      </TouchableOpacity>
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
            <X
              width={size.getWidthSize(26)}
              height={size.getHeightSize(24)}
            />
          </Pressable>
          <Pressable 
            onPress={() => loginDiscord()} 
            style={styles.socials}
          >
            <Discord
              width={size.getWidthSize(30)}
              height={size.getHeightSize(28)}
            />
          </Pressable>
          <Pressable
            onPress={() => loginApple()}
            style={styles.socials}
          >
            <Apple
              height={size.getHeightSize(26)}
              width={size.getWidthSize(24)}
            />
          </Pressable>
          <Pressable 
            onPress={() => loginGoogle()} 
            style={styles.socials}
          >
            <Google
              width={size.getWidthSize(28)}
              height={size.getHeightSize(26)}
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('EmailLogin')}
            style={styles.socials}
          >
            <Mail 
              size={size.getHeightSize(32)} 
            />
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
