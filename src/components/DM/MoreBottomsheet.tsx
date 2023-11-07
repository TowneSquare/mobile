import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import { sizes } from '../../utils';
import ChatMuteIcon from '../../../assets/images/svg/ChatMuteIcon';
import ChatViewProfileIcon from '../../../assets/images/svg/ChatViewProfileIcon';
import ChatDeleteConversationIcon from '../../../assets/images/svg/ChatDeleteConversationIcon';
import ChatReportUserIcon from '../../../assets/images/svg/ChatReportUserIcon';
import ChatBlockUser from '../../../assets/images/svg/ChatBlockUser';
import { appColor } from '../../constants';
import { updateReportUserModal } from '../../controller/FeedsController';
import { useAppDispatch } from '../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;

  onBlockUser: () => void;
  onDeleteConversation: () => void;
  onDeleteChat: () => void;
}
const MoreBottomsheet = ({
  onClose,
  visibility,
  onBlockUser,
  onDeleteChat,
  onDeleteConversation,
}: Props) => {
  const dispatch = useAppDispatch();
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
        <Pressable style={styles.view1}>
          <ChatMuteIcon size={size.getHeightSize(24)} />
          <Text style={styles.text}>Mute Notifications</Text>
        </Pressable>
        <Pressable style={styles.view}>
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
