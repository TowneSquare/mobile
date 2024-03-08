import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import LoadingMediaContent from '../../components/DM/LoadingMediaContent';
import ConversationHeader from '../../components/DM/ConversationHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import ChatTextInput, { ComponentRef } from '../../components/DM/ChatTextInput';
import DeleteConversationBottomsheet from '../../components/DM/DeleteConversationBottomsheet';
import {
  ChatClass,
  blockUserChat,
  deleteChat,
  unblockUserChat,
} from '../../utils/ChatUtils';
import Messages from '../../components/DM/Messages';
import ChatContext from '../../context/ChatContext';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import DeleteChatBottomsheet from '../../components/DM/DeleteChatBottomsheet';
import MoreBottomsheet from '../../components/DM/MoreBottomsheet';
import { ConversationProps } from '../../navigations/NavigationTypes';
import UnblockUserBottomsheet from '../../components/DM/UnblockUserBottomsheet';
import BlockUserBottomsheet from '../../components/DM/BlockUserBottomsheet';
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
} from 'firebase/firestore';
import { firestoreDB } from '../../../config/firebase.config';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Conversation = ({
  navigation,
  route: {
    params: { chatId, name, nickname, pfp },
  },
}: ConversationProps) => {
  const dispatch = useAppDispatch();
  const [blockState, setBlockUser] = useState({
    blocked: false,
    blockMessage: '',
    blockedByMe: undefined,
    hasLoaded: false,
  });
  const [message, setMessage] = useState([]);
  const [contactId, setContactId] = useState('');
  const myId = useAppSelector((state) => state.USER.UserData)._id;
  const myusername = useAppSelector((state) => state.USER.UserData.username);
  const loadingMedia = useAppSelector(
    (state) => state.DMController.uploadingItems
  );
  const MESSAGE_LIMIT = 10;

  useLayoutEffect(() => {
    // Collection ref for message
    const msgCollectionRef = collection(
      firestoreDB,
      `chats/${chatId}/messages`
    );
    const chatRef = doc(firestoreDB, 'chats', chatId);

    getDoc(chatRef).then((docSnapshot) => {
      const chatData = docSnapshot.data();

      // Set contactId
      setContactId(chatData.memberIds.filter((id) => id !== myId)[0]);
    });

    // query to get the messages, ordered by the createdAt field in descending order
    const msgQuery = query(msgCollectionRef, orderBy('createdAt', 'desc'));

    // sets up a real-time listener on the messages query.
    // To be called every time the data matching the query changes in the Firestore database.
    const unsubscribe = onSnapshot(msgQuery, (querySnap) => {
      const updatedMessages = querySnap.docs.map((doc) => doc.data());

      // filters out the read messages and marks the unread messages as read by calling the markMessageAsRead function.
      updatedMessages
        .filter((message) => !message.read) // Only consider unread messages
        .forEach((unreadMessage) => {
          markMessageAsRead(chatId, unreadMessage.id, myId);
        });
      setMessage(updatedMessages);
    });

    // cleanup function that unsubscribes from the real-time updates when the component unmounts
    // or when the dependencies of the useLayoutEffect hook change.
    return unsubscribe;
  }, []);

  useEffect(() => {
    // Get the chat document
    const chatRef = doc(firestoreDB, 'chats', chatId);
    getDoc(chatRef).then((docSnapshot) => {
      const chatData = docSnapshot.data();
      // Set contactId
      const contactId = chatData.memberIds.filter((id) => id !== myId)[0];

      // Get current user blocked list
      const myBlockedUsersDocRef = doc(firestoreDB, 'blockedUsers', myId);
      const contactBlockedUsersDocRef = doc(
        firestoreDB,
        'blockedUsers',
        contactId
      );

      // Set up a real-time listener for changes in the block state for the current user
      const unsubscribeMyBlockList = onSnapshot(myBlockedUsersDocRef, (doc) => {
        // If the document exists, check if the contact is blocked by the current user
        if (doc.exists()) {
          // Check if the contact is blocked by the current user
          const blockedUsers = doc.data().blockedUsers || [];
          const isBlockedByMe = blockedUsers.includes(contactId);

          // If blocked by me, set the block state to true
          if (isBlockedByMe) {
            setBlockUser({
              blocked: true,
              blockMessage: `Unblock ${
                name.charAt(0).toUpperCase() + name.slice(1)
              }`,
              blockedByMe: true,
              hasLoaded: true,
            });
          }
          // If not blocked by me, set the block state to false
          else {
            setBlockUser({
              blocked: false,
              blockMessage: '',
              blockedByMe: undefined,
              hasLoaded: true,
            });
          }
        }
        // If the document does not exist, set the block state to false
        else {
          setBlockUser({
            blocked: false,
            blockMessage: '',
            blockedByMe: undefined,
            hasLoaded: true,
          });
          // console.log('No blocked users document found for current user');
        }
      });

      // Set up a real-time listener for changes in the block state for the contact
      const unsubscribeContactBlockList = onSnapshot(
        contactBlockedUsersDocRef,
        (doc) => {
          // If the document exists, check if the current user is blocked by the contact
          if (doc.exists()) {
            const blockedUsers = doc.data().blockedUsers || [];
            const isBlockedByContact = blockedUsers.includes(myId);

            // If blocked by the contact, set the block state to true
            if (isBlockedByContact) {
              setBlockUser({
                blocked: true,
                blockMessage: `${
                  name.charAt(0).toUpperCase() + name.slice(1)
                } has blocked you`,
                blockedByMe: false,
                hasLoaded: true,
              });
            }
            // If not blocked by the contact, set the block state to false
            else {
              setBlockUser({
                blocked: false,
                blockMessage: '',
                blockedByMe: undefined,
                hasLoaded: true,
              });
            }
          }

          // If the document does not exist, set the block state to false
          else {
            setBlockUser({
              blocked: false,
              blockMessage: '',
              blockedByMe: undefined,
              hasLoaded: true,
            });
          }
        }
      );

      return () => {
        // Clean up the listeners when the component unmounts
        unsubscribeMyBlockList();
        unsubscribeContactBlockList();
      };
    });
  }, []);

  const chatInputRef = useRef<ComponentRef>();
  const [showReplying, setShowReplyVisibility] = useState(false);

  // Generate chat utils instance
  const chatUtils = new ChatClass(message);

  // Focus the chat input when the user is replying to a message
  showReplying && chatInputRef.current?.focusTextInput();

  // Generate chat items
  const data = chatUtils.generateItems();

  // Sort the conversation based on consecutive user ids
  const sortedConversation =
    chatUtils.sortMessagesBasedOnConsecutiveUserId(data);
 
  const [showMoreBottomSheet, setMoreBottomsheetVisibility] = useState(false);
  const [
    showDeleteConversationBottomSheet,
    setDeleteConversationBottomSheetVisibility,
  ] = useState(false);


  const [showUnblocksheet, setUnblockVisibility] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [showBlockUserBottomsheet, setBlockUserVisibility] = useState(false);


 
  const [showDeleteChatBottomsheet, setDeleteChatVisibility] = useState(false);


  const setVisibilityTrue = () => {
    setShowReplyVisibility(true);
  };
  const setVisibilityFalse = () => {
    setShowReplyVisibility(false);
  };

  // TODO: Implement the loadMoreMessages function
  const loadMoreMessages = async () => {
    if (lastVisible) {
      const msgCollectionRef = collection(
        firestoreDB,
        `chats/${chatId}/messages`
      );

      const nextMsgQuery = query(
        msgCollectionRef,
        orderBy('createdAt', 'desc'),
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

     
    }
  };

  // Mark the message as read
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
      }
    } catch (error) {
      console.error('Error marking message as read:', error);
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
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <Loader /> */}
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
            data={[...loadingMedia, ...data]}
            renderItem={({ item, index }) => {
              if (item.loading) {
                // Show the loading media content
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
        {blockState.hasLoaded ? (
          blockState.blocked ? (
            <Pressable
              onPress={() => {
                blockState.blockedByMe && setUnblockVisibility(true);
              }}
              style={styles.blockView}
            >
              <Text style={styles.block}>{blockState.blockMessage}</Text>
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
          )
        ) : null}
        <MoreBottomsheet
          username={name}
          userId={contactId}
          currentUserId={myId}
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
          // handleMuteNotification={() => {
          //   setMoreBottomsheetVisibility(false);
          //   updatePushNotificationSetting(myId, contactId, false);
          // }}
        />
        <DeleteConversationBottomsheet
          callBack={() => {
            setDeleteConversationBottomSheetVisibility(false);
            navigation.goBack();
            // deleteContactFromFirestore(myId, contactId);
            deleteChat(chatId, myId);
          }}
          onClose={() => {
            setDeleteConversationBottomSheetVisibility(false);
          }}
          visibility={showDeleteConversationBottomSheet}
          name={name}
        />
        <BlockUserBottomsheet
          visibility={showBlockUserBottomsheet}
          onClose={() => setBlockUserVisibility(false)}
          callBack={() => {
            blockUserChat(myId, contactId);
          }}
          name={name}
          disableBlock={blockState.blocked ? !blockState.blockedByMe : false}
        />
        <UnblockUserBottomsheet
          visibility={showUnblocksheet}
          onClose={() => setUnblockVisibility(false)}
          callBack={() => {
            blockState.blockedByMe && unblockUserChat(myId, contactId);
            setUnblockVisibility(false);
          }}
          name={name}
        />
        <DeleteChatBottomsheet
          visibility={showDeleteChatBottomsheet}
          callBack={() => {
            setDeleteChatVisibility(false);
            navigation.goBack();
          }}
          onClose={() => setDeleteChatVisibility(false)}
          name={name}
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
