import { View, Text, Dimensions } from 'react-native';
import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../assets/images/svg/Home';
import ProfileSvg from '../../assets/images/svg/ProfileSvg';
import MicrophoneSvg from '../../assets/images/svg/MicrophoneSvg';
import MultipleSvg from '../../assets/images/svg/MultipleSvg';
import Main from '../screens/Feed/Main';
import Profile from '../screens/Feed/Profile';
import ChatSvg from '../../assets/images/svg/ChatSvg';
import Space from '../screens/Feed/Space';
import Community from '../screens/Feed/Community';
import Chats from '../screens/Feed/Chats';
import { sizes } from '../utils/size';
import { appColor } from '../constants';
const { height, width } = Dimensions.get('window');
import { useAppSelector } from '../controller/hooks';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const ReceiveModalVisibility = useAppSelector(
    (state) => state.FeedsSliceController.ReceiveModalState
  );
  const reportModal = useAppSelector(
    (state) => state.FeedsSliceController.ReportingModal
  );
  const reportPostModal = useAppSelector(
    (state) => state.FeedsSliceController.ReportPostModal
  );
  const blockModal = useAppSelector(
    (state) => state.FeedsSliceController.BlockUserModal
  );
  const reportUserModal = useAppSelector(
    (state) => state.FeedsSliceController.ReportUserModal
  );
  const main = 'Main';
  const profile = 'Profile';
  const space = 'Space';
  const chats = 'Chats';
  const community = 'Community';
  const size = new sizes(height, width);
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName={main}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderWidth: 0,
          height: size.getHeightSize(64),
          backgroundColor: appColor.kGrayscaleDart,
          display:
            ReceiveModalVisibility ||
            reportModal ||
            reportPostModal ||
            blockModal ||
            reportUserModal
              ? 'none'
              : 'flex',
        },
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let image: ReactNode;
          let routeName = route.name;
          if (routeName === main) {
            image = focused === true ? <Home /> : <Home />;
          }
          if (routeName === profile) {
            image = focused === true ? <ProfileSvg /> : <ProfileSvg />;
          }
          if (routeName === space) {
            image = focused === true ? <MicrophoneSvg /> : <MicrophoneSvg />;
          }
          if (routeName === chats) {
            image = focused === true ? <ChatSvg /> : <ChatSvg />;
          }
          if (routeName === community) {
            image = focused === true ? <MultipleSvg /> : <MultipleSvg />;
          }
          return image;
        },
      })}
    >
      <Tab.Screen
        name={main}
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={community}
        component={Community}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={space}
        component={Space}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={chats}
        component={Chats}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profile}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
