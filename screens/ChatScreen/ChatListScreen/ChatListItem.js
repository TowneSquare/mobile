import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  Animated,
} from "react-native";
import React, { FC, useState } from "react";
import {
  Feather,
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import COLORS from "../../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { isMenuActive, activeMenu } from "../Controller/ChatOption";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { interpolate } from "react-native-reanimated";

import imageAssets from "../../../constants/images";

const ChatListItem = ({ chat, lastMessage }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const renderDelete = (icon, color, backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#293056",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            height: 75,
            borderRadius: 1,
          }}
        >
          <MaterialIcons name={icon} size={20} color={color} />
          <Text className={`text-white`}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderMarkAsUnread = (backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#293056",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            height: 75,
            borderRadius: 1,
          }}
        >

          <Image source={imageAssets.unread} />

          <Image source={require("../../../assets/PNG/unread.png")} />

          <Text className={`text-white text-center`}>Mark as unread</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const updateRef = (ref) => {
    const swipeableRow = ref;
  };

  const renderRightActions = (progress) => {
    return (
      <View
        style={{
          width: 152,
          flexDirection: "row",
        }}
      >
        {renderDelete("delete-outline", "white", "3eeeeeee", 152, progress)}
        {renderMarkAsUnread("white", 152, progress)}
      </View>
    );
  };

  return (
    <Swipeable
      ref={updateRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={(progress) => renderRightActions(progress)}
    >
      <View
        className={`flex-row  h-20 `}
        style={{
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#293056",
          marginHorizontal: 8,
        }}
      >
        <Image
          style={{ height: 48, width: 48, borderRadius: 24 }}
          source={{ uri: chat.user.image }}
        />
        <View className={`ml-4  flex-1`}>
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

              How are you doing? Did you get any chance to look at what I've
              sent you?

             How are you doing? Did you get any chance to look at what I've sent you?

            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
};

export default ChatListItem;
