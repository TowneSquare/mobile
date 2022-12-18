import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { FC, useState } from "react";
import { Feather, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { isMenuActive, activeMenu } from "../Controller/ChatOption";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ chat, lastMessage }) => {
  const menuActive = useSelector((state) => state.chatOptionState.isMenuActive);
  const activeOption = useSelector((state) => state.chatOptionState.activeMenu);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      className={`flex-row  h-20 relative`}
      style={{
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#293056",
        marginHorizontal: 8,
        zIndex: -600,
        elevation: Platform.OS === "android" ? -5000 : 0,
        position: "relative",
      }}
    >
      <Image
        style={{ height: 48, width: 48, borderRadius: 24 }}
        source={{ uri: chat.user.image }}
      />
      <View
        className={`ml-4  flex-1`}
        // style={{
        //   zIndex:-6,
        //       elevation: (Platform.OS === 'android') ? -50 : 0,
        // }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            dispatch(isMenuActive(false));
            navigation.navigate("ConversationScreen", { details: chat.user });
          
          }}
          style={{
            justifyContent: "center",
          }}
        >
          {chat.id == 2 ? (
            <View className={`flex-row `}>
              <Text
                numberOfLines={1}
                className={`text-[${COLORS.WHITE}]  font-semibold text-lg mr-3`}
              >
                {chat.user.name}
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
          ) : (
            <Text
              numberOfLines={1}
              className={`text-[${COLORS.WHITE}] font-semibold text-lg mr-3`}
            >
              {chat.user.name}
            </Text>
          )}

          <Text
            numberOfLines={1}
            style={{}}
            className={
              chat.id == 2
                ? `text-[${COLORS.PURPLE}] text-sm mr-3`
                : `text-[${COLORS.WHITE}] text-sm mr-3`
            }
          >
            How are you, Lukas! Last msg here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatListItem;
{
}
