import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import AptosIcon from '../../../../assets/images/svg/AptosIcon';
import SwapIcon from '../../../../assets/images/svg/Reward/SwapIcon';
import TipIcon from '../../../../assets/images/svg/Reward/TipIcon';
import NFTIcon from '../../../../assets/images/svg/Reward/NFTIcon';
import ActionButton from '../../../shared/ActionButton';
import UsdcIcon from '../../../../assets/images/svg/UsdcIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  type: 'aptos' | 'usdc';
  callBack: () => void;
}
const Withdraw = ({ type, callBack }: Props) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.row}>
        {type === 'usdc' ? (
          <UsdcIcon size={size.getHeightSize(24)} />
        ) : (
          <AptosIcon size={size.getHeightSize(24)} />
        )}
        {type === 'aptos' ? (
          <Text style={styles.coinName}>
            Aptos <Text style={styles.symbol}>APT</Text>
          </Text>
        ) : (
          <Text style={styles.coinName}>
            USDC <Text style={styles.symbol}>USDC</Text>
          </Text>
        )}
      </View>
      <View style={styles.row}>
        <SwapIcon size={size.getHeightSize(24)} />
        <Text style={styles.label}>DEX swap</Text>
        <View
          style={{
            gap: size.getHeightSize(2),
          }}
        >
          <Text style={styles.amount}>12.0934</Text>
          <Text style={styles.balance}>$65.03</Text>
        </View>
      </View>
      <View style={styles.row}>
        <NFTIcon size={size.getHeightSize(24)} />
        <Text style={styles.label}>NFT trade</Text>
        <View
          style={{
            gap: size.getHeightSize(2),
          }}
        >
          <Text style={styles.amount}>12.0934</Text>
          <Text style={styles.balance}>$65.03</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TipIcon size={size.getHeightSize(24)} />
        <Text style={styles.label}>User transactions</Text>
        <View
          style={{
            gap: size.getHeightSize(2),
          }}
        >
          <Text style={styles.amount}>0</Text>
          <Text style={styles.balance}>$0</Text>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: appColor.kGrayLight3 }} />
      <View style={styles.row2}>
        <Text style={styles.text}>Total</Text>
        <View
          style={{
            gap: size.getHeightSize(2),
          }}
        >
          <Text style={styles.amount}>0</Text>
          <Text style={styles.balance}>$0</Text>
        </View>
      </View>
      <ActionButton
        buttonBackgroundColor={appColor.kSecondaryButtonColor}
        title={`Wittdraw ${type === 'aptos' ? 'APT' : 'USDC'}`}
        fontColor={appColor.kTextColor}
        callBack={callBack}
      />
    </View>
  );
};

export default Withdraw;
const styles = StyleSheet.create({
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
  parentView: {
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    gap: size.getHeightSize(8),
  },
  row: {
    paddingVertical: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  label: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  amount: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'right',
  },
  balance: {
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Regular',
    textAlign: 'right',
  },
  row2: {
    paddingTop: size.getHeightSize(4),
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
    paddingBottom: size.getHeightSize(8),
  },
  text: {
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
    flex: 1,
  },
});
