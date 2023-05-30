import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
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
        width: size.getWidthSize(328),
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}
    >
      {profilePics.map((profile) => (
        <Pressable
          style={{
            marginBottom: size.getHeightSize(16),
            borderWidth:
              profilePicture.id && profile.id === profilePicture.id ? 8 : 0,
            borderRadius: 20,
            borderColor:
              typeof profilePicture === 'undefined'
                ? 'undefined'
                : appColor.kSecondaryButtonColor,
            overflow: 'hidden',
            width: size.getWidthSize(140),
            height: size.getHeightSize(140),
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
            resizeMode="cover"
          />
          <View
            style={{
              width: size.getWidthSize(124),
              position: 'absolute',
              backgroundColor: '#101323',
              bottom:
                profilePicture.id && profile.id === profilePicture.id
                  ? size.getHeightSize(0)
                  : size.getHeightSize(8),
              left:
                profilePicture.id && profile.id === profilePicture.id
                  ? size.getWidthSize(0)
                  : size.getWidthSize(8),
              right: 0,
              justifyContent: 'center',
              borderRadius: 8,
              paddingVertical: size.getHeightSize(8),
              paddingHorizontal: size.getWidthSize(10),
              opacity: 0.9,
            }}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: 'Outfit-Regular',
                lineHeight: size.getHeightSize(18),
              }}
            >
              {profile.Name}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default ProfilePicsCollection;
