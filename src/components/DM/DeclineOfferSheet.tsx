import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
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
const DeclineOfferSheet = ({ onClose, visibility, callBack }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.contentDescription}>
        Are you sure you want to decline this offer?
      </Text>
      <View
        style={{
          gap: size.getHeightSize(8),
          marginTop: size.getHeightSize(24),
          marginBottom: size.getHeightSize(32),
        }}
      >
        <ActionButton title="Decline offer" callBack={onClose} />
        <ActionButton2 title="Keep the offer active" callBack={onClose} />
      </View>
    </BottomsheetWrapper>
  );
};

export default DeclineOfferSheet;
const styles = StyleSheet.create({
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.4),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
  },
});
