import { View, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppDispatch } from '../../../controller/hooks';
import { updateTransactionDetailsBottomsheet } from '../../../controller/BottomSheetController';
import ConvertIcon from '../../../../assets/images/svg/Reward/ConvertIcon';
import PontemIcon from '../../../../assets/images/svg/Reward/PontemIcon';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  active: boolean;
  amount: number;
}
const DefiTrades = () => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(
      updateTransactionDetailsBottomsheet({
        visibility: true,
        type: 'token_swap',
        dex: {
          dexImage: '',
          name: '',
        },
      })
    );
  };
  return (
    <Pressable onPress={handleModal} style={styles.parentContainer}>
      <PontemIcon size={size.getHeightSize(24)} />
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

export default DefiTrades;
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
    marginLeft: size.getWidthSize(24),
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
});
