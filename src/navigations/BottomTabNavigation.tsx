import { View, Text, Dimensions } from 'react-native';
import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../assets/images/svg/Home';
import ProfileSvg from '../../assets/images/svg/ProfileSvg';
import MicrophoneSvg from '../../assets/images/svg/MicrophoneSvg';
import MultipleSvg from '../../assets/images/svg/MultipleSvg';
import Main from '../screens/Feed/Main';
import Profile from '../screens/Profile/Profile';
import ChatSvg from '../../assets/images/svg/ChatSvg';
import HomeBlur from '../../assets/images/svg/HomeBlur';
import ProfileFocused from '../../assets/images/svg/ProfileFocused';
import Space from '../screens/Feed/Space';
// import Community from '../screens/Community/Community';
import CommunityInfoScreen from '../screens/Feed/CommunityInfoScreen';
import Chats from '../screens/Feed/Chats';
import { sizes } from '../utils/size';
import { appColor } from '../constants';
const { height, width } = Dimensions.get('window');
import { useAppSelector } from '../controller/hooks';
import CommunityDemo from '../screens/Feed/CommunityDemo';
// import Community from '../screens/Community';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const modals = useAppSelector((state) => ({
    ReceiveModalVisibility: state.FeedsSliceController.ReceiveModalState,
    reportModal: state.FeedsSliceController.ReportingModal,
    reportPostModal: state.FeedsSliceController.ReportPostModal,
    blockModal: state.FeedsSliceController.BlockUserModal,
    reportUserModal: state.FeedsSliceController.ReportUserModal,
    superStarBottomSheet: state.bottomSheetController.superStarBottomSheet,
    verificationModal: state.bottomSheetController.verificationModal,
    myPostModal: state.FeedsSliceController.MyPostPanel,
    deletePostPanel: state.FeedsSliceController.DeleteMyPostPanel,
  }));
  const isAnyModalOpen = Object.values(modals).some((modal) => modal === true);
  const editProfile = useAppSelector((state) => state.USER.editProfile);
  const main = 'Main';
  const profile = 'UserProfile';
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
          display: isAnyModalOpen || editProfile ? 'none' : 'flex',
          borderTopWidth: 0,
        },
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let image: ReactNode;
          let routeName = route.name;
          if (routeName === main) {
            image = focused === true ? <Home /> : <HomeBlur />;
          }
          if (routeName === profile) {
            image = focused === true ? <ProfileFocused /> : <ProfileSvg />;
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
        component={CommunityDemo}
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
