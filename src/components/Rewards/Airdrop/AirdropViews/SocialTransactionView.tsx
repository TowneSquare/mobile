import {
  View,
  Text,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import Transaction from '../Transaction';
import { appColor } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const SocialTransactionView = () => {
  const navigation = useNavigation();
  const transactions = [
    {
      amount: 100,
      type: 'sold',
    },
    {
      amount: 100,
      type: 'bought',
    },
    {
      amount: 100,
      type: 'sold',
    },
    {
      amount: 100,
      type: 'bought',
    },
    {
      amount: 100,
      type: 'bought',
    },
    {
      amount: 100,
      type: 'sold',
    },
    {
      amount: 100,
      type: 'bought',
    },
  ];
  return (
    <>
      {transactions.length > 0 ? (
        <ScrollView>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              marginTop: size.getHeightSize(16),
            }}
          >
            <Balance title="Social transaction balance" balance="200" />
            <View style={{}}>
              <Text style={styles.date}>TODAY</Text>
              {transactions.map((transaction, index) => (
                <Transaction
                  amount={transaction.amount}
                  type={transaction.type as 'sold' | 'bought'}
                />
              ))}
              <Text style={styles.date}>YESTERDAY</Text>
              {transactions.map((transaction, index) => (
                <Transaction
                  amount={transaction.amount}
                  type={transaction.type as 'sold' | 'bought'}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.view1}>
          <Balance title="DeFi trading points" balance="200" />
          <View style={styles.view2}>
            <Text style={styles.label}>
              You haven't sent any tokens to other users on TowneSquare
            </Text>
            <Text style={styles.description}>
              When you send tokens, they will show up here together with the TS
              Points earned
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate('FollowersScreen');
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Send tokens to your frens</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default SocialTransactionView;

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
