import moment from 'moment';
import {
  Data,
  ChatDate,
  ChatText,
  DataWithoutChatDate,
} from '../models/conversationModel';
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  launchCameraAsync,
} from 'expo-image-picker';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from 'firebase/storage';
import {
  Timestamp,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { app, firestoreDB, storage } from '../../config/firebase.config';

import { nanoid } from '@reduxjs/toolkit';
export class ChatClass {
  private message: Array<any> = [];
  constructor(message: any[]) {
    this.message = message;
  }
  private groupedDays() {
    return this.message.reduce((acc, el, i) => {
      const messageDay = moment(el.createdAt?.toDate().toISOString()).format(
        'YYYY-MM-DD'
      );
      if (acc[messageDay]) {
        return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
      }
      return { ...acc, [messageDay]: [el] };
    }, {});
  }
  private isNotDate(data: Data): data is ChatText {
    return (data as ChatText).message !== undefined;
  }
  private isDate(data: Data): data is ChatDate {
    return (data as ChatDate).dateType !== undefined;
  }
  generateItems() {
    const days = this.groupedDays();
    const sortedDays = Object.keys(days).sort(
      (x, y) => moment(y, 'YYYY-MM-DD').unix() - moment(x, 'YYYY-MM-DD').unix()
    );
    const items = sortedDays.reduce((acc, date) => {
      const sortedMessages = days[date].sort((x, y) => {
        (new Date(y.created_at) as any) - (new Date(x.created_at) as any);
      });
      return acc.concat([
        ...sortedMessages,
        { dateType: 'day', date, id: date },
      ]);
    }, []);
    return items;
  }

  sortMessagesBasedOnConsecutiveUserId(conversationData: Data[]) {
    const sortedConversation = [];
    let currentUserId = null;
    let currentGroup = [];
    conversationData.forEach((currentMessage) => {
      if (this.isNotDate(currentMessage)) {
        if (currentMessage.user._id === currentUserId) {
          currentGroup.push(currentMessage);
        } else {
          if (currentGroup.length > 0) {
            if (currentGroup.length > 1) {
              sortedConversation.push({
                sortedType: 'sorted',
                content: currentGroup,
                id: nanoid(),
              });
            } else {
              sortedConversation.push(currentGroup[0]);
            }
          }
          currentUserId = currentMessage.user._id;
          currentGroup = [currentMessage];
        }
      } else {
        if (currentGroup.length > 0) {
          if (currentGroup.length > 1) {
            sortedConversation.push({
              sortedType: 'sorted',
              content: currentGroup,
              id: nanoid(),
            });
          } else {
            sortedConversation.push(currentGroup[0]);
          }
          currentGroup = [];
        }
        sortedConversation.push(currentMessage);
      }
    });
    if (currentGroup.length > 0) {
      if (currentGroup.length > 1) {
        sortedConversation.push({
          sortedType: 'sorted',
          content: currentGroup,
          id: nanoid(),
        });
      } else {
        sortedConversation.push(currentGroup[0]);
      }
    }
    sortedConversation.forEach((group) => {
      if (group.sortedType === 'sorted') {
        for (let i = group.content.length - 1; i > 0; i--) {
          const currentCreatedAt = new Date(group.content[i].createdAt);
          const previousCreatedAt = new Date(group.content[i - 1].createdAt);
          if (
            currentCreatedAt.getMinutes() === previousCreatedAt.getMinutes()
          ) {
            delete group.content[i - 1].createdAt;
          }
        }
      }
    });
    return sortedConversation;
  }
  getDisplayDate(array: string[]): string {
    const year = array[0];
    const month = array[1];
    const day = array[2];
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    const compDate: Date = new Date(
      parseFloat(year),
      parseFloat(month) - 1,
      parseFloat(day)
    );
    const diff: number = today.getTime() - compDate.getTime();

    if (compDate.getTime() === today.getTime()) {
      return 'Today';
    } else if (diff <= 24 * 60 * 60 * 1000) {
      return 'Yesterday';
    } else {
      return compDate.toDateString();
    }
  }
}

export function formatTimestamp(timestamp: Timestamp) {
  if (timestamp) {
    const date: Date = timestamp.toDate();
    const now = new Date();
    const sameDay =
      now.getDate() === date.getDate() &&
      now.getMonth() === date.getMonth() &&
      now.getFullYear() === date.getFullYear();

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday =
      yesterday.getDate() === date.getDate() &&
      yesterday.getMonth() === date.getMonth() &&
      yesterday.getFullYear() === date.getFullYear();

    if (sameDay) {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }); // returns "HH:MM"
    } else if (isYesterday) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString(); // returns "MM/DD/YYYY"
    }
  } else return '';
}
export const createUniqueChatId = (user1Id: string, user2Id: string) => {
  // Sort the user IDs to ensure consistency
  const sortedUserIds = [user1Id, user2Id].sort();

  // Concatenate the sorted user IDs
  const concatenatedIds = sortedUserIds.join('_');

  // Use a hash function (e.g., simple string hash) to create a unique identifier
  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  };

  // Return the hash code as the unique identifier
  return hashCode(concatenatedIds).toString();
};
export const sendRreplyMessage = async ({
  replyingToMessage = '',
  replyingtoId = '',
  text = '',
  chatId = '',
  messageType = '',
  mediaUri = '',
  uid = '',
  myusername = '',
}) => {
  try {
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;

    const _doc = {
      id,
      createdAt: timestamp,
      message: {
        messageType: 'replied',
        reply: text,
      },
      replied: {
        id: replyingtoId,
        message: {
          messageType: messageType,
          text: replyingToMessage,
          mediaUri: mediaUri,
        },
      },
      user: {
        _id: uid,
        name: myusername,
      },
      read: false,
    };

    const msgCollectionRef = doc(firestoreDB, 'chats', chatId, 'messages', id);
    await setDoc(msgCollectionRef, _doc);

    // Update the 'lastMessage' field in the 'chats' collection
    const chatRef = doc(firestoreDB, 'chats', chatId);
    await updateDoc(chatRef, {
      lastMessage: {
        text: text.trim(),
        createdAt: timestamp,
        sender: {
          _id: uid,
          name: myusername,
        },
      },
    });
    // ...
  } catch (error) {
    // Handle error
  }
};
export const sendTextToFirestore = async ({
  text = '',
  chatId = '',
  myId = '',
  myusername = '',
}) => {
  try {
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      id,
      createdAt: timestamp,
      message: {
        messageType: 'text',
        text: text.trim(),
      },
      user: {
        _id: myId,
        name: myusername,
      },
      read: false,
    };
    console.log('========adding doc=========');
    const msgCollectionRef = doc(firestoreDB, 'chats', chatId, 'messages', id);
    await setDoc(msgCollectionRef, _doc);

    // console.log('Message added with ID: ', messageRef.id);

    // Update the 'lastMessage' field in the 'chats' collection
    const chatRef = doc(firestoreDB, 'chats', chatId);
    await updateDoc(chatRef, {
      lastMessage: {
        text: text.trim(),
        createdAt: timestamp,
        sender: {
          _id: myId,
          name: myusername,
        },
      },
    });

    console.log('Chat updated with last message.');
  } catch (err) {
    console.warn('Error sending message: ', err);
  }
};
export const sendImageToFirestore = async ({
  imageUri = '',
  chatId = '',
  messageType = '',
  myId = '',
  myusername = '',
}) => {
  try {
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      id,
      createdAt: timestamp,
      message: {
        messageType: messageType,
        imageUri: imageUri,
      },
      user: {
        _id: myId,
        name: myusername,
      },
      read: false,
    };
    console.log('========adding doc=========');
    const msgCollectionRef = doc(firestoreDB, 'chats', chatId, 'messages', id);
    await setDoc(msgCollectionRef, _doc);

    // console.log('Message added with ID: ', messageRef.id);

    // Update the 'lastMessage' field in the 'chats' collection
    const chatRef = doc(firestoreDB, 'chats', chatId);
    await updateDoc(chatRef, {
      lastMessage: {
        text: messageType.charAt(0).toUpperCase() + messageType.slice(1),
        createdAt: timestamp,
        sender: {
          _id: myId,
          name: myusername,
        },
      },
    });

    console.log('Chat updated with last message.');
  } catch (err) {
    console.warn('Error sending message: ', err);
  }
};
export const uploadMediaToFirebaseStorage = async (url: string) => {
  try {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `images/${filename}`);
    const response = await fetch(url);
    const blob = await response.blob();
    const uploadTask = uploadBytesResumable(storageRef, blob);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              // console.log('File available at', downloadURL);
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const pickMedia = async (from: 'gallery' | 'camera') => {
  try {
    let result;

    if (from === 'camera') {
      result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
    } else {
      result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
    }

    console.log('Media Picker Result:', result);

    if (result?.assets?.length > 0) {
      return result.assets[0].uri;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Media Picker Error:', error);
    return null;
  }
};
export const blockUserChat = async (userId: string, idUserToBlock: string) => {
  try {
    const blockedUsersRef = doc(firestoreDB, 'blockedUsers', userId);
    await setDoc(
      blockedUsersRef,
      { blockedUsers: arrayUnion(idUserToBlock) },
      { merge: true }
    );

    console.log(`User ${idUserToBlock} blocked successfully.`);
  } catch (error) {
    console.error('Error blocking user:', error);
  }
};
export const getBlockedUsers = async (userId: string) => {
  try {
    const blockedUsersDocRef = doc(firestoreDB, 'blockedUsers', userId);
    // Get the document
    const blockedUsersDoc = await getDoc(blockedUsersDocRef);

    if (blockedUsersDoc.exists()) {
      //If tThe document exists, return the list of blocked users
      const blockedUsers = blockedUsersDoc.data().blockedUsers;
      console.log('Blocked users:', blockedUsers);
      return blockedUsers;
    } else {
      // The document does not exist
      console.log('No blocked users document found');
      return [];
    }
  } catch (error) {
    console.error('Error getting blocked users:', error);
  }
};
export const unblockUserChat = async (
  userId: string,
  idUserToUnblock: string
) => {
  try {
    const blockedUsersRef = doc(firestoreDB, 'blockedUsers', userId);
    await updateDoc(blockedUsersRef, {
      blockedUsers: arrayRemove(idUserToUnblock),
    });

    console.log(`User ${idUserToUnblock} unblocked successfully.`);
  } catch (error) {
    console.error('Error unblocking user:', error);
  }
};
export const muteNotifications = (chatId: string, userId: string) => {
  const chatRef = doc(firestoreDB, 'chats', chatId);
  updateDoc(chatRef, { muteNotifications: true })
    .then(() => {
      console.log('Notifications muted successfully');
    })
    .catch((error) => {
      console.error('Error muting notifications:', error);
    });
};

const deleteConversation = (chatId: string) => {
  // Remove the chat document from Firestore

  const chatRef = doc(firestoreDB, 'chats', chatId);
  deleteDoc(chatRef)
    .then(() => {
      console.log('Conversation deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting conversation:', error);
    });
};
const isUserBlocked = (userId: string, blockedUsers: string[]) => {
  return blockedUsers.includes(userId);
};
