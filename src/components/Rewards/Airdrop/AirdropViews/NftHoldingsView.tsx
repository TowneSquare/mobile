import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import { appColor } from '../../../../constants';
import NftHoldings from '../NftHoldings';
import { updateRulesBottomsheetVisibility } from '../../../../controller/RewardController';
import { useAppDispatch } from '../../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const NftHoldingsView = () => {
  const dispatch = useAppDispatch();
  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          marginTop: size.getHeightSize(16),
        }}
      >
        <View
          style={{
            gap: size.getHeightSize(8),
            marginBottom: size.getHeightSize(24),
          }}
        >
          <Text style={styles.text}>
            TS Points will be rewarded in{' '}
            <Text style={{ fontFamily: 'Outfit-SemiBold' }}>18:24:00</Text>
          </Text>
          <Text
            style={styles.rules}
            onPress={() => dispatch(updateRulesBottomsheetVisibility(true))}
          >
            See rules
          </Text>
        </View>
        <Balance title="NFT holdings balance" balance="200" />
        <View
          style={{
            marginTop: size.getHeightSize(24),
            gap: size.getHeightSize(8),
          }}
        >
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
          <NftHoldings amount={100} name="" nftUri="" price="" />
        </View>
      </View>
    </ScrollView>
  );
};

export default NftHoldingsView;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
  rules: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.primaryLight,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
});
