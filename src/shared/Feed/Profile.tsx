import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
import FollowButton from '../../shared/Feed/FollowButton';
import Queen from '../../../assets/images/svg/Queen';
const size = new sizes(height, width);
interface Props {
  data: {
    name: string;
    nickname: string;
  };
}
const Profile = ({ data }: Props) => {
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
        source={images.profileImage}
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
            gap: size.getWidthSize(4),
            width: size.getWidthSize(153),
          }}
        >
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {data.name}
          </Text>
          <Queen />
        </View>
        <Text style={styles.username}>{data.nickname}</Text>
      </View>
      <FollowButton isFollowing={false} />
    </View>
  );
};

export default Profile;
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
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(16),
    textAlign: 'center',
  },
});
