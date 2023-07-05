import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
import FollowButton from '../../shared/Feed/FollowButton';
import Queen from '../../../assets/images/svg/Queen';
import { useAppSelector } from '../../controller/hooks';
const size = new sizes(height, width);
interface Profile {
  name: string;
  username: string;
}
interface Props {
  showAll?: boolean;
  marginTop?: number;
}
const SuggestedProfiles = ({ showAll, marginTop }: Props) => {
  const { searchFocus, searchData, data } = useAppSelector((state) => ({
    searchFocus: state.SearchPostController.searchFocus,
    searchData: state.SearchPostController.peopleToSearchDataFiltered,
    data: state.SearchPostController.profileData,
  }));

  const profileData = searchFocus === 'hide_for_you_tab' ? searchData : data;
  const UserProfile = (profile: Profile) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: size.getHeightSize(16),
          alignItems: 'center',
        }}
      >
        <Avatar
          rounded
          size={size.getHeightSize(40)}
          source={images.createPostPfp}
        />
        <View
          style={{
            flex: 1,
            marginLeft: size.getWidthSize(8),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: size.getWidthSize(4.56),
              width: size.getWidthSize(153),
            }}
          >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              {profile.name}
            </Text>
            <Queen />
          </View>
          <Text style={styles.username}>{profile.username}</Text>
        </View>
        <FollowButton isFollowing={false} />
      </View>
    );
  };
  return (
    <>
      {profileData.length > 0 &&
        profileData.map((profile) => UserProfile(profile))}
      {!showAll && <Text style={styles.showMore}>Show more</Text>}
    </>
  );
};
export default SuggestedProfiles;
const styles = StyleSheet.create({
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  container: {
    flexDirection: 'row',
    width: size.getWidthSize(328),
    height: size.getHeightSize(56),
    borderRadius: 40,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: size.getHeightSize(8),
  },
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginBottom: size.getHeightSize(8),
  },
  showMore: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.klightPurple,

    marginTop: size.getHeightSize(16),
    textAlign: 'center',
  },
});
