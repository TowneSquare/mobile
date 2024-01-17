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
import { Timestamp } from 'firebase/firestore';
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
        },
      },
      user: {
        _id: '12345',
        name: 'username',
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
          _id: '6789',
          name: 'username',
        },
      },
    });
    // ...
  } catch (error) {
    // Handle error
  }
};
export const sendTextToFirestore = async ({ text = '', chatId = '' }) => {
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
        _id: '12345',
        name: 'username',
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
          _id: '12345',
          name: 'username',
        },
      },
    });

    console.log('Chat updated with last message.');
  } catch (err) {
    console.warn('Error sending message: ', err);
  }
};
export const sendImageToFirestore = async ({ imageUri = '', chatId = '' }) => {
  try {
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      id,
      createdAt: timestamp,
      message: {
        messageType: 'image',
        imageUri: imageUri,
      },
      user: {
        _id: '12345',
        name: 'username',
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
        text: 'Image',
        createdAt: timestamp,
        sender: {
          _id: '12345',
          name: 'username',
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

export const chatTakePhoto = async () => {
  let result = await launchCameraAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
  });

  if (result.assets != null) {
    return result.assets[0].uri;
  } else return null;
};
export const chatPickImage = async () => {
  let result = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.assets != null) {
    return result.assets[0].uri;
  } else return null;
};
