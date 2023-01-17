import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatListItem from "./ChatListItem.js";
import { SafeAreaView } from "react-native-safe-area-context";
import DismissKeyboard from "../../../Components/DismissKeyboard";
import COLORS from "../../../constants/Colors";
import chat from "../../../assets/JSON/chats.json";
import SearchBar from "../../../Components/SearchBarComponent";
import messages from "../../../assets/JSON/messages.json";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const ChatList = ({ navigation }) => {
  const chats = messages;
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={COLORS.APPCOLOR}
        barStyle="light-content"
      />
      <DismissKeyboard>
        <View
          className={`bg-[${COLORS.APPCOLOR}]`}
          style={{
            height: height,
            width: width,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.APPCOLOR,
            }}
          >
            <View
              className={`flex-row   h-16`}
              style={{
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "flex-end",
                padding: 10,
                shadowColor: "rgba(0, 0, 0, 0.18)",
                backgroundColor: COLORS.APPCOLOR,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.51,
                shadowRadius: 13.16,
                zIndex: 1,
                elevation: Platform.OS === "android" ? 50 : 0,
                elevation: 20,
                paddingBottom: 5,
              }}
            >
              <TouchableOpacity onPress={navigation.goBack}>
                <Ionicons name="chevron-back" color="white" size={22} />
              </TouchableOpacity>
              <Text className={`text-[${COLORS.WHITE}] text-lg font-bold`}>
                Messages
              </Text>
              <Ionicons name="chevron-back" color={COLORS.APPCOLOR} size={22} />
            </View>
            <View
              style={
                {
                  // elevation: Platform.OS === "android" ? 0 : 0,
                }
              }
              className={`ml-2 mr-2 mt-6 mb-2`}
            >
              <SearchBar
                placeholder="Search"
                color={COLORS.GRAYBLUEOPACITY300}
                borderRadius={10}
              />
            </View>
          </View>
          <FlatList
            style={{
              zIndex: -2000,
              elevation: Platform.OS === "android" ? -1000 : 0,
              overflow: "visible",
            }}
            data={chat}
            renderItem={({ item }) => (
              <ChatListItem chat={item} lastmessage={chats} />
            )}
          />
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default ChatList;
