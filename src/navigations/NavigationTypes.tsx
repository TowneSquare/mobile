import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';
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
  // ConnectSocialsAndVrify: undefined;
  // ConnectSocials: undefined;
  // FindFriends: undefined;
  // ExploreCommunities: undefined;
  Congratulations: undefined;
  // ChooseProfilePics: undefined;
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
  CreatePost: {
    showToast?: boolean;
    whichPost: 'communityPost' | 'singlePost';
  };
  NftCollectionScreen: undefined;
  SelectedCollectionScreen: undefined;
  Collection: undefined;
  Profile: undefined;
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
    screen: 'Following' | 'Followers' | 'Communities';
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
  CommunityScreen: undefined;
  ExploreCommunityScreen: undefined;
  CommunitySettings: undefined;
  GeneralSettings: undefined;
  CommunityPrivacy: undefined;
  TokenGateSettings: undefined;
  CommunityAssetSettings: undefined;
  TokenGateSettingsComplete: {
    asset: {
      nftImageUri: string;
      type: 'NFT' | 'crypto_asset';
      amount?: string;
      name?: string;
      coinId: string;
    };
  };
  CryptoAssetSettings: undefined;
  AddMembers: undefined;
  MemberRole: undefined;
  Roles: undefined;
  NewRole: undefined;
  Permissions: undefined;
  AddMember: undefined;
  NotificationSettings: undefined;
  ViewRoles: {
    title: string;
  };
  CreateChannel: undefined;
  ChannelCategories: undefined;
  Channels: undefined;
  BannedMember: undefined;
  ChannelChat: undefined;
  Conversation: undefined;
  SendToken: undefined;
  TokenSuccess: {
    popNo: number;
  };
  Offerforsale: undefined;
  NFTOffer: {
    type: 'myOffer' | 'theirOffer';
  };
  MyRefferals: undefined;
  Dex: {
    type: 'DEX swap' | 'NFT trade' | 'User transaction';
  };
  Withdraw: undefined;
  Airdrops: {
    type:
      | 'My refferals'
      | 'NFT holdings'
      | 'Defi trading'
      | 'Dex Swap'
      | 'NFT trade'
      | 'Social transaction';
  };
  AptosMonkey: undefined;
  ShareReferralCode: undefined;
  SwapMain: undefined;
  ProfileSendToken: undefined;
  Support: undefined;
  AccountInfo: undefined;
  AccountNotifications: undefined;
  AccountSettings: undefined;
  Bookmarks: undefined;
  TownesquareVerification: undefined;
};

type NFTOfferParams = {
  [NFTOffer: string]: {
    type: 'myOffer' | 'theirOffer';
  };
};

