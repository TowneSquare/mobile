import { Text, StyleSheet, Dimensions, Pressable, View } from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
import OpenLinkIcon from '../../../assets/images/svg/OpenLinkIcon';
import BottomsheetWrapper from '../../shared/BottomsheetWrapper';
import { updateTransactionDetailsBottomsheet } from '../../controller/BottomSheetController';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const Transactiondetails = () => {
  const dispatch = useAppDispatch();
  const properties = useAppSelector(
    (state) => state.bottomSheetController.handleTransactiondetailBottomsheet
  );

  return (
    <BottomsheetWrapper
      onClose={() =>
        dispatch(
          updateTransactionDetailsBottomsheet({
            visibility: false,
            type: undefined,
          })
        )
      }
      backdropOpacity={0.7}
      visibility={properties.visibility}
    >
      <Text style={styles.title}>Transaction details</Text>
      <View
        style={{
          gap: size.getHeightSize(8),
          alignSelf: 'center',
          marginHorizontal: size.getWidthSize(16),
          width: '100%',
          marginTop: size.getHeightSize(32),
        }}
      >
        <View style={styles.row}>
          <Text style={styles.text1}>STATUS</Text>
          <Text style={styles.text2}>Success</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>TIMESTAMP</Text>
          <Text style={styles.text2}>20 Sep 2023 • 02:41:52 PM UTC</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>TYPE</Text>
          <Text style={styles.text2}>
            {properties.type === 'token_swap' ? 'Token Swap' : 'Token Transfer'}
          </Text>
        </View>
        {properties.type === 'token_transfer' && (
          <View style={styles.row}>
            <Text style={styles.text1}>FROM</Text>
            <Text style={styles.text2}>UsernameX @jczhang</Text>
          </View>
        )}
        {properties.dex && (
          <View style={styles.row}>
            <Text style={styles.text1}>DEX</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: size.getWidthSize(4),
              }}
            >
              <Avatar
                source={images.aptosMonkey3}
                rounded
                size={size.getHeightSize(16)}
              />
              <Text style={styles.text2}>LiquidSwap</Text>
            </View>
          </View>
        )}
        {properties.type === 'token_transfer' ? (
          <View style={styles.row}>
            <Text style={styles.text1}>TO</Text>
            <Text style={styles.text2}>BiCox @bicco2</Text>
          </View>
        ) : (
          <View style={styles.row}>
            <Text style={styles.text1}>TOKEN TRANSFERRED</Text>
            <View>
              <Text style={styles.text2}>28.9021 APT</Text>
              <Text style={styles.text2}>12.8912 CAKE</Text>
            </View>
          </View>
        )}
        {properties.type === 'token_transfer' && (
          <View style={styles.row}>
            <Text style={styles.text1}>TOTAL SENT </Text>
            <Text style={styles.text2}>20 USDC</Text>
          </View>
        )}
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>View on www.aptoscan.com</Text>
        <OpenLinkIcon size={size.getHeightSize(20)} />
      </View>
    </BottomsheetWrapper>
  );
};

export default Transactiondetails;
const styles = StyleSheet.create({
  title: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: size.getHeightSize(8),
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
    alignSelf: 'center',
  },
  text1: {
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    color: appColor.kGrayscale,
    fontFamily: 'Outfit-SemiBold',
  },
  text2: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
    alignSelf: 'flex-start',
    marginTop: size.getHeightSize(24),
    marginBottom: size.getHeightSize(48),
  },
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.primaryLight,
    fontFamily: 'Outfit-Regular',
  },
});
