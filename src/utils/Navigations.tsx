import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import { Easing, Animated } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from './NavigationTypes';
import ChooseProfile from '../screens/ChooseProfile';
import ChooseUsername from '../screens/ChooseUsername';
const Navigations = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  const config = {
    animation: Animated.timing,
    config: {
      duration: 200,
      easing: Easing.linear,
      // Placeholder value; adjust according to your needs
    },
  };

  const closeconfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        transitionSpec: {
          open: config as any,
          close: closeconfig as any,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseProfile"
        component={ChooseProfile}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ChooseUsername"
        component={ChooseUsername}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
