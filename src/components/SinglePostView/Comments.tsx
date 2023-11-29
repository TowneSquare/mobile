import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useState, useEffect, useRef } from "react";
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
import { getPostById } from "../../api";
import { images } from "../../constants";
import AddCommentTextInput from "./AddCommentTextInput";
const size = new sizes(height, width);
interface Props {
  handleCommentButton?: () => void;
  myPost?: boolean;
  CommentData: Comment;
}

const Comments = ({ CommentData, myPost }: Props) => {
  const [likes, setLikes] = useState<string[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [replyingTo, setReplyingTo] = useState(false);
  const [comment, setComment] = useState<PostData>( {
      _id: "6543112773263dcd8d741ba0",
      title: "",
      userId: "65372778b8da0e521b8a3587",
      description: "Test post ",
      imageUrls: [""],
      videoUrls: ["https://www.youtube.com/watch?v=EJzB_Fa27ko"],
      createdAt: "2023-11-02T03:01:59.721Z",
      sellNFTPrice: "20.4",
      likes: [
        {
          _id: "6560962a233ac36e73bc42ce",
          userId: "655ab007ce8937ff6d512885",
          postId: "655df7a347784b1665992617",
          createdAt: "2023-11-24T12:25:14.173Z",
        },
      ],
      comments: [
        {
          username: "pelumi_main",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
        {
          username: "pelumi_second",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
      ],
      customer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      reposts: [],
      originalCustomer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      repost: false,
      originalPostId: "65430c7f372dd89672e9214d",
      originalCustomerId: "65372778b8da0e521b8a3587",
    },);
  const [subComment, setSubComment] = useState<PostData[]>([
     {
      _id: "6543112773263dcd8d741ba0",
      title: "",
      userId: "65372778b8da0e521b8a3587",
      description: "Test post ",
      imageUrls: [""],
      videoUrls: ["https://www.youtube.com/watch?v=EJzB_Fa27ko"],
      createdAt: "2023-11-02T03:01:59.721Z",
      sellNFTPrice: "20.4",
      likes: [
        {
          _id: "6560962a233ac36e73bc42ce",
          userId: "655ab007ce8937ff6d512885",
          postId: "655df7a347784b1665992617",
          createdAt: "2023-11-24T12:25:14.173Z",
        },
      ],
      comments: [
        {
          username: "pelumi_main",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
        {
          username: "pelumi_second",
          nickname: "chokey",
          _id: "653878c2a000149cd06b9845",
          content: "POST comment TEstTest",
          userId: "65372778b8da0e521b8a3587",
          postId: "653728bd6171091d6b469bec",
          createdAt: "2023-10-25T02:09:06.310Z",
        },
      ],
      customer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      reposts: [],
      originalCustomer: {
        _id: "65372778b8da0e521b8a3587",
        issuer: "did:ethr:0xcfe8dfc248cef257524ec05374fa6157114e8991",
        aptosWallet: "0xcfe8dfc248cef257524ec05374fa6157114e8991",
        nickname: "test nickname",
        username: "test12",
        email: "test@email.com",
        referralCode: "98N39",
      },
      repost: false,
      originalPostId: "65430c7f372dd89672e9214d",
      originalCustomerId: "65372778b8da0e521b8a3587",
    },
  ]);
  const didToken = useAppSelector((state) => state.USER.didToken);

  const getCommentDetails = async () => {
    const result = await getPostById(didToken, CommentData.postId);
    setComment(result);
    setSubComment(
      await Promise.all(
        comment.comments.map(
          async (subComment) => await getPostById(didToken, subComment._id)
        )
      )
    );
  };

  const handleCommentPress = () => {
    textInputRef.current?.focus();
    setReplyingTo(true);
    textInputRef.current?.clear();
    if (scrollViewRef.current) {
      const commentIndex = 4;
      const yOffset = commentIndex * 100;
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  const handleBlur = () => {
    setReplyingTo(false);
    textInputRef.current?.clear();
  };

  // useEffect(() => {
  //   getCommentDetails();
  // }, []);

  const handleLike = (postId: string) => {
    if (likes.includes(postId)) {
      const filteredId = likes.filter((like) => {
        return like !== postId;
      });
      setLikes(filteredId);
    } else setLikes([...likes, postId]);
  };

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
      <ProfilePicture />
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <PostHeader
            maxWidth={77}
            username={CommentData.username}
            nickname={CommentData.nickname}
            timepost="2min"
            myPost={myPost}
            postId={CommentData.postId}
            userId={CommentData.userId}
          />
          <Text style={styles.comment}>{CommentData.content}</Text>
          <Text style={styles.readMore}>Read More</Text>
          <View style={styles.reactionContainer}>
            <View style={styles.reactionContent}>
              <AddComment
                size={size.getHeightSize(24)}
                onPress={handleCommentPress}
              />
              <Text style={styles.reactionText}>
                {comment?.comments.length}
              </Text>
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
              <Text style={styles.reactionText}>{comment.likes.length}</Text>
            </View>
          </View>
        </View>
        {/* <AddCommentTextInput
        showReplyingTo={replyingTo}
        handleBlur={handleBlur}
        textRef={textInputRef}
      /> */}
        {/* Sub Comment */}
        {subComment.map((subComment, index) => (
          <View key={index} style={styles.repliedCommentContainer}>
            <ProfilePicture PFPsize={18} />
            <View>
              <SinglePostCommentHeader
                maxWidth={77}
                username={subComment.customer.username}
                nickname={subComment.customer.nickname}
                timepost="2min"
              />
              <Text
                style={[styles.comment, { maxWidth: size.getWidthSize(262) }]}
              >
                {subComment.description}
              </Text>

              <View style={styles.reactionContent}>
                {subComment.likes.some(like => like.userId === subComment.userId) ? (
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
                <Text style={styles.reactionText}>{subComment.likes.length}</Text>
              </View>
            </View>
          </View>
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
