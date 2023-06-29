import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FirstScreen from '../screens/SignUp/FirstScreen';
import { Easing, Animated } from 'react-native';
import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from './NavigationTypes';
import ChooseProfile from '../screens/SignUp/ChooseProfile';
import ChooseUsername from '../screens/SignUp/ChooseUsername';
import ConnectSocialsAndVrify from '../screens/SignUp/ConnectSocialsAndVrify';
import ConnectSocials from '../screens/SignUp/ConnectSocials';
import FindFriends from '../screens/SignUp/FindFriends';
import ExploreCommunities from '../screens/SignUp/ExploreCommunities';
import ChooseProfilePics from '../screens/SignUp/ChooseProfilePics';
import Congratulations from '../screens/SignUp/Congratulations';
import BottomTabNavigation from './BottomTabNavigation';
import ChooseUsernameSlide from '../screens/SignUp/ChooseUsernameSlide';
import DrawerNavigation from './DrawerNavigation';
import EmailLogin from '../screens/SignUp/EmailLogin';
import EditProfile from '../components/Profile/About/EditProfile';
import { appColor, images } from '../constants';

const Navigations = ({ magicProps }: { magicProps: any }) => {
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
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }} >
        {() => <FirstScreen {...magicProps} />}
      </Stack.Screen>

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
        name="ChooseUsernameSlide"
        component={ChooseUsernameSlide}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle:"Edit profile",
          headerStyle:{
            backgroundColor: appColor.kgrayDark2,
            height:150,
          },
          headerTitleStyle:{
            color:appColor.kTextColor,
            textAlign:"auto",
            fontFamily:"Outfit-Regular"
          },
         
        }}
        
      />

      <Stack.Screen name="EmailLogin" options={{ headerShown: false }} >
        {() => <EmailLogin {...magicProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigations;
