import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { appColor } from '../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  disable?: boolean;
  callBack: () => void;
}
const BackButton = ({ callBack, disable }: Props) => {
  return (
    <View style={styles.backButton}>
      <Text
        disabled={disable ? disable : false}
        onPress={callBack}
        style={styles.backText}
      >
        Back
      </Text>
    </View>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  backText: {
    fontStyle: 'normal',
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',

    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  backButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(16),
    paddingVertical: size.getHeightSize(12.5),
  },
});
