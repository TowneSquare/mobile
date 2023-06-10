/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import NotFoundScreen from '../src/screens/NotFoundScreen';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HeaderDropdown from "./HeaderDropdown";


import EmailLogin from '../src/screens/SignUp/EmailLogin';
import FirstScreen from '../src/screens/SignUp/FirstScreen';
import ChooseProfile from '../src/screens/SignUp/ChooseProfile';
import ChooseUsername from '../src/screens/SignUp/ChooseUsername';
import ConnectSocialsAndVrify from '../src/screens/SignUp/ConnectSocialsAndVrify';
import ConnectSocials from '../src/screens/SignUp/ConnectSocials';
import FindFriends from '../src/screens/SignUp/FindFriends';
import ExploreCommunities from '../src/screens/SignUp/ExploreCommunities';
import Congratulations from '../src/screens/SignUp/Congratulations';
import ChooseProfilePics from '../src/screens/SignUp/ChooseProfilePics';
import ChooseUsernameSlide from '../src/screens/SignUp/ChooseUsernameSlide';
import BottomTabNavigation from '../src/utils/BottomTabNavigation';

export default function Navigation({ colorScheme, magicProps }: { colorScheme: ColorSchemeName, magicProps: any }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator magicProps={magicProps} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ magicProps }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" options={{ headerShown: false }} >
        {() => <FirstScreen {...magicProps} />}
      </Stack.Screen>

      <Stack.Screen
        name="ChooseProfile"
        component={ChooseProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseUsernameSlide"
        component={ChooseUsernameSlide}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseUsername"
        component={ChooseUsername}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConnectSocialsAndVrify"
        component={ConnectSocialsAndVrify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConnectSocials"
        component={ConnectSocials}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FindFriends"
        component={FindFriends}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExploreCommunities"
        component={ExploreCommunities}
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
        name="ChooseProfilePics"
        component={ChooseProfilePics}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen name="Root" options={{ headerShown: false }} >
        {() => BottomTabNavigator(magicProps)}
      </Stack.Screen> */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator(props: { navigation?: any; env?: any; setEnv?: any; magic?: any; web3?: any; }) {
//   const colorScheme = useColorScheme();

//   const { env, setEnv, magic, web3 } = props;

//   const header = () => <HeaderDropdown
//     env={env}
//     setEnv={setEnv}
//   />

//   return (
//     <BottomTab.Navigator
//       initialRouteName="Login"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="Login"
//         options={() => ({
//           headerShown: false,
//           title: 'Login',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         })}
//       >
//         {() => TabOneNavigator(header, magic, web3)}
//       </BottomTab.Screen>
//       <BottomTab.Screen
//         name="Web3"
//         options={{
//           title: 'Web3',
//           headerShown: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       >
//         {() => TabTwoNavigator(header, web3, magic)}
//       </BottomTab.Screen>
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
//const TabOneStack = createNativeStackNavigator<TabOneParamList>();

// function TabOneNavigator(header: () => JSX.Element, magic: any, web3: any) {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="LoginScreen"
//         options={{ headerTitle: header }}
//       >
//         {props => <LoginScreen {...props} magic={magic} web3={web3} />}
//       </TabOneStack.Screen>
//     </TabOneStack.Navigator>
//   );
// }

// const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

// function TabTwoNavigator(header: () => JSX.Element, web3: any, magic: any) {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="Web3Screen"
//         options={{ headerTitle: header }}
//       >
//         {(props: any) => <Web3Screen {...props} web3={web3} magic={magic} />}
//       </TabTwoStack.Screen>
//     </TabTwoStack.Navigator>
//   );
// }
