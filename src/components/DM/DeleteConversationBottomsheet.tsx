import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const DeleteConversationBottomsheet = ({
  onClose,
  visibility,
  callBack,
}: Props) => {
  return (
    <BottomsheetWrapper  backdropOpacity={0.7} onClose={onClose} visibility={visibility}>
      <Text style={styles.title}>Delete Conversation?</Text>
      <Text style={styles.description}>
        Permanently delete the conversation with [Username]? [Username] will
        still be able to see the conversation
      </Text>
      <View style={styles.view}>
        <ActionButton
          title="Delete Conversation"
          callBack={callBack}
          fontColor={appColor.kButtonTextColor}
          buttonBackgroundColor={appColor.kWhiteColor}
        />
        <ActionButton2 title="Cancel" callBack={onClose} paddingVertical={12} />
      </View>
    </BottomsheetWrapper>
  );
};

export default DeleteConversationBottomsheet;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(24),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
  },
  view: {
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(24),
  },
});
