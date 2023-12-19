import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Loader from '../../../assets/svg/Loader';
import React, { useState, useRef, useEffect } from 'react';
import ConversationHeader from '../../components/DM/ConversationHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import ChatTextInput, { ComponentRef } from '../../components/DM/ChatTextInput';
import { conversationData } from '../../utils/messageData';
import DeleteConversationBottomsheet from '../../components/DM/DeleteConversationBottomsheet';
import { ChatClass } from '../../utils/ChatUtils';
import { io } from 'socket.io-client';
import Messages from '../../components/DM/Messages';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import DeleteChatBottomsheet from '../../components/DM/DeleteChatBottomsheet';
import MoreBottomsheet from '../../components/DM/MoreBottomsheet';
import { ConversationProps } from '../../navigations/NavigationTypes';
import UnblockUserBottomsheet from '../../components/DM/UnblockUserBottomsheet';
import BlockUserBottomsheet from '../../components/DM/BlockUserBottomsheet';
import { connectSocket } from '../../controller/initializesocket';
import { nanoid } from '@reduxjs/toolkit';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Conversation = ({ navigation }: ConversationProps) => {
  const socket = useAppSelector((state) => state.socket.socket);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState([]);
  useEffect(() => {
    if (socket) {
      socket.emit('getchat', 'userId1234');
      socket.on('message', (message) => {
        let conversation = [];
        for (const res of message) {
          const transformedResponse = {
            id: nanoid(),
            message: {
              messageType: 'text',
              text: res.text,
            },
            read: false,
            createdAt: res.timestamp,
            user: {
              id: res.author.address,
              name: '',
            },
          };
          conversation.push(transformedResponse);
        }
        setMessage(conversation);
      });
      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });
    } else {
      console.log('===reconnecting===');
      dispatch(connectSocket());
    }
  }, [socket]);

  const chatInputRef = useRef<ComponentRef>();
  const [showReplying, setShowReplyVisibility] = useState(false);
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
  const [showBlockUserBottomsheet, setBlockUserVisibility] = useState(false);
  const [blocked, blockUser] = useState(false);
  const [showDeleteChatBottomsheet, setDeleteChatVisibility] = useState(false);
  const setVisibilityTrue = () => {
    setShowReplyVisibility(true);
  };
  const setVisibilityFalse = () => {
    setShowReplyVisibility(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ConversationHeader
        moreIconCallBack={() => setMoreBottomsheetVisibility(true)}
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
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Loader />
            </View>
          }
          inverted
          contentContainerStyle={{
            gap: size.getHeightSize(8),
            ...(data.length === 0
              ? { flex: 1, justifyContent: 'center', alignItems: 'center' }
              : {}),
          }}
          style={{
            flex: 1,
          }}
          data={data}
          renderItem={({ item, index }) => (
            <Messages
              chatUtilsInstance={chatUtils}
              data={item}
              showReplyingTo={setVisibilityTrue}
              onProfilePictureLongPress={() => {}}
            />
          )}
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
          ref={chatInputRef}
          dismissShowReplyingTo={setVisibilityFalse}
          message=""
          replyType="text"
          username=""
          showReplying={showReplying}
        />
      )}
      <MoreBottomsheet
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
    </SafeAreaView>
  );
};

export default Conversation;
const styles = StyleSheet.create({
  block: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.primaryLight,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  blockView: {
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(16.5),
    paddingHorizontal: size.getWidthSize(16),
  },
});
