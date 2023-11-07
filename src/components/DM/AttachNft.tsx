import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  Animated,
} from 'react-native';
import { useContext, useState, useEffect } from 'react';
const { height, width } = Dimensions.get('window');
import { SelectedCollectionContext } from '../../context/SelectedCollectionContext';
import { sizes } from '../../utils';
import { appColor, images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const size = new sizes(height, width);

const AttachNft = () => {
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: '#000000',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: size.getHeightSize(20),
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          <AntDesign
            name="arrowleft"
            color={appColor.kWhiteColor}
            size={size.fontSize(24)}
            onPress={handleModalState}
          />
          <Text style={styles.title}>Aptomingos #9022</Text>
          <View style={{ width: size.getWidthSize(24) }} />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={images.siothian}
            resizeMode="cover"
          />
        </View>
      </View>
      <Text style={styles.name}>Aptomingos #9022</Text>

      <View
        style={{
          flex: 1,
        }}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('Offerforsale');
        }}
        style={styles.AttachButton}
      >
        <Text style={styles.AttachText}>Share NFT details</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={styles.offerButton}>
        <Text style={styles.OfferText}>Offer for sale</Text>
      </Pressable>
      {/* <View
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
      </View> */}
    </SafeAreaView>
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
    marginBottom: size.getHeightSize(32),
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
    marginTop: size.getHeightSize(44.5),
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
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
});
