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
import RewardEmptystate from '../../RewardEmptystate';
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
        <RewardEmptystate
          balance="0"
          balanceTitle="DeFi trading points"
          label="You haven't made any DeFi trades"
          description=" When you swap tokens on DEX, they will show up here together with the Cred Points earned"
        />
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
});
