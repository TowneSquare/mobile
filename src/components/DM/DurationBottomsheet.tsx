import { Text, StyleSheet, Dimensions, Pressable, View } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import OpenLinkIcon from '../../../assets/images/svg/OpenLinkIcon';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}

const DurationBottomsheet = ({ callBack, onClose, visibility }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <View style={styles.view}>
        <Pressable onPress={callBack}>
          <Text style={styles.text}>1 day</Text>
        </Pressable>
        <Pressable onPress={callBack}>
          <Text style={styles.text}>3 days</Text>
        </Pressable>
        <Pressable onPress={callBack}>
          <Text style={styles.text}>7 days</Text>
        </Pressable>
        <Pressable onPress={callBack}>
          <Text style={styles.text}>14 days</Text>
        </Pressable>
      </View>
    </BottomsheetWrapper>
  );
};

export default DurationBottomsheet;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
    paddingVertical: size.getHeightSize(12.5),
  },
  view: {
    alignItems: 'center',
    marginTop: size.getHeightSize(24),
    marginBottom: size.getHeightSize(32),
  },
});
