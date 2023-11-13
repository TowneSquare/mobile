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
}
const FloorPriceBottomsheet = ({ onClose, visibility }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.title}>Floor price source</Text>
      <Text style={styles.text}>[Marketplace name]</Text>
    </BottomsheetWrapper>
  );
};

export default FloorPriceBottomsheet;
const styles = StyleSheet.create({
  title: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(32),
    textAlign: 'center',
  },
  text: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.kTextColor,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
    marginTop: size.getHeightSize(32),
    marginBottom: size.getHeightSize(48),
  },
});
