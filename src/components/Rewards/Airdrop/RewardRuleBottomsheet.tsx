import { Text, Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import { updateRulesBottomsheetVisibility } from '../../../controller/RewardController';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const RewardRuleBottomsheet = () => {
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(
    (state) => state.RewardController.isRulesBottomsheetVisible
  );
  return (
    <BottomsheetWrapper
      onClose={() => dispatch(updateRulesBottomsheetVisibility(false))}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.title}>Reward rules</Text>
      <Text style={[styles.text]}>
        You can accumulate points by holding NFTs from eligible collections in
        your wallet.
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        Eligible collections currently include{' '}
        <Text style={{ fontFamily: 'Outfit-SemiBold' }}>
          Aptomingos, AptosMonekys, Bruh Bears, Pontem Space Pirates, Spooks.
        </Text>
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        Each NFT that you hold gives you{' '}
        <Text style={{ fontFamily: 'Outfit-Bold' }}>50 TS Points</Text>
        per day.
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        NFT holding history is traced back to the Mainnet launch day.
      </Text>

      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        <Text style={{ fontFamily: 'Outfit-Bold' }}>Example:</Text>
        You have held an Aptomingos NFT since May 31, 2023. Once you sign up on
        TowneSquare with your wallet, you would be rewarded 50 * days since May
        31,2023.
      </Text>
      <View style={{ height: size.getHeightSize(48) }} />
    </BottomsheetWrapper>
  );
};

export default RewardRuleBottomsheet;

const styles = StyleSheet.create({
  title: {
    marginVertical: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
});
