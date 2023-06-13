import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { View, Text, Dimensions } from 'react-native';
import { sizes } from '../utils';
import React from 'react';
import BookMarks from '../screens/DrawerScreens/BookMarks';
import Calender from '../screens/DrawerScreens/Calender';
import Settings from '../screens/DrawerScreens/Settings';
import Support from '../screens/DrawerScreens/Support';
import TowneSquarePurpleScreen from '../screens/DrawerScreens/TowneSquarePurpleScreen';
import DrawerComponents from '../screens/DrawerScreens/DrawerComponents';
import BottomTabNavigation from './BottomTabNavigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: size.getWidthSize(298),
        },
      }}
      drawerContent={(props: any) => <DrawerComponents {...props} />}
    >
      <Drawer.Screen name="Tabs" component={BottomTabNavigation} />
      <Drawer.Screen name="BookMark" component={BookMarks} />
      <Drawer.Screen name="Calender" component={Calender} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen
        name="TowneSquarePurpleScreen"
        component={TowneSquarePurpleScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
