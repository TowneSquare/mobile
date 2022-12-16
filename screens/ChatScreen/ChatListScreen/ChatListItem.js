import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView
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
    <Pressable
      onPress={() => dispatch(isMenuActive(false))}
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
            console.warn("Pressed", chat.id);
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

      {menuActive == true && chat.id == activeOption ? (
        <View
         onLayout={event => {
    const layout = event.nativeEvent.layout;
    console.log('height:', layout.height);
    console.log('width:', layout.width);
    console.log('x:', layout.x);
    console.log('y:', layout.y);
  }}
          style={{
            marginTop: 60,
            backgroundColor: "#293056",
            borderRadius: 8,
            height: 150,
            width: 156,
            top: -70,
            right: -20,
            position: "relative",
            zIndex: 300,
            elevation: Platform.OS === "android" ? 5000 : 0,
            justifyContent: "space-between",
            paddingVertical: 10,
            overflow:"visible"
          }}
        >
          <View className="flex-row ml-3 ">
            <Octicons name="person" size={20} color={COLORS.WHITE} />
            <Text className="font-medium ml-5 text-white">View Profile</Text>
          </View>
          <View className="flex-row ml-3 ">
            <Octicons name="person" size={22} color={COLORS.WHITE} />
            <Text className="font-medium ml-5 text-white">Mark as unread</Text>
          </View>
          <View className="flex-row ml-3 ">
            <MaterialCommunityIcons
              name="delete-outline"
              size={22}
              color={COLORS.WHITE}
            />
            <Text className="font-medium ml-5 text-white">Delete</Text>
          </View>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        onPress={() => {
          if (menuActive == false) {
            dispatch(isMenuActive(true));
            console.log("id::", chat.id);
            dispatch(activeMenu(chat.id));
          }
        }}
      >
        <Feather name="more-vertical" size={22} color={COLORS.WHITE} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ChatListItem;
{
}