type TokenGateSettingsCompleteParams = {
  [TokenGateSettingsComplete: string]: {
    asset: {
      nftImageUri: string;
      type: 'NFT' | 'crypto_asset';
      amount?: string;
      name?: string;
      coinId: string;
    };
  };
};
type TokenSuccessParams = {
  [Offerforsale: string]: {
    popNo: number;
  };
};
type ViewRolesParams = {
  [ViewRoles: string]: {
    title: string;
  };
};
type CreatePostParameter = {
  [CreatePost: string]: {
    showToast: boolean;
    whichPost: 'communityPost' | 'singlePost';
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

type DEXParameter = {
  [DEX: string]: {
    type: 'DEX swap' | 'NFT trade' | 'User transaction';
  };
};
type AirdropParameter = {
  [Airdrops: string]: {
    type:
      | 'My refferals'
      | 'NFT holdings'
      | 'AptosMonkeys'
      | 'Defi trading'
      | 'Dex Swap'
      | 'NFT trade'
      | 'Social transaction';
  };
};
export type FirstScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'FirstScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'FirstScreen'>;
};
export type ChooseWalletProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseWallet'>;
  route: RouteProp<ParamListBase, 'ChooseWallet'>;
};
export type SignUpProps = {
  navigation: NavigationProp<RootStackParamList, 'SignUp'>;
  route: RouteProp<ParamListBase, 'SignUp'>;
};
// export type ConnectSocialsAndVrifyProps = {
//   navigation: NavigationProp<RootStackParamList, "ConnectSocialsAndVrify">;
//   route: RouteProp<ParamListBase, "ConnectSocialsAndVrify">;
// };
// export type ConnectSocialsProps = {
//   navigation: NavigationProp<RootStackParamList, "ConnectSocials">;
//   route: RouteProp<ParamListBase, "ConnectSocials">;
// };
// export type FindFriendsProps = {
//   navigation: NavigationProp<RootStackParamList, "FindFriends">;
//   route: RouteProp<ParamListBase, "FindFriends">;
// };
// export type ExploreCommunitiesProps = {
//   navigation: NavigationProp<RootStackParamList, "ExploreCommunities">;
//   route: RouteProp<ParamListBase, "ExploreCommunities">;
// };
export type CongratulationsProps = {
  navigation: NavigationProp<RootStackParamList, 'Congratulations'>;
  route: RouteProp<ParamListBase, 'Congratulations'>;
};
// export type ChooseProfilePicsProps = {
//   navigation: NavigationProp<RootStackParamList, "ChooseProfilePics">;
//   route: RouteProp<ParamListBase, "ChooseProfilePics">;
// };
export type PageViewProps = {
  navigation: NavigationProp<RootStackParamList, 'PageView'>;
  route: RouteProp<ParamListBase, 'PageView'>;
};
export type ChooseUsernameSlideProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseUsernameSlide'>;
  route: RouteProp<ParamListBase, 'ChooseUsernameSlide'>;
};
export type BottomTabNavigationProps = {
  navigation: NavigationProp<RootStackParamList, 'BottomTabNavigation'>;
  route: RouteProp<ParamListBase, 'BottomTabNavigation'>;
};
export type DrawerNavigationProps = {
  navigation: NavigationProp<RootStackParamList, 'DrawerNavigation'>;
  route: RouteProp<ParamListBase, 'DrawerNavigation'>;
};
export type EmailLoginProps = {
  navigation: NavigationProp<RootStackParamList, 'EmailLogin'>;
  magic: any;
  route: RouteProp<ParamListBase, 'EmailLogin'>;
};
export type EditProfileProps = {
  navigation: NavigationProp<RootStackParamList, 'EditProfile'>;
  route: RouteProp<ParamListBase, 'EditProfile'>;
};
export type SetNFTsProps = {
  navigation: NavigationProp<RootStackParamList, 'SetNFTs'>;
  route: RouteProp<ParamListBase, 'SetNFTs'>;
};

export type SinglePostProps = {
  navigation: NavigationProp<RootStackParamList, 'SinglePost'>;
  magic: any;
  route: RouteProp<SinglePostParameter, 'SinglePost'>;
};

export type ViewImageScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'ViewImageScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'VideoPlayer'>;
};
export type VideoPlayerProps = {
  navigation: NavigationProp<RootStackParamList, 'VideoPlayer'>;
  magic: any;
  route: RouteProp<ParamListBase, 'VideoPlayer'>;
};

export type NotificationsProps = {
  navigation: NavigationProp<RootStackParamList, 'Notifications'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Notifications'>;
};
export type CreatePostProps = {
  navigation: NavigationProp<RootStackParamList, 'CreatePost'>;
  magic: any;
  route: RouteProp<CreatePostParameter, 'CreatePost'>;
};
export type NftCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'NftCollectionScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'NftCollectionScreen'>;
};
export type SelectedCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SelectedCollectionScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SelectedCollectionScreen'>;
};
export type SearchScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SearchScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SearchScreen'>;
};
export type SearchPostTabProps = {
  navigation: NavigationProp<RootStackParamList, 'SearchPostTab'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SearchPostTab'>;
};
export type SuperStarCollectionScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SuperStarCollectionScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SuperStarCollectionScreen'>;
};
export type SelectedSuperStarCollectionScreenProps = {
  navigation: NavigationProp<
    RootStackParamList,
    'SelectedSuperStarCollectionScreen'
  >;
  magic: any;
  route: RouteProp<
    SelectedSuperStarCollectionScreenParameter,
    'SelectedSuperStarCollectionScreen'
  >;
};
export type EditProfileScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'EditProfileScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'EditProfileScreen'>;
};
export type ProfileFollowersTabProps = {
  navigation: NavigationProp<RootStackParamList, 'ProfileFollowersTab'>;
  magic: any;
  route: RouteProp<ParamListBase, 'ProfileFollowersTab'>;
};
export type FollowersScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'FollowersScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'FollowersScreen'>;
};
export type TheirProfileScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'TheirProfileScreen'>;
  magic: any;
  route: RouteProp<RootStackParamList, 'TheirProfileScreen'>;
};
export type CreateCommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CreateCommunityScreen'>;
  magic: any;
  route: RouteProp<RootStackParamList, 'CreateCommunityScreen'>;
};
export type CommunitySetupScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunitySetupScreen'>;
  magic: any;
  route: RouteProp<RootStackParamList, 'CommunitySetupScreen'>;
};

