import { View, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { appColor } from '../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  disable?: boolean;
  callBack: () => void;
}
const ContinueButton = ({ callBack, disable }: Props) => {
  return (
    <Pressable
      disabled={disable ? disable : false}
      onPress={callBack}
      style={[
        styles.continueButton,
        {
          backgroundColor: disable ? '#FFFFFF60' : appColor.kWhiteColor,
        },
      ]}
    >
      <Text style={styles.continueText}>Continue</Text>
    </Pressable>
  );
};

export default ContinueButton;
const styles = StyleSheet.create({
  continueButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',

    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(8),
  },
  continueText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    fontStyle: 'normal',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
});
