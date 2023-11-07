import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { Avatar } from 'react-native-elements';
import { useAppDispatch } from '../../../controller/hooks';
import { updateTransactionDetailsBottomsheet } from '../../../controller/BottomSheetController';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  type: 'sold' | 'bought';
  amount: number;
}
const Transaction = ({ type }: Props) => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(
      updateTransactionDetailsBottomsheet({
        visibility: true,
        type: 'token_transfer',
      })
    );
  };
  return (
    <Pressable onPress={handleModal} style={styles.parentContainer}>
      <Text
        style={{
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-Regular',
          color: appColor.kTextColor,
          lineHeight: size.getHeightSize(21),
        }}
      >
        {type === 'bought' ? 'Bought' : 'Sold'}
      </Text>
      <View style={styles.row}>
        <Avatar
          source={images.siothian}
          rounded
          size={size.getHeightSize(24)}
        />
        <Text style={styles.text}>Sl0thian #3443</Text>
      </View>
      <Text style={styles.amount}>100</Text>
      <PointsIcon size={size.getHeightSize(16)} />
    </Pressable>
  );
};

export default Transaction;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
    paddingVertical: size.getHeightSize(16),
  },
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(7),
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
});
