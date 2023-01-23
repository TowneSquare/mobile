import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import dayjs from "dayjs";
import { screenWidth, screenHeight } from "../../../constants/sizes";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Components/Redux/hooks";
import { isdeleteViewActive, activeDeleteView } from "../Controller/ChatOption";
import COLORS from "../../../constants/Colors";
const TypeMessage = (message: any) => {
  const dispatch = useAppDispatch();
  const deleteActive = useAppSelector(
    (state) => state.chatOptionState.isdeleteViewActive
  );
  const activeDelete = useAppSelector(
    (state) => state.chatOptionState.activeDeleteView
  );
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
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
          onTouchStart={() => {}}
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
            left: isMyMessage() ? screenWidth(0.5) : screenWidth(0.2),

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

export default TypeMessage;
