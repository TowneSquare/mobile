import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  FirstScreen: undefined;
  ChooseProfile: undefined;
  ChooseUsername: undefined;
  ConnectSocialsAndVrify: undefined;
  ConnectSocials: undefined;
  FindFriends: undefined;
  ExploreCommunities: undefined;
  Congratulations: undefined;
  ChooseProfilePics: undefined;
  PageView: undefined;
  ChooseUsernameSlide: undefined;
  BottomTabNavigation: undefined;
  DrawerNavigation: undefined;
  EmailLogin: undefined;

  ViewImageScreen: undefined;
  VideoPlayer: undefined;
  SinglePost: undefined;
  Notifications: undefined;
  CreatePost: { showToast?: boolean };
  NftCollectionScreen: undefined;
  SelectedCollectionScreen: undefined;
};
type CreatePostParameter = {
  [CreatePost: string]: {
    showToast: boolean;
  };
};
export type FirstScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'FirstScreen'>;
  magic: any;
  route: RouteProp<ParamListBase, 'FirstScreen'>;
};
export type ChooseProfileProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseProfile'>;
  route: RouteProp<ParamListBase, 'ChooseProfile'>;
};
export type ChooseUsernameProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseUsername'>;
  route: RouteProp<ParamListBase, 'ChooseUsername'>;
};
export type ConnectSocialsAndVrifyProps = {
  navigation: NavigationProp<RootStackParamList, 'ConnectSocialsAndVrify'>;
  route: RouteProp<ParamListBase, 'ConnectSocialsAndVrify'>;
};
export type ConnectSocialsProps = {
  navigation: NavigationProp<RootStackParamList, 'ConnectSocials'>;
  route: RouteProp<ParamListBase, 'ConnectSocials'>;
};
export type FinundefineddFriendsProps = {
  navigation: NavigationProp<RootStackParamList, 'FindFriends'>;
  route: RouteProp<ParamListBase, 'FindFriends'>;
};
export type ExploreCommunitiesProps = {
  navigation: NavigationProp<RootStackParamList, 'ExploreCommunities'>;
  route: RouteProp<ParamListBase, 'ExploreCommunities'>;
};
export type CongratulationsProps = {
  navigation: NavigationProp<RootStackParamList, 'Congratulations'>;
  route: RouteProp<ParamListBase, 'Congratulations'>;
};
export type ChooseProfilePicsProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseProfilePics'>;
  route: RouteProp<ParamListBase, 'ChooseProfilePics'>;
};
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
export type SinglePostProps = {
  navigation: NavigationProp<RootStackParamList, 'SinglePost'>;
  magic: any;
  route: RouteProp<ParamListBase, 'SinglePost'>;
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
