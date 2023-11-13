import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import DexSwapUserDisplay from '../../components/Rewards/UserDisplay/DexUserDisplay';
import { useState } from 'react';
import Transaction from '../../components/Rewards/Transactions/Transaction';
import DEXSwapBottomSheet from '../../components/Rewards/Transactions/DEXSwapBottomSheet';
import ArrowRight from '../../../assets/images/svg/Reward/ArrowRight';
import { DexProps } from '../../navigations/NavigationTypes';
import DEXBalanceBottomsheet from '../../components/Rewards/Transactions/DEXBalanceBottomsheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const refferal = [
  {
    username: 'username',
    name: 'name',
    price: 2000,
  },
  {
    username: 'username',
    name: 'name',
    price: 2000,
  },
  {
    username: 'username',
    name: 'name',
    price: 2000,
  },
  {
    username: 'username',
    name: 'name',
    price: 2000,
  },
];
const Dex = ({ route }: DexProps) => {
  const { type } = route.params;
  const [isDEXSwapBottomSheetVisible, setDEXSwapBottomSheetVisibility] =
    useState(false);
  const [isDexBalanceBottomsheetVisible, setBalanceBottomsheetVisibility] =
    useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={type} />
      <Pressable
        onPress={() => {
          refferal.length > 1
            ? setBalanceBottomsheetVisibility(true)
            : setDEXSwapBottomSheetVisibility(true);
        }}
        style={styles.container}
      >
        <Text style={styles.balance}>Balance</Text>
        <Text style={styles.balanceText}>
          {refferal.length > 1 ? '$64.32' : '$0'}
        </Text>
        <ArrowRight size={size.fontSize(24)} color={appColor.kWhiteColor} />
      </Pressable>
      {refferal.length < 1 ? (
        <View style={styles.view}>
          <Text style={styles.reward}>No rewards yet</Text>
          <Text style={styles.rewardText}>
            When your referrals make in-app transaction, your earnings will be
            shown here.
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{
            gap: size.getHeightSize(24),
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          {type === 'DEX swap' && (
            <View style={{}}>
              <Text style={styles.date}>TODAY</Text>
              {refferal.map((item, index) => (
                <Transaction key={index} type="send" />
              ))}
            </View>
          )}
          <View style={{}}>
            <Text style={styles.date}>TODAY</Text>
            {refferal.map((item, index) => (
              <DexSwapUserDisplay key={index} price={item.price} />
            ))}
          </View>
          <View style={{}}>
            <Text style={styles.date}>YESTERDAY</Text>
            {refferal.map((item, index) => (
              <DexSwapUserDisplay key={index} price={item.price} />
            ))}
          </View>
          <View style={{}}>
            <Text style={styles.date}>22 SEPTEMBER</Text>
            {refferal.map((item, index) => (
              <DexSwapUserDisplay key={index} price={item.price} />
            ))}
          </View>
        </ScrollView>
      )}

      <DEXSwapBottomSheet
        visibility={isDEXSwapBottomSheetVisible}
        onClose={() => setDEXSwapBottomSheetVisibility(false)}
        callBack={() => {}}
      />
      <DEXBalanceBottomsheet
        visibility={isDexBalanceBottomsheetVisible}
        onClose={() => setBalanceBottomsheetVisibility(false)}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default Dex;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: size.getWidthSize(16),
    marginHorizontal: size.getWidthSize(8),
    borderRadius: 40,
    borderColor: appColor.kGrayLight3,
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    height: size.getHeightSize(53),
    marginBottom: size.getHeightSize(16),
  },
  balance: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    flex: 1,
  },
  balanceText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reward: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginBottom: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
  },
  rewardText: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    paddingHorizontal: size.getWidthSize(16),
  },
  date: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(16),
    textAlign: 'left',
  },
});
