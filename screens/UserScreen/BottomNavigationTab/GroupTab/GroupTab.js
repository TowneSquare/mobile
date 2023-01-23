import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Components/Redux/hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatInputBox from "../../../ChatScreen/ConversationScreen/Components/ChatInputBox";
import GroupListHeader from "./Components/GroupListHeader";
import GroupLists from "./Components/GroupLists";
import COLORS from "../../../../constants/Colors";
import AddButton from "./Components/AddButton";
import CreateGroupModal from "./Components/CreateGroupModal";
import GroupPrivacyModal from "./Components/GroupPrivacyModal";
import SellectCollectionModal from "./Components/SellectCollectionModal";
const GroupTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#0F111E] pl-3 pr-3">
      <StatusBar
        translucent
        backgroundColor={COLORS.APPCOLOR}
        barStyle="light-content"
      />

      <GroupLists />
      <SellectCollectionModal />
      <CreateGroupModal />
      <GroupPrivacyModal />
      <AddButton />
    </SafeAreaView>
  );
};

export default GroupTab;
