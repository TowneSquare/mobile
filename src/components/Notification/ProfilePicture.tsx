import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import LikeNotificationLogo from '../../../assets/images/svg/LikeNotificationLogo';
import OfferNotificationLogo from '../../../assets/images/svg/OfferNotificationLogo';
import CommunityNotificationLogo from '../../../assets/images/svg/CommunityNotificationLogo';
import FollowNotificationlogo from '../../../assets/images/svg/FollowNotificationlogo';
import RepliedNotificationLogo from '../../../assets/images/svg/RepliedNotificationLogo';
import MentionNotificationLogo from '../../../assets/images/svg/MentionNotificationLogo';
import RepostNotificationLogo from '../../../assets/images/svg/RepostNotificationLogo';
interface Props {
  type: string;
}
const size = new sizes(height, width);
const ProfilePicture = ({ type }: Props) => {
  const Icon = () => {
    switch (type) {
      case 'follow':
        return <FollowNotificationlogo style={styles.icon} />;
      case 'like':
        return <LikeNotificationLogo style={styles.icon} />;
      case 'replied':
        return <RepliedNotificationLogo style={styles.icon} />;
      case 'mention':
        return <MentionNotificationLogo style={styles.icon} />;
      case 'repost':
        return <RepostNotificationLogo style={styles.icon} />;
      case 'offer':
        return <OfferNotificationLogo style={styles.icon} />;
      case 'invite':
        return <CommunityNotificationLogo style={styles.icon} />;
    }
  };

  return (
    <View style={styles.profilePics}>
      <Image
        resizeMode="cover"
        style={{
          height: 40,
          width: 40,
        }}
        source={images.profileImage}
      />
      <View style={{}}>
        <Icon />
      </View>
    </View>
  );
};

export default ProfilePicture;
const styles = StyleSheet.create({
  profilePics: {
    width: 48,
    borderRadius: 200,
  },
  icon: {
    position: 'absolute',
    bottom: size.getWidthSize(0),
    right: 0,
  },
});
