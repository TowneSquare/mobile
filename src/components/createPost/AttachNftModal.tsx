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
import Offer from '../../../assets/images/svg/Offer';
import Clip from '../../../assets/images/svg/Clip';
import { appColor, images } from '../../constants';
import OfferSaleSheet from './OfferSaleSheet';
import { sizes } from '../../utils';
import { batch } from 'react-redux';
const size = new sizes(height, width);
import { SelectedCollectionContext } from '../../context/SelectedCollectionContext';
import { useNavigation, StackActions } from '@react-navigation/native';
import { updateShowPriceModal } from '../../controller/createPost';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { updatePostNft } from '../../controller/createPost';
interface Props {
  isVisible: boolean;
}
const AttachNftModal = () => {
  const [opacityvalue, setOpacityValue] = useState(0.8);
  const dispatch = useAppDispatch();
  const isPriceModalVisible = useAppSelector(
    (state) => state.CreatePostController.priceModal
  );

  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );

  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const navigation = useNavigation();

  //Set opacity
  useEffect(() => {
    if (isPriceModalVisible === true) setOpacityValue(1);
    else setOpacityValue(0.8);
  }, [isPriceModalVisible]);

  // after opacity is updated, update bottomsheet
  useEffect(() => {
    if (opacityvalue === 0.8) setShowBottomSheet(false);
    else setShowBottomSheet(true);
  }, [opacityvalue]);
  const handlePress = async () => {
    dispatch(updateShowPriceModal(true));
    handleModalState;
    batch(() => {
      // dispatch(
      //   updatePostNft({
      //     name: 'Aptomingos',
      //     id: 'Aptomingos #9280',
      //   })
      // );
    });

    // navigation.dispatch(StackActions.pop(2));
    // dispatch(updateAttachNftCountDown(true));
  };
  return (
    <>
      {isModalVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#000000',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: opacityvalue,
          }}
        >
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
              handleModalState();
              navigation.dispatch(StackActions.pop(2));
              dispatch(
                updatePostNft({
                  name: 'Aptomingos',
                  id: 'Aptomingos #9280',
                })
              );
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
          {showBottomSheet && <OfferSaleSheet isVisible={showBottomSheet} />}
        </Animated.View>
      )}
    </>
  );
};

export default AttachNftModal;
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
