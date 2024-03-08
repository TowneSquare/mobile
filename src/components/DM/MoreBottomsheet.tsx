import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import { sizes } from '../../utils';
import ChatMuteIcon from '../../../assets/images/svg/ChatMuteIcon';
import ChatViewProfileIcon from '../../../assets/images/svg/ChatViewProfileIcon';
import ChatDeleteConversationIcon from '../../../assets/images/svg/ChatDeleteConversationIcon';
import ChatReportUserIcon from '../../../assets/images/svg/ChatReportUserIcon';
import ChatBlockUser from '../../../assets/images/svg/ChatBlockUser';
import { appColor } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import UnmuteIcon from '../../../assets/images/svg/UnmuteIcon';
import { updateReportUserModal } from '../../controller/FeedsController';
import { useAppDispatch } from '../../controller/hooks';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from '../../../config/firebase.config';
import {
  updatePushNotificationSetting,
} from '../../utils/ChatUtils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  visibility: boolean;
  onClose: () => void;
  onBlockUser: () => void;
  onDeleteConversation: () => void;
  onDeleteChat: () => void;
  nickname: string;
  userId: string;
  username: string;
  currentUserId: string;
}
const MoreBottomsheet = ({
  onClose,
  visibility,
  onBlockUser,
  onDeleteChat,
  onDeleteConversation,
  nickname,
  userId,
  username,
  currentUserId,
}: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isNotificationAllowed, setNotification] = useState(true);


  
  useEffect(() => {
    // Get the user's contact reference
    const userContactRef = doc(firestoreDB, 'contacts', currentUserId);

    // Listen for changes in push notification setting
    const unsubscribe = onSnapshot(userContactRef, (docSnapshot) => {
      if (docSnapshot.exists() && docSnapshot.data()[userId]) {
        console.log(docSnapshot.data()[userId]);
        console.log(
          `====== unchanged ${
            docSnapshot.data()[userId].allowPushNotification
          }====g==`
        );

        // Get the user's push notification setting
        const data = docSnapshot.data()[userId];
        if (data) {
          const pushNotificationSetting = data.allowPushNotification;
          setNotification(pushNotificationSetting);
        }
      }
    });

    if (visibility === false) {
      return unsubscribe;
    }
    return unsubscribe;
  }, [visibility]);

  // Update the user's push notification settings
  const updateUserNotification = async () => {
    isNotificationAllowed
      ? await updatePushNotificationSetting(currentUserId, userId, false)
      : await updatePushNotificationSetting(currentUserId, userId, true);
  };
  return (
    <BottomsheetWrapper
      backdropOpacity={0.7}
      onClose={onClose}
      visibility={visibility}
    >
      <View
        style={{
          marginTop: size.getHeightSize(24),
          marginBottom: size.getHeightSize(32),
        }}
      >
        <Pressable
          onPress={async () => {
            updateUserNotification();
            onClose();
          }}
          style={styles.view1}
        >
          {isNotificationAllowed ? (
            <ChatMuteIcon size={size.getHeightSize(24)} />
          ) : (
            <UnmuteIcon size={size.getHeightSize(24)} />
          )}
          <Text style={styles.text}>
            {isNotificationAllowed
              ? 'Mute Notifications'
              : 'Unmute Notifications'}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onClose();
            navigation.navigate('TheirProfileScreen', {
              nickname: nickname,
              userId: userId,
              username: username,
            });
          }}
          style={styles.view}
        >
          <ChatViewProfileIcon size={size.getHeightSize(24)} />
          <Text style={styles.text}>View profile</Text>
        </Pressable>
        <Pressable onPress={onDeleteConversation} style={styles.view}>
          <ChatDeleteConversationIcon size={size.getHeightSize(24)} />
          <Text style={styles.text}>Delete conversation</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            onClose();
            dispatch(updateReportUserModal(true));
          }}
          style={styles.view}
        >
          <ChatReportUserIcon size={size.getHeightSize(24)} />
          <Text style={styles.text}>Report user</Text>
        </Pressable>
        <Pressable onPress={onBlockUser} style={styles.view}>
          <ChatBlockUser size={size.getHeightSize(24)} />
          <Text style={[styles.text, { color: appColor.error }]}>
            Block user
          </Text>
        </Pressable>
      </View>
    </BottomsheetWrapper>
  );
};

export default MoreBottomsheet;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingBottom: size.getHeightSize(16),
    paddingTop: size.getHeightSize(12),
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingVertical: size.getHeightSize(12),
  },
});
