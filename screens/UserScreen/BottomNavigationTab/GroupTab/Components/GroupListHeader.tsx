import { View, Text, StatusBar } from "react-native";
import React from "react";
import COLORS from "../../../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { fontSize, screenHeight } from "../../../../../constants/sizes";
import SearchBar from "../../../../../Components/SearchBarComponent";
const GroupListHeader = () => {
  return (
    <>
      <View
        className="items-center justify-center  "
        style={{
          height: screenHeight(0.07),
        }}
      >
        <Text
          style={{
            fontSize: fontSize(20),
          }}
          className="text-white"
        >
          Groups
        </Text>
      </View>
      <SearchBar
        placeholder="Search"
        color={COLORS.GRAYBLUEOPACITY300}
        borderRadius={10}
        margintop={5}
      />
    </>
  );
};

export default GroupListHeader;
