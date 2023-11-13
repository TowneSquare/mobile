import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import Offer from '../../../assets/images/svg/Offer';
import { sizes } from '../../utils';
import Clip from '../../../assets/images/svg/Clip';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  callBack: () => void;
  handlePress: () => void;
  handleModalState: () => void;
}
const AttachNft = ({ callBack, handlePress, handleModalState }: Props) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#000000',
        }}
      >
        <View style={{ height: size.getHeightSize(150.5) }} />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={images.NftCollection}
            resizeMode="cover"
          />
        </View>
      </View>
      <Text style={styles.name}>Aptomingos #9022</Text>

      <View
        style={{
          height: size.getHeightSize(110.5),
        }}
      />
      <Pressable
        onPress={() => {
          callBack();
        }}
        style={styles.AttachButton}
      >
        <Clip />
        <Text style={styles.AttachText}>Attach to post</Text>
      </Pressable>
      <Pressable onPress={handlePress} style={styles.offerButton}>
        <Offer />
        <Text style={styles.OfferText}>Attach & offer for sale</Text>
      </Pressable>
      <View
        style={{
          width: size.getWidthSize(310),

          alignSelf: 'center',
          paddingVertical: size.getHeightSize(12.5),
          marginTop: size.getHeightSize(32),
        }}
      >
        <Text onPress={handleModalState} style={styles.back}>
          Back
        </Text>
      </View>
    </>
  );
};

export default AttachNft;
const styles = StyleSheet.create({
  AttachButton: {
    flexDirection: 'row',
    backgroundColor: appColor.kWhiteColor,
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12),
    width: size.getWidthSize(310),
    alignSelf: 'center',
    borderRadius: 40,
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  AttachText: {
    color: appColor.kGrayscaleDart,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  OfferText: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  offerButton: {
    flexDirection: 'row',
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    paddingVertical: size.getHeightSize(12),
    width: size.getWidthSize(310),
    alignSelf: 'center',
    borderRadius: 40,
    marginTop: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    alignItems: 'center',
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.04,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  imageContainer: {
    height: size.getHeightSize(325),
    width: size.getWidthSize(304),
    alignSelf: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  back: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
});
