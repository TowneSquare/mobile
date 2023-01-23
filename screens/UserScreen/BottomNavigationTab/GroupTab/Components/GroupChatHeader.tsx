import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { screenHeight, screenWidth } from "../../../../../constants/sizes";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SizedBox } from "sizedbox";
import imageAssets from "../../../../../constants/images";
const GroupChatHeader = () => {
  const navigation = useNavigation();
  return (
    <>
    
      <View
        style={{
          height: screenHeight(0.1),
        }}
        className="flex-row bg-[#101323] items-center"
      >
        <Ionicons
          onPress={navigation.goBack}
          style={{ marginLeft: 3 }}
          name="chevron-back"
          color="white"
          size={22}
        />
        <Image
          className={`mr-4 ml-2`}
          style={{ height: 48, width: 48, borderRadius: 24 }}
          source={imageAssets.NFTimage}
        />
        <View className="flex-1">
          <Text className="text-[#B5B3BC]">GROUP</Text>
          <Text className="text-white font-semibold">SOLD OUT</Text>
        </View>
        <View className="mr-3">
          <Feather
            className="mr-4"
            name="more-vertical"
            size={22}
            color="white"
          />
        </View>
      </View>
    </>
  );
};

export default GroupChatHeader;
