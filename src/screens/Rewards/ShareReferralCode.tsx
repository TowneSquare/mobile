import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useReducer, useRef, useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewShot from 'react-native-view-shot';
import CopyIcon from '../../../assets/images/svg/Reward/CopyIcon';
import PointsIcon from '../../../assets/images/svg/Reward/PointsIcon';
import ShareCodeIcon from '../../../assets/images/svg/Reward/ShareCodeIcon';
import DownloadPoster from '../../components/Rewards/DownloadPoster';
import Poster1 from '../../components/Rewards/Poster1';
import Poster2 from '../../components/Rewards/Poster2';
import PosterDownloadView from '../../components/Rewards/PosterDownloadView';
import { appColor } from '../../constants';
import { useAppDispatch } from '../../controller/hooks';
import Header from '../../shared/Feed/Header';
import { generateReferralCode, sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
type PosterState = {
  visibility: boolean;
  posterToShow: 'poster1' | 'poster2';
};
type PosterAction = {
  type: 'show' | 'hide';
  payload?: 'poster1' | 'poster2';
};
const posterReducer = (state: PosterState, action: PosterAction) => {
  switch (action.type) {
    case 'show':
      return {
        visibility: true,
        posterToShow: action.payload,
      };
    case 'hide':
      return {
        visibility: false,
        posterToShow: action.payload,
      };
    default:
      return state;
  }
};
const ShareReferralCode = () => {
  const [selectedPoster, posterDispatch] = useReducer(posterReducer, {
    visibility: false,
    posterToShow: 'poster1',
  });
  const viewShotRef1 = useRef<ViewShot>(null);
  const viewShotRef2 = useRef<ViewShot>(null);
  const posterCount = 2;
  const scrollViewRef = useRef<ScrollView>(null);
  const dispatch = useAppDispatch();
  const [currentPoster, setCurrentPoster] = useState(0);
  const [onMount, setOnmount] = useState(true);
  const [referralCode, setReferralCode] = useState(generateReferralCode());
  useEffect(() => {
    const interval = setInterval(() => {
      setReferralCode(generateReferralCode());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (onMount) {
      const posterWidth = size.getWidthSize(width);
      scrollViewRef.current.scrollTo({
        x: currentPoster * posterWidth,
        animated: true,
      });
      setOnmount(false);
    } else {
      let nextPoster = currentPoster + 1;
      if (nextPoster >= posterCount) {
        nextPoster = 0;
      }
      setCurrentPoster(nextPoster);
      const posterWidth = size.getWidthSize(width);
      scrollViewRef.current.scrollTo({
        x: nextPoster * posterWidth,
        animated: true,
      });
    }
  }, [referralCode]);
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(referralCode);
    ToastAndroid.show('copied!', ToastAndroid.SHORT);
  };
  const handleShare = async () => {
    let uri: string;
    if (currentPoster === 0) {
      uri = await viewShotRef1.current.capture();
    } else if (currentPoster === 1) {
      uri = await viewShotRef2.current.capture();
    }
    await Sharing.shareAsync(uri, {
      mimeType: 'image/jpeg',
      dialogTitle: 'Share this image',
      UTI: 'image/jpeg',
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar
        style="light"
        backgroundColor={
          selectedPoster.visibility
            ? appColor.feedBackground
            : appColor.signUpBackground
        }
      />
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
          <Text style={styles.text}>TowneSquare!</Text>
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
          onScroll={({ nativeEvent }) => {
            const currentPage = Math.round(nativeEvent.contentOffset.x / width);
            setCurrentPoster(currentPage);
          }}
        >
          <ViewShot ref={viewShotRef1} options={{ format: 'png', quality: 1 }}>
            <Poster1
              onPress={() =>
                posterDispatch({
                  payload: 'poster1',
                  type: 'show',
                })
              }
              referralCode={referralCode}
            />
          </ViewShot>
          <ViewShot ref={viewShotRef2} options={{ format: 'png', quality: 1 }}>
            <Poster2
              onPress={() =>
                posterDispatch({
                  payload: 'poster2',
                  type: 'show',
                })
              }
              referralCode={referralCode}
            />
          </ViewShot>
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
        <Pressable onPress={handleShare} style={styles.shareButton}>
          <ShareCodeIcon size={size.getHeightSize(24)} />
          <Text style={styles.shareText}>Share</Text>
        </Pressable>
        <View style={styles.view5}>
          <Text style={styles.commision}>
            Your commision rate{' '}
            <Text style={{ color: appColor.kTextColor }}>20%</Text>
          </Text>
          {/* <InfoIcon size={size.getHeightSize(24)} />  */}
        </View>
      </View>
      <DownloadPoster
        referralCode={referralCode}
        visibility={selectedPoster.visibility}
        close={() =>
          posterDispatch({
            type: 'hide',
          })
        }
        children={
          <PosterDownloadView
            posterToDownload={selectedPoster.posterToShow}
            referralCode={referralCode}
          />
        }
      />
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
    paddingHorizontal: size.getWidthSize(16),
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
    paddingHorizontal: size.getWidthSize(16),
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
