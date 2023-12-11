import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import SinglePostCommentHeader from "./SinglePostCommentHeader";
import ProfilePicture from "../Feed/ProfilePicture";
import LikePost from "../../../assets/images/svg/LikePost";
import LikedIcon from "../../../assets/images/svg/LikedIcon";
import { sizes } from "../../utils";
import { PostData } from "../../controller/createPost";
import { getPostTime } from "../../utils/helperFunction";
import { useAppSelector } from "../../controller/hooks";
import { appColor } from "../../constants";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { likePost } from "../../api";

interface props {
  subComment: PostData;
}
const SubComments = ({ subComment }: props) => {
  const { didToken, user } = useAppSelector((state) => ({
    didToken: state.USER.didToken,
    user: state.USER.UserData._id,
  }));
  const [likes, setLikes] = useState<boolean>();
  const [noOflikes, setnoOflikes] = useState(subComment?.likes?.length);

  useMemo(() => {
    setLikes(subComment.likes.some((like) => like.userId == user));
  }, [subComment.likes]);

  const handleCommentLike = async () => {
    setLikes(!likes);
    if (likes) {
      setnoOflikes(noOflikes - 1);
    } else {
      setnoOflikes(noOflikes + 1);
    }
    await likePost(didToken, subComment?._id);
  };
  return (
    <View style={styles.repliedCommentContainer}>
      <ProfilePicture profileImage={subComment.customer.profileImage} PFPsize={18} />
      <View>
        <SinglePostCommentHeader
          maxWidth={77}
          username={subComment?.customer?.username}
          nickname={subComment?.customer?.nickname}
          timepost={getPostTime(subComment?.createdAt)}
        />
        <Text style={[styles.comment, { maxWidth: size.getWidthSize(262) }]}>
          {subComment?.description}
        </Text>

        <View style={styles.reactionContent}>
          {likes ? (
            <LikedIcon
              size={size.getHeightSize(24)}
              onPress={() => handleCommentLike()}
            />
          ) : (
            <LikePost
              size={size.getHeightSize(24)}
              onPress={() => handleCommentLike()}
            />
          )}
          <Text style={styles.reactionText}>{noOflikes}</Text>
        </View>
      </View>
    </View>
  );
};

export default SubComments;
const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    gap: size.getWidthSize(8),
    width: "100%",
    marginTop: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    borderBottomWidth: 1,
    borderBottomColor: appColor.kgrayDark2,
    paddingBottom: size.getHeightSize(16),
  },
  comment: {
    marginBottom: size.getHeightSize(4),
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    maxWidth: size.getWidthSize(288),
  },
  reactionContainer: {
    flexDirection: "row",
    gap: size.getWidthSize(12),
  },
  reactionContent: {
    flexDirection: "row",
    gap: size.getWidthSize(4),
    alignItems: "center",
  },
  reactionText: {
    fontFamily: "Outfit-Regular",
    color: appColor.grayLight,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
  },
  repliedCommentContainer: {
    flexDirection: "row",
    gap: size.getWidthSize(8),
    alignItems: "flex-start",
    marginTop: size.getHeightSize(8),
  },
  readMore: {
    marginBottom: size.getHeightSize(9),
    fontFamily: "Outfit-SemiBold",
    color: appColor.primaryLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
});
