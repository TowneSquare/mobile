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
import { ChatsModel } from '../models/chats';
/**
 *  Chat class that handles message grouping and sorting.
 */
export class ChatClass {
  private message: Array<any> = [];
  constructor(message: any[]) {
    this.message = message;
  }
  /**
   * Groups the messages by day.
   * @returns An object with the messages grouped by day.
   */
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

  // Check if the data is a ChatText
  private isNotDate(data: Data): data is ChatText {
    return (data as ChatText).message !== undefined;
  }

  // Check if the data is a ChatDate
  private isDate(data: Data): data is ChatDate {
    return (data as ChatDate).dateType !== undefined;
  }

  // Refactor the data to get the date as a type of message and the rest of the data as a type of ChatText
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

  // TODO: TO refactor this function to use the new data model
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

  /**
   * Returns a formatted display date based on the given array of date values.
   * @param array - An array containing the year, month, and day values.
   * @returns The formatted display date.
   */
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

/**
 * Formats a timestamp into a human-readable string.
 * @param timestamp - The timestamp to format.
 * @returns The formatted timestamp as a string.
 */
export function formatTimestamp(timestamp: Timestamp) {
  // Check if the timestamp is valid
  if (timestamp) {
    const date: Date = timestamp.toDate();
    const now = new Date();
    const sameDay =
      now.getDate() === date.getDate() &&
      now.getMonth() === date.getMonth() &&
      now.getFullYear() === date.getFullYear();

    // Check if the date is yesterday
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday =
      yesterday.getDate() === date.getDate() &&
      yesterday.getMonth() === date.getMonth() &&
      yesterday.getFullYear() === date.getFullYear();

    // Check if the date is today
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

/**
 * Creates a unique chat ID based on the provided user IDs.
 * @param user1Id - The ID of the first user.
 * @param user2Id - The ID of the second user.
 * @returns The unique chat ID.
 */
export const createUniqueChatId = (user1Id: string, user2Id: string) => {
  // Sort the user IDs to ensure consistency
  const sortedUserIds = [user1Id, user2Id].sort();

  // Concatenate the sorted user IDs
  const concatenatedIds = sortedUserIds.join('_');

  // Use hash function to create a unique identifier
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

/**
 * Sends a reply message in a chat.
 * @param {Object} options - The options for sending the reply message.
 * @param {string} options.replyingToMessage - The message being replied to.
 * @param {string} options.replyingtoId - The ID of the message being replied to.
 * @param {string} options.text - The text of the reply message.
 * @param {string} options.chatId - The ID of the chat.
 * @param {string} options.messageType - The type of the reply message.
 * @param {string} options.mediaUri - The URI of any media attached to the reply message.
 * @param {string} options.uid - The ID of the user sending the reply message.
 * @param {string} options.myusername - The username of the user sending the reply message.
 * @returns {Promise<void>} - A promise that resolves when the reply message is sent successfully.
 */
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

/**
 * Sends a text message to Firestore.
 *
 * @param {Object} options - The options for sending the message.
 * @param {string} options.text - The text of the message.
 * @param {string} options.chatId - The ID of the chat.
 * @param {string} options.myId - The ID of the sender.
 * @param {string} options.myusername - The username of the sender.
 * @returns {Promise<void>} - A promise that resolves when the message is sent successfully.
 */
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

/**
 * Sends an image to Firestore.
 *
 * @param imageUri - The URI of the image to send.
 * @param chatId - The ID of the chat.
 * @param messageType - The type of the message.
 * @param myId - The ID of the user sending the message.
 * @param myusername - The username of the user sending the message.
 */
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

/**
 * Uploads a media file to Firebase Storage.
 *
 * @param url - The URL of the media file to upload.
 * @returns A Promise that resolves to the download URL of the uploaded file.
 * @throws If an error occurs during the upload process.
 */
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

/**
 * Picks media from either the gallery or the camera.
 * @param from The source of the media, either 'gallery' or 'camera'.
 * @returns The URI of the picked media, or null if no media was picked or an error occurred.
 */
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

/**
 * Blocks a user in the chat.
 *
 * @param userId - The ID of the user performing the block action.
 * @param idUserToBlock - The ID of the user to be blocked.
 * @returns A promise that resolves when the user is blocked successfully.
 */
export const blockUserChat = async (userId: string, idUserToBlock: string) => {
  try {
    const blockedUsersRef = doc(firestoreDB, 'blockedUsers', userId);
    await setDoc(
      blockedUsersRef,
      { blockedUsers: arrayUnion(idUserToBlock) },
      { merge: true }
    );

    // console.log(`User ${idUserToBlock} blocked successfully.`);
  } catch (error) {
    // console.error('Error blocking user:', error);
  }
};

/**
 * Retrieves the list of blocked users for a given user ID.
 * @param userId The ID of the user.
 * @returns A Promise that resolves to an array of blocked user IDs, or an empty array if no blocked users are found.
 */
export const getBlockedUsers = async (userId: string) => {
  try {
    const blockedUsersDocRef = doc(firestoreDB, 'blockedUsers', userId);
    // Get the document
    const blockedUsersDoc = await getDoc(blockedUsersDocRef);

    if (blockedUsersDoc.exists()) {
      //If tThe document exists, return the list of blocked users
      const blockedUsers = blockedUsersDoc.data().blockedUsers;
      // console.log('Blocked users:', blockedUsers);
      return blockedUsers;
    } else {
      // The document does not exist
      console.log('No blocked users document found');
      return [];
    }
  } catch (error) {
    // console.error('Error getting blocked users:', error);
  }
};

/**
 * Unblocks a user in the chat.
 *
 * @param {string} userId - The ID of the user performing the unblocking.
 * @param {string} idUserToUnblock - The ID of the user to unblock.
 * @returns {Promise<void>} - A promise that resolves when the user is unblocked successfully.
 */
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
    // console.error('Error unblocking user:', error);
  }
};

/**
 * Mutes notifications for a specific chat and user.
 * @param chatId - The ID of the chat.
 * @param userId - The ID of the user.
 */
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

/**
 * Adds a contact to Firestore for a given user.
 *
 * @param userId - The ID of the user.
 * @param contactId - The ID of the contact to be added.
 */
export const addContactToFirestore = async (
  userId: string,
  contactId: string
) => {
  try {
    const userContactRef = doc(firestoreDB, 'contacts', userId);
    const docSnapShot = await getDoc(userContactRef);

    //Check if contact exists
    if (docSnapShot.exists() && docSnapShot.data()[contactId]) {
      // console.log('Contact already exists');
      return;
    }
    const contactData = {
      userId: contactId,
      allowPushNotification: true,
    };
    await setDoc(userContactRef, { [contactId]: contactData }, { merge: true });
  } catch (err) {
    // console.log(err);
  }
};

/**
 * Deletes a contact from Firestore.
 *
 * @param userId - The ID of the user.
 * @param contactId - The ID of the contact to be deleted.
 */
export const deleteContactFromFirestore = async (
  userId: string,
  contactId: string
) => {
  try {
    const userContactRef = doc(firestoreDB, 'contacts', userId);
    const docSnapshot = await getDoc(userContactRef);

    // Check if the document exists and if the contact exists in the document
    if (docSnapshot.exists() && docSnapshot.data()[contactId]) {
      // Remove the contact field from the document
      const updatedData = { ...docSnapshot.data() };
      delete updatedData[contactId];

      // Update the document without the deleted contact
      await setDoc(userContactRef, updatedData);
    } else {
      console.log('Contact does not exist');
    }
  } catch (err) {
    console.error('Error deleting contact:', err);
  }
};

/**
 * Checks if push notifications are allowed for a user from a specific contact in a chat.
 *
 * @param userId - The ID of the user.
 * @param contactId - The ID of the contact.
 * @param chatId - The ID of the chat.
 * @returns A boolean indicating whether push notifications are allowed.
 */
export const isPushNotificationAllowed = async (
  userId: string,
  contactId: string,
  chatId: string
) => {
  try {
    const userContactRef = doc(firestoreDB, 'contacts', userId);
    const docSnapshot = await getDoc(userContactRef);
    const chatRef = doc(firestoreDB, 'chats', chatId);
    const chatSnapshot = await getDoc(chatRef);

    // Check if the chat exists and if the user is an active member
    if (chatSnapshot.exists() && chatSnapshot.data()) {
      const chatData = chatSnapshot.data() as ChatsModel;

      if (!chatData.activeMembers.includes(userId)) {
        console.log('User is not a member of the chat');
        return false;
      }
    }

    // Check if the document exists and if the contact exists in the document
    if (docSnapshot.exists() && docSnapshot.data()[contactId]) {
      // Retrieve the contact data
      const contactData = docSnapshot.data()[contactId];
      // Check if push notifications are allowed for the contact
      return contactData.allowPushNotification === true;
    } else {
      // Handle case where the document or contact does not exist
      console.log('User or contact does not exist');
      return false;
    }
  } catch (err) {
    console.error('Error checking push notification allowance:', err);
    return false;
  }
};

/**
 * Updates the push notification setting for a contact of a user.
 *
 * @param userId - The ID of the user.
 * @param contactId - The ID of the contact.
 * @param allowPushNotification - A boolean indicating whether to allow push notifications for the contact.
 * @returns A Promise that resolves when the push notification setting is updated.
 */
export const updatePushNotificationSetting = async (
  userId: string,
  contactId: string,
  allowPushNotification: boolean
) => {
  try {
    const userContactRef = doc(firestoreDB, 'contacts', userId);
    const docSnapshot = await getDoc(userContactRef);

    // Check if the document exists and if the contact exists in the document
    if (docSnapshot.exists() && docSnapshot.data()[contactId]) {
      // Update the value of allowPushNotification field for the contact
      await updateDoc(userContactRef, {
        [`${contactId}.allowPushNotification`]: allowPushNotification,
      });
    } else {
      console.log('User or contact does not exist');
    }
  } catch (err) {
    console.error('Error updating push notification setting:', err);
  }
};

/**
 * Deletes a chat by removing a user from the list of active members.
 * @param chatId - The ID of the chat to be deleted.
 * @param userId - The ID of the user to be removed from the chat.
 * @returns {Promise<void>} - A promise that resolves when the chat is deleted successfully.
 */
export const deleteChat = async (chatId: string, userId: string) => {
  try {
    // Fetch the conversation document
    const conversationRef = doc(firestoreDB, 'chats', chatId);
    const conversationSnapshot = await getDoc(conversationRef);

    // Check if the conversation exists
    if (conversationSnapshot.exists()) {
      // Remove the user from the list of participants
      const conversationData = conversationSnapshot.data();
      console.log(conversationData);
      const updatedMembers = conversationData.activeMembers.filter(
        (member) => member !== userId
      );

      console.log(updatedMembers);
      await updateDoc(conversationRef, {
        activeMembers: updatedMembers,
      });
      console.log('Your ID removed from members list successfully');
      // const updatedParticipants = conversationData.participants.filter(
      //   (id) => id !== userId
      // );

      // // Update the conversation document with the updated participants
      // await updateDoc(conversationRef, { participants: updatedParticipants });

      // console.log('Conversation deleted successfully');
    } else {
      console.log('Conversation does not exist');
    }
  } catch (err) {
    console.error('Error deleting conversation:', err);
  }
};
