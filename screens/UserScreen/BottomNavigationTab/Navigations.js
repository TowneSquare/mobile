import { View, Image, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Views
import UserScreen from "../UserScreen";
import DiscoverTab from "./DiscoverTab/UserProfile";
import CommunityTab from "./CommunityTab";
import FeedsTab from "./FeedsTab";
import GroupTab from "./GroupTab";
import SpaceTab from "../../profileScreen/SpaceTab";
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
          height: 70,
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
            uri = require("../../../assets/PNG/discover.png");
          } else if (routeName === feeds) {
            uri = require("../../../assets/PNG/feed.png");
          } else if (routeName === community) {
            uri = require("../../../assets/PNG/community.png");
          } else if (routeName === group) {
            uri = require("../../../assets/PNG/team.png");
          } else if (routeName === space) {
            uri = require("../../../assets/PNG/voice.png");
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
