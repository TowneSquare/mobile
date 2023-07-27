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
  const {
    ReceiveModalVisibility,
    reportModal,
    reportPostModal,
    blockModal,
    reportUserModal,
  } = useAppSelector((state) => ({
    ReceiveModalVisibility: state.FeedsSliceController.ReceiveModalState,
    reportModal: state.FeedsSliceController.ReportingModal,
    reportPostModal: state.FeedsSliceController.ReportPostModal,
    blockModal: state.FeedsSliceController.BlockUserModal,
    reportUserModal: state.FeedsSliceController.ReportUserModal,
  }));

  const editProfile = useAppSelector((state) => state.USER.editProfile);
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
            reportUserModal ||
            editProfile
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
      {/* <Tab.Screen
        name={space}
        component={Space}
        options={{ headerShown: false }}
      /> */}
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
