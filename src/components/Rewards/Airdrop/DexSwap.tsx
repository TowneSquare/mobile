import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppDispatch } from '../../../controller/hooks';
import { updateTransactionDetailsBottomsheet } from '../../../controller/BottomSheetController';
import ConvertIcon from '../../../../assets/images/svg/Reward/ConvertIcon';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  active: boolean;
  amount: number;
}
const DexSwap = () => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(
      updateTransactionDetailsBottomsheet({
        visibility: true,
        type: 'token_swap',
      })
    );
  };
  return (
    <Pressable onPress={handleModal} style={styles.parentContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>APT</Text>
        <ConvertIcon size={size.getHeightSize(18)} />
        <Text style={styles.text}>CAKE</Text>
      </View>
      <Text style={styles.amount}>100</Text>
      <PointsIcon size={size.getHeightSize(16)} />
    </Pressable>
  );
};

export default DexSwap;
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
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
});
