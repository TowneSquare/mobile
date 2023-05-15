import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export type RootStackParamList = {
  LoginScreen: undefined;
  SplashScreen: undefined;
  WalletAddedScreen: undefined;
  SetupProfileScreen: undefined;
  ChooseTopics: undefined;
};
export type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'LoginScreen'>;
  route: RouteProp<ParamListBase, 'LoginScreen'>;
};
export type SplashScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SplashScreen'>;
  route: RouteProp<ParamListBase, 'SplashScreen'>;
};
export type WalletAddedScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'WalletAddedScreen'>;
  route: RouteProp<ParamListBase, 'WalletAddedScreen'>;
};
export type SetupProfileScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SetupProfileScreen'>;
  route: RouteProp<ParamListBase, 'SetupProfileScreen'>;
};
export type ChooseTopicsScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'ChooseTopics'>;
  route: RouteProp<ParamListBase, 'ChooseTopics'>;
};
