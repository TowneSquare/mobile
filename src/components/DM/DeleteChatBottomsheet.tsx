import { Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import ChatDeleteConversationIcon from '../../../assets/images/svg/ChatDeleteConversationIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}

const DeleteChatBottomsheet = ({ onClose, visibility, callBack }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <ChatDeleteConversationIcon
        size={size.getHeightSize(60)}
        style={{
          marginTop: size.getHeightSize(24),
          alignSelf: 'center',
        }}
      />
      <Text style={styles.contentDescription}>Delete chat</Text>
      <Text style={styles.contentMessage}>
        Permanently delete the chat with UsernameX?
      </Text>
      <Pressable onPress={callBack} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete chat</Text>
      </Pressable>

      <Text onPress={onClose} style={styles.cancel}>
        Cancel
      </Text>
    </BottomsheetWrapper>
  );
};

export default DeleteChatBottomsheet;
const styles = StyleSheet.create({
  cancel: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(4),
  },
  deleteButtonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    paddingVertical: size.getHeightSize(12.5),
  },
  deleteButton: {
    backgroundColor: appColor.kErrorText,
    borderRadius: 40,
    marginTop: size.getHeightSize(24),
  },
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.04),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
  },
  contentMessage: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
  },
});
