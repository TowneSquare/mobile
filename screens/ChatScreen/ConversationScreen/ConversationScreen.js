import { View, StatusBar, FlatList, Dimensions } from "react-native";

import React from "react";
import COLORS from "../../../constants/Colors";

import { useRoute } from "@react-navigation/native";

import ConversationHeader from "./Components/ConversationHeader";
import Message from "./Components/Message";
import messages from "../../../assets/JSON/messages.json";
import ChatInputBox from "./Components/ChatInputBox";
import generateItems from "../ChatUtils/generateConversation";
import { useDispatch } from "react-redux";
import { isdeleteViewActive } from "../Controller/ChatOption";
const ConversationScreen = ({ navigation }) => {
  const conversation = generateItems(messages);
  const dispatch = useDispatch();
  const route = useRoute();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={COLORS.APPCOLOR}
        barStyle="light-content"
      />

      <View
        onTouchStart={() => {
          dispatch(isdeleteViewActive(false));
        }}
        onStartShouldSetResponder={() => false}
        className={`bg-[${COLORS.APPCOLOR}] flex-1 `}
      >
        <ConversationHeader
          imageSource={route.params.details.image}
          displayName={route.params.details.name}
          userName={route.params.details.name}
        />

        <FlatList
          onMagicTap={() => {}}
          inverted
          style={{ padding: 10 }}
          data={conversation}
          renderItem={({ item }) => <Message message={item} />}
        />
        <ChatInputBox />
      </View>
    </>
  );
};

export default ConversationScreen;
