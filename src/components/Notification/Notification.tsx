import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import Offer from './Offer';
import { sizes } from '../../utils';
const size = new sizes(height, width);
import NotificationDot from '../../../assets/images/svg/NotificationDot';
import ProfilePicture from './ProfilePicture';
import CommunityInvite from './CommunityInvite';
interface Props {
  data: {
    username: string;
    type: string;
    time: string;
    message: string;
    read: boolean;
  };
}
const Notification = ({ data }: Props) => {
  const [follow, setFollow] = useState(false);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const handleFollow = () => {
    setFollow((previous) => !previous);
  };

  return (
    <View style={styles.notification}>
      <ProfilePicture type={data.type} />
      <View
        style={{
          gap: size.heightSize(8),
          flex: 1,
        }}
      >
        <Text style={data.read ? styles.readUsername : styles.username}>
          {data.username}
          <Text style={data.read ? styles.readMessage : styles.text}>
            {' '}
            {data.message}
          </Text>
        </Text>
        {data.type === 'offer' && <Offer />}
        {data.type === 'invite' && <CommunityInvite />}
        <Text style={data.read ? styles.readTime : styles.time}>
          {data.time}
        </Text>
        {data.type === 'follow' && (
          <Pressable
            onPress={handleFollow}
            style={follow ? styles.followingButton : styles.followButton}
          >
            <Text style={styles.followText}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </Pressable>
        )}
      </View>
      {data.read ? <View /> : <NotificationDot />}
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  username: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Bold',
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  time: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    fontFamily: 'Outfit-SemiBold',
  },
  followButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(7),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    width: size.getWidthSize(81),
  },
  followingButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(7),
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    width: size.getWidthSize(103),
  },
  followText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },
  notification: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    borderBottomWidth: size.getHeightSize(1),
    borderColor: appColor.kgrayDark2,
    alignItems: 'flex-start',
    // backgroundColor:"white"
  },
  readMessage: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  readTime: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    fontFamily: 'Outfit-Regular',
  },
  readUsername: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Bold',
  },
});
