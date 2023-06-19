import { View, Text, Dimensions,Image } from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Retweet from '../../images/svg/Retweet';
import BookMark from '../../images/svg/BookMark';
import LikePost from '../../images/svg/LikePost';
import ShareFeed from '../../images/svg/ShareFeed';
const size = new sizes(height, width);
interface Props {
  noOfComments: string;
  noOfRetweet: string;
  noOfLikes: string;
}
const PostActions = ({ noOfComments, noOfLikes, noOfRetweet }: Props) => {
  return (
    <View
      style={{
        gap: size.getWidthSize(20),
        flexDirection: 'row',
        marginTop: size.getHeightSize(9),
        marginBottom: size.getHeightSize(16),
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <Image source={images.Comment}/>
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: 'Outfit-Regular',
            color: appColor.grayLight,
            lineHeight: size.getHeightSize(16),
            paddingLeft: 7
          }}
        >
          {noOfComments}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <Retweet />
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: 'Outfit-Regular',
            color: appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfRetweet}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(2),
          flex: 1,
        }}
      >
        <LikePost />
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: 'Outfit-Regular',
            color: appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfLikes}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <ShareFeed />
      </View>
      <View
        style={{
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <BookMark />
      </View>
    </View>
  );
};

export default PostActions;
