import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  noOfPinnedChat: string;
  pinnedMessage: string;
}
const ChannelChatPinnedMessage = ({ noOfPinnedChat, pinnedMessage }: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.pinned}>{noOfPinnedChat} Pinned messages</Text>
      <Text numberOfLines={1} style={styles.message}>
        {pinnedMessage}
      </Text>
    </View>
  );
};

export default ChannelChatPinnedMessage;
const styles = StyleSheet.create({
  pinned: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    textAlign: 'left',
  },
  message: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    textAlign: 'left',
  },
  view: {
    width: '100%',
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    gap: size.getHeightSize(8),
    backgroundColor: appColor.feedBackground,
    borderBottomWidth: 1,
    borderBottomColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(9),
  },
});
