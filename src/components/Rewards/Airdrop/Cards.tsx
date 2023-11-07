import { Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
import ArrowRight from '../../../../assets/images/svg/Reward/ArrowRight';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  icon: React.ReactNode;
  title: string;
  price: string;
  onPress: () => void;
}
const Cards = ({ icon, price, title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.parentContainer}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <PointsIcon size={size.getHeightSize(16)} />
      <ArrowRight size={size.getHeightSize(24)} />
    </Pressable>
  );
};

export default Cards;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(20.5),
    paddingHorizontal: size.getWidthSize(16),
  },
  title: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    flex: 1,
    marginLeft: size.getWidthSize(10),
  },
  price: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(8),
    marginRight: size.getWidthSize(10),
  },
});
