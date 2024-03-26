import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { ReactNode, useEffect } from 'react';
import ChatsList from '../../screens/Community/Town/ChatsList';
import CommunityInfoScreen from '../../screens/Community/JoinComm/CommunityInfoScreen';
import { Dimensions, Image, View } from 'react-native';
import ChatSvg from '../../../assets/images/svg/ChatSvg';
import ChatTabFocusedIcon from '../../../assets/images/svg/ChatTabFocusedIcon';
import CommunityActiveTabIcon from '../../../assets/images/svg/CommunityActiveTabIcon';
import Home from '../../../assets/images/svg/Home';
import CommunityDemo from '../../screens/Community/CommunityDemo';
import HomeBlur from '../../../assets/images/svg/HomeBlur';
import MultipleSvg from '../../../assets/images/svg/MultipleSvg';
import RewardFocusedTab from '../../../assets/images/svg/RewardFocusedTab';
import RewardIcon from '../../../assets/images/svg/RewardIcon';
import CreateCommunityScreen from '../../screens/Community/CreateCommunity/CreateCommunityScreen';
import { appColor, images } from '../../constants';
import { updateCurrentTab } from '../../controller/FeedsController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import CommingSoon from '../../screens/Community/CommingSoon';
import CommunityScreen from '../../screens/Community/Community/CommunityScreen';
import CreateCommunity1 from '../../screens/Community/CreateCommunity/CreateCommunity1';
import Chats from '../../screens/DM/Chats';
import Main from '../../screens/Feed/Main';
import Profile from '../../screens/Profile/Profile';
import RewardTab from '../../screens/Rewards/Reward';
import { sizes } from '../../utils/size';
const { height, width } = Dimensions.get('window');

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
  const profilePics = useAppSelector(
    (state) => state.USER.UserData.profileImage
  );
  useEffect(() => {
    dispatch(updateCurrentTab(focusedRouteName));
  }, [focusedRouteName]);
  const dispatch = useAppDispatch();
  const modals = useAppSelector((state) => ({
    superStarBottomSheet: state.bottomSheetController.superStarBottomSheet,
    verificationModal: state.bottomSheetController.verificationModal,
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
  const reward = 'Reward';
  const chats = 'Chats';
  const community = 'Community';
  const size = new sizes(height, width);
  const profileIcon = (focused: boolean) => {
    if (profilePics) {
      return focused === true ? (
        <View
          style={{
            height: size.getHeightSize(24),
            width: size.getHeightSize(24),
            borderRadius: 100,
            borderWidth: 2,
            borderColor: appColor.kWhiteColor,
          }}
        >
          <Image
            source={{ uri: profilePics }}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            height: size.getHeightSize(24),
            width: size.getHeightSize(24),
            borderRadius: 100,
          }}
        >
          <Image
            source={{ uri: profilePics }}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
          />
        </View>
      );
    } else {
      return focused === true ? (
        <View
          style={{
            height: size.getHeightSize(24),
            width: size.getHeightSize(24),
            borderRadius: 100,
            borderWidth: 2,
            borderColor: appColor.kWhiteColor,
          }}
        >
          <Image
            source={images.defaultAvatar}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            height: size.getHeightSize(24),
            width: size.getHeightSize(24),
            borderRadius: 100,
          }}
        >
          <Image
            source={images.defaultAvatar}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
          />
        </View>
      );
    }
  };
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
            image = profileIcon(focused);
          }
          if (routeName === reward) {
            image =
              focused === true ? (
                <RewardFocusedTab size={size.getHeightSize(24)} />
              ) : (
                <RewardIcon size={size.getHeightSize(24)} />
              );
          }
          if (routeName === chats) {
            image =
              focused === true ? (
                <ChatTabFocusedIcon size={size.getHeightSize(24)} />
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
        component={ChatsList}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name={reward}
        component={RewardTab}
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
