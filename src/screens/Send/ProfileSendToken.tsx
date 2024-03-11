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
import { Avatar } from 'react-native-elements';
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
import { useAppDispatch } from '../../controller/hooks';
import { ProfileSendTokenProps } from '../../navigations/NavigationTypes';
import SignTransactionBottomsheet from '../../shared/SignTransactionBottomsheet';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ProfileSendToken = ({ navigation }: ProfileSendTokenProps) => {
  const dispatch = useAppDispatch();
  const [showSelectTokenSheet, setSelectTokenSheetVisibility] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState<
    'loading' | 'failed' | 'success' | 'idle'
  >('idle');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setBalance(30);
    }, 3000);
    return () => {
      dispatch(
        updateSelectUserBottomsheet({
          visibility: false,
          selectedUser: {
            name: '',
            username: '',
            profilePicsUri: '',
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
    setTimeout(() => {
      setTransactionStatus('success');
    }, 4000);
  };
  if (transactionStatus === 'success') {
    navigation.navigate('TokenSuccess', { popNo: 2 }),
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
                source={images.siothian}
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
                <Aptos2 size={size.getHeightSize(24)} />
                <Text style={styles.APT}>APT</Text>
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
                    ? `${parseFloat(amount) + 0.0015 * parseFloat(amount)} USDC`
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
      <SignTransactionBottomsheet
        visibility={
          transactionStatus === 'loading' || transactionStatus === 'failed'
        }
        status={transactionStatus}
        onClose={() => setTransactionStatus('idle')}
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
