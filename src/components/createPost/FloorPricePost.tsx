import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
const size = new sizes(height, width);
const FloorPricePost = () => {
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
    <View style={styles.container}>
      <View style={styles.row}>
        <APTMonkey />
        <Text style={styles.AptosText}>Aptos Monkeys</Text>
      </View>
      <Text style={styles.priceText}>
        Floor price <Text style={styles.amount}>14 APT</Text>
      </Text>
    </View>
  );
};

export default FloorPricePost;
const styles = StyleSheet.create({
  container: {
    backgroundColor: appColor.kgrayDark2,
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    marginVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    marginLeft: size.getWidthSize(64),
    marginRight: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(8),
    justifyContent: 'space-between',
    gap: size.getHeightSize(2),
  },
  row: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  AptosText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  priceText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
});
