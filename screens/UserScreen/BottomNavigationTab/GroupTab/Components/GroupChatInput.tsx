import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import imageAssets from "../../../../../constants/images";
import COLORS from "../../../../../constants/Colors";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
const GroupChatInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [height, setHeight] = useState<number>();
  const renderTyping = () => {
    setShowButton(true);
    if (newMessage === " ") {
      setShowButton(false);
    }
  };
  const onSend = () => {
    setNewMessage("");
  };
  return (
    <View
      style={{
        alignItems: "center",
        borderRadius: 5,
        maxHeight: 100,
      }}
      className={`flex-row m- h-20 bg-[${COLORS.GRAYBLUE800}]  pb-3 pr-2 pl-4`}
    >
      {/* Icons */}

      {showButton === false || newMessage === "" ? (
        <View className={`flex-row`}>
          <Image
            className={`mr-2`}
            source={imageAssets.GroupsmartPhonePayDollar}
          />
          <AntDesign name="plus" size={24} color="white" />
        </View>
      ) : (
        <TouchableOpacity onPress={() => setShowButton(false)}>
          <View>
            <Ionicons name="chevron-forward" color={COLORS.WHITE} size={24} />
          </View>
        </TouchableOpacity>
      )}

      {/* Text Input */}

      <TextInput
        placeholderTextColor={COLORS.WHITE}
        numberOfLines={2}
        multiline={true}
        scrollEnabled={true}
        cursorColor={COLORS.WHITE}
        value={newMessage}
        onContentSizeChange={(event) => {
          setHeight(event.nativeEvent.contentSize.height);
        }}
        onChangeText={(text) => {
          setNewMessage(text);
          renderTyping();
        }}
        style={{
          color: COLORS.WHITE,
          paddingHorizontal: 8,
          minHeight: 44,
          flex: 1,
          fontSize: 13,
          marginLeft: 7,
          marginRight: 10,
          borderRadius: 5,
          maxHeight: 90,
          backgroundColor: COLORS.GRAYBLUE700,
        }}
        placeholder="Write..."
      />

      {/* Icon */}
      <MaterialIcons onPress={onSend} name="send" size={22} color="white" />
    </View>
  );
};

export default GroupChatInput;
