import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../../constants/Colors";
import imageAssets from "../../../../constants/images";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { height, width } from "../../../../constants/utils";
import Space from "./components/Space";
import Microphone from "./components/Microphone";
import { updateSpaceModal } from "./controller/SpaceController";
import { useAppDispatch } from "../../../../Components/Redux/hooks";
import SetupMicrophoneModal from "./components/SetupMicrophoneModal";
const SpaceTab = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView className={`bg-[#0F111E] flex-1`}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <View
        style={{
          width: width,
        }}
        className="flex-row items-center pl-3 pr-3 mt-5 mb-5"
      >
        <Avatar rounded size={50} source={imageAssets.NFTimage} />
        <Text className={`text-[${COLORS.WHITE}] ml-5 flex-1 text-xl`}>
          TowneSquare
        </Text>
        <View
          className="w-28"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AntDesign name="search1" color="#B5B3BC" size={22} />
          <MaterialIcons name="filter-list" color="#B5B3BC" size={22} />
          <Ionicons name="notifications-outline" color="#B5B3BC" size={22} />
        </View>
      </View>
      <ScrollView className="bg-[#0F111E]">
        <Space isLive={true} />
        <Space isLive={true} />
        <Space isLive={false} />
        <Space isLive={false} />
        <Space isLive={true} />
      </ScrollView>
      <SetupMicrophoneModal />
      <Microphone />
    </SafeAreaView>
  );
};

export default SpaceTab;
