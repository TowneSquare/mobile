import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { sizes } from '../utils';
import { useMemo } from 'react';
import BookMarks from '../screens/DrawerScreens/BookMarks';
import Calender from '../screens/DrawerScreens/Calendar';
import Settings from '../screens/DrawerScreens/Settings';
import Support from '../screens/DrawerScreens/Support';
import CommunityInfoScreen from '../screens/Community/JoinComm/CommunityInfoScreen';
import TowneSquarePurpleScreen from '../screens/DrawerScreens/TowneSquarePurpleScreen';
import BottomTabNavigation from './BottomTabNavigation';
import FeedDrawerContent from '../components/DrawerContent/FeedDrawerContent';
import CommunityDrawerContent from '../components/DrawerContent/CommunityDrawerContent';
import { useAppSelector } from '../controller/hooks';
import ChannelChat from '../screens/Community/CreateChannel/ChannelChat';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const DrawerNavigation = () => {
  const currentTab = useAppSelector(
    (state) => state.FeedsSliceController.currentTab
  );
  const memoizedCurrentTab = useMemo(() => currentTab, [currentTab]);
  const Drawer = createDrawerNavigator();
  const getWidthDrawer = () => {
    if (memoizedCurrentTab === 'Main') {
      return size.getWidthSize(298);
    } else if (memoizedCurrentTab === 'Community') {
      return size.getWidthSize(312);
    }
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: getWidthDrawer(),
        },
      }}
      drawerContent={(props: any) => {
        if (memoizedCurrentTab === 'Main') {
          return <FeedDrawerContent {...props} />;
        } else if (memoizedCurrentTab === 'Community') {
          return <CommunityDrawerContent {...props} />;
        }
      }}
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
      <Drawer.Screen
        name="CommunityInfoScreen"
        component={CommunityInfoScreen}
      />
      <Drawer.Screen name="ChannelChat" component={ChannelChat} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
