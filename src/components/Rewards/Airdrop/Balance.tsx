import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
import InfoIcon from '../../../../assets/images/svg/InfoIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  title: string;
  balance: string;
  onInfoButtonPressed?: () => void;
  onHold?: boolean;
}
const Balance = ({ balance, title, onInfoButtonPressed, onHold }: Props) => {
  let content: JSX.Element;
  if (onHold) {
    content = (
      <View style={styles.view}>
        <View style={styles.parentContainer1}>
          <Text style={[styles.text, { flex: 1 }]}>{title}</Text>
          <Text style={styles.amount}>300</Text>
          <PointsIcon size={size.getHeightSize(16)} />
        </View>
        <View style={styles.parentContainer1}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(8),
            }}
          >
            <Text style={styles.text}>On hold</Text>
            <InfoIcon
              onPress={() => onInfoButtonPressed?.()}
              size={size.getHeightSize(24)}
            />
          </View>
          <Text style={styles.amount}>500</Text>
          <PointsIcon size={size.getHeightSize(16)} />
        </View>
      </View>
    );
  } else {
    content = (
      <View style={styles.parentContainer}>
        <Text style={[styles.text, { flex: 1 }]}>{title}</Text>
        <Text style={styles.amount}>100</Text>
        <PointsIcon size={size.getHeightSize(16)} />
      </View>
    );
  }
  return content;
};

export default Balance;
const styles = StyleSheet.create({
  parentContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: appColor.feedBackground,
    paddingVertical: size.getHeightSize(24),
    borderRadius: 8,
    borderColor: appColor.kGrayLight3,
    paddingHorizontal: size.getWidthSize(16),
  },
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
  view: {
    borderWidth: 1,
    backgroundColor: appColor.feedBackground,
    paddingVertical: size.getHeightSize(24),
    borderRadius: 8,
    borderColor: appColor.kGrayLight3,
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getHeightSize(16),
  },
});
