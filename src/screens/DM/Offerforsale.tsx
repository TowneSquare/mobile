import {
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Text,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('window');
import DurationBottomsheet from '../../components/DM/DurationBottomsheet';
import InfoIcon from '../../../assets/images/svg/InfoIcon';
import { sizes } from '../../utils';
import { appColor, images } from '../../constants';
import Header from '../../shared/Feed/Header';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Aptos2 from '../../../assets/images/svg/Aptos2';
import SignTransaction, {
  TransactionFailed,
} from '../../shared/TransactionStatus';
import { OfferforsaleProps } from '../../navigations/NavigationTypes';
const size = new sizes(height, width);
const Offerforsale = ({ navigation }: OfferforsaleProps) => {
  const scrollViewRef = useRef<ScrollView>();
  const [amount, setAmount] = useState('');
  const [isDurationBottomsheetOPen, setDurationBottomsheetVisibility] =
    useState(false);
  const [sendStatus, setSendStatus] = useState<
    'idle' | 'successfull' | 'failed' | 'loading'
  >('idle');
  const handleSend = () => {
    setSendStatus('loading');
    setTimeout(() => {
      setSendStatus('successfull');
    }, 4000);
  };
  if (sendStatus === 'successfull') {
    navigation.navigate('TokenSuccess', { popNo: 4 }), setSendStatus('idle');
  }
  const isSendButtonDisabled = !amount || sendStatus === 'loading';
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  useEffect(() => {
    sendStatus === 'loading' && scrollToBottom();
  }, [sendStatus]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Header title="Offer for sale" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
          marginTop: size.getHeightSize(25),
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.view3}>
              <Image source={images.siothian} style={styles.image} />
            </View>
            <View style={styles.view1}>
              <Text style={styles.text}>Aptomingos#9022</Text>
              <View style={styles.row}>
                <Text style={styles.price}>
                  Floor price{' '}
                  <Text
                    style={{
                      color: appColor.kTextColor,
                    }}
                  >
                    90 APT
                  </Text>
                </Text>
                <InfoIcon size={size.getHeightSize(24)} />
              </View>
            </View>
            <View style={styles.inputRow}>
              <TextInput
                editable={sendStatus !== 'loading'}
                placeholder="Offer price"
                placeholderTextColor={appColor.kGrayLight3}
                cursorColor={appColor.primaryLight}
                keyboardType="number-pad"
                style={[
                  styles.textInput,
                  { opacity: sendStatus === 'loading' ? 0.4 : 1 },
                ]}
                onChangeText={setAmount}
              />
              <Pressable style={styles.aptView}>
                <Aptos2 size={size.getHeightSize(24)} />
                <Text style={styles.APT}>APT</Text>
              </Pressable>
            </View>
            <Text style={styles.text1}>Offer duration</Text>
            <View
              style={[
                styles.duration,
                { opacity: sendStatus === 'loading' ? 0.4 : 1 },
              ]}
            >
              <Pressable
                disabled={sendStatus === 'loading'}
                onPress={() => setDurationBottomsheetVisibility(true)}
                style={styles.dropDown}
              >
                <Text style={styles.durationText}>1 day</Text>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={size.getHeightSize(24)}
                  color={appColor.kWhiteColor}
                />
              </Pressable>
              <View
                style={{
                  gap: size.getHeightSize(2),
                }}
              >
                <Text style={styles.expirationText}>Offer expires on</Text>
                <Text style={styles.date}>27 October 2023 • 14:23:00</Text>
              </View>
            </View>
            <View></View>
            <View style={styles.view}>
              <View style={styles.row3}>
                <Text style={styles.rowText}>Listing price</Text>
                <Text style={[styles.rowText, { color: appColor.kTextColor }]}>
                  {amount ? `${amount} APT` : '-'}
                </Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.rowText}>Royalties</Text>
                <Text style={[styles.rowText, { color: appColor.kTextColor }]}>
                  10%
                </Text>
              </View>
              <View style={styles.row3}>
                <Text style={styles.rowText}>Service fee</Text>
                <Text style={[styles.rowText, { color: appColor.kTextColor }]}>
                  2%
                </Text>
              </View>
            </View>
            <View style={styles.row2}>
              <Text style={[styles.rowText, { fontFamily: 'Outfit-SemiBold' }]}>
                You will recieve
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
                  ? `${parseFloat(amount) - 0.12 * parseFloat(amount)} APT`
                  : '-'}
              </Text>
            </View>
            {sendStatus === 'loading' && (
              <SignTransaction marginVertical={40} />
            )}
            {sendStatus === 'failed' && (
              <TransactionFailed type="failed" marginVertical={40} />
            )}
            <View style={{ flex: 1 }} />
            <View
              style={{
                gap: size.getHeightSize(8),
                marginBottom: size.getHeightSize(32),
              }}
            >
              <View
                style={{
                  opacity: isSendButtonDisabled ? 0.4 : 1,
                }}
              >
                <Pressable
                  onPress={handleSend}
                  disabled={isSendButtonDisabled}
                  style={styles.button}
                >
                  {sendStatus === 'loading' ? (
                    <ActivityIndicator
                      size={size.getHeightSize(24)}
                      color={appColor.kWhiteColor}
                    />
                  ) : (
                    <Text style={styles.buttonText}>Offer for sale </Text>
                  )}
                </Pressable>
              </View>

              <View style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <DurationBottomsheet
        visibility={isDurationBottomsheetOPen}
        callBack={() => {
          setDurationBottomsheetVisibility(false);
        }}
        onClose={() => setDurationBottomsheetVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default Offerforsale;
const styles = StyleSheet.create({
  view: {
    marginTop: size.getHeightSize(32),
    gap: size.getHeightSize(16),
    paddingHorizontal: size.widthSize(8),
    paddingBottom: size.getHeightSize(16),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kWhiteColor,
    width: '100%',
  },
  view3: {
    alignSelf: 'center',
    width: size.getWidthSize(66),
    height: size.getHeightSize(69),
    borderRadius: 4,
  },
  text: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  price: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(16),
    width: '100%',
    paddingHorizontal: size.getWidthSize(8),
  },
  aptView: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    minHeight: size.getHeightSize(48),
  },
  textInput: {
    width: size.getWidthSize(240),
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
  APT: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
  },
  dropDown: {
    flexDirection: 'row',
    gap: size.getWidthSize(16),
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    minHeight: size.getHeightSize(48),
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  view1: {
    marginTop: size.getHeightSize(8),
    gap: size.getHeightSize(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: size.getWidthSize(4),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(66.5),
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(8),
    gap: size.getWidthSize(16),
  },
  durationText: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    letterSpacing: 0.32,
  },
  expirationText: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
  date: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
  },
  text1: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    marginTop: size.getHeightSize(32),
  },
  rowText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  button: {
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    backgroundColor: appColor.kSecondaryButtonColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
  },
});
