import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Avatar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Aptos2 from '../../../assets/images/svg/Aptos2';
import ChatTipIcon from '../../../assets/images/svg/ChatTipIcon';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import InfoIcon from '../../../assets/images/svg/InfoIcon';
import InfoWarningIcon from '../../../assets/images/svg/InfoWarningIcon';
import SelectTokenSheet from '../../components/DM/SelectTokenSheet';
import { sendTokenTransaction } from '../../utils/walletFunctions';
import { appColor, images } from '../../constants';
import { SendTokenProps } from '../../navigations/NavigationTypes';
import Header from '../../shared/Feed/Header';
import { sizes } from '../../utils';
import { useAppSelector } from '../../controller/hooks';
import { getTokenLists } from '../../utils/walletFunctions';
import {
  getuserDeviceToken,
  sendTipNotification,
} from '../../services/PushNotification';
import { getAssetBalance } from '../../utils/walletFunctions';
import { isUrlEncoded } from '../../utils/helperFunction';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const SendToken = ({ navigation, route: { params } }: SendTokenProps) => {
  const { address, nickname, pfp, username, receiverId, response } = params;
  const currentUserName = useAppSelector(
    (state) => state.USER.UserData.username
  );
  const currentUserAddress = useAppSelector(
    (state) => state.USER.UserData.aptosWallet
  );

  const [showSelectTokenSheet, setSelectTokenSheetVisibility] = useState(false);
  const [selectedToken, setToken] = useState(getTokenLists()[0]);

  const [amount, setAmount] = useState('');
  const [isFetchingCoinBalance, setFetching] = useState(false);
  const [balance, setBalance] = useState(undefined);
  const [sendStatus, setSendStatus] = useState<
    'idle' | 'successfull' | 'failed' | 'loading'
  >('idle');
  useEffect(() => {
    (async () => {
      setFetching(true);
      const balance = await getAssetBalance(
        currentUserAddress,
        selectedToken.coinType,
        Number(selectedToken.decimal)
      );
      setBalance(balance);
      setFetching(false);
    })();
    // setTimeout(() => {
    //   setBalance(30);
    // }, 3000);
  }, [response, selectedToken]);

  useEffect(() => {
    if (response === 'approved') {
      setSendStatus('successfull');
      (async () => {
        await getuserDeviceToken(receiverId).then(async (token) => {
          console.log(`Gotten token here: ${token}`);
          token &&
            (await sendTipNotification(token, {
              title: 'TowneSquare',
              msg: `${currentUserName} sent you ${amount} ${selectedToken.symbol}. `,
            }));
        });
      })();
    } else if (response === 'dismissed') {
      setSendStatus('idle');
    } else if (response === 'rejected') {
      setSendStatus('failed');
    } else setSendStatus('idle');
  }, [response]);
  const isSendButtonDisabled =
    amount > balance ||
    balance === undefined ||
    !amount ||
    sendStatus === 'loading';
  const handleSend = async () => {
    setSendStatus('loading');

    setTimeout(() => {
      sendTokenTransaction(
        address,
        Number(amount),
        `SendToken/${address}/${encodeURIComponent(
          pfp
        )}/${receiverId}/${username}/${nickname}` as any,
        selectedToken.decimal,
        selectedToken.coinType
      );
    }, 700);
  };
  if (sendStatus === 'successfull') {
    navigation.navigate('TokenSuccess', {
      popNo: 2,
      amount,
      nickname,
      pfp: isUrlEncoded(pfp)
        ? decodeURIComponent(decodeURIComponent(pfp))
        : pfp,
      username,
      tokenSymbol: selectedToken.symbol,
    }),
      setSendStatus('idle');
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
                source={{
                  uri: isUrlEncoded(pfp)
                    ? decodeURIComponent(decodeURIComponent(pfp))
                    : pfp,
                }}
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
                  gap: size.getWidthSize(1),
                }}
              >
                <Text style={styles.name}>{username}</Text>
                <GreyBadge size={size.getHeightSize(18)} />
              </View>
              <Text style={styles.username}>{nickname}</Text>
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
                <Avatar
                  size={size.getHeightSize(24)}
                  rounded
                  source={{ uri: selectedToken.logo }}
                />
                <Text style={styles.APT}>{selectedToken.symbol}</Text>
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
              {isFetchingCoinBalance ? (
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
                  {balance} {selectedToken.symbol}
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
                      {amount ? `${amount} ${selectedToken.symbol}` : '-'}
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
                      ? `${parseFloat(amount) + 0.0015 * parseFloat(amount)} ${
                          selectedToken.symbol
                        }`
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
                      <Text style={styles.sendText}>
                        Send {amount} {selectedToken.symbol}
                      </Text>
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
        callBack={(token) => {
          setToken(token);
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
    flex: 1,
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
