import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Connections from "./Connections";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
const height = Dimensions.get("window").height;
import { width } from "../../../../../constants/utils";
import Followers from "./Followers";
const FollowersScreen = ({ navigation }) => {
  const route = useRoute();
  const view = route.params.selected;
  const [selected, setSelected] = useState(view);
  const followers = [
    {
      id: 1,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 2,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 3,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 4,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 5,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 6,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 7,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 8,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 9,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 10,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
    {
      id: 11,
      name: "Mr.Fox",
      userName: "@MrFox",
      title: "Proud owner of SMB #3708. Founder and CEO of TownSquare.",
      image: require("../../../../../assets/PNG/DeGods.png"),
    },
  ];
  const renderItem = ({ item }) => {
    if (selected === "Followers") {
      return <Followers items={item} />;
    } else if (selected === "Connections") {
      return <Connections items={item} />;
    }
  };
  return (
    <SafeAreaView className="bg-[#101323]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />

      <View
        className="bg-[#101323] mr-3 ml-3 "
        style={{
          height: height,
        }}
      >
        <View
          className="flex-row  h-24"
          style={{
            justifyContent: "space-between",

            alignItems: "flex-end",
            padding: 10,
            elevation: 10,
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="chevron-back" color="white" size={22} />
          </TouchableOpacity>
          <View
            className={`flex-row bg-[#293056] pr-2 pl-2 ml-5  w-64 h-12`}
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelected("Followers");
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  borderRadius: selected === "Followers" ? 9 : 0,
                }}
                className={
                  selected === "Followers"
                    ? `bg-[#7F56D9] h-11 w-28`
                    : ` h-11 w-28`
                }
              >
                <Text className="text-white font-bold text-center">
                  33K Followers
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected("Connections");
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  borderRadius: selected === "Connections" ? 9 : 0,
                }}
                className={
                  selected === "Connections"
                    ? `bg-[#7F56D9] h-11 w-28`
                    : `h-11 w-28`
                }
              >
                <Text className="text-white font-bold text-center">
                  12K Connections
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Ionicons name="chevron-back" color="#101323" size={22} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={followers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default FollowersScreen;
