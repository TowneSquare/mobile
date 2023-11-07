import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { sizes } from '../../utils';
import ComingSoonIcon2 from '../../../assets/images/svg/ComminsoonIcon2';
import CommingsoonIcon3 from '../../../assets/images/svg/CommingSoonIcon3';
import ComingsoonIcon1 from '../../../assets/images/svg/ComingsoonIcon1';
import ComminsoonPathIcon from '../../../assets/images/svg/ComiingsoonPathIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CommingSoon = () => {
  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      resizeMode="cover"
      source={images.comingsoon}
    >
      <View
        style={{
          gap: size.getHeightSize(64),
        }}
      >
        <View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(29),
              fontFamily: 'Outfit-Bold',
              lineHeight: size.getHeightSize(39),
              textAlign: 'center',
              paddingHorizontal: size.getWidthSize(16),
            }}
          >
            TowneSquare Communities are coming Soon!
          </Text>
          <ComminsoonPathIcon
            width={size.getWidthSize(160)}
            height={size.getHeightSize(21)}
            style={{
              alignSelf: 'center',
              marginTop: size.getHeightSize(8),
            }}
          />
        </View>

        <View
          style={{
            gap: size.getHeightSize(24),
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(20),
              fontFamily: 'Outfit-SemiBold',
              lineHeight: size.getHeightSize(24),
              textAlign: 'center',
              paddingHorizontal: size.getWidthSize(16),
            }}
          >
            What to expect?
          </Text>
          <View style={styles.view}>
            <ComingsoonIcon1 size={size.getHeightSize(48)} />
            <View style={styles.gap}>
              <Text style={styles.leadingText}>Community trading desks!</Text>
              <Text style={styles.description}>
                Find the closest buyer for your assets - NFT, tokens,
                collectibles - in a trading desk of your community!
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <ComingSoonIcon2 size={size.getHeightSize(48)} />
            <View style={styles.gap}>
              <Text style={styles.leadingText}>
                Find out what your friends are up to!
              </Text>
              <Text style={styles.description}>
                Get community recommendations based on your friend's on-chain
                activities!
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <CommingsoonIcon3 size={size.getHeightSize(48)} />
            <View style={{ width: size.getWidthSize(264) }}>
              <Text style={styles.leadingText}>Monetize your network</Text>
              <Text style={styles.description}>
                Publish trading content to earn referral rading fees rom your
                network!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CommingSoon;
const styles = StyleSheet.create({
  ask: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(39),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  gap: {
    width: size.getWidthSize(264),
    gap: size.getHeightSize(4),
  },
});
