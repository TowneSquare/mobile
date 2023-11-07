import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import DefiTrades from '../DefiTrades';
import { appColor } from '../../../../constants';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const DefiTradingView = () => {
  const trades = [
    { amount: 100, active: true },
    { amount: 100, active: true },
    { amount: 100, active: false },
    { amount: 100, active: true },
    { amount: 100, active: false },
    { amount: 100, active: false },
  ];
  return (
    <>
      {trades.length > 0 ? (
        <ScrollView>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              marginTop: size.getHeightSize(16),
            }}
          >
            <Balance title="DeFi trading points" balance="200" />
            <View style={{}}>
              <Text style={styles.date}>TODAY</Text>
              {trades.map((trade, index) => (
                <DefiTrades />
              ))}
              <Text style={styles.date}>YESTERDAY</Text>
              {trades.map((trade, index) => (
                <DefiTrades />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.view1}>
          <Balance title="DeFi trading points" balance="200" />
          <View style={styles.view2}>
            <Text style={styles.label}>You haven't made any DeFi trades</Text>
            <Text style={styles.description}>
              When you swap tokens on DEX, they will show up here together with
              the TS Points earned
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default DefiTradingView;
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
});
