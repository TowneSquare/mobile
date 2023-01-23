import { View, FlatList, Text, StatusBar, ScrollView } from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../../../../constants/Colors";
import GroupMessage from "./Message";
import ChatInputBox from "../../../../ChatScreen/ConversationScreen/Components/ChatInputBox";
import GroupChatHeader from "./GroupChatHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenHeight } from "../../../../../constants/sizes";
import GroupChatInput from "./GroupChatInput";
import { SizedBox } from "sizedbox";
import messages from "../../../../../assets/JSON/messages.json";
import generateItems from "../../../../ChatScreen/ChatUtils/generateConversation";
const GroupChatScreen = () => {
  const newMessage = messages;
  const conversation = generateItems(newMessage);

  console.log(conversation);
  return (
    <>
     <SafeAreaView/>
      <StatusBar
        translucent
        backgroundColor={"#101323"}
        barStyle="light-content"
      />
      <View className={`bg-[${COLORS.APPCOLOR}] flex-1 `}>
     
      {/* <SizedBox vertical={screenHeight(0.12)} /> */}
        <GroupChatHeader />
        <FlatList
          onMagicTap={() => {}}
          inverted
          style={{ padding: 10 }}
          data={conversation}
          renderItem={({ item }) => <GroupMessage message={item}/>}
        />
        <GroupChatInput />
      </View>
    </>
  );
};

export default GroupChatScreen;
