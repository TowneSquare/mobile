import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import Offer from './Offer';
import { sizes } from '../../utils';
import NotificationDot from '../../../assets/images/svg/NotificationDot';
import ProfilePicture from './ProfilePicture';
import CommunityInvite from './CommunityInvite';
import FollowButton from '../../shared/Feed/FollowButton';

const size = new sizes(height, width);

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
          marginLeft: size.getWidthSize(16),
         
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
          <View
            style={{
              alignSelf: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <FollowButton isFollowing={false} />
          </View>
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
  notification: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),

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
