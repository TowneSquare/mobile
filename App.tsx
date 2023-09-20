import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigations/Navigations';
import { Provider } from 'react-redux';
import { store } from './src/controller/store';
import { Magic } from '@magic-sdk/react-native-expo';
import { API_KEY } from './config/env';
import { OAuthExtension } from '@magic-ext/react-native-expo-oauth';
import { AptosExtension } from '@magic-ext/aptos';
import { APTOS_NODE_URL } from './constants';
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import ToastWrapper from './src/shared/Feed/ToastWrapper';
import { RootStackParamList } from './src/navigations/NavigationTypes';
import CreateChannelBottomSheet from './src/components/DrawerContent/CreateChannelBottomSheet';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      FirstScreen: 'FirstScreen',
      SignUp: 'SignUp',
      EmailLogin: 'EmailLogin',
      Congratulations: '*',
    },
  },
};

export default function App() {
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
   
      <Provider store={store}>
        <magic.Relayer />
        <NavigationContainer linking={linking}>
          <Navigations magicProps={magicProps} />
          <CreateChannelBottomSheet />
        </NavigationContainer>
        <ToastWrapper />
      </Provider>
   
  );
}
