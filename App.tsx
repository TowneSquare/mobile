import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { TextDecoder, TextEncoder } from 'text-encoding';
import { RootStackParamList } from './src/navigations/NavigationTypes';
import InitializeSocket from './src/utils/InitializeSocket';
// import Navigations from './src/navigations/InApp/InAppNavigations';
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { AptosExtension } from '@magic-ext/aptos';
import { OAuthExtension } from '@magic-ext/react-native-expo-oauth';
import { Magic } from '@magic-sdk/react-native-expo';
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { API_KEY } from './config/env';
import { APTOS_NODE_URL } from './constants';
import { getUserInfo } from './src/api';
import CreateChannelBottomSheet from './src/components/DrawerContent/CreateChannelBottomSheet';
import LogoutBottomsheet from './src/components/Feed/LogoutBottomsheet';
import SelectUsersBottomsheet from './src/components/ProfileSendToken/SelectUsersBottomsheet';
import {
  updateUserData
} from './src/controller/UserController';
import { store } from './src/controller/store';
import Navigations from './src/navigations/Navigations';
import UsePushNotification from './src/services/PushNotification';
import ToastWrapper from './src/shared/Feed/OverlayWrapper';
type AuthRootStackParamList = {
  Auth: {
    FirstScreen: undefined;
    ChooseWallet: undefined;
    SignUp: undefined;
    EmailLogin: undefined;
    Congratulations: undefined;
  };

};

global.TextEncoder=TextEncoder
global.TextDecoder=TextDecoder
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      FirstScreen: 'FirstScreen',
      ChooseWallet: 'ChooseWallet',
      SignUp: 'SignUp',
      EmailLogin: 'EmailLogin',
      Congratulations: '*',
    },
  },
};

const queryClient = new QueryClient();
export default function App() {
  useEffect(() => {
    // fetchData();
  }, []);
  async function fetchData() {
    const token = await AsyncStorage.getItem('user_token');
    const userId = await AsyncStorage.getItem('user_id');
    if (userId && token) {
      const userInfo = await getUserInfo(userId, token);
      if (userInfo) {
        await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
        store.dispatch(updateUserData(userInfo));
      }
    } else {
      return false;
    }
  }

  // useEffect(() => {
  //   const result = getDataStoredToLocalStorage();
  // }, []);
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

  const wallets = [new PetraWallet(), new MartianWallet()]

  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <AptosWalletAdapterProvider plugins={wallets}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <magic.Relayer />
          <NavigationContainer linking={linking}>
            {/* <SwitchNavigator screenProps={magic} /> */}
            <Navigations magicProps={magicProps} />
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
      </AptosWalletAdapterProvider>
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
