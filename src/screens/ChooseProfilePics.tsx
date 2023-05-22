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
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
} from '../controller/BottomSheetController';
import ChooseNFT from '../components/ChooseNFT';
import { ChooseProfilePicsProps } from '../utils/NavigationTypes';
const size = new sizes(height, width);
const ChooseProfilePics = ({ navigation }: ChooseProfilePicsProps) => {
  const dispatch = useAppDispatch();
  const profilePics = useAppSelector(
    (state) => state.bottomSheetController.profilePics
  );
  const addOpacity = useAppSelector(
    (state) => state.bottomSheetController.backgroundOpacity
  );
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kDisabledColor} />
      <View
        style={{
          backgroundColor: addOpacity ? appColor.kBlackWithOpacity : undefined,
        }}
      >
        <ProfileSetUpHeader
          image={images.userCircle}
          stepDescription="All done! Explore TowneSquare"
          title="Your profile picture"
          sub_title="Make your favorite NFT or photo your profile picture to help other TowneSquare members recognize you"
          steps={6}
        />
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        {profilePics.image ? (
          <View
            style={{
              backgroundColor: addOpacity
                ? appColor.kBlackWithOpacity
                : undefined,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 30,
            }}
          >
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
                opacity: addOpacity ? 0.3 : 1,
                color: appColor.kTextColor,
                fontSize: size.fontSize(20),
                fontFamily: 'Outfit-Medium',
                textAlign: 'center',
                marginTop: 15,
              }}
            >
              Looks Amazing!
            </Text>
          </View>
        ) : (
          <Pressable
            onPress={() => {
              dispatch(updateUploadModalRenderCount(1));
              dispatch(updateUploadImageModalOpen(true));
            }}
            style={{
              height: '50%',
              width: '45%',
              alignItems: 'center',
              backgroundColor: addOpacity
                ? appColor.kBlackWithOpacity
                : appColor.kSecondaryNavy,
              alignSelf: 'center',
              marginTop: 50,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: appColor.kWhiteColor,
              justifyContent: 'center',
            }}
          >
            <Entypo name="plus" color={appColor.kWhiteColor} size={30} />
          </Pressable>
        )}
      </View>
      <View
        style={{
          alignSelf: 'baseline',
          alignItems: 'center',
          width: '100%',
          height: 150,
        }}
      >
        <ContinueButton
          disabled={typeof profilePics.image === 'undefined' ? true : false}
          navigateTo="Congratulations"
          marginTop={2}
        />
        <Text
          onPress={() => {
            navigation.navigate('Congratulations');
          }}
          style={{
            marginTop: 40,

            textAlign: 'center',
            color: appColor.kTextColor,
            fontSize: size.fontSize(18),
            fontFamily: 'Outfit-Bold',
          }}
        >
          I'LL DO IT LATER
        </Text>
      </View>
      <UploadImageModal />
      <ChooseNFT />
      <SelectedCollection />
    </SafeAreaView>
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
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
