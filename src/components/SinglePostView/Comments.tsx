import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import { sizes } from '../../utils';
import { appColor, fonts } from '../../constants';

import { useFonts } from 'expo-font';
import PostHeader from '../Feed/PostHeader';
import AddComment from '../../../assets/images/svg/addComment';
import LikePost from '../../../assets/images/svg/LikePost';
import LikedIcon from '../../../assets/images/svg/LikedIcon';
import ProfilePicture from '../Feed/ProfilePicture';
const { height, width } = Dimensions.get('window');
import SinglePostCommentHeader from './SinglePostCommentHeader';
const size = new sizes(height, width);
interface Props {
  handleCommentButton: () => void;
  myPost?: boolean;
}

const Comments = ({ handleCommentButton, myPost }: Props) => {
  const [likes, setLikes] = useState<string[]>([]);
  const handleLike = (postId: string) => {
    if (likes.includes(postId)) {
      const filteredId = likes.filter((like) => {
        return like !== postId;
      });
      setLikes(filteredId);
    } else setLikes([...likes, postId]);
  };
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.commentContainer}>
      <ProfilePicture />
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <PostHeader
            maxWidth={77}
            username="Username1"
            nickname="username1"
            timepost="2min"
            myPost={myPost}
          />
          <Text style={styles.comment}>
            This is awesome and lorem ispum dolor sitamet quot anime in spirit
            qut amet animut et serit umi ono luiti qut amet animut et seri tumi
            onoluiti qut amet animut et serit umi onoluiti qut amet animut et
            seritumi oluiti qut amet ani met animut et seritumet animut et
            suamet animut et serit umi onoluiti qut amet animut et seritumi
            oluiti qut amet ani met animut et seritumet animut et su
          </Text>
          <Text style={styles.readMore}>Read More</Text>
          <View style={styles.reactionContainer}>
            <View style={styles.reactionContent}>
              <AddComment
                size={size.getHeightSize(24)}
                onPress={handleCommentButton}
              />
              <Text style={styles.reactionText}>3</Text>
            </View>
            <View style={styles.reactionContent}>
              {likes.includes('1') ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('1')}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('1')}
                />
              )}
              <Text style={styles.reactionText}>4</Text>
            </View>
          </View>
        </View>
        {/* Sub Comment */}
        <View style={styles.repliedCommentContainer}>
          <ProfilePicture PFPsize={18} />
          <View>
            <SinglePostCommentHeader
              maxWidth={77}
              username="Username1"
              nickname="@username1"
              timepost="2min"
            />
            <Text
              style={[styles.comment, { maxWidth: size.getWidthSize(262) }]}
            >
              This is a comment of a comment I still like it tho
            </Text>

            <View style={styles.reactionContent}>
              {likes.includes('2') ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('2')}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('2')}
                />
              )}
              <Text style={styles.reactionText}>4</Text>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={styles.repliedCommentContainer}>
          <ProfilePicture PFPsize={18} />
          <View>
            <SinglePostCommentHeader
              maxWidth={77}
              username="Username1"
              nickname="@username1"
              timepost="2min"
            />
            <Text
              style={[styles.comment, { maxWidth: size.getWidthSize(262) }]}
            >
              This is a comment, a nice one
            </Text>
            <View style={styles.reactionContent}>
              {likes.includes('3') ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('3')}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike('3')}
                />
              )}
              <Text style={styles.reactionText}>4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comments;
const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    width: '100%',
    marginTop: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(16),
  },
  comment: {
    marginBottom: size.getHeightSize(4),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    maxWidth: size.getWidthSize(288),
  },
  reactionContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(12),
  },
  reactionContent: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  reactionText: {
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
  },
  repliedCommentContainer: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'flex-start',
    marginTop: size.getHeightSize(8),
  },
  readMore: {
    marginBottom: size.getHeightSize(9),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
});
