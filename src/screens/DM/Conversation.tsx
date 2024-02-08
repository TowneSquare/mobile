import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
// import Loader from "../../../assets/svg/Loader";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import LoadingMediaContent from "../../components/DM/LoadingMediaContent";
import ConversationHeader from "../../components/DM/ConversationHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from "../../constants";
import ChatTextInput, { ComponentRef } from "../../components/DM/ChatTextInput";
// import { conversationData } from "../../utils/messageData";
import DeleteConversationBottomsheet from "../../components/DM/DeleteConversationBottomsheet";
import { ChatClass } from "../../utils/ChatUtils";
import Messages from "../../components/DM/Messages";
import ChatContext from "../../context/ChatContext";
import { sizes } from "../../utils";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import DeleteChatBottomsheet from "../../components/DM/DeleteChatBottomsheet";
import MoreBottomsheet from "../../components/DM/MoreBottomsheet";
import { ConversationProps } from "../../navigations/NavigationTypes";
import UnblockUserBottomsheet from "../../components/DM/UnblockUserBottomsheet";
import BlockUserBottomsheet from "../../components/DM/BlockUserBottomsheet";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  startAfter,
  limit,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { firestoreDB } from "../../../config/firebase.config";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const Conversation = ({
  navigation,
  route: {
    params: { chatId, name, nickname, pfp },
  },
}: ConversationProps) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState([]);
  const [contactId, setContactId] = useState("");
  const myId = useAppSelector((state) => state.USER.UserData)._id;
  const myusername = useAppSelector((state) => state.USER.UserData.username);
  const loadingMedia = useAppSelector(
    (state) => state.DMController.uploadingItems
  );
  const MESSAGE_LIMIT = 10;
  const lastDocRef = useRef(null);
  console.log(myusername, "my username");
  useLayoutEffect(() => {
    const msgCollectionRef = collection(
      firestoreDB,
      `chats/${chatId}/messages`
    );
    const chatRef = doc(firestoreDB, "chats", chatId);
    getDoc(chatRef).then((docSnapshot) => {
      console.log(`SnapshotId:${docSnapshot.id}`);
      const chatData = docSnapshot.data();
      setContactId(chatData.memberIds.filter((id) => id !== myId)[0]);
    });
    const msgQuery = query(msgCollectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(msgQuery, (querySnap) => {
      const updatedMessages = querySnap.docs.map((doc) => doc.data());
      updatedMessages
        .filter((message) => !message.read) // Only consider unread messages
        .forEach((unreadMessage) => {
          markMessageAsRead(chatId, unreadMessage.id, myId);
        });
      setMessage(updatedMessages);

      // console.log('======updated message========');
      // console.log(updatedMessages);
    });

    return unsubscribe;
  }, []);
  console.log("====message====");
  console.log(message[0]);
  const chatInputRef = useRef<ComponentRef>();
  const [showReplying, setShowReplyVisibility] = useState(false);
  const [uploadingItems, setUploadingItems] = useState([]);
  const chatUtils = new ChatClass(message);

  showReplying && chatInputRef.current?.focusTextInput();
  const data = chatUtils.generateItems();
  const sortedConversation =
    chatUtils.sortMessagesBasedOnConsecutiveUserId(data);
  // console.log(sortedConversation);
  // console.log("====sorted conversation====");
  const [showMoreBottomSheet, setMoreBottomsheetVisibility] = useState(false);
  const [
    showDeleteConversationBottomSheet,
    setDeleteConversationBottomSheetVisibility,
  ] = useState(false);
  const [showUnblocksheet, setUnblockVisibility] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [showBlockUserBottomsheet, setBlockUserVisibility] = useState(false);
  const [blocked, blockUser] = useState(false);
  const [showDeleteChatBottomsheet, setDeleteChatVisibility] = useState(false);
  const setVisibilityTrue = () => {
    setShowReplyVisibility(true);
  };
  const setVisibilityFalse = () => {
    setShowReplyVisibility(false);
  };
  const loadMoreMessages = async () => {
    if (lastVisible) {
      const msgCollectionRef = collection(
        firestoreDB,
        `chats/${chatId}/messages`
      );

      const nextMsgQuery = query(
        msgCollectionRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(MESSAGE_LIMIT)
      );

      const querySnap = await getDocs(nextMsgQuery);
      const newMessages = querySnap.docs.map((doc) => doc.data());

      // Set the last visible document for the next pagination
      if (querySnap.docs.length > 0) {
        setLastVisible(querySnap.docs[querySnap.docs.length - 1]);
      }

      // Append new messages to the existing ones
      setMessage((prevMessages) => [...prevMessages, ...newMessages]);

      console.log("======loaded more messages========");
      console.log(newMessages);
    }
  };
  const markMessageAsRead = async (chatId, messageId, currentUserId) => {
    const messageRef = doc(
      firestoreDB,
      `chats/${chatId}/messages/${messageId}`
    );

    try {
      const messageDoc = await getDoc(messageRef);
      const messageData = messageDoc.data();
      // Check if the message was sent by the other person
      if (messageData.user._id !== currentUserId) {
        await updateDoc(messageRef, {
          read: true,
        });
        console.log("Message marked as read successfully");
      }
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ChatContext>
        <ConversationHeader
          name={name}
          moreIconCallBack={() => setMoreBottomsheetVisibility(true)}
          pfp={pfp}
          nickname={nickname}
        />

        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            ListEmptyComponent={
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Loader /> */}
              </View>
            }
            inverted
            contentContainerStyle={{
              gap: size.getHeightSize(8),
              ...(data.length === 0
                ? { flex: 1, justifyContent: "center", alignItems: "center" }
                : {}),
            }}
            style={{
              flex: 1,
            }}
            data={[...loadingMedia, ...data]}
            renderItem={({ item, index }) => {
              if (item.loading) {
                return <LoadingMediaContent data={item} uid={myId} />;
              } else {
                return (
                  <Messages
                    chatUtilsInstance={chatUtils}
                    data={item}
                    showReplyingTo={setVisibilityTrue}
                    onProfilePictureLongPress={() => {}}
                    pfp={pfp}
                    myusername={myusername}
                  />
                );
              }
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        {blocked ? (
          <Pressable
            onPress={() => setUnblockVisibility(true)}
            style={styles.blockView}
          >
            <Text style={styles.block}>Unblock UsernameX</Text>
          </Pressable>
        ) : (
          <ChatTextInput
            nickname={nickname}
            pfp={pfp}
            ref={chatInputRef}
            dismissShowReplyingTo={setVisibilityFalse}
            username={myusername}
            showReplying={showReplying}
            chatId={chatId}
            receiverId={contactId}
          />
        )}
        <MoreBottomsheet
          username={name}
          userId={contactId}
          nickname={nickname}
          onDeleteChat={() => {
            setDeleteChatVisibility(true);
          }}
          visibility={showMoreBottomSheet}
          onClose={() => setMoreBottomsheetVisibility(false)}
          onDeleteConversation={() => {
            setMoreBottomsheetVisibility(false);
            setDeleteConversationBottomSheetVisibility(true);
          }}
          onBlockUser={() => {
            setMoreBottomsheetVisibility(false);
            setBlockUserVisibility(true);
          }}
        />
        <DeleteConversationBottomsheet
          callBack={() => {
            setDeleteConversationBottomSheetVisibility(false);
            navigation.goBack();
          }}
          onClose={() => {
            setDeleteConversationBottomSheetVisibility(false);
          }}
          visibility={showDeleteConversationBottomSheet}
        />
        <BlockUserBottomsheet
          visibility={showBlockUserBottomsheet}
          onClose={() => setBlockUserVisibility(false)}
          callBack={() => {
            blockUser(true);
          }}
        />
        <UnblockUserBottomsheet
          visibility={showUnblocksheet}
          onClose={() => setUnblockVisibility(false)}
          callBack={() => {
            blockUser(false);
            setUnblockVisibility(false);
          }}
        />
        <DeleteChatBottomsheet
          visibility={showDeleteChatBottomsheet}
          callBack={() => {
            setDeleteChatVisibility(false);
            navigation.goBack();
          }}
          onClose={() => setDeleteChatVisibility(false)}
        />
      </ChatContext>
    </SafeAreaView>
  );
};

export default Conversation;
const styles = StyleSheet.create({
  block: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.primaryLight,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    letterSpacing: 0.36,
  },
  blockView: {
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(16.5),
    paddingHorizontal: size.getWidthSize(16),
  },
});
