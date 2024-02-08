import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import InitializeSocket from './src/utils/InitializeSocket';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-get-random-values";
import Navigations from './src/navigations/InApp/InAppNavigations';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { Dispatch, useEffect } from 'react';
import { store } from './src/controller/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Magic } from '@magic-sdk/react-native-expo';
import { API_KEY } from './config/env';
import { OAuthExtension } from '@magic-ext/react-native-expo-oauth';
import { AptosExtension } from '@magic-ext/aptos';
import { APTOS_NODE_URL } from './constants';
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import UsePushNotification from './src/services/PushNotification';
import { SwitchNavigator } from './src/navigations/NavigationSwitch';
import ToastWrapper from './src/shared/Feed/OverlayWrapper';
import { getUserInfo } from './src/api';
import CreateChannelBottomSheet from './src/components/DrawerContent/CreateChannelBottomSheet';
import SelectUsersBottomsheet from './src/components/ProfileSendToken/SelectUsersBottomsheet';
import LogoutBottomsheet from './src/components/Feed/LogoutBottomsheet';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  updateDidToken,
  updateUserData,
} from './src/controller/UserController';
import { AnyAction } from '@reduxjs/toolkit';
type AuthRootStackParamList = {
  Auth: {
    FirstScreen: undefined;
    ChooseWallet: undefined;
    SignUp: undefined;
    EmailLogin: undefined;
    Congratulations: undefined;
  };
  // Add other routes here...
};
const linking: LinkingOptions<AuthRootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          FirstScreen: 'FirstScreen',
          ChooseWallet: 'ChooseWallet',
          SignUp: 'SignUp',
          EmailLogin: 'EmailLogin',
          Congratulations: '*',
        },
      } as any,
    },
  },
};
const queryClient = new QueryClient();
export default function App() {
  async function getDataStoredToLocalStorage() {
    const userData = await AsyncStorage.getItem('userData')?.then((data) =>
      JSON.parse(data)
    );
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('user_id');
    if (userId && token) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const result = getDataStoredToLocalStorage();
  }, []);
  const magic = new Magic(API_KEY, {
    extensions: [
      new OAuthExtension(),
      new AptosExtension({
        nodeUrl: APTOS_NODE_URL,
      }),
    ],
  });
  const magicProps = {
    magic,
  };

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <magic.Relayer />
          <NavigationContainer linking={linking}>
            <SwitchNavigator screenProps={magic} />
            <CreateChannelBottomSheet />
            <SelectUsersBottomsheet />
            <LogoutBottomsheet />
            <UsePushNotification />
          </NavigationContainer>
          <ToastWrapper />
          <InitializeSocket />
          {/* <View style={styles.overlay} /> */}
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  gestureHandler: {
    flex: 1,
  },
});
