import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  getTokenLists,
  getAssetBalance,
  sendTokenTransaction,
} from '../../utils/walletFunctions';
import {
  getuserDeviceToken,
  sendTipNotification,
} from '../../services/PushNotification';
import { Avatar } from 'react-native-elements';
import { isUrlEncoded, isBase64 } from '../../utils/helperFunction';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Aptos2 from '../../../assets/images/svg/Aptos2';
import ChatTipIcon from '../../../assets/images/svg/ChatTipIcon';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import RemoveIcon from '../../../assets/images/svg/Reward/Send/RemoveIcon';
import SelectTokenSheet from '../../components/DM/SelectTokenSheet';
import { appColor, images } from '../../constants';
import { updateSelectUserBottomsheet } from '../../controller/BottomSheetController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { ProfileSendTokenProps } from '../../navigations/NavigationTypes';
import SignTransactionBottomsheet from '../../shared/SignTransactionBottomsheet';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ProfileSendToken = ({
  navigation,
  route: { params },
}: ProfileSendTokenProps) => {
  const { response, address, name, profilePicsUri, receiverId, username } =
    params;

  const dispatch = useAppDispatch();
  const currentUserAddress = useAppSelector(
    (state) => state.USER.UserData.aptosWallet
  );
  const selectedUser = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.selectedUser
  );
  console.log(response);
  const [sendParams, setParams] = useState<{
    name: string;
    username: string;
    profilePicsUri: string;
    receiverId: string;
    address: string;
    response?: 'approved' | 'rejected' | 'dismissed';
  }>({
    address: params.address,
    name: params.name,
    profilePicsUri: params.profilePicsUri,
    receiverId: params.receiverId,
    username: params.username,
    response: response ? response : undefined,
  });

  console.log('======== params ========');
  console.log(sendParams);

  const [selectedToken, setToken] = useState(getTokenLists()[0]);
  const [isFetchingCoinBalance, setFetching] = useState(false);
  const [showSignTransactionBottomsheet, setSignTransactionVisibility] =
    useState(false);
  const [showSelectTokenSheet, setSelectTokenSheetVisibility] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState<
    'loading' | 'failed' | 'success' | 'idle'
  >('idle');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(undefined);
  const receiver = useAppSelector(
    (state) => state.bottomSheetController.selectUserBottomsheet.selectedUser
  );
  const currentUserName = useAppSelector(
    (state) => state.USER.UserData.username
  );
  useEffect(() => {
    setParams({
      address: selectedUser.address,
      name: selectedUser.name,
      profilePicsUri: selectedUser.profilePicsUri,
      receiverId: selectedUser.receiverId,
      username: selectedUser.username,
      response: undefined,
    });
  }, [selectedUser]);

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
  }, [response, selectedToken]);
  useEffect(() => {
    setParams({
      address,
      name,
      profilePicsUri,
      receiverId,
      username,
      response,
    });
    if (response === 'approved') {
      setTransactionStatus('success');
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
      setTransactionStatus('failed');
    } else if (response === 'rejected') {
      console.log('Faileddddd');
      setTransactionStatus('failed');
    } else setTransactionStatus('idle');
  }, [params, response]);
  useEffect(() => {
    return () => {
      dispatch(
        updateSelectUserBottomsheet({
          visibility: false,
          selectedUser: {
            name: '',
            username: '',
            profilePicsUri: '',
            address: '',
            receiverId: '',
          },
        })
      );
    };
  }, []);
  const isSendButtonDisabled =
    amount > balance ||
    balance === undefined ||
    !amount ||
    transactionStatus === 'loading';
  const handleSend = () => {
    setTransactionStatus('loading');
    setSignTransactionVisibility(true);
    const encodedPfp = isBase64(sendParams.profilePicsUri)
      ? sendParams.profilePicsUri
      : Buffer.from(sendParams.profilePicsUri).toString('base64');

    setTimeout(() => {
      sendTokenTransaction(
        sendParams.address,
        Number(amount),
        `ProfileSendToken/${sendParams.address}/${encodedPfp}/${sendParams.receiverId}/${sendParams.username}/${sendParams.name}` as any,
        selectedToken.decimal,
        selectedToken.coinType
      );
    }, 700);
    // setTimeout(() => {
    //   setTransactionStatus('success');
    // }, 4000);
  };

  if (transactionStatus === 'success') {
    dispatch(
      updateSelectUserBottomsheet({
        visibility: false,
        selectedUser: {
          name: '',
          username: '',
          profilePicsUri: '',
          address: '',
          receiverId: '',
        },
      })
    );
    navigation.navigate('TokenSuccess', {
      popNo: 2,
      amount,
      nickname: name,
      pfp: isBase64(profilePicsUri)
        ? Buffer.from(profilePicsUri, 'base64').toString()
        : profilePicsUri,
      username: username,
      tokenSymbol: selectedToken.symbol,
    }),
      setTransactionStatus('idle');
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <View style={styles.header}>
        <Text onPress={navigation.goBack} style={styles.cancel}>
          Cancel
        </Text>
        <Text style={styles.headerTitle}>Send token to</Text>
        <View
          style={{
            width: size.getWidthSize(51),
          }}
        />
      </View>
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
            <Pressable
              onPress={() => {
                dispatch(
                  updateSelectUserBottomsheet({
                    visibility: true,
                  })
                );
              }}
              style={{
                marginTop: size.getHeightSize(32),
              }}
            >
              <RemoveIcon
                onPress={() => {
                  dispatch(
                    updateSelectUserBottomsheet({
                      visibility: true,
                    })
                  );
                }}
                style={{
                  position: 'absolute',
                  left: size.getWidthSize(89),
                }}
                size={size.getHeightSize(24)}
              />
              <Avatar
                source={{
                  uri: isBase64(sendParams.profilePicsUri)
                    ? Buffer.from(
                        sendParams.profilePicsUri,
                        'base64'
                      ).toString()
                    : sendParams.profilePicsUri,
                }}
                rounded
                size={size.getHeightSize(84)}
              />
            </Pressable>
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
                <Text style={styles.name}>{sendParams.username}</Text>
                <GreyBadge size={size.getHeightSize(18)} />
              </View>
              <Text style={styles.username}>{sendParams.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: size.getWidthSize(8),
                marginTop: size.getHeightSize(32),
                width: '100%',
              }}
            >
              <TextInput
                editable={transactionStatus !== 'loading'}
                placeholder="Insert amount"
                placeholderTextColor={appColor.kgrayTextColor}
                cursorColor={appColor.primaryLight}
                keyboardType="number-pad"
                onChangeText={setAmount}
                style={[
                  styles.textInput,
                  {
                    flex: 1,
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
            <View
              style={{
                width: '100%',
              }}
            >
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
              <View style={styles.view}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>Recipent gets</Text>
                  <Text
                    style={[styles.rowText, { color: appColor.kTextColor }]}
                  >
                    {amount ? `${amount} ${selectedToken.symbol}` : '-'}
                  </Text>
                </View>
                {/* <View style={styles.row}>
                  <Text style={styles.rowText}>Service fee</Text>
                  <Text
                    style={[styles.rowText, { color: appColor.kTextColor }]}
                  >
                    0.15%
                  </Text>
                </View> */}
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
                    ? `${parseFloat(amount)} ${selectedToken.symbol}`
                    : '-'}
                </Text>
              </View>
            </View>
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
                  {transactionStatus === 'loading' && (
                    <ActivityIndicator
                      size={size.getHeightSize(24)}
                      color={appColor.kWhiteColor}
                    />
                  )}
                  {transactionStatus === 'idle' && (
                    <Text style={styles.sendText}>Send</Text>
                  )}
                  {transactionStatus === 'failed' && (
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
      <SignTransactionBottomsheet
        visibility={showSignTransactionBottomsheet}
        status={transactionStatus}
        onClose={() => setSignTransactionVisibility(false)}
        title="Sign Transaction"
      />
    </SafeAreaView>
  );
};

export default ProfileSendToken;
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
    paddingBottom: size.getHeightSize(16),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kWhiteColor,
    marginHorizontal: size.getWidthSize(8),
  },
  balanceRow: {
    marginTop: size.getHeightSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(5),
    alignSelf: 'flex-start',
    marginHorizontal: size.getWidthSize(8),
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
    width: size.getWidthSize(136),
    justifyContent: 'space-between',
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
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  cancel: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
});
