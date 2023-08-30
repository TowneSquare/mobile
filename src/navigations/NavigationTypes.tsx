import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type SelectedSuperStarCollectionScreenParameter = {
  [SelectedSuperStarCollectionScreen: string]: {
    title: string;
    nfts: {
      image: ImageSourcePropType;
      name: string;
    }[];
  };
};
export type RootStackParamList = {
  FirstScreen: undefined;
  ChooseWallet: undefined;
  SignUp: undefined;
  ChooseUsername: undefined;
  Congratulations: undefined;
  ChooseProfilePics: undefined;
  PageView: undefined;
  ChooseUsernameSlide: undefined;
  BottomTabNavigation: undefined;
  DrawerNavigation: undefined;
  EmailLogin: undefined;
  EditProfile: undefined;
  SetNFTs: undefined;
  ViewImageScreen: undefined;
  VideoPlayer: undefined;
  SinglePost: undefined;
  Notifications: undefined;
  CreatePost: { showToast?: boolean };
  NftCollectionScreen: undefined;
  SelectedCollectionScreen: undefined;
  Collection: undefined;
  Profile;
  SearchScreen: undefined;
  SearchPostTab: undefined;
  SuperStarCollectionScreen: undefined;
  SelectedSuperStarCollectionScreen: {
    title: string;
    nfts: {
      image: string;
      name: string;
    }[];
  };
  EditProfileScreen: undefined;
  ProfileFollowersTab: undefined;
  FollowersScreen: {
    screen: "Following" | "Followers" | "Communities";
  };
  TheirProfileScreen: {
    username: string;
  };

  CreateCommunityScreen: undefined;
  CommunitySetupScreen: undefined;
  VerifyCommunityScreen: undefined;
  InviteMembersScreen: undefined;
  AddAdminsScreen: undefined;
  CreateChannelScreen: undefined;

  CommunityWelcomeScreen: undefined;
  CommunityMainScreen: undefined;
  PinnedPostsScreen: undefined;
  CommunityInfoScreen: undefined;
  CreateCommunity1: undefined;
  CreateCommunitySuccessScreen: undefined;
};

type CreatePostParameter = {
  [CreatePost: string]: {
    showToast: boolean;
  };
};
type SinglePostParameter = {
  [SinglePost: string]: {
    username: string;
    nickname: string;
  };
};
type FollowerScreenParameter = {
  [FollowerScreen: string]: {
    screen: string;
  };
};
type TheirProfileParameter = {
  [TheirProfile: string]: {
    username: string;
  };
};
export type FirstScreenProps = {
  navigation: NavigationProp<RootStackParamList, "FirstScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "FirstScreen">;
};
export type ChooseWalletProps = {
  navigation: NavigationProp<RootStackParamList, "ChooseWallet">;
  route: RouteProp<ParamListBase, "ChooseWallet">;
};
export type SignUpProps = {
  navigation: NavigationProp<RootStackParamList, "SignUp">;
  route: RouteProp<ParamListBase, "SignUp">;
};

export type CongratulationsProps = {
  navigation: NavigationProp<RootStackParamList, "Congratulations">;
  route: RouteProp<ParamListBase, "Congratulations">;
};
export type ChooseProfilePicsProps = {
  navigation: NavigationProp<RootStackParamList, "ChooseProfilePics">;
  route: RouteProp<ParamListBase, "ChooseProfilePics">;
};
export type PageViewProps = {
  navigation: NavigationProp<RootStackParamList, "PageView">;
  route: RouteProp<ParamListBase, "PageView">;
};
export type ChooseUsernameSlideProps = {
  navigation: NavigationProp<RootStackParamList, "ChooseUsernameSlide">;
  route: RouteProp<ParamListBase, "ChooseUsernameSlide">;
};
export type BottomTabNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "BottomTabNavigation">;
  route: RouteProp<ParamListBase, "BottomTabNavigation">;
};
export type DrawerNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "DrawerNavigation">;
  route: RouteProp<ParamListBase, "DrawerNavigation">;
};
export type EmailLoginProps = {
  navigation: NavigationProp<RootStackParamList, "EmailLogin">;
  magic: any;
  route: RouteProp<ParamListBase, "EmailLogin">;
};
export type EditProfileProps = {
  navigation: NavigationProp<RootStackParamList, "EditProfile">;
  route: RouteProp<ParamListBase, "EditProfile">;
};
export type SetNFTsProps = {
  navigation: NavigationProp<RootStackParamList, "SetNFTs">;
  route: RouteProp<ParamListBase, "SetNFTs">;
};

export type SinglePostProps = {
  navigation: NavigationProp<RootStackParamList, "SinglePost">;
  magic: any;
  route: RouteProp<SinglePostParameter, "SinglePost">;
};

