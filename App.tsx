import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/utils/Navigations';
import { Provider } from 'react-redux';
import { store } from './src/controller/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </Provider>
  );
}
