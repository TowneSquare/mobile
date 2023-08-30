import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';

const size = new sizes(height, width);
import APT from '../../../assets/images/svg/APT';
const SwapPost = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.swapContainer}>
      <View
        style={{
          gap: size.getHeightSize(2),
        }}
      >
        <View style={styles.aptosContainer}>
          <APT />
          <Text style={styles.aptosText}>Aptos APT</Text>
        </View>
        <Text style={styles.priceTag}>$8.46</Text>
        <Text style={styles.priceFeed}>
          Price feed
          <Text style={styles.spanText}> Liquidswap</Text>
        </Text>
      </View>
      <View style={styles.swapButton}>
        <Text style={styles.swapText}>Swap APT</Text>
      </View>
    </View>
  );
};

export default SwapPost;
const styles = StyleSheet.create({
  swapContainer: {
    backgroundColor: appColor.kgrayDark2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    marginVertical: size.getHeightSize(8),
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    marginLeft: size.getWidthSize(64),
    marginRight: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'space-between',
  },
  aptosContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  aptosText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  priceTag: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.04,
  },
  priceFeed: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Medium',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(16),
    letterSpacing: 0.04,
  },
  spanText: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(16),
    letterSpacing: 0.04,
    marginVertical: size.getHeightSize(2),
  },
  swapButton: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(7),
    opacity: 0.4,
  },
  swapText: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
  },
  fieldInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: size.getHeightSize(16),
    marginTop: size.getHeightSize(8),
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
});
