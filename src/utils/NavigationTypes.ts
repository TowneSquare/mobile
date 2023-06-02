import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
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

  EmailLogin: undefined;
};
export type FirstScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'FirstScreen'>;
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
export type FindFriendsProps = {
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


export type EmailLoginProps = {
  navigation: NavigationProp<RootStackParamList, 'EmailLogin'>;
  route: RouteProp<ParamListBase, 'EmailLogin'>;
};