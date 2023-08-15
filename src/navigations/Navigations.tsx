import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FirstScreen from '../screens/SignUp/FirstScreen';
import { Easing, Animated, Button } from 'react-native';
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
import ToastWrapper from '../shared/Feed/ToastWrapper';
import ProfileFollowersTab from './ProfileFollowersTab';

import Notifications from '../screens/Feed/Notifications';
import ViewImageScreen from '../screens/Feed/ViewImageScreen';
import VideoPlayer from '../screens/Feed/VideoPlayer';
import SinglePost from '../screens/Feed/SinglePost';
import SuperStarCollectionScreen from '../screens/Profile/SuperStarCollectionScreen';
import CreatePost from '../screens/Feed/CreatePost';
import NftCollectionScreen from '../screens/Feed/NftCollectionScreen';
import SelectedCollectionScreen from '../screens/Feed/SelectedCollectionScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import TheirProfileScreen from '../screens/Profile/TheirProfileScreen';
import SearchScreen from '../screens/SearchPost/SearchScreen';
import SearchPostTab from './SearchPostTabBar';
import SelectedSuperStarCollectionScreen from '../screens/Profile/SelectedSuperStarCollectionScreen';
import FollowersScreen from '../screens/Profile/FollowersScreen';
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
  const screens = [
    {
      name: 'ChooseProfile',
      element: ChooseProfile,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ChooseUsername',
      component: ChooseUsername,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ConnectSocialsAndVrify',
      component: ConnectSocialsAndVrify,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ConnectSocials',
      component: ConnectSocials,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'FindFriends',
      component: FindFriends,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ExploreCommunities',
      component: ExploreCommunities,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'Congratulations',
      component: Congratulations,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ChooseProfilePics',
      component: ChooseProfilePics,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ChooseUsernameSlide',
      component: ChooseUsernameSlide,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'BottomTabNavigation',
      component: BottomTabNavigation,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'DrawerNavigation',
      component: DrawerNavigation,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'ViewImageScreen',
      component: ViewImageScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'VideoPlayer',
      component: VideoPlayer,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SinglePost',
      component: SinglePost,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'Notifications',
      component: Notifications,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'CreatePost',
      component: CreatePost,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SelectedCollectionScreen',
      component: SelectedCollectionScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'NftCollectionScreen',
      component: NftCollectionScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SearchScreen',
      component: SearchScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SearchPostTab',
      component: SearchPostTab,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SuperStarCollectionScreen',
      component: SuperStarCollectionScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SelectedSuperStarCollectionScreen',
      component: SelectedSuperStarCollectionScreen,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'EditProfileScreen',
      component: EditProfileScreen,
      options: {
        headerShown: false,
      },
    },
  ];
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
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }}>
        {() => <FirstScreen {...magicProps} />}
      </Stack.Screen>

      {/* {screens.map((screen) => (
        <Stack.Screen
          name={screen.name as any}
          component={screen.component}
          options={screen.options}
        ></Stack.Screen>
      ))} */}
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
        name="ViewImageScreen"
        component={ViewImageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectedCollectionScreen"
        component={SelectedCollectionScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NftCollectionScreen"
        component={NftCollectionScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchPostTab"
        component={SearchPostTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuperStarCollectionScreen"
        component={SuperStarCollectionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectedSuperStarCollectionScreen"
        component={SelectedSuperStarCollectionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileFollowersTab"
        component={ProfileFollowersTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FollowersScreen"
        component={FollowersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TheirProfileScreen"
        component={TheirProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="EmailLogin" options={{ headerShown: false }}>
        {() => <EmailLogin {...magicProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigations;
