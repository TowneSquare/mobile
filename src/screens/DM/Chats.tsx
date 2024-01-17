import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, images } from '../../constants';
import { useEffect, useLayoutEffect, useState } from 'react';
import { sizes } from '../../utils';
import HorizontalMoreIcon from '../../../assets/images/svg/HorizontalMoreIcon';
import Chat from '../../components/DM/Chat';
import { useAppSelector } from '../../controller/hooks';
import { ChatsModel } from '../../models/chats';
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  where,
  getDocs,
  doc,
} from 'firebase/firestore';
import { firestoreDB } from '../../../config/firebase.config';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
interface Data {
  text: string;
  name: string;
  time: string;
  noOfUnreadMessages?: number;
}

const Chats = () => {
  const myId = useAppSelector((state) => state.USER.UserData._id);
  console.log(myId);
  const [chats, setChats] = useState<ChatsModel[]>(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const chatQuery = query(
      collection(firestoreDB, 'chats'),
      where('memberIds', 'array-contains', '12345'),
      orderBy('_id', 'desc')
    );
    const unsubscribe = onSnapshot(
      chatQuery,
      async (querySnapshot) => {
        const chatRooms = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const chat = doc.data() as ChatsModel;

            // Query the 'messages' subcollection where 'read' is false
            const messagesQuery = query(
              collection(doc.ref, 'messages'),
              where('read', '==', false),
              where('user._id', '!=', '12345')
            );

            // Get the number of unread messages

            const messagesUnsubscribe = onSnapshot(
              messagesQuery,
              async (messagesSnapshot) => {
                // Get the number of unread messages
                const unreadMessagesCount = messagesSnapshot.size;
                const updatedChats = [...chats];
                const index = updatedChats.findIndex((c) => c._id === chat._id);
                if (index !== -1 && chat !== null) {
                  updatedChats[index] = { ...chat, unreadMessagesCount };
                }
                setChats(updatedChats);
              }
            );

            // Add the 'unreadMessagesCount' field to the chat object
            return { ...chat, messagesUnsubscribe };
          })
        );
        console.log(chatRooms);
        setChats(chatRooms);
        setisLoading(false);
      },
      (error) => {
        console.log('Error in onSnapshot', error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <HorizontalMoreIcon size={size.getHeightSize(24)} />
        <Text style={styles.headerText}>Messages</Text>
        <View
          style={{
            width: size.getWidthSize(24),
          }}
        />
      </View>
      <FlatList
        ListEmptyComponent={() => (
          <View style={styles.view}>
            <Text style={styles.text3}>No Messages</Text>
            <Text style={styles.text2}>
              All your private conversation will be shown here
            </Text>
          </View>
        )}
        data={chats}
        renderItem={({ item }) => <Chat data={item} />}
      />
    </SafeAreaView>
  );
};

export default Chats;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    zIndex: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20),
    backgroundColor: appColor.kgrayDark2,
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  text2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(12),
  },
  text3: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
  },
  view: {
    height: size.getHeightSize(672),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
