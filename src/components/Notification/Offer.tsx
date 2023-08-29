import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Offer = () => {
  return (
    <>
      <View style={styles.feedContainer}>
        <View style={styles.mediaContainer}>
          <Image
            source={images.feedImage5}
            style={styles.imageStyle}
            resizeMode="cover"
          />
          <View style={styles.nftcollectionContainer}>
            <View style={styles.collectionInfo}>
              <Avatar
                size={size.getHeightSize(16)}
                rounded
                source={images.collectionImage}
              />
              <Text style={styles.collectionName}>Aptomingos</Text>
            </View>

            <Text style={styles.collectionId}>Aptomigos #9280</Text>
          </View>
        </View>

        <View style={styles.nftCollection}>
          <View style={styles.collectionPriceContainer}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.amount}>{100} APT</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buy now</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Offer;
const styles = StyleSheet.create({
  feedContainer: {
    marginTop: size.getHeightSize(8),
    borderRadius: 8,
    width: size.getWidthSize(254),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  nftcollectionContainer: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: size.getWidthSize(16),
    backgroundColor: '#00000070',
    right: 0,
    left: 0,
    paddingTop: size.getHeightSize(8),
  },
  collectionInfo: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
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
    paddingBottom: size.getHeightSize(8),
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
  mediaContainer: {
    marginBottom: size.getHeightSize(0),
    height: size.getHeightSize(275),
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
});
