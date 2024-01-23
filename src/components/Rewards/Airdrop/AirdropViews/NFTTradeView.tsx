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
import Transaction from '../Transaction';
import { appColor } from '../../../../constants';
import RewardEmptystate from '../../RewardEmptystate';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const NFTTradeView = () => {
  const navigation = useNavigation();
  const transactions = [
    // {
    //   amount: 100,
    //   type: 'sold',
    // },
    // {
    //   amount: 100,
    //   type: 'bought',
    // },
    // {
    //   amount: 100,
    //   type: 'sold',
    // },
    // {
    //   amount: 100,
    //   type: 'bought',
    // },
    // {
    //   amount: 100,
    //   type: 'bought',
    // },
    // {
    //   amount: 100,
    //   type: 'sold',
    // },
    // {
    //   amount: 100,
    //   type: 'bought',
    // },
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
            <Balance title="NFT trade balance points" balance="200" />
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
          buttonLabel="List NFT for sale"
          balance="200"
          balanceTitle="DeFi trading points"
          label="You haven't traded any NFTs on TowneSquare"
          description=" When you buy or sell NFTs, they will show up here together with the Cred Points earned"
          onPress={() =>
            navigation.navigate('CreatePost', {
              whichPost: 'singlePost',
            })
          }
        />
      )}
    </>
  );
};

export default NFTTradeView;

const styles = StyleSheet.create({
  date: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(16),
  },
});
