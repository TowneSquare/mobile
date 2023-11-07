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
import DMAttachNFT from '../DM/AttachNft';
const size = new sizes(height, width);
import { SelectedCollectionContext } from '../../context/SelectedCollectionContext';
import { useNavigation, StackActions } from '@react-navigation/native';
import { updateShowPriceModal } from '../../controller/createPost';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { updatePostNft } from '../../controller/createPost';
import AttachNft from './AttachNft';
interface Props {
  isVisible: boolean;
}
const AttachNftModal = () => {
  const [opacityvalue, setOpacityValue] = useState(0.8);
  const dispatch = useAppDispatch();
  const isPriceModalVisible = useAppSelector(
    (state) => state.CreatePostController.priceModal
  );
  const modalType = useAppSelector(
    (state) => state.FeedsSliceController.AttachNftType
  );
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );

  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (isPriceModalVisible === true) setOpacityValue(1);
    else setOpacityValue(0.8);
  }, [isPriceModalVisible]);

  useEffect(() => {
    if (opacityvalue === 0.8) setShowBottomSheet(false);
    else setShowBottomSheet(true);
  }, [opacityvalue]);
  const handlePress = async () => {
    dispatch(updateShowPriceModal(true));
    handleModalState;
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
          {modalType === 'DM' ? (
            <DMAttachNFT />
          ) : (
            <AttachNft
              callBack={() => {
                handleModalState();
                navigation.dispatch(StackActions.pop(2));
                dispatch(
                  updatePostNft({
                    name: 'Aptomingos',
                    id: 'Aptomingos #9280',
                  })
                );
              }}
              handleModalState={handleModalState}
              handlePress={handlePress}
            />
          )}
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
