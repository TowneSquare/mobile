import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { width } from "../../../../../constants/utils";
import React from "react";
const Followers = (props) => {
  const item = props.items;
  return (
    <View
      className="flex-row "
      style={{
        borderBottomWidth: 1,
        borderColor: "#293056",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        height: 120,
      }}
    >
      <Avatar rounded size={50} source={item.image} />
      <View className=" pr-3 pl-3">
        <View
          className="flex-row"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text className="text-white font-bold text-lg">{item.name}</Text>

          <View
            className="bg-[#7F56D9] h-8 w-24 "
            style={{
              borderRadius: 8,
              justifyContent: "center",
            }}
          >
            <Text className="text-white text-center">Follow back</Text>
          </View>
        </View>
        <Text className="text-[#D6BBFB] ">{item.userName}</Text>
        <Text className="text-[#B3B8DB] ">{item.title}</Text>
      </View>
    </View>
  );
};

export default Followers;
