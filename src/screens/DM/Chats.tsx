import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  BackHandler,
} from 'react-native';
import { getUserInfo } from '../../api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, images } from '../../constants';
import { ActivityIndicator } from 'react-native';
import useBackHandler from '../../hooks/useBackhandler';
import { useEffect, useLayoutEffect, useState } from 'react';
import { sizes } from '../../utils';
import HorizontalMoreIcon from '../../../assets/images/svg/HorizontalMoreIcon';
import Chat from '../../components/DM/Chat';
import { useAppSelector } from '../../controller/hooks';
import { ChatsModel, ContactsChatModel } from '../../models/chats';
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
  const token = useAppSelector((state) => state.USER.didToken);
  // useBackHandler(() => {
  //   BackHandler.exitApp();
  //   return true;
  // });
  console.log(myId);
  const [chats, setChats] = useState<ContactsChatModel[]>(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    const chatQuery = query(
      collection(firestoreDB, 'chats'),
      where('activeMembers', 'array-contains', myId),
      orderBy('lastMessage.createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      chatQuery,
      async (querySnapshot) => {
        try {
          const chatRooms = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
              const chat = doc.data() as ChatsModel;
              const contactid = chat.memberIds.find(
                (memberid) => memberid !== myId
              );
              const contactDetails = await getUserInfo(contactid, token);
              const newChatDoc: ContactsChatModel = {
                ...chat,
                nickname: contactDetails.nickname,
                pfp: contactDetails.profileImage,
              };

              // Query the 'messages' subcollection where 'read' is false
              const messagesQuery = query(
                collection(doc.ref, 'messages'),
                where('read', '==', false),
                where('user._id', '!=', myId)
              );

              // Get the number of unread messages

              const messagesUnsubscribe = onSnapshot(
                messagesQuery,
                async (messagesSnapshot) => {
                  // Get the number of unread messages
                  const unreadMessagesCount = messagesSnapshot.size;
                  const updatedChats = [...chats];
                  const index = updatedChats.findIndex(
                    (c) => c._id === chat._id
                  );
                  if (index !== -1 && chat !== null) {
                    updatedChats[index] = {
                      ...newChatDoc,
                      unreadMessagesCount,
                    };
                  }
                  setChats(updatedChats);
                }
              );

              // Add the 'unreadMessagesCount' field to the chat object
              return { ...newChatDoc, messagesUnsubscribe };
            })
          );

          setChats(chatRooms);
          setisLoading(false);
        } catch (error) {
          console.log('Error in onSnapshot', error);
          setisLoading(false);
        }
      },
      (error) => {
        console.log('Error in onSnapshot', error);
        setisLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);
  // const Failed = () => {
  //   return (
  //     <View
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         marginTop: "50%",
  //       }}
  //     >
  //       <Image
  //         source={images.plug}
  //         style={{
  //           height: size.getHeightSize(61),
  //           width: size.getWidthSize(60),
  //         }}
  //       />
  //       <View
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           marginTop: size.getHeightSize(8),
  //         }}
  //       >
  //         <Text
  //           style={{
  //             color: appColor.grayLight,
  //             fontFamily: "Outfit-Regular",
  //             fontSize: size.fontSize(16),
  //           }}
  //         >
  //           Something went wrong.
  //         </Text>
  //         <Text
  //           style={{
  //             color: appColor.grayLight,
  //             fontFamily: "Outfit-Regular",
  //             fontSize: size.fontSize(16),
  //           }}
  //         >
  //           Try to reload.
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // };
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
        ListHeaderComponent={() =>
          isLoading ? (
            <View
              style={{
                marginTop: size.getHeightSize(16),
              }}
            >
              <ActivityIndicator
                size={size.getHeightSize(24)}
                color={appColor.primaryLight}
              />
            </View>
          ) : null
        }
        ListEmptyComponent={() => {
          return !isLoading ? (
            <View style={styles.view}>
              <Text style={styles.text3}>No Messages</Text>
              <Text style={styles.text2}>
                All your private conversation will be shown here
              </Text>
            </View>
          ) : null;
        }}
        data={chats}
        renderItem={({ item }) => <Chat data={item} myId={myId} />}
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
