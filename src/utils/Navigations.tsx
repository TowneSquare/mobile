import {
  createNativeStackNavigator,
  // CardStyleInterpolators,
} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import { Easing, Animated } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from './NavigationTypes';
import ChooseProfile from '../screens/ChooseProfile';
import ChooseUsername from '../screens/ChooseUsername';
import ConnectSocialsAndVrify from '../screens/ConnectSocialsAndVrify';
import ConnectSocials from '../screens/ConnectSocials';
import FindFriends from '../screens/FindFriends';
import ExploreCommunities from '../screens/ExploreCommunities';
import ChooseProfilePics from '../screens/ChooseProfilePics';
import Congratulations from '../screens/Congratulations';

import EmailLogin from '../screens/EmailLogin';

const Navigations = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
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
        // transitionSpec: {
        //   open: config as any,
        //   close: closeconfig as any,
        // },
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
      <Stack.Screen
        name="ConnectSocialsAndVrify"
        component={ConnectSocialsAndVrify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConnectSocials"
        component={ConnectSocials}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FindFriends"
        component={FindFriends}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExploreCommunities"
        component={ExploreCommunities}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseProfilePics"
        component={ChooseProfilePics}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
