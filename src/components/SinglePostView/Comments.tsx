import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { useState, useEffect, useRef, useMemo } from "react";
import { sizes } from "../../utils";
import { appColor, fonts } from "../../constants";

import { useFonts } from "expo-font";
import PostHeader from "../Feed/PostHeader";
import AddComment from "../../../assets/images/svg/addComment";
import LikePost from "../../../assets/images/svg/LikePost";
import LikedIcon from "../../../assets/images/svg/LikedIcon";
import ProfilePicture from "../Feed/ProfilePicture";
const { height, width } = Dimensions.get("window");
import SinglePostCommentHeader from "./SinglePostCommentHeader";
import { Comment, PostData } from "../../controller/createPost";
import { useAppSelector } from "../../controller/hooks";
import { getPostById, getUserInfo, likePost } from "../../api";
import { images } from "../../constants";
import AddCommentTextInput from "./AddCommentTextInput";
import { getPostTime } from "../../utils/helperFunction";
import SubComments from "./SubComments";
import { useAppDispatch } from "../../controller/hooks";
import { UserData } from "../../controller/UserController";
const size = new sizes(height, width);
interface Props {
  handleCommentButton: (username: string) => void;
  myPost?: boolean;
  CommentData: Comment;
}

const Comments = ({ CommentData, handleCommentButton }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [replyingTo, setReplyingTo] = useState(false);

  const [comment, setComment] = useState<PostData>();
  const [subComment, setSubComment] = useState<PostData[]>([]);
  const [userData, setUserData] = useState<UserData>();
  const { didToken, user } = useAppSelector((state) => ({
    didToken: state.USER.didToken,
    user: state.USER.UserData._id,
  }));
  const [likes, setLikes] = useState<boolean>();
  const [noOflikes, setnoOflikes] = useState(comment?.likes?.length);

  const getCommentDetails = async () => {
    const result = await getPostById(didToken, CommentData?._id);
    setComment(result);
    const res = await getUserInfo(CommentData.userId, didToken);
    console.log(res, "userId")
    setUserData(res);
    setSubComment(
      await Promise.all(
        comment?.comments?.map(
          async (subComment) => await getPostById(didToken, subComment._id)
        )
      )
    );
  };

  useMemo(() => {
    setLikes(comment?.likes?.some((like) => like?.userId == user));
  }, [comment?.likes]);

  // const handleCommentPress = () => {
  //   textInputRef.current?.focus();
  //   setReplyingTo(true);
  //   textInputRef.current?.clear();
  //   if (scrollViewRef.current) {
  //     const commentIndex = 4;
  //     const yOffset = commentIndex * 100;
  //     scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  //   }
  // };

  const handleBlur = () => {
    setReplyingTo(false);
    textInputRef.current?.clear();
  };

  useEffect(() => {
    getCommentDetails();
  }, []);

  const handleCommentLike = async () => {
    setLikes(!likes);
    if (likes) {
      setnoOflikes(noOflikes - 1);
    } else {
      setnoOflikes(noOflikes + 1);
    }
    await likePost(didToken, CommentData?.postId);
  };

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });

  if (!isLoaded) {
    return null;
  }
  const timepost = getPostTime(CommentData.createdAt);
  const myPost = CommentData.userId == user;


  return (
    <View style={styles.commentContainer}>
      <ProfilePicture
        profileImage={
          comment?.customer?.profileImage ||
          Image.resolveAssetSource(images.pfpImage).uri
        }
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <PostHeader
            maxWidth={77}
            username={userData?.username}
            nickname={userData?.username}
            timepost={timepost}
            myPost={myPost}
            postId={CommentData?.postId}
            userId={CommentData?.userId}
          />
          <Text style={styles.comment}>{CommentData?.content}</Text>
          {/* <Text style={styles.readMore}>Read More</Text> */}
          {/* <View style={styles.reactionContainer}>
            <View style={styles.reactionContent}>
              <AddComment
                size={size.getHeightSize(24)}
                onPress={() => {
                  handleCommentButton(CommentData.username);
                }}
              />
              <Text style={styles.reactionText}>
                {comment?.comments?.length}
              </Text>
            </View>
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
          // </View> */}
        </View>

        {/* Sub Comment */}
        {subComment?.map((subComment, index) => (
          <SubComments subComment={subComment} key={index} />
        ))}
        {/*  */}
        {/* <View style={styles.repliedCommentContainer}>
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
              {likes.includes("3") ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("3")}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("3")}
                />
              )}
              <Text style={styles.reactionText}>4</Text>
            </View>
          </View>x
        </View> */}
      </View>
    </View>
  );
};

export default Comments;
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
