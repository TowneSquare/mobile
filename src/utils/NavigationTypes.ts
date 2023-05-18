import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export type RootStackParamList = {
  FirstScreen: undefined;
  ChooseProfile: undefined;
  ChooseUsername: undefined;
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
