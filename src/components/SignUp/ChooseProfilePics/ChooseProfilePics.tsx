import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import { appColor, fonts } from '../../../constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../../utils';
import { Entypo } from '@expo/vector-icons';
import { useMutation } from 'react-query';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import Header from '../Header';
import User from '../../../../assets/images/svg/User';
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateProfilePics,
} from '../../../controller/BottomSheetController';
import RemoveAttachment from '../../../../assets/images/svg/RemoveAttachment';
import { updateProfileImage } from '../../../controller/UserController';
import tinycolor from 'tinycolor2';
import { batch } from 'react-redux';


const size = new sizes(height, width);
interface Props {
  userAddress: string;
}
const ChooseProfilePics = ({ userAddress }: Props) => {
  const [userNFT, setUserNFT] = useState(null);
  const dispatch = useAppDispatch();
  const { profilePics, uploadImageModal, NftModal, selectedCollectionModal } =
    useAppSelector((state) => ({
      profilePics: state.USER.signUpData.profileImage.imageUri,
      uploadImageModal: state.bottomSheetController.uploadImageModalOpen,
      NftModal: state.bottomSheetController.NftModalOpen,
      selectedCollectionModal:
        state.bottomSheetController.selectedCollectionModal,
    }));

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          uploadImageModal || NftModal || selectedCollectionModal
            ? tinycolor(appColor.signUpBackground).darken(5).toString()
            : appColor.signUpBackground,
      }}
    >
      <StatusBar
        style="light"
        backgroundColor={
          uploadImageModal || NftModal || selectedCollectionModal
            ? tinycolor(appColor.signUpBackground).darken(5).toString()
            : appColor.signUpBackground
        }
      />

      <Header
        addOpacity={
          uploadImageModal || NftModal || selectedCollectionModal ? true : false
        }
        SvgImage={
          <User
            style={{
              opacity:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? 0.6
                  : undefined,
            }}
          />
        }
        title="Your profile picture"
        subtitle="Make your favorite NFT or photo your profile picture to help other TowneSquare members recognize you."
        subTitleWidth={328}
      />
      <View
        style={{
          flex: 1,
        }}
      />
      <View>
        {profilePics ? (
          <>
            <Pressable
              onPress={() => {
                dispatch(updateUploadModalRenderCount(1));
                dispatch(updateUploadImageModalOpen(true));
              }}
              style={styles.container}
            >
              <Pressable
                style={styles.imageContainer}
                onPress={() => {
                  dispatch(updateUploadModalRenderCount(1));
                  dispatch(updateUploadImageModalOpen(true));
                }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: profilePics }}
                  resizeMode="cover"
                />
              </Pressable>
            </Pressable>
            <Pressable
              onPress={() => {
                batch(() => {
                  dispatch(
                    updateProfilePics({
                      image: undefined,
                      name: '',
                      id: 0,
                    })
                  );
                  dispatch(updateProfileImage(undefined));
                });
              }}
              style={{
                position: 'absolute',
                left: size.getWidthSize(257),
              }}
            >
              <RemoveAttachment />
            </Pressable>
          </>
        ) : (
          <Pressable
            onPress={() => {
              
              dispatch(updateUploadModalRenderCount(1));
              dispatch(updateUploadImageModalOpen(true));
            }}
            style={{
              height: size.getHeightAndWidth(160),
              width: size.getHeightAndWidth(160),
              alignItems: 'center',
              backgroundColor:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kGrayscaleWithOPacity
                  : appColor.kGrayLight3,
              alignSelf: 'center',
              borderRadius: 200,
              borderWidth: 3,
              borderColor:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kWhiteColorWithOpacity
                  : appColor.kWhiteColor,
              justifyContent: 'center',
            }}
          >
            <Entypo
              name="plus"
              color={
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kWhiteColorWithOpacity
                  : appColor.kWhiteColor
              }
              size={size.fontSize(30)}
            />
          </Pressable>
        )}
        {
          <Text style={styles.looksAmazing}>
            {profilePics ? 'Looks Amazing!' : ''}
          </Text>
        }
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};
export default ChooseProfilePics;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    height: size.getHeightAndWidth(160),
    width: size.getHeightAndWidth(160),

    borderRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacity color
  },
  laterText: {
    fontStyle: 'normal',
    textAlign: 'center',
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    fontFamily: 'Outfit-Medium',
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.02,
  },
  laterContainer: {
    alignSelf: 'center',
    width: size.getWidthSize(328),
    borderRadius: 40,
    height: size.getHeightSize(48),
    justifyContent: 'center',
    marginVertical: size.getHeightSize(16),
    marginHorizontal: size.getWidthSize(16),
  },
  looksAmazing: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(22),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
    lineHeight: size.getHeightSize(21),
  },
});
