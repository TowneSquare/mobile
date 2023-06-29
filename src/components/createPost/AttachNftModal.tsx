import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import Offer from '../../../assets/images/svg/Offer';
import Clip from '../../../assets/images/svg/Clip';
import { appColor, fonts, images } from '../../constants';

import { sizes } from '../../utils';

const size = new sizes(height, width);
import { SelectedCollectionContext } from './SelectedCollectionContext';
import { useNavigation, StackActions } from '@react-navigation/native';

import Modal from 'react-native-modal';
import { useAppDispatch } from '../../controller/hooks';
import { updatePostNft } from '../../controller/createPost';
interface Props {
  isVisible: boolean;
}
const AttachNftModal = () => {
  const dispatch = useAppDispatch();
  const { isModalVisible, handleModalState } = useContext(
    SelectedCollectionContext
  );
  const navigation = useNavigation();
  return (
    <Modal
      backdropOpacity={0.1}
      style={{ margin: 0, backgroundColor: '#000000', opacity: 0.8 }}
      isVisible={isModalVisible}
      statusBarTranslucent
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: '#000000',
            opacity: 0.9,
          }}
        >
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
        <View style={styles.offerButton}>
          <Offer />
          <Text style={styles.OfferText}>Attach & offer for sale</Text>
        </View>
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
      </View>
    </Modal>
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
    marginTop: size.getHeightSize(120),
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
