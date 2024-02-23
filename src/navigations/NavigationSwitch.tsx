import { View, Text } from 'react-native';
import React from 'react';
import { createSwitchNavigator } from '@react-navigation/compat';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigations from './InApp/InAppNavigations';
import AuthNavigation from './Auth/Auth';

export const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: Navigations,
  },
  {
    initialRouteName: 'Auth',
  }
);
