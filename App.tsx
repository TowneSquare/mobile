import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigations/Navigations';
import { Provider } from 'react-redux';
import { store } from './src/controller/store';
import DrawerNavigation from './src/navigations/DrawerNavigation';

import { Magic } from '@magic-sdk/react-native-expo';
import { API_KEY } from './config/env';
import { OAuthExtension } from "@magic-ext/react-native-expo-oauth";

export default function App() {
  const magic = new Magic(API_KEY, {
    extensions: [
      new OAuthExtension(),
    ]
  });
  const magicProps = {
    magic,
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigations magicProps={magicProps} />
      </NavigationContainer>
    </Provider>
  );
}
