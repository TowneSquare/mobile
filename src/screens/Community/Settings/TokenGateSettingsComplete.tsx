import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NftIcon from '../../../../assets/images/svg/NftIcon';
import SwitchIcon from '../../../../assets/images/svg/SwitchIcon';
import { appColor } from '../../../constants';
import { TokenGateSettingsCompleteProps } from '../../../navigations/NavigationTypes';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TokenGateSettingsComplete = ({
  route,
}: TokenGateSettingsCompleteProps) => {
  const { asset } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Token-gated" />
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: appColor.grayLight,
          width: size.getWidthSize(280),
          height: size.getHeightSize(261.125),
          alignSelf: 'center',
          paddingHorizontal: size.getWidthSize(16),
          marginTop: size.getHeightSize(35.44),
        }}
      >
        <View
          style={{
            marginTop: size.getHeightSize(16),
            alignSelf: 'center',
            height: size.getHeightSize(133.509),
            width: size.getWidthSize(131.125),
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 8,
            }}
            source={{ uri: asset.nftImageUri }}
          />
        </View>
        {asset.type === 'NFT' ? (
          <Text style={styles.text}>Siothians</Text>
        ) : (
          <Text style={styles.text}>{asset.coinId}</Text>
        )}
        {asset.type === 'NFT' ? (
          <Text style={styles.leadingText}>
            Community is token-gated with SIOthian NFT's
          </Text>
        ) : (
          <Text style={styles.leadingText}>
            Community is token-gated with {asset.name} {`(${asset.coinId})`}{' '}
            token
          </Text>
        )}
      </View>
      <Text style={styles.weldone}>Well done!</Text>
      {asset.type === 'crypto_asset' ? (
        <Text style={styles.anyAmount}>
          New members will need to hold{' '}
          <Text style={styles.amountBold}>
            {' '}
            {asset.amount ? asset.amount : 'ANY AMOUNT'}{' '}
          </Text>
          of <Text style={styles.amountBold}>{asset.name}</Text> to be able to
          join the community.
        </Text>
      ) : (
        <Text style={styles.description2}>
          New members willv need to hold at least one NFT from this collection
          to join the community.
        </Text>
      )}
      <View style={styles.editButton}>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
      <View style={styles.container}>
        <NftIcon size={size.getHeightSize(24)} />
        <Text style={styles.text3}>Switch to NFT Token-gated</Text>
      </View>
      <View style={styles.container1}>
        <SwitchIcon size={size.getHeightSize(24)} />
        <Text style={styles.text3}>Switch to NON Token-gated</Text>
      </View>
    </SafeAreaView>
  );
};

export default TokenGateSettingsComplete;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(37),
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
  },
  text2: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  weldone: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(37),
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
  },
  description2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    marginHorizontal: size.getWidthSize(16),
  },
  editButton: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    minHeight: size.getHeightSize(48),
    justifyContent: 'center',

    paddingVertical: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(8),
    backgroundColor: appColor.kWhiteColor,
    marginTop: size.getHeightSize(32),
  },
  editText: {
    textAlign: 'center',
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
  },
  text3: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20.5),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appColor.kGrayLight3,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(20.5),
    paddingBottom: size.getHeightSize(12.5),
    marginBottom: size.getHeightSize(16),
  },
  anyAmount: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    marginHorizontal: size.getWidthSize(16),
  },
  amountBold: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
});
