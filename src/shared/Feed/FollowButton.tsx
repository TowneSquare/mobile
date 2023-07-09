import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const size = new sizes(height, width);
interface Props {
  isFollowing: boolean;
}
const FollowButton = ({ isFollowing }: Props) => {
  const [follow, setFollow] = useState(isFollowing);
  const handleFollow = () => {
    setFollow((previous) => !previous);
  };
  return (
    <Pressable
      onPress={handleFollow}
      style={follow ? styles.followingButton : styles.followButton}
    >
      <Text style={styles.followText}>{follow ? 'Following' : 'Follow'}</Text>
    </Pressable>
  );
};

export default FollowButton;
const styles = StyleSheet.create({
  followButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    width: size.getWidthSize(81),
    justifyContent: 'center',
    minHeight: size.getHeightSize(34),
  },
  followingButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    width: size.getWidthSize(103),
    justifyContent: 'center',
    minHeight: size.getHeightSize(34),
  },
  followText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },
});
