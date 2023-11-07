import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
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
        <View style={styles.view1}>
          <Balance title="DeFi trading points" balance="200" />
          <View style={styles.view2}>
            <Text style={styles.label}>
              You haven't made any swaps on TowneSquare DEX
            </Text>
            <Text style={styles.description}>
              When you swap tokens, they will show up here together with the TS
              Points earned
            </Text>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Go to DEX wap</Text>
            </View>
          </View>
        </View>
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
  label: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  description: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
  view1: {
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(16),
    flex: 1,
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    gap: size.getHeightSize(8),
  },
  button: {
    marginTop: size.getHeightSize(16),
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: appColor.kSecondaryButtonColor,
    paddingHorizontal: size.getWidthSize(16),
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.4,
  },
});
