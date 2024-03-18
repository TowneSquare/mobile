import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import CommunityInfoScreen from '../screens/Community/JoinComm/CommunityInfoScreen';
import { Animated, Easing } from 'react-native';
import CreatePost from '../screens/Feed/CreatePost';
import NftCollectionScreen from '../screens/Feed/NftCollectionScreen';
import Notifications from '../screens/Feed/Notifications';
import SelectedCollectionScreen from '../screens/Feed/SelectedCollectionScreen';
import SinglePost from '../screens/Feed/SinglePost';
import VideoPlayer from '../screens/Feed/VideoPlayer';
import ViewImageScreen from '../screens/Feed/ViewImageScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import SuperStarCollectionScreen from '../screens/Profile/SuperStarCollectionScreen';
import TheirProfileScreen from '../screens/Profile/TheirProfileScreen';
import SearchScreen from '../screens/SearchPost/SearchScreen';
import EmailLogin from '../screens/SignUp/EmailLogin';
import FirstScreen from '../screens/SignUp/FirstScreen';
import SignUp from '../screens/SignUp/SignUp';
import BottomTabNavigation from './InApp/BottomTabNavigation';
import DrawerNavigation from './InApp/DrawerStack';
import { RootStackParamList } from './NavigationTypes';
import SplashScreen from './SplashScreen';
// import SearchPostTab from './SearchPostTabBar';
import AddAdminsScreen from '../screens/Community/Community/AddAdminsScreen';
import CommunityScreen from '../screens/Community/Community/CommunityScreen';
import CreateChannelScreen from '../screens/Community/Community/CreateChannelScreen';
import InviteMembersScreen from '../screens/Community/Community/InviteMembersScreen';
import VerifyCommunityScreen from '../screens/Community/Community/VerifyCommunityScreen';
import ChannelCategories from '../screens/Community/CreateChannel/ChannelCategories';
import Channels from '../screens/Community/CreateChannel/Channels';
import CreateChannel from '../screens/Community/CreateChannel/CreateChannel';
import CommunitySetupScreen from '../screens/Community/CreateCommunity/CommunitySetupScreen';
import CreateCommunity1 from '../screens/Community/CreateCommunity/CreateCommunity1';
import CreateCommunityScreen from '../screens/Community/CreateCommunity/CreateCommunityScreen';
import CreateCommunitySuccessScreen from '../screens/Community/CreateCommunity/CreateCommunitySuccessScreen';
import ExploreCommunityScreen from '../screens/Community/ExploreCommunity/ExploreCommunityScreen';
import CommunityMainScreen from '../screens/Community/JoinComm/CommunityMainScreen';
import CommunityWelcomeScreen from '../screens/Community/JoinComm/CommunityWelcomeScreen';
import PinnedPostsScreen from '../screens/Community/JoinComm/PinnedPostsScreen';
import AddMember from '../screens/Community/Settings/AddMember';
import AddMembers from '../screens/Community/Settings/AddMembers';
import BannedMember from '../screens/Community/Settings/BannedMember';
import CommunityAssetSettings from '../screens/Community/Settings/CommunityAssetSettings';
import CommunityPrivacy from '../screens/Community/Settings/CommunityPrivacy';
import CommunitySettings from '../screens/Community/Settings/CommunitySettings';
import CryptoAssetSettings from '../screens/Community/Settings/CryptoAssetSettings';
import GeneralSettings from '../screens/Community/Settings/GeneralSettings';
import MemberRole from '../screens/Community/Settings/MemberRole';
import NewRole from '../screens/Community/Settings/NewRole';
import NotificationSettings from '../screens/Community/Settings/NotificationSettings';
import Permissions from '../screens/Community/Settings/Permissions';
import Roles from '../screens/Community/Settings/Roles';
import TokenGateSettings from '../screens/Community/Settings/TokenGateSettings';
import TokenGateSettingsComplete from '../screens/Community/Settings/TokenGateSettingsComplete';
import ViewRoles from '../screens/Community/Settings/VIewRoles';
import Conversation from '../screens/DM/Conversation';
import NFTOffer from '../screens/DM/NFTOffer';
import Offerforsale from '../screens/DM/Offerforsale';
import SendToken from '../screens/DM/SendToken';
import TokenSuccess from '../screens/DM/TokenSuccess';
import Bookmarks from '../screens/Feed/Bookmarks';
import FollowersScreen from '../screens/Profile/FollowersScreen';
import SelectedSuperStarCollectionScreen from '../screens/Profile/SelectedSuperStarCollectionScreen';
import Airdrops from '../screens/Rewards/Airdrops';
import AptosMonkey from '../screens/Rewards/AptosMonkey';
import Dex from '../screens/Rewards/DEX';
import MyRefferals from '../screens/Rewards/MyRefferals';
import ShareReferralCode from '../screens/Rewards/ShareReferralCode';
import Withdraw from '../screens/Rewards/Tabs/Withdraw';
import ProfileSendToken from '../screens/Send/ProfileSendToken';
import AccountInfo from '../screens/Settings/AccountInfo';
import AccountNotifications from '../screens/Settings/AccountNotifications';
import AccountSettings from '../screens/Settings/AccountSettings';
import Support from '../screens/Settings/Support';
import TownesquareVerification from '../screens/Settings/TownesquareVerification';
import ChooseWallet from '../screens/SignUp/ChooseWallet';
import Congratulations from '../screens/SignUp/Congratulations';
import SwapMain from '../screens/Swap/SwapMain';
import ChannelChat from '../screens/Community/CreateChannel/ChannelChat';
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
      <Stack.Screen name="SplashScreen" options={{ headerShown: false }}>
        {() => <SplashScreen {...magicProps} />}
      </Stack.Screen>
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }}>
        {() => <FirstScreen {...magicProps} />}
      </Stack.Screen>

      <Stack.Screen name="SignUp" options={{ headerShown: false }}>
        {() => <SignUp {...magicProps} />}
      </Stack.Screen>
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
      {/* <Stack.Screen
        name="SearchPostTab"
        component={SearchPostTab}
        options={{
          headerShown: false,
        }}
      /> */}
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
        name="ChannelChat"
        component={ChannelChat}
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
      <Stack.Screen
        name="ExploreCommunityScreen"
        component={ExploreCommunityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunitySettings"
        component={CommunitySettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GeneralSettings"
        component={GeneralSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunityPrivacy"
        component={CommunityPrivacy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TokenGateSettings"
        component={TokenGateSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommunityAssetSettings"
        component={CommunityAssetSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TokenGateSettingsComplete"
        component={TokenGateSettingsComplete}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CryptoAssetSettings"
        component={CryptoAssetSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddMembers"
        component={AddMembers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MemberRole"
        component={MemberRole}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Roles"
        component={Roles}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewRole"
        component={NewRole}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Permissions"
        component={Permissions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddMember"
        component={AddMember}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewRoles"
        component={ViewRoles}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateChannel"
        component={CreateChannel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChannelCategories"
        component={ChannelCategories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Channels"
        component={Channels}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BannedMember"
        component={BannedMember}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SendToken"
        component={SendToken}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TokenSuccess"
        component={TokenSuccess}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Offerforsale"
        component={Offerforsale}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NFTOffer"
        component={NFTOffer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyRefferals"
        component={MyRefferals}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dex"
        component={Dex}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Airdrops"
        component={Airdrops}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShareReferralCode"
        component={ShareReferralCode}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AptosMonkey"
        component={AptosMonkey}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SwapMain"
        component={SwapMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileSendToken"
        component={ProfileSendToken}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountNotifications"
        component={AccountNotifications}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TownesquareVerification"
        component={TownesquareVerification}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
