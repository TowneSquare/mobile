import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppLogo from '../../assets/images/svg/AppLogo';
import { getUserInfo } from '../api';
import { appColor } from '../constants';
import {
  getUserData,
  updateDidToken,
  updateUserData,
} from '../controller/UserController';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import { storeDeviceTokenToFireStore } from '../services/PushNotification';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const deviceToken = useAppSelector((state) => state.USER.userDeviceToken);

  async function checkAuth() {
    // Check if user is already logged in
    const token = await AsyncStorage.getItem('user_token');
    const userId = await AsyncStorage.getItem('user_id');

    if (token && userId) {
      // If user is logged in, get user info and store it in redux
      dispatch(updateDidToken(token));
      const userInfo = await getUserInfo(userId, token);

      // Store device token to firestore
      if (userInfo) {
        await storeDeviceTokenToFireStore(userId, deviceToken);
        await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
        dispatch(updateUserData(userInfo));
        dispatch(getUserData({ userId, token: token }));

        // Navigate to feeds screen
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'DrawerNavigation' }],
          })
        );
      } else {
        // Navigate to first screen
        navigation.dispatch(StackActions.replace('FirstScreen'));
      }
    } else {
      navigation.dispatch(StackActions.replace('FirstScreen'));
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);
  const size = new sizes(height, width);
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.signUpBackground,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: top,
      }}
    >
      <StatusBar style="light" />
      <AppLogo size={size.getHeightSize(40)} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
