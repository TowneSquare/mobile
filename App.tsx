import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/controllers/store';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/utils/Navigations';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
