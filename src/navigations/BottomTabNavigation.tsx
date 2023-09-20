import { Dimensions } from 'react-native';
import { ReactNode } from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/Community/Community/CommunityScreen';
import Home from '../../assets/images/svg/Home';
import ProfileSvg from '../../assets/images/svg/ProfileSvg';
import MicrophoneSvg from '../../assets/images/svg/MicrophoneSvg';
import MultipleSvg from '../../assets/images/svg/MultipleSvg';
import Main from '../screens/Feed/Main';
import Profile from '../screens/Profile/Profile';
import ChatSvg from '../../assets/images/svg/ChatSvg';
import HomeBlur from '../../assets/images/svg/HomeBlur';
import ProfileFocused from '../../assets/images/svg/ProfileFocused';
import { useEffect } from 'react';
import { updateCurrentTab } from '../controller/FeedsController';
import Chats from '../screens/Feed/Chats';
import { sizes } from '../utils/size';
import { appColor } from '../constants';
import CommunityActiveTabIcon from '../../assets/images/svg/CommunityActiveTabIcon';
import CommunityDemo from '../screens/Community/CommunityDemo';
import CreateCommunity1 from '../screens/Community/CreateCommunity/CreateCommunity1';
const { height, width } = Dimensions.get('window');
import { useAppSelector, useAppDispatch } from '../controller/hooks';
import { RouteProp } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
type RootStackParamList = {
  Main: undefined;
  Community: undefined;
  Space: undefined;
  Chats: undefined;
  UserProfile: undefined;
};

type BottomTabNavigationRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>;

const BottomTabNavigation: React.FC<{
  route: BottomTabNavigationRouteProp;
}> = ({ route }) => {
  const focusedRouteName = getFocusedRouteNameFromRoute(route);

  useEffect(() => {
    dispatch(updateCurrentTab(focusedRouteName));
  }, [focusedRouteName]);
  const dispatch = useAppDispatch();
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
  const hasCreatedCommunity = useAppSelector(
    (state) => state.COMMUNITY.hasCreatedCommunity
  );
  let CommunityToShow = hasCreatedCommunity
    ? CommunityScreen
    : CreateCommunity1;
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
            image =
              focused === true ? (
                <Home size={size.getHeightSize(24)} />
              ) : (
                <HomeBlur size={size.getHeightSize(24)} />
              );
          }
          if (routeName === profile) {
            image =
              focused === true ? (
                <ProfileFocused size={size.getHeightSize(24)} />
              ) : (
                <ProfileSvg size={size.getHeightSize(24)} />
              );
          }
          if (routeName === space) {
            image = focused === true ? <MicrophoneSvg /> : <MicrophoneSvg />;
          }
          if (routeName === chats) {
            image =
              focused === true ? (
                <ChatSvg />
              ) : (
                <ChatSvg size={size.getHeightSize(24)} />
              );
          }
          if (routeName === community) {
            image =
              focused === true ? (
                <CommunityActiveTabIcon size={size.getHeightSize(24)} />
              ) : (
                <MultipleSvg size={size.getHeightSize(24)} />
              );
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
        component={CommunityToShow}
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
