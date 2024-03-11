import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefiTradingView from '../../components/Rewards/Airdrop/AirdropViews/DefiTradingView';
import DexSwapView from '../../components/Rewards/Airdrop/AirdropViews/DexSwapView';
import NFTTradeView from '../../components/Rewards/Airdrop/AirdropViews/NFTTradeView';
import NftHoldingsView from '../../components/Rewards/Airdrop/AirdropViews/NftHoldingsView';
import RefferalView from '../../components/Rewards/Airdrop/AirdropViews/RefferalView';
import SocialTransactionView from '../../components/Rewards/Airdrop/AirdropViews/SocialTransactionView';
import RewardRuleBottomsheet from '../../components/Rewards/Airdrop/RewardRuleBottomsheet';
import { appColor } from '../../constants';
import { AirdropsProps } from '../../navigations/NavigationTypes';
import Header from '../../shared/Feed/Header';
import { sizes } from '../../utils';
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
