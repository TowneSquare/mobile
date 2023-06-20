import {
  Dimensions,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ImageBackground
} from 'react-native';
import { useState } from "react"
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { EmailLoginProps } from '../../navigations/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../controller/hooks';
import { updateDidToken } from '../../controller/SignupController';

const EmailLogin = ({magic}: EmailLoginProps)  => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-ExtraBold': fonts.OUTFIT_EXTRABOLD,
  });
  if (!isLoaded) {
    return null;
  }

  const login = async () => {
    const token = await magic.auth.loginWithEmailOTP({ email });
    console.log(token)
    dispatch(updateDidToken(token));
    navigation.navigate('ChooseUsernameSlide');
  }

  return (
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
          alignSelf: 'center',
          width: size.getWidthSize(328),
          alignItems: 'center',
          top: 18.58,
          marginTop: size.getHeightSize(40),
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
          }}
        >
          Email
        </Text>
        <TextInput
          cursorColor={appColor.klightPurple}
          placeholder="@username"
          placeholderTextColor={appColor.kgrayTextColor}
          onChangeText={(e) => setEmail(e)}
          style={{
            width: size.getWidthSize(328),
            height: size.getHeightSize(48),
            borderRadius: 48,
            borderWidth: 1,
            borderColor: appColor.kGrayscale,
            paddingHorizontal: size.getWidthSize(16),
            paddingVertical: size.getHeightSize(8),
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            color: appColor.kTextColor,
            backgroundColor: appColor.kGrayscaleDart,
            marginHorizontal: size.getWidthSize(16),
          }}
        />
        <Pressable
          onPress={() => login()}
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
            Signin/up
          </Text>
        </Pressable>
      </View >
      <SafeAreaProvider>
        {/* Remember to render the `Relayer` component into your app! */}
        <magic.Relayer />
      </SafeAreaProvider >
    </ImageBackground>
  );
};
export default EmailLogin;