export type ViewImageScreenProps = {
  navigation: NavigationProp<RootStackParamList, "ViewImageScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "VideoPlayer">;
};
export type VideoPlayerProps = {
  navigation: NavigationProp<RootStackParamList, "VideoPlayer">;
  magic: any;
  route: RouteProp<ParamListBase, "VideoPlayer">;
};

export type NotificationsProps = {
  navigation: NavigationProp<RootStackParamList, "Notifications">;
  magic: any;
  route: RouteProp<ParamListBase, "Notifications">;
};
export type CreatePostProps = {
  navigation: NavigationProp<RootStackParamList, "CreatePost">;
  magic: any;
  route: RouteProp<CreatePostParameter, "CreatePost">;
};
export type NftCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, "NftCollectionScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "NftCollectionScreen">;
};
export type SelectedCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, "SelectedCollectionScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "SelectedCollectionScreen">;
};
export type SearchScreenProps = {
  navigation: NavigationProp<RootStackParamList, "SearchScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "SearchScreen">;
};
export type SearchPostTabProps = {
  navigation: NavigationProp<RootStackParamList, "SearchPostTab">;
  magic: any;
  route: RouteProp<ParamListBase, "SearchPostTab">;
};
export type SuperStarCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, "SuperStarCollectionScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "SuperStarCollectionScreen">;
};
export type SelectedSuperStarCollectionScreenProps = {
  navigation: NavigationProp<
    RootStackParamList,
    "SelectedSuperStarCollectionScreen"
  >;
  magic: any;
  route: RouteProp<
    SelectedSuperStarCollectionScreenParameter,
    "SelectedSuperStarCollectionScreen"
  >;
};
export type EditProfileScreenProps = {
  navigation: NavigationProp<RootStackParamList, "EditProfileScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "EditProfileScreen">;
};
export type ProfileFollowersTabProps = {
  navigation: NavigationProp<RootStackParamList, "ProfileFollowersTab">;
  magic: any;
  route: RouteProp<ParamListBase, "ProfileFollowersTab">;
};
export type FollowersScreenProps = {
  navigation: NavigationProp<RootStackParamList, "FollowersScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "FollowersScreen">;
};
export type TheirProfileScreenProps = {
  navigation: NavigationProp<RootStackParamList, "TheirProfileScreen">;
  magic: any;
  route: RouteProp<RootStackParamList, "TheirProfileScreen">;
};
export type CreateCommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, "CreateCommunityScreen">;
  magic: any;
  route: RouteProp<RootStackParamList, "CreateCommunityScreen">;
};
export type CommunitySetupScreenProps = {
  navigation: NavigationProp<RootStackParamList, "CommunitySetupScreen">;
  magic: any;
  route: RouteProp<RootStackParamList, "CommunitySetupScreen">;
};

// New community screens
export type VerifyCommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, "VerifyCommunityScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "VerifyCommunityScreen">;
};
export type InviteMembersScreenProps = {
  navigation: NavigationProp<RootStackParamList, "InviteMembersScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "InviteMembersScreen">;
};
export type CreateChannelScreenProps = {
  navigation: NavigationProp<RootStackParamList, "CreateChannelScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "CreateChannelScreen">;
};

export type AddAdminsScreenProps = {
  navigation: NavigationProp<RootStackParamList, "AddAdminsScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "AddAdminsScreen">;
};

// Join community screens
export type CommunityWelcomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, "CommunityWelcomeScreen">;
  magic: any;
  route: RouteProp<RootStackParamList, "CommunityWelcomeScreen">;
};

export type CommunityMainScreentProps = {
  navigation: NavigationProp<RootStackParamList, "CommunityMainScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "CommunityMainScreen">;
};

export type PinnedPostsScreenProps = {
  navigation: NavigationProp<RootStackParamList, "PinnedPostsScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "PinnedPostsScreen">;
};
export type CommunityInfoScreenProps = {
  navigation: NavigationProp<RootStackParamList, "CommunityInfoScreen">;
  magic: any;
  route: RouteProp<ParamListBase, "CommunityInfoScreen">;
};
export type CreateCommunity1Props = {
  navigation: NavigationProp<RootStackParamList, "CreateCommunity1">;
  magic: any;
  route: RouteProp<ParamListBase, "CreateCommunity1">;
};
export type CreateCommunitySuccessScreenProps = {
  navigation: NavigationProp<
    RootStackParamList,
    "CreateCommunitySuccessScreen"
  >;
  magic: any;
  route: RouteProp<ParamListBase, "CreateCommunitySuccessScreen">;
};
