import { createSwitchNavigator } from '@react-navigation/compat';
import AuthNavigation from './Auth/Auth';
import Navigations from './InApp/InAppNavigations';

export const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: Navigations,
  },
  {
    initialRouteName: 'Auth',
  }
);
