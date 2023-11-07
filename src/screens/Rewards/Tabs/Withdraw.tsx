import { Dimensions, ScrollView, View, Text, StyleSheet } from 'react-native';
import { appColor } from '../../../constants';
import { useState } from 'react';
import { sizes } from '../../../utils';
import Header from '../../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import WithdrawAssets from '../../../components/Rewards/Transactions/Withdraw';
import SignTransactionBottomsheet from '../../../shared/SignTransactionBottomsheet';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Withdraw = () => {
  const [isWithdrawalBottomsheetVisible, setBottomsheetvisibility] =
    useState(false);
  const [transactionStatus, setTransactionStatus] = useState<
    'loading' | 'failed' | 'success' | 'idle'
  >('idle');
  const handleSend = () => {
    setBottomsheetvisibility(true);
    setTransactionStatus('loading');
    setTimeout(() => {
      setTransactionStatus('success');
    }, 4000);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Withdraw" />

      <ScrollView
        style={{
          marginTop: size.getHeightSize(8),
        }}
        contentContainerStyle={{
          paddingHorizontal: size.getWidthSize(16),
          gap: size.getHeightSize(8),
          paddingBottom: size.getHeightSize(72),
        }}
      >
        <View style={styles.balanceView}>
          <Text style={styles.balanceText}>Total balance</Text>
          <Text style={styles.balance}>$64</Text>
        </View>
        <WithdrawAssets callBack={handleSend} type="aptos" />
        <WithdrawAssets callBack={handleSend} type="usdc" />
      </ScrollView>
      <SignTransactionBottomsheet
        showToast
        onClose={() => setBottomsheetvisibility(false)}
        title="Withdraw APT"
        visibility={
          transactionStatus === 'loading' || transactionStatus === 'failed'
        }
        status={transactionStatus}
      />
    </SafeAreaView>
  );
};

export default Withdraw;
const styles = StyleSheet.create({
  balanceView: {
    height: size.getHeightSize(72),
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: appColor.kGrayLight3,

    paddingHorizontal: size.getWidthSize(16),
  },
  balanceText: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
  },
  balance: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
  },
});
