import {
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Text,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height, width } = Dimensions.get('window');
import { Avatar } from 'react-native-elements';
import { sizes } from '../../utils';
import * as Animatable from 'react-native-animatable';
import { appColor, images } from '../../constants';
import Header from '../../shared/Feed/Header';
import React, { useState, useEffect } from 'react';
import SelectTokenSheet from '../../components/DM/SelectTokenSheet';
import Aptos2 from '../../../assets/images/svg/Aptos2';
import { SafeAreaView } from 'react-native-safe-area-context';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import { SendTokenProps } from '../../navigations/NavigationTypes';
import InfoIcon from '../../../assets/images/svg/InfoIcon';
import ChatTipIcon from '../../../assets/images/svg/ChatTipIcon';
import InfoWarningIcon from '../../../assets/images/svg/InfoWarningIcon';
const size = new sizes(height, width);

const SendToken = ({ navigation }: SendTokenProps) => {
  const [showSelectTokenSheet, setSelectTokenSheetVisibility] = useState(false);

  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(undefined);
  const [sendStatus, setSendStatus] = useState<
    'idle' | 'successfull' | 'failed' | 'loading'
  >('idle');
  useEffect(() => {
    setTimeout(() => {
      setBalance(30);
    }, 3000);
  }, []);
  const isSendButtonDisabled =
    amount > balance ||
    balance === undefined ||
    !amount ||
    sendStatus === 'loading';
  const handleSend = () => {
    setSendStatus('loading');
    setTimeout(() => {
      setSendStatus('successfull');
    }, 4000);
  };
  if (sendStatus === 'successfull') {
    navigation.navigate('TokenSuccess', { popNo: 2 }), setSendStatus('idle');
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Header title="Send token to" />
      <View
        style={{
          flex: 1,
        }}
      >
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              alignItems: 'center',
              height: '100%',
            }}
          >
            <View
              style={{
                marginTop: size.getHeightSize(32),
              }}
            >
              <Avatar
                source={images.siothian}
                rounded
                size={size.getHeightSize(84)}
              />
            </View>
            <View
              style={{
                marginTop: size.getHeightSize(16),
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: size.getWidthSize(8),
                }}
              >
                <Text style={styles.name}>UsernameX</Text>
                <GreyBadge size={size.getHeightSize(18)} />
              </View>
              <Text style={styles.username}>@jczhang</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: size.getWidthSize(8),
                marginTop: size.getHeightSize(32),
              }}
            >
              <TextInput
                editable={sendStatus !== 'loading'}
                placeholder="Insert amount"
                placeholderTextColor={appColor.kgrayTextColor}
                cursorColor={appColor.primaryLight}
                keyboardType="number-pad"
                onChangeText={setAmount}
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      amount > balance
                        ? appColor.kErrorText
                        : appColor.kGrayscale,
                  },
                ]}
              />
              <Pressable
                onPress={() => setSelectTokenSheetVisibility(true)}
                style={styles.dropDown}
              >
                <Aptos2 size={size.getHeightSize(24)} />
                <Text style={styles.APT}>APT</Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={size.getHeightSize(24)}
                  color={appColor.kWhiteColor}
                />
              </Pressable>
            </View>
            <View style={styles.balanceRow}>
              <Text
                style={[
                  styles.balance,
                  {
                    color:
                      amount > balance
                        ? appColor.kErrorText
                        : appColor.grayLight,
                  },
                ]}
              >
                Available balance:
              </Text>
              {balance === undefined ? (
                <ActivityIndicator
                  size={size.getHeightSize(16)}
                  color={appColor.primaryLight}
                />
              ) : (
                <Text
                  style={[
                    styles.balance,
                    {
                      color:
                        amount > balance
                          ? appColor.kErrorText
                          : appColor.grayLight,
                    },
                  ]}
                >
                  30 APT
                </Text>
              )}
            </View>
            {sendStatus === 'loading' && (
              <Animatable.View
                animation="slideInUp"
                duration={200}
                style={styles.infoView}
              >
                <InfoIcon size={size.getHeightSize(24)} />
                <Text style={styles.infoText}>
                  Sign the transaction in your wallet to complete the payment
                </Text>
              </Animatable.View>
            )}
            {sendStatus === 'idle' && (
              <>
                <View style={styles.view}>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Recipent gets</Text>
                    <Text
                      style={[styles.rowText, { color: appColor.kTextColor }]}
                    >
                      {amount ? `${amount} USDC` : '-'}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>Service fee</Text>
                    <Text
                      style={[styles.rowText, { color: appColor.kTextColor }]}
                    >
                      0.15%
                    </Text>
                  </View>
                </View>
                <View style={styles.row2}>
                  <Text
                    style={[styles.rowText, { fontFamily: 'Outfit-SemiBold' }]}
                  >
                    Total
                  </Text>
                  <Text
                    style={[
                      styles.rowText,
                      {
                        fontFamily: 'Outfit-SemiBold',
                        color: appColor.kTextColor,
                      },
                    ]}
                  >
                    {amount
                      ? `${
                          parseFloat(amount) + 0.0015 * parseFloat(amount)
                        } USDC`
                      : '-'}
                  </Text>
                </View>
              </>
            )}

            {sendStatus === 'failed' && (
              <View style={styles.failedView}>
                <InfoWarningIcon size={size.getHeightSize(24)} />
                <Text style={styles.failedText}>Transaction failed</Text>
              </View>
            )}
            <View style={{ height: size.getHeightSize(220) }} />
            <View
              style={{
                width: '100%',
                gap: size.getHeightSize(8),
                paddingBottom: size.getHeightSize(16),
              }}
            >
              <View
                style={{
                  opacity: isSendButtonDisabled ? 0.4 : 1,
                }}
              >
                <Pressable
                  disabled={isSendButtonDisabled}
                  onPress={handleSend}
                  style={{ ...styles.sendButton }}
                >
                  {sendStatus === 'loading' && (
                    <ActivityIndicator
                      size={size.getHeightSize(24)}
                      color={appColor.kWhiteColor}
                    />
                  )}
                  {sendStatus === 'idle' && (
                    <Text style={styles.sendText}>Send</Text>
                  )}
                  {sendStatus === 'failed' && (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: size.getWidthSize(8),
                      }}
                    >
                      <ChatTipIcon size={size.getHeightSize(24)} />
                      <Text style={styles.sendText}>Send {amount} USDC</Text>
                    </View>
                  )}
                </Pressable>
              </View>

              <View style={styles.cancelButton}>
                <Text onPress={navigation.goBack} style={styles.cancelText}>
                  Cancel
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <SelectTokenSheet
        callBack={() => {
          setSelectTokenSheetVisibility(false);
        }}
        visibility={showSelectTokenSheet}
        onClose={() => setSelectTokenSheetVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default SendToken;
const styles = StyleSheet.create({
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(16),
    width: '100%',
    paddingHorizontal: size.getWidthSize(8),
  },
  cancelButton: {
    minHeight: size.getHeightSize(48),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  sendButton: {
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
  balance: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  view: {
    marginTop: size.getHeightSize(32),
    gap: size.getHeightSize(16),
    paddingHorizontal: size.widthSize(8),
    paddingBottom: size.getHeightSize(16),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kWhiteColor,
    width: '100%',
  },
  balanceRow: {
    marginTop: size.getHeightSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(5),
    alignSelf: 'flex-start',
    marginLeft: size.getWidthSize(8),
  },
  dropDown: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    minHeight: size.getHeightSize(48),
  },
  textInput: {
    width: size.getWidthSize(184),
    minHeight: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    borderColor: appColor.kGrayscale,
    color: appColor.kTextColor,
    backgroundColor: appColor.feedBackground,
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(24),
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(16),
    backgroundColor: appColor.feedBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColor.grayDark,
    marginBottom: size.getHeightSize(37),
    marginTop: size.getHeightSize(32),
  },
  infoText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    flex: 1,
  },
  failedView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: appColor.kErrorText,
    paddingHorizontal: size.getWidthSize(24),
    paddingVertical: size.getHeightSize(24),
    width: '100%',
    backgroundColor: appColor.feedBackground,
    marginBottom: size.getHeightSize(35),
    marginTop: size.getHeightSize(32),
  },
  failedText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
});