// New community screens
export type VerifyCommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'VerifyCommunityScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'VerifyCommunityScreen'>;
};
export type InviteMembersScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'InviteMembersScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'InviteMembersScreen'>;
};
export type CreateChannelScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CreateChannelScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CreateChannelScreen'>;
};

export type AddAdminsScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'AddAdminsScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AddAdminsScreen'>;
};

// Join community screens
export type CommunityWelcomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityWelcomeScreen'>;
  magic: any;
  route: RouteProp<RootStackParamList, 'CommunityWelcomeScreen'>;
};

export type CommunityMainScreentProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityMainScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunityMainScreen'>;
};

export type PinnedPostsScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'PinnedPostsScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'PinnedPostsScreen'>;
};
export type CommunityInfoScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityInfoScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunityInfoScreen'>;
};
export type CreateCommunity1Props = {
  navigation: NavigationProp<RootStackParamList, 'CreateCommunity1'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CreateCommunity1'>;
};
export type CreateCommunitySuccessScreenProps = {
  navigation: NavigationProp<
    RootStackParamList,
    'CreateCommunitySuccessScreen'
  >;
  magic: any;
  route: RouteProp<ParamListBase, 'CreateCommunitySuccessScreen'>;
};
export type CommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunityScreen'>;
};
export type ExploreCommunityScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'ExploreCommunityScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'ExploreCommunityScreen'>;
};
export type CommunitySettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunitySettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunitySettings'>;
};
export type GeneralSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'GeneralSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'GeneralSettings'>;
};
export type CommunityPrivacyProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityPrivacy'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunityPrivacy`'>;
};
export type TokenGateSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'TokenGateSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'TokenGateSettings`'>;
};
export type CommunityAssetSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'CommunityAssetSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CommunityAssetSettings`'>;
};
export type TokenGateSettingsCompleteProps = {
  navigation: NavigationProp<RootStackParamList, 'TokenGateSettingsComplete'>;
  magic: any;
  route: RouteProp<
    TokenGateSettingsCompleteParams,
    'TokenGateSettingsComplete`'
  >;
};
export type CryptoAssetSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'CryptoAssetSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CryptoAssetSettings`'>;
};
export type AddMembersProps = {
  navigation: NavigationProp<RootStackParamList, 'AddMembers'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AddMembers`'>;
};
export type MemberRoleProps = {
  navigation: NavigationProp<RootStackParamList, 'MemberRole'>;
  magic: any;
  route: RouteProp<ParamListBase, 'MemberRole`'>;
};
export type RolesProps = {
  navigation: NavigationProp<RootStackParamList, 'Roles'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Roles`'>;
};
export type NewRoleProps = {
  navigation: NavigationProp<RootStackParamList, 'NewRole'>;
  magic: any;
  route: RouteProp<ParamListBase, 'NewRole`'>;
};
export type PermissionsProps = {
  navigation: NavigationProp<RootStackParamList, 'Permissions'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Permissions'>;
};
export type AddMemberProps = {
  navigation: NavigationProp<RootStackParamList, 'AddMember'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AddMember'>;
};
export type NotificationSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'NotificationSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'NotificationSettings'>;
};
export type ViewRolesProps = {
  navigation: NavigationProp<RootStackParamList, 'ViewRoles'>;
  magic: any;
  route: RouteProp<ViewRolesParams, 'ViewRoles'>;
};
export type CreateChannelProps = {
  navigation: NavigationProp<RootStackParamList, 'CreateChannel'>;
  magic: any;
  route: RouteProp<ParamListBase, 'CreateChannel'>;
};
export type ChannelCategoriesProps = {
  navigation: NavigationProp<RootStackParamList, 'ChannelCategories'>;
  magic: any;
  route: RouteProp<ParamListBase, 'ChannelCategories'>;
};
export type ChannelsProps = {
  navigation: NavigationProp<RootStackParamList, 'Channels'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Channels'>;
};
export type BannedMemberProps = {
  navigation: NavigationProp<RootStackParamList, 'BannedMember'>;
  magic: any;
  route: RouteProp<ParamListBase, 'BannedMember'>;
};
export type ConversationProps = {
  navigation: NavigationProp<RootStackParamList, 'Conversation'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Conversation'>;
};
export type SendTokenProps = {
  navigation: NavigationProp<RootStackParamList, 'SendToken'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SendToken'>;
};
export type TokenSuccessProps = {
  navigation: NavigationProp<RootStackParamList, 'TokenSuccess'>;
  magic: any;
  route: RouteProp<TokenSuccessParams, 'TokenSuccess'>;
};
export type OfferforsaleProps = {
  navigation: NavigationProp<RootStackParamList, 'Offerforsale'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Offerforsale'>;
};
export type NFTOfferProps = {
  navigation: NavigationProp<RootStackParamList, 'NFTOffer'>;
  magic: any;
  route: RouteProp<NFTOfferParams, 'NFTOffer'>;
};
export type MyRefferalsProps = {
  navigation: NavigationProp<RootStackParamList, 'MyRefferals'>;
  magic: any;
  route: RouteProp<ParamListBase, 'MyRefferals'>;
};
export type DexProps = {
  navigation: NavigationProp<RootStackParamList, 'Dex'>;
  magic: any;
  route: RouteProp<DEXParameter, 'Dex'>;
};
export type DWithdrawProps = {
  navigation: NavigationProp<RootStackParamList, 'Withdraw'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Withdraw'>;
};
export type AirdropsProps = {
  navigation: NavigationProp<RootStackParamList, 'Airdrops'>;
  magic: any;
  route: RouteProp<AirdropParameter, 'Airdrops'>;
};
export type AptosMonkeyProps = {
  navigation: NavigationProp<RootStackParamList, 'AptosMonkey'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AptosMonkey'>;
};
export type ShareReferralCodeProps = {
  navigation: NavigationProp<RootStackParamList, 'ShareReferralCode'>;
  magic: any;
  route: RouteProp<ParamListBase, 'ShareReferralCode'>;
};
export type SwapMainProps = {
  navigation: NavigationProp<RootStackParamList, 'SwapMain'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SwapMain'>;
};
export type ProfileSendTokenProps = {
  navigation: NavigationProp<RootStackParamList, 'ProfileSendToken'>;
  magic: any;
  route: RouteProp<ParamListBase, 'ProfileSendToken'>;
};
export type SupportProps = {
  navigation: NavigationProp<RootStackParamList, 'Support'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Support'>;
};
export type AccountInfoProps = {
  navigation: NavigationProp<RootStackParamList, 'AccountInfo'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AccountInfo'>;
};
export type AccountNotificationsProps = {
  navigation: NavigationProp<RootStackParamList, 'AccountNotifications'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AccountNotifications'>;
};
export type AccountSettingsProps = {
  navigation: NavigationProp<RootStackParamList, 'AccountSettings'>;
  magic: any;
  route: RouteProp<ParamListBase, 'AccountSettings'>;
};
export type BookmarksProps = {
  navigation: NavigationProp<RootStackParamList, 'Bookmarks'>;
  magic: any;
  route: RouteProp<ParamListBase, 'Bookmarks'>;
};
export type TownesquareVerificationProps = {
  navigation: NavigationProp<RootStackParamList, 'TownesquareVerification'>;
  magic: any;
  route: RouteProp<ParamListBase, 'TownesquareVerification'>;
};
