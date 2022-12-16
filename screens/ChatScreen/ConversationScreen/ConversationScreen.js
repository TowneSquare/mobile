import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import COLORS from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import ConversationHeader from "./Components/ConversationHeader";
import Message from "./Components/Message";
import messages from "../../../assets/JSON/messages.json";
import ChatInputBox from "./Components/ChatInputBox";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { activeDeleteView, isdeleteViewActive } from "../Controller/ChatOption";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function groupedDays(messages) {
  return messages.reduce((acc, el, i) => {
    const messageDay = moment(el.createdAt).format("YYYY-MM-DD");
    if (acc[messageDay]) {
      return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
    }
    return { ...acc, [messageDay]: [el] };
  }, {});
}

function generateItems(messages) {
  const days = groupedDays(messages);
  const sortedDays = Object.keys(days).sort(
    (x, y) => moment(y, "YYYY-MM-DD").unix() - moment(x, "YYYY-MM-DD").unix()
  );
  const items = sortedDays.reduce((acc, date) => {
    const sortedMessages = days[date].sort(
      (x, y) => new Date(y.created_at) - new Date(x.created_at)
    );
    return acc.concat([...sortedMessages, { dateType: "day", date, id: date }]);
  }, []);

  return items;
}

const ConversationScreen = ({ navigation }) => {
  const conversation = generateItems(messages);
  const deleteActive = useSelector(
    (state) => state.chatOptionState.isdeleteViewActive
  );
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
