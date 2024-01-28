import { View, Text, Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { sizes } from "../../utils";
import { appColor, fonts } from "../../constants";
import { useAppSelector } from "../../controller/hooks";
import ProfilePicture from "../Feed/ProfilePicture";
import { useFonts } from "expo-font";
import { Comment } from "../../controller/createPost";
import PostHeader from "../Feed/PostHeader";
import { getPostTime } from "../../utils/helperFunction";
import AddComment from "../../../assets/images/svg/addComment";
import LikePost from "../../../assets/images/svg/LikePost";
import LikedIcon from "../../../assets/images/svg/LikedIcon";
import { useContext } from "react";
import { SinglePostContext } from "../../context/SinglePostContext";
import { getUserInfo } from "../../api";
// import ProfilePicture from "../Feed/ProfilePicture";
const { height, width } = Dimensions.get("window");
import SinglePostCommentHeader from "./SinglePostCommentHeader";
const size = new sizes(height, width);
interface Props {
  handleCommentButton: () => void;
  myPost?: boolean;
  data: Comment;
}

const Comments = ({ handleCommentButton, myPost, data }: Props) => {
  const { setReplyingTo } = useContext(SinglePostContext);
  const myId = useAppSelector((state) => state.USER.UserData._id);
  const token = useAppSelector((state) => state.USER.didToken);
  const [userInfo, setUserInfo] = useState({
    username: "",
    nickname: "",
    profileImage: "",
  });
  const [likes, setLikes] = useState<string[]>([]);
  const handleLike = (postId: string) => {
    if (likes.includes(postId)) {
      const filteredId = likes.filter((like) => {
        return like !== postId;
      });
      setLikes(filteredId);
    } else setLikes([...likes, postId]);
  };
  useEffect(() => {
    async function getUser() {
      const contactDetails = await getUserInfo(data.userId, token);
      const { nickname, username, profileImage } = contactDetails;
      setUserInfo({
        nickname,
        profileImage,
        username,
      });
    }
    getUser();
  }, []);
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.commentContainer}>
      <ProfilePicture  PFPsize={32} profileImage={userInfo.profileImage} />
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <PostHeader
            maxWidth={77}
            username={userInfo.username}
            nickname={userInfo.nickname}
            timepost={getPostTime(data.createdAt)}
            myPost={data.userId == myId}
            postId={data.postId}
            userId={data.userId}
          />
          <Text style={styles.comment}>{data.content}</Text>
          {/* <Text style={styles.readMore}>Read More</Text> */}
          <View style={styles.reactionContainer}>
            <View style={styles.reactionContent}>
              <AddComment
                size={size.getHeightSize(24)}
                onPress={() => {
                  setReplyingTo(userInfo.username);
                  handleCommentButton();
                }}
              />
              <Text style={styles.reactionText}></Text>
            </View>
            <View style={styles.reactionContent}>
              {likes.includes("1") ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("1")}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("1")}
                />
              )}
              <Text style={styles.reactionText}></Text>
            </View>
          </View>
        </View>
        {/* Sub Comment */}
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
              This is a comment of a comment I still like it tho
            </Text>

            <View style={styles.reactionContent}>
              {likes.includes("2") ? (
                <LikedIcon
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("2")}
                />
              ) : (
                <LikePost
                  size={size.getHeightSize(24)}
                  onPress={() => handleLike("2")}
                />
              )}
              <Text style={styles.reactionText}>4</Text>
            </View>
          </View>
        </View> */}
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
          </View>
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
    marginTop: size.getHeightSize(9),
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
