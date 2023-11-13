import { Text, Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import UsdcIcon from '../../../../assets/images/svg/UsdcIcon';
import TetherIcon from '../../../../assets/images/svg/TetherIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const DEXBalanceBottomsheet = ({ callBack, onClose, visibility }: Props) => {
  return (
    <BottomsheetWrapper
      onClose={onClose}
      backdropOpacity={0.7}
      visibility={visibility}
      handlerWidth={115}
    >
      <View style={styles.gap}>
        <View style={styles.view1}>
          <AptosIcon size={size.getHeightSize(24)} />
          <Text style={styles.coinName}>
            Aptos <Text style={styles.symbol}>APT</Text>
          </Text>
          <View
            style={{
              gap: size.getHeightSize(2),
            }}
          >
            <Text style={styles.amount}>12.0934</Text>
            <Text style={styles.balance}>$65.03</Text>
          </View>
        </View>
        <View style={styles.view1}>
          <UsdcIcon size={size.getHeightSize(24)} />
          <Text style={styles.coinName}>
            USDC <Text style={styles.symbol}>USDC</Text>
          </Text>
          <View
            style={{
              gap: size.getHeightSize(2),
            }}
          >
            <Text style={styles.amount}>12.0934</Text>
            <Text style={styles.balance}>$65.03</Text>
          </View>
        </View>
        <View style={[styles.view1, { borderBottomWidth: 0 }]}>
          <TetherIcon size={size.getHeightSize(24)} />
          <Text style={styles.coinName}>
            Tether <Text style={styles.symbol}>USDT</Text>
          </Text>
          <View
            style={{
              gap: size.getHeightSize(2),
            }}
          >
            <Text style={styles.amount}>12.0934</Text>
            <Text style={styles.balance}>$65.03</Text>
          </View>
        </View>
      </View>
    </BottomsheetWrapper>
  );
};

export default DEXBalanceBottomsheet;
const styles = StyleSheet.create({
  gap: {
    marginVertical: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
    gap: size.getHeightSize(8),
  },
  view1: {
    paddingBottom: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },
  coinName: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    flex: 1,
  },
  symbol: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Regular',
  },
  amount: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
  },
  balance: {
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    color: appColor.grayLight,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'right',
  },
});
