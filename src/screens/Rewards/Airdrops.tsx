import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import DexSwapView from '../../components/Rewards/Airdrop/AirdropViews/DexSwapView';
import DefiTradingView from '../../components/Rewards/Airdrop/AirdropViews/DefiTradingView';
import RefferalView from '../../components/Rewards/Airdrop/AirdropViews/RefferalView';
import NftHoldingsView from '../../components/Rewards/Airdrop/AirdropViews/NftHoldingsView';
import NFTTradeView from '../../components/Rewards/Airdrop/AirdropViews/NFTTradeView';
import SocialTransactionView from '../../components/Rewards/Airdrop/AirdropViews/SocialTransactionView';
import { AirdropsProps } from '../../navigations/NavigationTypes';
import RewardRuleBottomsheet from '../../components/Rewards/Airdrop/RewardRuleBottomsheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Airdrops = ({ navigation, route }: AirdropsProps) => {
  let content: JSX.Element;
  const { type } = route.params;
  switch (type) {
    case 'My refferals':
      content = <RefferalView />;
      break;
    case 'NFT holdings':
      content = <NftHoldingsView />;
      break;
    case 'Defi trading':
      content = <DefiTradingView />;
      break;
    case 'Dex Swap':
      content = <DexSwapView />;
      break;
    case 'NFT trade':
      content = <NFTTradeView />;
      break;
    case 'Social transaction':
      content = <SocialTransactionView />;
      break;
    default:
      break;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={type} />
      {content}
      <RewardRuleBottomsheet />
    </SafeAreaView>
  );
};

export default Airdrops;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginRight: size.getWidthSize(4),
  },
});
