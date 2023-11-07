import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import BlockIcon from '../../../assets/images/svg/BlockIcon';
import ActionButton from '../../shared/ActionButton';
import ActionButton2 from '../../shared/ActionButton2';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}

const UnblockUserBottomsheet = ({ onClose, visibility, callBack }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <BlockIcon
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(24),
        }}
      />
      <Text style={styles.contentDescription}>Unblock UsernameX?</Text>
      <Text style={styles.contentMessage}>
        Are you sure you want to unblock this user?
      </Text>
      <View style={styles.view}>
        <ActionButton
          title="Unblock user"
          callBack={callBack}
          fontColor={appColor.kButtonTextColor}
          buttonBackgroundColor={appColor.kWhiteColor}
        />
        <ActionButton2 title="Cancel" callBack={onClose} paddingVertical={12} />
      </View>
    </BottomsheetWrapper>
  );
};

export default UnblockUserBottomsheet;
const styles = StyleSheet.create({
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
  view: {
    marginBottom: size.getHeightSize(32),
    marginTop: size.getHeightSize(24),
  },
});
