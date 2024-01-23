import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../shared/Feed/Header';
import {
  Dimensions,
  Pressable,
  Text,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { sizes } from '../../utils/size';
import { appColor } from '../../constants';
import SwapBox from '../../components/SinglePostView/SwapBox';
import ActionButton from '../../shared/ActionButton';
import { updateTransactionDetailsBottomsheet } from '../../controller/BottomSheetController';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import TransferSuccessfulBottomsheet from '../../shared/TransferSuccessfulBottomsheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SelectTtoken from '../../components/Swap/SelectToken';
import SignTransactionBottomsheet from '../../shared/SignTransactionBottomsheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const balance = '24.2477';
function SwapMain() {
  const [isWithdrawalBottomsheetVisible, setBottomsheetvisibility] =
    useState(false);
  const [transactionStatus, setTransactionStatus] = useState<
    'loading' | 'failed' | 'success' | 'idle'
  >('idle');
  const [showdetails, setshowdetails] = useState(false);
  const [isTransferSuccesful, setTransferStatus] = useState(false);
  const [isDexVisible, setDexVisibility] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);
  const showSelectAssetBottomSheet = () => {
    setDexVisibility(true);
  };
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
    setDexVisibility(false);
  };
  const SwapDetails = () => {
    setshowdetails(!showdetails);
  };
  const handleSend = () => {
    Keyboard.dismiss();
 setTimeout(()=>{
  setBottomsheetvisibility(true);
  setTransactionStatus('loading');
 },100)
    setTimeout(() => {
      setTransactionStatus('success');
      setBottomsheetvisibility(false);
      setTransferStatus(true);
    }, 4000);
  };
  const dispatch = useAppDispatch();
  const fromAmount = useAppSelector((state) => state.SwapController.fromAmount);
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title={'Swap'} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
          paddingVertical: size.getHeightSize(16),
        }}
      >
        <SwapBox onOpenAssetSheet={showSelectAssetBottomSheet} />
        <View style={{ height: size.getHeightSize(24) }} />
        {fromAmount && (
          <View
            style={{
              minHeight: size.getHeightSize(48),
              marginBottom: size.getWidthSize(16),
              paddingVertical: size.getHeightSize(12),
              borderRadius: 8,
              gap: size.getWidthSize(11),
              borderWidth: 1,
              paddingHorizontal: size.getWidthSize(16),
              borderColor: appColor.grayDark,
              width: '100%',
            }}
          >
            <Pressable onPress={SwapDetails} style={styles.tcontainer}>
              <Text style={styles.sText}>
                1 APT = 4.99 USDC
                <Text style={styles.title}> ($1.02)</Text>
              </Text>

              {showdetails ? (
                <MaterialIcons
                  name="arrow-drop-up"
                  size={size.getHeightSize(24)}
                  color={appColor.kWhiteColor}
                />
              ) : (
                <MaterialIcons
                  name="arrow-drop-down"
                  size={size.getHeightSize(24)}
                  color={appColor.kWhiteColor}
                />
              )}
            </Pressable>

            {showdetails && (
              <View
                style={{
                  gap: size.getHeightSize(8),
                }}
              >
                <View style={styles.tcontainer}>
                  <Text style={styles.title}>Expected Output:</Text>
                  <Text style={styles.sText}>4.99 USDC</Text>
                </View>
                <View style={styles.tcontainer}>
                  <Text style={styles.title}>Minimum Received:</Text>
                  <Text style={styles.sText}>4.977 USDC</Text>
                </View>
                <View style={styles.tcontainer}>
                  <Text style={styles.title}>Price impact:</Text>
                  <Text style={styles.sText}>0.03%</Text>
                </View>
                <View style={styles.tcontainer}>
                  <Text style={styles.title}>Network Fees:</Text>
                  <Text style={styles.sText}>0.023 APT</Text>
                </View>
                <View style={styles.tcontainer}>
                  <Text style={styles.title}>Service Fees:</Text>
                  <Text style={styles.sText}>0.019 APT</Text>
                </View>
              </View>
            )}
          </View>
        )}
        <ActionButton
          callBack={handleSend}
          title={
            parseFloat(fromAmount) > parseFloat(balance)
              ? 'Insufficient Balance'
              : 'Swap'
          }
          fontColor={appColor.kTextColor}
          buttonBackgroundColor={appColor.kSecondaryButtonColor}
          disable={!fromAmount || parseFloat(fromAmount) > parseFloat(balance)}
        />
      </View>

      <TransferSuccessfulBottomsheet
        visibility={isTransferSuccesful}
        onClose={() => setTransferStatus(false)}
        callBack={() =>
          dispatch(
            updateTransactionDetailsBottomsheet({
              type: 'token_swap',
              visibility: true,
            })
          )
        }
      />
      <SelectTtoken
        visibility={isDexVisible}
        onClose={() => {
          setDexVisibility(false);
        }}
        callBack={() => {}}
        onSelectToken={handleTokenSelect}
      />
      <SignTransactionBottomsheet
        visibility={isWithdrawalBottomsheetVisible}
        onClose={() => {
          setBottomsheetvisibility(false);
          setTransactionStatus('idle');
        }}
        title="Sign transaction"
        callBack={() => {}}
        status={transactionStatus}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: appColor.kgrayTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  sText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  tcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SwapMain;
