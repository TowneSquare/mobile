import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { appColor, fonts, images } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import ContinueButton from '../components/ContinueButton';
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import BackButton from '../components/BackButton';
import ProfileSetUpHeader from '../components/ProfileSetUpHeader';
import UploadImageModal from '../components/UploadImageModal';
import SelectedCollection from '../components/SelectedCollection';
import User from '../images/svg/User';
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
} from '../controller/BottomSheetController';
import ChooseNFT from '../components/ChooseNFT';

import { ChooseProfilePicsProps } from '../utils/NavigationTypes';
import tinycolor from 'tinycolor2';
import { RootStackScreenProps } from '../../types';
const size = new sizes(height, width);

export default function ChooseProfilePics({ navigation }: RootStackScreenProps<'ChooseProfilePics'>) {
// const ChooseProfilePics = ({ navigation }: ChooseProfilePicsProps) => {
  const dispatch = useAppDispatch();
  const profilePics = useAppSelector(
    (state) => state.bottomSheetController.profilePics
  );

  const uploadImageModal = useAppSelector(
    (state) => state.bottomSheetController.uploadImageModalOpen
  );
  const NftModal = useAppSelector(
    (state) => state.bottomSheetController.NftModalOpen
  );
  const selectedCollectionModal = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionModal
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
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

      <ProfileSetUpHeader
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
        stepDescription="All done! Explore TowneSquare"
        title="Your profile picture"
        sub_title="Make your favorite NFT or photo your profile picture to help other TowneSquare members recognize you."
        steps={6}
        subTitleHeight={63}
        subTitleWidth={328}
      />
      <View
        style={{
          flex: 1,
        }}
      />
      <View>
        {profilePics.image ? (
          <>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={images.Aptomingos}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(22),
                fontFamily: 'Outfit-Regular',
                textAlign: 'center',
                marginTop: size.getHeightSize(16),
                lineHeight: size.getHeightSize(21),
              }}
            >
              Looks Amazing!
            </Text>
          </>
        ) : (
          <Pressable
            onPress={() => {
              dispatch(updateUploadModalRenderCount(1));
              dispatch(updateUploadImageModalOpen(true));
            }}
            style={{
              height: size.getHeightSize(160),
              width: size.getHeightSize(160),
              alignItems: 'center',
              backgroundColor:
                uploadImageModal || NftModal || selectedCollectionModal
                  ? appColor.kGrayscaleWithOPacity
                  : appColor.kGrayscale,
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
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          height: size.getHeightSize(124),
          marginBottom: size.getHeightSize(24),
        }}
      >
        <ContinueButton
          disabled={typeof profilePics.image === 'undefined' ? true : false}
          navigateTo="Congratulations"
        />
        <View
          style={{
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            height: size.getHeightSize(48),
            justifyContent: 'center',
            marginVertical: size.getHeightSize(16),
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          <Text
            onPress={() => {
              navigation.navigate('Congratulations');
            }}
            style={{
              fontStyle: 'normal',
              textAlign: 'center',
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Medium',
              lineHeight: size.getHeightSize(23),
              letterSpacing:0.02
            }}
          >
            I'll do it later
          </Text>
        </View>
      </View>

      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
  );
};

// export default ChooseProfilePics;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    height: size.getHeightSize(160),
    width: size.getHeightSize(160),

    borderRadius: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opacity color
  },
});
