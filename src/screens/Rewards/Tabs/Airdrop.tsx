import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { sizes } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import NftTrade from '../../../components/Rewards/Airdrop/Transaction';
import DexSwap from '../../../components/Rewards/Airdrop/DexSwap';
import MyRefferals from '../../../components/Rewards/Airdrop/MyRefferals';
import DefiTrades from '../../../components/Rewards/Airdrop/DefiTrades';
import Balance from '../../../components/Rewards/Airdrop/Balance';
import NftHoldings from '../../../components/Rewards/Airdrop/NftHoldings';
import Cards from '../../../components/Rewards/Airdrop/Cards';
import { appColor } from '../../../constants';
import InfoIcon from '../../../../assets/images/svg/InfoIcon';
import Refferal from '../../../../assets/images/svg/Reward/Refferal';
import Avatar from '../../../../assets/images/svg/Reward/Avatar';
import SwapIcon from '../../../../assets/images/svg/Reward/SwapIcon';
import ShareIcon from '../../../../assets/images/svg/Reward/ShareIcon';
import PeopleIcon from '../../../../assets/images/svg/Reward/PeopleIcon';
import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';
import TradeIcon from '../../../../assets/images/svg/Reward/TradeIcon';
import NFTIcon from '../../../../assets/images/svg/Reward/NFTIcon';
import TipIcon from '../../../../assets/images/svg/Reward/TipIcon';
import { updateRewardBottomsheetVisibility } from '../../../controller/RewardController';
import { useAppDispatch } from '../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Airdrop = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(32),
        }}
      >
        <View style={styles.row}>
          <Text style={styles.text}>Refferals</Text>
          <InfoIcon
            onPress={() => dispatch(updateRewardBottomsheetVisibility(true))}
            size={size.getHeightSize(24)}
          />
        </View>
        <Text style={styles.description}>
          Refer friends to join TowneSquare! Get TS Points and earn every time
          they make a transaction in the app
        </Text>
        <View style={styles.refferalView}>
          <Refferal
            height={size.getHeightSize(91)}
            width={size.getWidthSize(182)}
          />
          <View
            style={{
              gap: size.getHeightSize(4),
              flex: 1,
            }}
          >
            <View style={styles.bonusView}>
              <Text style={styles.bonusText}>+35% bonus</Text>
            </View>
            <Text style={styles.refferalText}>
              TS Points from your referrals
            </Text>
          </View>
        </View>
        <View style={styles.shareRow}>
          <ShareIcon size={size.getHeightSize(24)} />
          <Text style={styles.shareText}>Share my referral code</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('MyRefferals')}
          style={styles.row1}
        >
          <PeopleIcon size={size.getHeightSize(24)} />
          <Text style={styles.seeReferrals}>See my referrals</Text>
        </Pressable>
        <View style={styles.row2}>
          <Text style={styles.text2}>TS Points</Text>
          <InfoIcon size={size.getHeightSize(24)} />
        </View>
        <View style={styles.claimView}>
          <View style={styles.view2}>
            <View
              style={{
                gap: size.getHeightSize(4),
              }}
            >
              <Text style={styles.tsPoints}>TOTAL TS POINT</Text>
              <View style={styles.row3}>
                <Text style={styles.balanaceText}>9,990,999</Text>
                <PointsIcon size={size.getHeightSize(20)} />
              </View>
            </View>
            <View style={styles.claimButton}>
              <Text style={styles.claimButtonText}>Claim</Text>
            </View>
          </View>
          <Text style={styles.comingSoon}>COMING SOON</Text>
        </View>
        <View style={styles.cards}>
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'My refferals',
              });
            }}
            price="15,4954"
            title="Referrals"
            icon={<Avatar size={size.getHeightSize(24)} />}
          />
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'NFT holdings',
              });
            }}
            price="15,4954"
            title="NFT holding"
            icon={<NFTIcon size={size.getHeightSize(24)} />}
          />
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'Defi trading',
              });
            }}
            price="15,4954"
            title="DeFi trading"
            icon={<TradeIcon size={size.getHeightSize(24)} />}
          />
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'Dex Swap',
              });
            }}
            price="15,4954"
            title=" DEX swap on TS"
            icon={<SwapIcon size={size.getHeightSize(24)} />}
          />
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'NFT trade',
              });
            }}
            price="15,4954"
            title="NFT trade on TS"
            icon={<NFTIcon size={size.getHeightSize(24)} />}
          />
          <Cards
            onPress={() => {
              navigation.navigate('Airdrops', {
                type: 'Social transaction',
              });
            }}
            price="15,4954"
            title="Social transactions on TS"
            icon={<TipIcon size={size.getHeightSize(24)} />}
          />
        </View>
      </ScrollView>
      {/* <Balance title='NFT holdings balance' balance='' /> */}
      {/* <NftTrade type="bought" amount={100} /> */}
      {/* <DexSwap /> */}
      {/* <NftHoldings amount={1000} name="" nftUri="" price="" /> */}
      {/* <MyRefferals active amount={100} /> */}
      {/* <Cards
        price="15,4954"
        title="Referrals"
        icon={<TradeIcon size={size.getHeightSize(24)} />}
      /> */}
    </View>
  );
};

export default Airdrop;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(24),
    paddingHorizontal: size.getWidthSize(16),
  },
  text: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  description: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(18),
    marginTop: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
  },
  refferalView: {
    alignSelf: 'center',
    marginVertical: size.getHeightSize(24),
    paddingHorizontal: size.getWidthSize(24.5),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(24),
  },
  bonusView: {
    paddingVertical: size.getHeightSize(5.47),
    paddingHorizontal: size.getWidthSize(13),
    borderWidth: 2,
    borderColor: '#00EEFD',
    backgroundColor: '#00777E',
    borderRadius: 7,
  },
  bonusText: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
    textAlign: 'center',
  },
  refferalText: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(16),
    textAlign: 'center',
  },
  shareRow: {
    alignSelf: 'center',
    paddingVertical: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(24),
  },
  seeReferrals: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  row1: {
    paddingHorizontal: size.getWidthSize(16),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
    paddingVertical: size.getHeightSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    justifyContent: 'center',
  },
  shareText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.primaryLight,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(24),
    marginBottom: size.getHeightSize(16),
  },
  text2: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  claimView: {
    marginHorizontal: size.getWidthSize(16),
    paddingHorizontal: size.getHeightSize(16),
    paddingVertical: size.getHeightSize(16),
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 10,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tsPoints: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(16),
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  balanaceText: {
    fontSize: size.fontSize(27),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(34),
  },
  claimButton: {
    width: size.getWidthSize(100),
    minHeight: size.getHeightSize(36),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    opacity: 0.4,
    justifyContent: 'center',
  },
  claimButtonText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    textAlign: 'center',
  },
  comingSoon: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(16),
    textAlign: 'right',
    marginBottom: size.getHeightSize(8),
    marginRight: size.getWidthSize(7),
  },
  cards: {
    marginTop: size.getHeightSize(16),
    gap: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
  },
});
