import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import { heightSize } from "../../../../../constants/sizes";
import imageAssets from "../../../../../constants/images";
import COLORS from "../../../../../constants/Colors";

const Groups = () => {
  return (
    <View
      style={{
        height: heightSize(80),
        borderBottomWidth: 1,
        borderBottomColor: "#293056",
      
      }}
      className="flex-row items-center"
    >
      <Image
        style={{ height: 48, width: 48, borderRadius: 24 }}
        source={imageAssets.NFTimage}
      />
      <View className={`ml-4  flex-1`}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={{
            justifyContent: "center",
          }}
        >
          <View className={`flex-row `}>
            <Text
              numberOfLines={1}
              className={`text-[${COLORS.WHITE}]  font-semibold text-lg mr-3`}
            >
              Group Name here
            </Text>
            <View
              style={{
                justifyContent: "center",
              }}
              className={`bg-[#9E77ED] w-9 rounded-full`}
            >
              <Text className={`text-white text-center`}>123</Text>
            </View>
          </View>

          <Text
            numberOfLines={1}
            style={{}}
            className={`text-[${COLORS.WHITE}] text-sm mr-3`}
          >
            How are you doing? Did you get any chance to look at what I've sent
            you? How are you doing? Did you get any chance to look at what I've
            sent you?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Groups;
