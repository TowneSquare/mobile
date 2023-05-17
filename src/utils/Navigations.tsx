import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import { Easing, Animated } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import ChooseProfile from '../screens/ChooseProfile';
import SetPfp from '../screens/SetPfp';
const Navigations = () => {
  const Stack = createStackNavigator();
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
        name="Splash"
        component={Splash}
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
        name="SetPfp"
        component={SetPfp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
