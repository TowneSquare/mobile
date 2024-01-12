import { Dimensions, StyleSheet } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
export const singlePostStyles = StyleSheet.create({
  feedContainer: {
    width: '100%',
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    paddingTop: size.getHeightSize(9.5),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kgrayDark2,
  },
  subHeading: {
    marginLeft: size.getWidthSize(8),
    flex: 1,
  },
  message: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    marginTop: size.getHeightSize(8),
  },
  mediaContainer: {
    marginTop: size.getHeightSize(8),
    maxHeight: size.getHeightSize(400),
  },
  imageStyle: {
    width: '100%',
    maxHeight: size.getHeightSize(400),
    borderRadius: 8,
  },
  videoStyle:{
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  linkDescriptionContainer: {
    backgroundColor: appColor.grayDark,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: size.getWidthSize(16),
    width: '100%',
    marginBottom: size.getHeightSize(8),
  },
  linkTitle: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
    marginTop: size.getHeightSize(8),
  },
  linkSubTitle: {
    marginTop: size.getHeightSize(4),
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(16),
  },
  linkText: {
    marginTop: size.getHeightSize(8),
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(16),
    marginBottom: size.getHeightSize(16),
  },
  link: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  nftCollection: {
    backgroundColor: appColor.grayDark,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: size.getWidthSize(16),
    width: '100%',
    marginBottom: size.getHeightSize(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectionPriceContainer: {
    gap: size.getHeightSize(2),
    flex: 1,
    justifyContent: 'center',
    marginVertical: size.getHeightSize(8),
  },
  price: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(16),
  },
  amount: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.04,
    marginBottom: size.getHeightSize(8),
  },
  button: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: size.getHeightSize(7),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
  },
  nftcollectionContainer: {
    backgroundColor: appColor.kBlackWithOpacity,
    paddingHorizontal: size.getWidthSize(16),
    width: '100%',
    position: 'absolute',
    bottom: size.getHeightSize(111),
  },

  collectionInfo: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    marginTop: size.getHeightSize(8),
    alignItems: 'center',
  },
  collectionName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  collectionId: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(8),
  },
  attachedNftContainer: {
    backgroundColor: appColor.kBlackWithOpacity,
    paddingHorizontal: size.getWidthSize(16),
    width: '100%',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  swapTextTag: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
    marginLeft: size.getWidthSize(9),
  },
  SwapContainer: {
    backgroundColor: appColor.kgrayDark2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    marginVertical: size.getHeightSize(8),
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  swapDescription: {
    marginVertical: size.getHeightSize(8),
    flex: 1,
  },
  swapImageContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  swapLeadingText: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.04,
  },
  swapPriceTag: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.04,
    marginVertical: size.getHeightSize(2),
  },
  priceFeed: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(16),
    letterSpacing: 0.04,
    marginVertical: size.getHeightSize(2),
  },
  priceFeedType: {
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(16),
    letterSpacing: 0.04,
    marginVertical: size.getHeightSize(2),
  },
  floorPrice: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
    marginVertical: size.getHeightSize(2),
  },
  floorAmount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    marginVertical: size.getHeightSize(2),
  },
});
