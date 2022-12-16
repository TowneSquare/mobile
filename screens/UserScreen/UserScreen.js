import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../constants/Colors";
import UserWallet from "./BottomNavigationTab/DiscoverTab/UserWallet";
import UserProfile from "./BottomNavigationTab/DiscoverTab/UserProfile";
const height = Dimensions.get("window").height;

const UserScreen = ({ navigation }) => {
  const [Tab, setTab] = useState("Profile");
  return (
    <SafeAreaView className={`bg-[${COLORS.STATUSBAR}]`} style={{}}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <ScrollView
        className=""
        style={{
          height: height,
        }}
      >
        <View
          className="flex-row  h-24"
          style={{
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "flex-end",
            padding: 10,
            elevation: 10,
            shadowColor: "white",
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="chevron-back" color="white" size={22} />
          </TouchableOpacity>
          <View
            className={`bg-[${COLORS.GRAYBLUE}] h-11 w-44 flex-row`}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 8,
              padding: 10,
            }}
          >
            <TouchableOpacity onPress={() => setTab("Profile")}>
              <View
                className={
                  Tab === "Profile"
                    ? ` bg-[${COLORS.LIGHTPURPLE}] h-9 w-20`
                    : `h-9 w-20`
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: Tab === "Profile" ? 7 : 0,
                }}
              >
                <Text className={`text-[${COLORS.WHITE}]`}>PROFILE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab("Wallet")}>
              <View
                className={
                  Tab === "Wallet"
                    ? ` bg-[${COLORS.LIGHTPURPLE}] h-9 w-20`
                    : `h-9 w-20`
                }
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: Tab === "Wallet" ? 7 : 0,
                }}
              >
                <Text className={`text-[${COLORS.WHITE}]`}>WALLET</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Ionicons name="ios-settings-outline" size={22} color="white" />
        </View>
        {Tab === "Profile" ? <UserProfile nav={navigation} /> : <UserWallet />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;
