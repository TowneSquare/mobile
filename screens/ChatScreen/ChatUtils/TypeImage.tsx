import { View, Text, Image } from "react-native";
import React from "react";
import COLORS from "../../../constants/Colors";
import imageAssets from "../../../constants/images";
import Feather from "@expo/vector-icons/Feather";
const TypeImage = (message: any) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View className={`mt-4 mb-4`}>
      <View
        className={`w-72 flex-row mt-3`}
        style={{
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        }}
      >
        <Text className={`text-white flex-1 `}>OFFER</Text>
        <Text className={`text-white`}>Thursday 11:40am</Text>
      </View>
      <View className={`mt-2`}>
        <View
          className={
            isMyMessage()
              ? `bg-[${COLORS.CHATSENDERBACKGROUNDCOLOR}]  w-72`
              : `bg-[${COLORS.CHATRECEIVERBGCOLOR}]  w-72`
          }
          style={[
            {
              alignSelf: isMyMessage() ? "flex-end" : "flex-start",
            },
            {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderWidth: 3,
              borderColor: isMyMessage()
                ? COLORS.CHATSENDERBACKGROUNDCOLOR
                : COLORS.CHATRECEIVERBGCOLOR,
              borderTopLeftRadius: isMyMessage() ? 8 : 0,
              borderTopRightRadius: isMyMessage() ? 0 : 8,
            },
          ]}
        >
          <View className={`p-3 flex-row `}>
            <Text className={`text-white flex-1 font-bold text-lg`}>
              SMB #911
            </Text>
            <Feather name="star" size={24} color="white" />
          </View>
          <Image
            style={{
              width: 284,
              height: 155,
            }}
            source={imageAssets.chatImage}
          />
          <View
            className={`flex-row ml-3 mr-3 mt-3`}
            style={{
              alignItems: "center",
            }}
          >
            <View className={` flex-1`}>
              <Text
                className={
                  isMyMessage()
                    ? `text-sm text-[${COLORS.WHITE}]`
                    : `text-sm text-[${COLORS.PURPLE}]`
                }
              >
                Price
              </Text>
              <Text
                className={
                  isMyMessage()
                    ? `font-bold text-[${COLORS.WHITE}]`
                    : `font-bold text-[${COLORS.PURPLE}]`
                }
              >
                23.6 SOL
              </Text>
            </View>
            <View
              className={`bg-[#FF4445] `}
              style={{
                height: 32,
                width: 138,
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text className={`text-white text-center`}>Cancel</Text>
            </View>
          </View>
          <View
            style={{
              maxWidth: 232,
            }}
          >
            <Text className={`text-white m-3 text-lg`}>
              Hey team, I've finished with the requirements doc!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TypeImage;
