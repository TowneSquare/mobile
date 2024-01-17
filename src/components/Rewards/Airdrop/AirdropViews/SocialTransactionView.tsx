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
import RewardEmptystate from '../../RewardEmptystate';
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
        <RewardEmptystate
          showButton
          buttonLabel="Send tokens to your frens"
          balance="0"
          balanceTitle="Social transaction balance"
          label="You haven't sent any tokens to other users on TowneSquare"
          description="When you send tokens, they will show up here together with the Cred Points earned"
          onPress={() => navigation.navigate('FollowersScreen')}
        />
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
});
