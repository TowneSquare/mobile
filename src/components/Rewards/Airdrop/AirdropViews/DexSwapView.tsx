import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import RewardEmptystate from '../../RewardEmptystate';
import DefiTrades from '../DefiTrades';
import DexSwap from '../DexSwap';
import { appColor } from '../../../../constants';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const DexSwapView = () => {
  const swaps = [
    { amount: 100, active: true },
    { amount: 100, active: true },
    { amount: 100, active: false },
    { amount: 100, active: true },
    { amount: 100, active: false },
    { amount: 100, active: false },
  ];
  return (
    <>
      {swaps.length > 0 ? (
        <ScrollView>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              marginTop: size.getHeightSize(16),
            }}
          >
            <Balance title="DEX Swap points" balance="200" />
            <View style={{}}>
              <Text style={styles.date}>TODAY</Text>
              {swaps.map((swap, index) => (
                <DexSwap />
              ))}
              <Text style={styles.date}>YESTERDAY</Text>
              {swaps.map((swap, index) => (
                <DexSwap />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <RewardEmptystate
          showButton
          buttonLabel="Go to DEX wap"
          balance="0"
          balanceTitle="Dex Swap balance"
          label="You haven't made any swaps on TowneSquare DEX"
          description="When you swap tokens, they will show up here together with the Cred Points earned"
        />
      )}
    </>
  );
};

export default DexSwapView;
const styles = StyleSheet.create({
  date: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(16),
  },
});
