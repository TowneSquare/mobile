import { View, Image, Text } from "react-native";
import imageAssets from "../../../constants/images";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Views
import UserScreen from "../UserScreen";
import DiscoverTab from "./DiscoverTab/UserProfile";
import CommunityTab from "./CommunityTab";
import FeedsTab from "./FeedsTab";
import GroupTab from "./GroupTab/GroupTab";
import SpaceTab from "./SpaceTab/SpaceTab";
import { heightSize } from "../../../constants/sizes";
//icons

const Tab = createBottomTabNavigator();

//screens
const discover = "Discover";
const feeds = "Feed";
const community = "Community";
const group = "Group";
const space = "Space";

const ProfileTabNavigations = () => {
  return (
    <Tab.Navigator
      initialRouteName={discover}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderWidth: 0,
          height: heightSize(70),
          marginBottom: 0,
          backgroundColor: "#293056",
          // activeTintColor:"white",
          // inactiveTintColor:"red",
        },
        tabBarLabelStyle: {
          color: "#B3B8DB",
          paddingBottom: 10,
        },
        tabBarActiveBackgroundColor: "#B3B8DB30",

        tabBarIcon: () => {
          let uri;
          let routeName = route.name;
          if (routeName === discover) {
            uri = imageAssets.discover;
          } else if (routeName === feeds) {
            uri = imageAssets.feed;
          } else if (routeName === community) {
            uri = imageAssets.community;
          } else if (routeName === group) {
            uri = imageAssets.group;
          } else if (routeName === space) {
            uri = imageAssets.space;
          }
          return <Image source={uri} size={28} />;
        },
      })}
    >
      <Tab.Screen
        name={discover}
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={feeds}
        component={FeedsTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={community}
        component={CommunityTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={group}
        component={GroupTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={space}
        component={SpaceTab}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTabNavigations;
