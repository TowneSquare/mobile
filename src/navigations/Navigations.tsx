import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Easing, Animated } from "react-native";
import { RootStackParamList } from "./NavigationTypes";
import BottomTabNavigation from "./BottomTabNavigation";
import SignUp from "../screens/SignUp/SignUp";
import DrawerNavigation from "./DrawerNavigation";
import ProfileFollowersTab from "./ProfileFollowersTab";
import FirstScreen from "../screens/SignUp/FirstScreen";
import EmailLogin from "../screens/SignUp/EmailLogin";
import Notifications from "../screens/Feed/Notifications";
import ViewImageScreen from "../screens/Feed/ViewImageScreen";
import VideoPlayer from "../screens/Feed/VideoPlayer";
import SinglePost from "../screens/Feed/SinglePost";
import SuperStarCollectionScreen from "../screens/Profile/SuperStarCollectionScreen";
import CreatePost from "../screens/Feed/CreatePost";
import NftCollectionScreen from "../screens/Feed/NftCollectionScreen";
import SelectedCollectionScreen from "../screens/Feed/SelectedCollectionScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import TheirProfileScreen from "../screens/Profile/TheirProfileScreen";
import SearchScreen from "../screens/SearchPost/SearchScreen";
import SearchPostTab from "./SearchPostTabBar";
import SelectedSuperStarCollectionScreen from "../screens/Profile/SelectedSuperStarCollectionScreen";
import FollowersScreen from "../screens/Profile/FollowersScreen";
import Congratulations from "../screens/SignUp/Congratulations";
import ChooseWallet from "../screens/SignUp/ChooseWallet";
import CreateCommunityScreen from "../screens/Community/CreateCommunity/CreateCommunityScreen";
import CommunitySetupScreen from "../screens/Community/CreateCommunity/CommunitySetupScreen";
import VerifyCommunityScreen from "../screens/Community/Community/VerifyCommunityScreen";
import InviteMembersScreen from "../screens/Community/Community/InviteMembersScreen";
import AddAdminsScreen from "../screens/Community/Community/AddAdminsScreen";
import CommunityScreen from "../screens/Community/Community/CommunityScreen";
import CreateChannelScreen from "../screens/Community/Community/CreateChannelScreen";
import CreateCommunity1 from "../screens/Community/CreateCommunity/CreateCommunity1";
import CreateCommunitySuccessScreen from "../screens/Community/CreateCommunity/CreateCommunitySuccessScreen";
import CommunityInfoScreen from "../screens/Community/JoinComm/CommunityInfoScreen";
import CommunityMainScreen from "../screens/Community/JoinComm/CommunityMainScreen";
import CommunityWelcomeScreen from "../screens/Community/JoinComm/CommunityWelcomeScreen";
import PinnedPostsScreen from "../screens/Community/JoinComm/PinnedPostsScreen";

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
    animation: "timing",
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
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseWallet"
        component={ChooseWallet}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="EmailLogin" options={{ headerShown: false }}>
        {() => <EmailLogin {...magicProps} />}
      </Stack.Screen>

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
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CreateCommunityScreen"
        component={CreateCommunityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunitySetupScreen"
        component={CommunitySetupScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* New Community */}
      <Stack.Screen
        name="VerifyCommunityScreen"
        component={VerifyCommunityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InviteMembersScreen"
        component={InviteMembersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddAdminsScreen"
        component={AddAdminsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateChannelScreen"
        component={CreateChannelScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* Join Community */}
      <Stack.Screen
        name="CommunityInfoScreen"
        component={CommunityInfoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunityWelcomeScreen"
        component={CommunityWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunityMainScreen"
        component={CommunityMainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PinnedPostsScreen"
        component={PinnedPostsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CreateCommunity1"
        component={CreateCommunity1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateCommunitySuccessScreen"
        component={CreateCommunitySuccessScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
