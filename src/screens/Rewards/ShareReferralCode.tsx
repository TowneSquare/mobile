import {
  Dimensions,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import * as Clipboard from 'expo-clipboard';
import Header from '../../shared/Feed/Header';
import CopyIcon from '../../../assets/images/svg/Reward/CopyIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import PointsIcon from '../../../assets/images/svg/Reward/PointsIcon';
import InfoIcon from '../../../assets/images/svg/InfoIcon';
import { useAppDispatch } from '../../controller/hooks';
import ShareCodeIcon from '../../../assets/images/svg/Reward/ShareCodeIcon';
import { updateRewardBottomsheetVisibility } from '../../controller/RewardController';
import Poster1 from '../../components/Rewards/Poster1';
import Poster2 from '../../components/Rewards/Poster2';
import { useState, useEffect, useRef } from 'react';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ShareReferralCode = () => {
  const generateReferralCode = (): string => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return code;
  };
  const scrollViewRef = useRef<ScrollView>(null);
  const dispatch = useAppDispatch();
  const [referralCode, setReferralCode] = useState(generateReferralCode());
  useEffect(() => {
    const interval = setInterval(() => {
      setReferralCode(generateReferralCode());
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    scrollViewRef.current.scrollTo({
      x: size.getWidthSize(width),
      animated: true,
    });

    const timeout = setTimeout(() => {
      scrollViewRef.current.scrollTo({ x: 0, animated: true });
    }, 30000);
    return () => {
      clearTimeout(timeout);
    };
  }, [referralCode]);
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(referralCode);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Share referral code" />
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          alignSelf: 'center',
          width: '100%',
        }}
      >
        <Text style={styles.referralCode}>Share referral code</Text>
        <View style={styles.textView}>
          <Text style={styles.text}>
            Get <Text style={{ fontFamily: 'Outfit-SemiBold' }}>100</Text>
          </Text>
          <PointsIcon size={size.getHeightSize(16)} />
          <Text style={styles.text}>for every active referral that joins </Text>
        </View>
        <View style={styles.textView2}>
          <Text style={styles.text}>TowneSquare </Text>
          <InfoIcon
            onPress={() => dispatch(updateRewardBottomsheetVisibility(true))}
            size={size.getHeightSize(24)}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <Text style={styles.poster}>POSTER</Text>
        <Text style={styles.description}>
          Get your custom Referral Code poster to share with your frens!
        </Text>
      </View>
      <View>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{
            gap: size.getWidthSize(13.71),
          }}
          style={{
            marginHorizontal: size.getWidthSize(16),
          }}
          horizontal
        >
          <Poster1 referralCode={referralCode} />
          <Poster2 referralCode={referralCode} />
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: size.getHeightSize(48),
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <Text style={styles.poster}>REFERRAL CODE</Text>
        <Pressable onPress={copyToClipboard} style={styles.codeView}>
          <Text style={styles.referalCode}>{referralCode.toUpperCase()}</Text>
          <CopyIcon size={size.getHeightSize(24)} />
        </Pressable>
        <View style={styles.shareButton}>
          <ShareCodeIcon size={size.getHeightSize(24)} />
          <Text style={styles.shareText}>Share</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.commision}>
            Your commision rate{' '}
            <Text style={{ color: appColor.kTextColor }}>20%</Text>
          </Text>
          <InfoIcon size={size.getHeightSize(24)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShareReferralCode;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    textAlign: 'center',
  },
  textView: {
    marginTop: size.getHeightSize(8),
    width: size.getWidthSize(328),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    gap: size.getWidthSize(4),
  },
  referralCode: {
    marginTop: size.getHeightSize(24),
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  textView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: size.getWidthSize(4),
  },
  poster: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(16),
    textAlign: 'left',
    marginTop: size.getHeightSize(48),
  },
  description: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(18),
    textAlign: 'left',
    marginTop: size.getHeightSize(8),
  },
  codeView: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    borderColor: appColor.kGrayscale,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(24),
  },
  referalCode: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    flex: 1,
    textAlign: 'center',
  },
  shareButton: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(24),
    justifyContent: 'center',
    gap: size.getWidthSize(8),
    backgroundColor: appColor.kSecondaryButtonColor,
  },
  shareText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    letterSpacing: 0.36,
  },
  view5: {
    marginTop: size.getHeightSize(24),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
    alignSelf: 'center',
  },
  commision: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(20),
    textAlign: 'center',
  },
});
