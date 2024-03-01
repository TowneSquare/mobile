import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { sizes } from '../../utils';
import Congrats from '../../../assets/images/svg/Congrats';
import { getUserInfo } from '../../api';
import LetGoButton from '../../components/SignUp/LetGoButton';
import { updateUserData } from '../../controller/UserController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { storeDeviceTokenToFireStore } from '../../services/PushNotification';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../assets/svg/Loader';
import { CommonActions } from '@react-navigation/native';
import { StackActions } from '@react-navigation/compat';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const Congratulations = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const deviceToken = useAppSelector((state) => state.USER.userDeviceToken);
  const dispatch = useAppDispatch();

  async function getUser() {
    setLoading(true);
    const token = await AsyncStorage.getItem('user_token');
    const userId = await AsyncStorage.getItem('user_id');
    const userInfo = await getUserInfo(userId, token);

    if (userInfo) {
      console.log(userInfo.username);
      await storeDeviceTokenToFireStore(userId, deviceToken);
      await AsyncStorage.setItem('userData', JSON.stringify(userInfo));

      dispatch(updateUserData(userInfo));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'DrawerNavigation' }],
        })
      );
    }
    setLoading(false);
  }
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMode="cover"
        source={images.background3}
      >
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Congrats />
          <View
            style={{
              marginTop: size.getHeightSize(20),
              width: size.getWidthSize(180),
              // height: size.getHeightSize(80),
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(32),
                fontFamily: 'Outfit-Bold',
                textAlign: 'center',
                lineHeight: size.getHeightSize(40),
              }}
            >
              Congrats!
            </Text>
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(32),
                fontFamily: 'Outfit-Bold',
                lineHeight: size.getHeightSize(40),
                textAlign: 'center',
              }}
            >
              You made it!
            </Text>
          </View>
          <LetGoButton onPress={getUser} />
        </View>
        <View
          style={{
            display: isLoading ? 'flex' : 'none',
            ...styles.loader,
          }}
        >
          <Loader />
        </View>
      </ImageBackground>
    </>
  );
};

export default Congratulations;
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000000a0',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
