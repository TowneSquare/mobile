import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import dayjs from "dayjs";
import {
  fontSize,
  heightSize,
  screenWidth,
  widthSize,
} from "../../../../../constants/sizes";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import {
  isdeleteViewActive,
  activeDeleteView,
} from "../../../../ChatScreen/Controller/ChatOption";
import COLORS from "../../../../../constants/Colors";
import imageAssets from "../../../../../constants/images";
const TypeText = (message: any) => {
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
      {!isMyMessage() && (
        <View
          style={{
            alignSelf: "flex-start",
            paddingRight: 10,
            
            paddingVertical: 4,
            marginLeft: 5,
            maxWidth: "80%",
          }}
          className="flex-row"
        >
          <Image
            source={imageAssets.NFTimage}
            style={{
              height: heightSize(44),
              width: widthSize(44),
              borderRadius: 24,
            }}
          />
          <View className="mt-5" style={{ alignSelf: "baseline" }}>
            <View className="flex-row" style={{ maxWidth: "80%" }}>
              <Text
                className=" ml-3 text-white"
                style={{ fontSize: fontSize(16) }}
              >
                Aptomigos
              </Text>
              <Text
                style={{
                  alignSelf: "flex-end",
                }}
                className={`text-[${COLORS.CHATTEXTGRAYBLUEOPACITY}] ml-2 mr-2`}
              >
                {dayjs(message.createdAt).fromNow(true)}
              </Text>
            </View>
            <TouchableOpacity
              delayLongPress={400}
              activeOpacity={1}
              onLongPress={() => {
                dispatch(isdeleteViewActive(true));
                dispatch(activeDeleteView(message.id));
              }}
            >
              <View
                className={`bg-[${COLORS.CHATRECEIVERBGCOLOR}]`}
                style={[
                  {
                    padding: 10,
                    margin: 5,
                    maxWidth: "80%",
                  },
                  {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopRightRadius: 8,
                  },
                  //   { alignSelf: isMyMessage() ? "flex-end" : "flex-start" },
                ]}
              >
                <Text className={`text-white`}>{message.type.text}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isMyMessage() && (
        <>
          <Text
            style={{
              alignSelf: "flex-end",
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
                alignSelf: "flex-end",
                height: 48,
                width: 156,
                paddingLeft: 20,
                alignItems: "center",
                top: 5,
                left: screenWidth(0.5),

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
          ) : undefined}
          <TouchableOpacity
            delayLongPress={400}
            activeOpacity={1}
            onLongPress={() => {
              dispatch(isdeleteViewActive(true));
              dispatch(activeDeleteView(message.id));
            }}
          >
            <View
              className={`bg-[${COLORS.CHATSENDERBACKGROUNDCOLOR}]`}
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
                { alignSelf: "flex-end" },
              ]}
            >
              <Text className={`text-white`}>{message.type.text}</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default TypeText;
