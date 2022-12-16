import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import COLORS from "../../../../constants/Colors";
import moment from "moment";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Popover from "react-native-popover-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { width } from "../../../../constants/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  isdeleteViewActive,
  activeDeleteView,
} from "../../Controller/ChatOption";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const deleteActive = useSelector(
    (state) => state.chatOptionState.isdeleteViewActive
  );
  const activeDelete = useSelector(
    (state) => state.chatOptionState.activeDeleteView
  );
  const dispatch = useDispatch();
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  const typeDate = () => {
    function getDisplayDate(array) {
      const year = array[0];
      const month = array[1];
      const day = array[2];
      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      const compDate = new Date(year, month - 1, day);
      let diff = today.getTime() - compDate.getTime();
      if (compDate.getTime() == today.getTime()) {
        return "Today";
      } else if (diff <= 24 * 60 * 60 * 1000) {
        return "Yesterday";
      } else {
        return compDate.toDateString();
      }
    }

    return (
      <View className={``}>
        <View
          style={{
            width: "100%",
            height: 0.5,
            backgroundColor: "#293056",
            top: 20,
          }}
        />
        <View
          className={`mt-3`}
          style={{
            width: 100,
            height: 20,
            backgroundColor: "#101323",
            position: "relative",
            alignSelf: "center",
          }}
        >
          <View>
            <Text className={`text-white relatve text-center `}>
              {getDisplayDate(message.date.split("-"))}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const typeMessage = () => {
    console.log(deleteActive);
    return (
      <View
        className={``}
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Text
          style={{
            alignSelf: isMyMessage() ? "flex-end" : "flex-start",
          }}
          className={`text-[${COLORS.CHATTEXTGRAYBLUEOPACITY}] mt-5 ml-2 mr-2`}
        >
          {dayjs(message.createdAt).fromNow(true)}
        </Text>
        {deleteActive == true && message.id == activeDelete ? (
          <View
          onTouchStart={()=>{
            console.log(";;;;;")
          }}
            style={{
              position: "absolute",
              borderRadius: 8,
              flexDirection: "row",
              alignSelf: isMyMessage() ? "flex-end" : "flex-start",
              height: 48,
              width: 156,
              paddingLeft: 20,
              alignItems: "center",
              top: 5,
              left: isMyMessage() ? width * 0.5 : width * 0.2,

              bottom: 20,
              zIndex: 1,
            }}
            className="bg-[#293056] "
          >
            <MaterialCommunityIcons
              name="delete-outline"
              size={22}
              color={COLORS.WHITE}
            />
            <Text className="font-medium ml-3 text-white">Delete</Text>
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          delayLongPress={400}
          activeOpacity={1}
          onLongPress={() => {
            dispatch(isdeleteViewActive(true));
            dispatch(activeDeleteView(message.id));
          }}
        >
          <View
            className={
              isMyMessage()
                ? `bg-[${COLORS.CHATSENDERBACKGROUNDCOLOR}]`
                : `bg-[${COLORS.CHATRECEIVERBGCOLOR}]`
            }
            style={[
              {
                padding: 10,
                margin: 5,
                maxWidth: "80%",
              },
              {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: isMyMessage() ? 8 : 0,
                borderTopRightRadius: isMyMessage() ? 0 : 8,
              },
              { alignSelf: isMyMessage() ? "flex-end" : "flex-start" },
            ]}
          >
            <Text className={`text-white`}>{message.type.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const typeImage = () => {
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
                borderColor: isMyMessage
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
              source={require("../../../../assets/PNG/chatImage.png")}
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
  console.log("type is:", message.type);
  if (message.type && message.type.messageType === "image") {
    return typeImage();
  }
  if (message.type && message.type.messageType === "text") {
    return typeMessage();
  }
  if (message.date && message.dateType === "day") {
    return typeDate();
  }
};

export default Message;
