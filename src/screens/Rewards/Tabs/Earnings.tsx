import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import InfoIcon from '../../../../assets/images/svg/InfoIcon';
import Refferal from '../../../../assets/images/svg/Reward/Refferal';
import ShareIcon from '../../../../assets/images/svg/Reward/ShareIcon';
import PeopleIcon from '../../../../assets/images/svg/Reward/PeopleIcon';
import SwapIcon from '../../../../assets/images/svg/Reward/SwapIcon';
import NFTIcon from '../../../../assets/images/svg/Reward/NFTIcon';
import TipIcon from '../../../../assets/images/svg/Reward/TipIcon';
import ArrowRight from '../../../../assets/images/svg/Reward/ArrowRight';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Earnings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentView}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: size.getHeightSize(32),
        }}
      >
        <View style={styles.row}>
          <Text style={styles.text}>Refferals</Text>
          <InfoIcon size={size.getHeightSize(24)} />
        </View>
        <Text style={styles.description}>
          Refer friends to join TowneSquare! Get TS Points and earn every time
          they make a transaction in the app
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginVertical: size.getHeightSize(32),
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          <Refferal
            height={size.getHeightSize(91)}
            width={size.getWidthSize(182)}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('ShareReferralCode')}
          style={styles.shareRow}
        >
          <ShareIcon size={size.getHeightSize(24)} />
          <Text style={styles.refferalText}>Share my referral code</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MyRefferals')}
          style={styles.row1}
        >
          <PeopleIcon size={size.getHeightSize(24)} />
          <Text style={styles.seeReferrals}>See my referrals</Text>
        </Pressable>
        <View style={styles.balanceView}>
          <View style={styles.gap}>
            <Text style={styles.balanceText}>TOTAL BALANCE</Text>
            <Text style={styles.balance}>$191.21</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('Withdraw')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Withdraw</Text>
          </Pressable>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text2}>Earnings</Text>
          <InfoIcon size={size.getHeightSize(24)} />
        </View>
        <View style={styles.view2}>
          <Pressable
            onPress={() => navigation.navigate('Dex', { type: 'DEX swap' })}
            style={styles.card}
          >
            <SwapIcon size={size.getHeightSize(32)} />
            <Text style={styles.label}>DEX swap</Text>
            <Text style={styles.amount}>$0</Text>
            <ArrowRight size={size.fontSize(24)} color={appColor.kWhiteColor} />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Dex', { type: 'NFT trade' })}
            style={styles.card}
          >
            <NFTIcon size={size.getHeightSize(32)} />
            <Text style={styles.label}>NFT trade</Text>
            <Text style={styles.amount}>$86.88</Text>
            <ArrowRight size={size.fontSize(24)} color={appColor.kWhiteColor} />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('Dex', { type: 'User transaction' })
            }
            style={styles.card}
          >
            <TipIcon size={size.getHeightSize(32)} />
            <Text style={styles.label}>Social transactions</Text>
            <Text style={styles.amount}>$86.88</Text>
            <ArrowRight size={size.fontSize(24)} color={appColor.kWhiteColor} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Earnings;
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: appColor.feedBackground,
  },
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
  refferalText: {
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.primaryLight,
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  shareRow: {
    alignSelf: 'center',
    paddingVertical: size.getHeightSize(12),
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
  balanceView: {
    marginVertical: size.getHeightSize(32),
    borderRadius: 10,
    marginHorizontal: size.getWidthSize(16),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    gap: size.getHeightSize(2),
    flex: 1,
  },
  balanceText: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(16),
  },
  balance: {
    fontSize: size.fontSize(27),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(34),
    paddingBottom: size.getHeightSize(8),
  },
  button: {
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    paddingVertical: size.getHeightSize(7),
    paddingHorizontal: size.getWidthSize(16),
    minHeight: size.getHeightSize(36),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
  },
  text2: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    borderRadius: 10,
    backgroundColor: appColor.kgrayDark2,
  },
  label: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginLeft: size.getWidthSize(10),
    flex: 1,
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  view2: {
    gap: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(8),
  },
});
