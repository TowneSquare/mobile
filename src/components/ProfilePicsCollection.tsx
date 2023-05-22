import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { images, fonts, appColor } from '../constants';
const { height, width } = Dimensions.get('window');
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import {
  updateSelectedCollection,
  updateSelectedRender,
  updateNftRender,
  updateNftOpen,
  updateProfilePics,
} from '../controller/BottomSheetController';
import { sizes } from '../utils';
const size = new sizes(height, width);
const ProfilePicsCollection = () => {
  const profilePicture = useAppSelector(
    (state) => state.bottomSheetController.profilePics
  );
  const dispatch = useAppDispatch();
  const profilePics = [
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 1,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 2,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 3,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 5,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 6,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 7,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 8,
    },
    {
      image: images.Aptomingos,
      Name: '#928098098',
      id: 9,
    },
  ];
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',

        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 20,
      }}
    >
      {profilePics.map((profile) => (
        <TouchableOpacity
          style={{
            marginBottom: 20,
            borderWidth:
              profilePicture.id && profile.id === profilePicture.id ? 3 : 0,
            borderRadius: 10,
            borderColor:
              typeof profilePicture === 'undefined'
                ? 'undefined'
                : appColor.kSecondaryButtonColor,
            overflow: 'hidden',
            width: 150,
            height: 150,
          }}
          onPress={() => {
            dispatch(updateProfilePics(profile));
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={profile.image}
            resizeMode="contain"
          />
          <View
            style={{
              height: size.sHeight(0.05),
              width: size.sWidth(0.32),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom: size.sHeight(0.01),
              left: size.sWidth(0.03),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'UrbanistSemiBold',
              }}
            >
              {profile.Name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfilePicsCollection;
