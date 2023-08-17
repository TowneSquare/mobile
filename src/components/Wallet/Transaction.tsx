import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import BarCodeIcon from '../../../assets/images/svg/BarcodeIcon';
import SendIcon from '../../../assets/images/svg/SendIcon';
import SwapIcon from '../../../assets/images/svg/SwapIcon';
import { images, fonts, appColor } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
import Receive from '../../../assets/images/svg/Receive';
import SendTokenIcon from '../../../assets/images/svg/SendTokenIcon';
import SwapToken from '../../../assets/images/svg/SwapToken';
const { height, width } = Dimensions.get('window');
import ArrowUp from '../../../assets/images/svg/ArrowUp';
const size = new sizes(height, width);
interface TransactionProps {
  date: string;
  asset?: string;
  type: 'send' | 'receive' | 'swap';
  assetType?: 'pinnedNFT' | 'Token';
}

interface ReceiveTransaction extends TransactionProps {
  imageUri: string;
  from: string;
  pinnedNftUri?: string;
}

interface SendTransaction extends TransactionProps {
  imageUri: string;
  to: string;
  pinnedNftUri?: string;
}
interface SwapTransaction extends TransactionProps {
  fromValue: string;

  fromAssetImageUri: string;
  toValue: string;
  toAssetImageUri: string;
}
type TransactionsProps = SwapTransaction | ReceiveTransaction | SendTransaction;
const Transaction = ({
  asset,
  date,
  type,
  ...transactionProps
}: TransactionsProps) => {
  if (type === 'send') {
    const props = transactionProps as SendTransaction;
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.date}>{date}</Text>
        <SendTokenIcon />
        <View style={styles.view2}>
          <Text style={styles.recipent}>TO</Text>
          <View style={styles.view3}>
            <Avatar
              source={{ uri: props.imageUri }}
              rounded
              size={size.getHeightSize(16)}
            />
            <Text style={styles.to}>{props.to}</Text>
          </View>
        </View>
        {props.assetType === 'Token' && (
          <Text style={styles.tokenText}>
            -{asset}
            <Text style={[styles.tokenText, { fontFamily: 'Outfit-Regular' }]}>
              {' '}
              APT
            </Text>
          </Text>
        )}
        {props.assetType === 'pinnedNFT' && (
          <View
            style={{
              width: size.getHeightSize(40),
              height: size.getHeightSize(40),
              borderRadius: 4,
            }}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 4,
              }}
              source={{ uri: props.pinnedNftUri }}
            />
          </View>
        )}
      </View>
    );
  }
  if (type === 'receive') {
    const props = transactionProps as ReceiveTransaction;
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.date}>{date}</Text>
        <Receive />
        <View style={styles.view2}>
          <Text style={styles.recipent}>FROM</Text>
          <View style={styles.view3}>
            <Avatar
              source={{ uri: props.imageUri }}
              rounded
              size={size.getHeightSize(16)}
            />
            <Text style={styles.to}>{props.from}</Text>
          </View>
        </View>
        {props.assetType === 'Token' && (
          <Text style={styles.tokenText}>
            -{asset}
            <Text style={[styles.tokenText, { fontFamily: 'Outfit-Regular' }]}>
              {' '}
              APT
            </Text>
          </Text>
        )}
        {props.assetType === 'pinnedNFT' && (
          <View
            style={{
              width: size.getHeightSize(40),
              height: size.getHeightSize(40),
              borderRadius: 4,
            }}
          >
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 4,
              }}
              source={{ uri: props.pinnedNftUri }}
            />
          </View>
        )}
      </View>
    );
  }
  if (type === 'swap') {
    const props = transactionProps as SwapTransaction;
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.date}>{date}</Text>
        <SwapToken />
        <Text style={styles.swapText}>Swap</Text>
        <View style={styles.swapContent}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.tokenText}>{props.fromValue}</Text>
            <View style={styles.row}>
              <Avatar
                source={{ uri: props.fromAssetImageUri }}
                size={size.getHeightSize(18)}
                rounded
              />
              <Text
                style={[styles.tokenText, { fontFamily: 'Outfit-Regular' }]}
              >
                APT
              </Text>
            </View>
          </View>
          <Text style={styles.recipent}>TO</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.tokenText}>{props.toValue}</Text>
            <View style={styles.row}>
              <Avatar
                source={{ uri: props.toAssetImageUri }}
                size={size.getHeightSize(18)}
                rounded
              />
              <Text
                style={[styles.tokenText, { fontFamily: 'Outfit-Regular' }]}
              >
                USDC
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default Transaction;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    paddingVertical: size.getWidthSize(16),
    paddingHorizontal: size.getWidthSize(8),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
    alignSelf: 'center',
    marginHorizontal: size.getWidthSize(16),
  },
  date: {
    color: appColor.grayLight,
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(16),
    marginRight: size.getWidthSize(8),
  },
  recipent: {
    color: appColor.grayLight,
    fontSize: size.fontSize(11),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(14),
    letterSpacing: 0.44,
    textTransform: 'uppercase',
  },
  view2: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: size.getWidthSize(8),
    gap: size.getHeightSize(3),
    alignSelf: 'flex-start',
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
  },
  to: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  tokenText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  swapText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  swapContent: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
  },
});
