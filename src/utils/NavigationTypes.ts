import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export type RootStackParamList = {
  LoginScreen: undefined;
  SplashScreen: undefined;
};
export type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'LoginScreen'>;
  route: RouteProp<ParamListBase, 'LoginScreen'>;
};
export type SplashScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'SplashScreen'>;
  route: RouteProp<ParamListBase, 'SplashScreen'>;
};
