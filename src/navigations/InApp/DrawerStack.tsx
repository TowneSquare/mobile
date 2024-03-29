import { createDrawerNavigator } from '@react-navigation/drawer';
import { useMemo } from 'react';
import { Dimensions } from 'react-native';
import CommunityDrawerContent from '../../components/DrawerContent/CommunityDrawerContent';
import FeedDrawerContent from '../../components/DrawerContent/FeedDrawerContent';
import { useAppSelector } from '../../controller/hooks';
import ChannelChat from '../../screens/Community/CreateChannel/ChannelChat';
import CommunityInfoScreen from '../../screens/Community/JoinComm/CommunityInfoScreen';
import BookMarks from '../../screens/DrawerScreens/BookMarks';
import Calender from '../../screens/DrawerScreens/Calendar';
import Settings from '../../screens/DrawerScreens/Settings';
import Support from '../../screens/DrawerScreens/Support';
import TowneSquarePurpleScreen from '../../screens/DrawerScreens/TowneSquarePurpleScreen';
import { sizes } from '../../utils';
import BottomTabNavigation from './BottomTabNavigation';
const { height, width } = Dimensions.get('window');
type tabs = 'Main' | 'UserProfile' | 'Reward' | 'Chats' | 'Community';
const size = new sizes(height, width);
const DrawerNavigation = () => {
  const currentTab = useAppSelector(
    (state) => state.FeedsSliceController.currentTab
  );

  const memoizedCurrentTab = useMemo(() => currentTab, [currentTab]) as tabs;
  const Drawer = createDrawerNavigator();
  const getWidthDrawer = () => {
    if (memoizedCurrentTab === 'Main' || memoizedCurrentTab === 'UserProfile') {
      return size.getWidthSize(298);
    } else if (memoizedCurrentTab === 'Community') {
      return size.getWidthSize(312);
    }
  };
  const shoulddisableSwipe = (tab: tabs) => {
    switch (tab) {
      case 'Chats':
        return false;
      case 'Community':
        return false;
      case 'Reward':
        return false;
      default:
        return true;
    }
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: getWidthDrawer(),
        },
        swipeEnabled: shoulddisableSwipe(memoizedCurrentTab),
      }}
      drawerContent={(props: any) => {
        if (
          memoizedCurrentTab === 'Main' ||
          memoizedCurrentTab === 'UserProfile'
        ) {
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
