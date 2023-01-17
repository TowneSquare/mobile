import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import ImportWalletScreen from "../screens/ImportWalletScreen/ImportWalletScreen";
import WalletSelectionScreen from "../screens/WalletSelectionScreen/WalletSelectionScreen";
import NFTSetupProfileScreen from "../screens/NFTSetupProfileScreen/NFTSetupProfileScreen";
import AddCommunityScreen from "../screens/AddCommunityScreen/AddCommunityScreen";
import SmsSignInScreen from "../screens/SmsSignInScreen/SmsSignInScreen";
import WalletAdded from "../screens/SplashScreens/WalletAddedSplashScreen";
import ProfileTabNavigations from "../screens/UserScreen/BottomNavigationTab/Navigations";
import SetupProfileScreen from "../screens/SetProfileScreen/SetupProfiile";
import SplashScreen from "../screens/SplashScreens/SplashScreen";
import UserScreen from "../screens/UserScreen/UserScreen";
import SetProfilePics from "../screens/SetProfilePicsScreen/SetProfilePics";
import FollowersScreen from "../screens/UserScreen/BottomNavigationTab/DiscoverTab/FollowersAndConnections/FollowersScreen";
import RecoveryPhraseScreen from "../screens/RecoveryPhraseScreen/RecoveryPhraseScreen";
import ChatList from "../screens/ChatScreen/ChatListScreen/ChatList";
import CreateSpaceScreen from "../screens/UserScreen/BottomNavigationTab/SpaceTab/CreateSpaceScreen";
import ConversationScreen from "../screens/ChatScreen/ConversationScreen/ConversationScreen";
const Navigations = () => {
  const Cancel = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text className="text-white">Cancel</Text>
      </TouchableOpacity>
    );
  };
  const Stack = createStackNavigator();
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ImportWalletScreen"
        component={ImportWalletScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WalletSelectionScreen"
        component={WalletSelectionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddCommunityScreen"
        component={AddCommunityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SmsSignInScreen"
        component={SmsSignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WalletAdded"
        component={WalletAdded}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetProfilePics"
        component={SetProfilePics}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RecoveryPhraseScreen"
        component={RecoveryPhraseScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NFTSetupProfileScreen"
        component={NFTSetupProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SetupProfileScreen"
        component={SetupProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FollowersScreen"
        component={FollowersScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,

          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="ProfileTabNavigations"
        component={ProfileTabNavigations}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConversationScreen"
        component={ConversationScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="CreateSpaceScreen"
        component={CreateSpaceScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
