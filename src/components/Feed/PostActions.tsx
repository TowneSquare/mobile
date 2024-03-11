import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import Retweet from '../../../assets/images/svg/Retweet';
import BookMark from '../../../assets/images/svg/BookMark';
import LikePost from '../../../assets/images/svg/LikePost';
import TipIcon from '../../../assets/images/svg/TipIcon';
import LikedIcon from '../../../assets/images/svg/LikedIcon';
import Retweeted from '../../../assets/images/svg/Retweeted';
import BookMarkedIcon from '../../../assets/images/svg/BookMarkedIcon';
import CommentIcon from '../../../assets/images/svg/CommentIcon';
import {
  updateTipBottomSheet,
  updateToast,
} from '../../controller/FeedsController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { getPostById, likePost } from "../../api";
import { Likes, PostData, Reposts, rePost } from "../../controller/createPost";
import { getUserInfo } from "../../api";
import { UserData, bookMarkPost } from "../../controller/UserController";
import { useNavigation } from "@react-navigation/native";
import { useUserInfo } from "../../api/hooks";

const size = new sizes(height, width);
interface Props {
  noOfComments: number;
  Repost: Reposts[];
  Likes: Likes[];
  paddingHorizontal?: number;
  marginBottom?: boolean;
  marginTop?: boolean;
  showShareIcon?: boolean;
  postId: string;
  userId: string;
  handleNavigation?: () => {};
  username: string;
  nickname: string;
  pfp: string;
  wallet: string;
}
const PostActions = ({
  noOfComments,
  Likes,
  Repost,
  paddingHorizontal,
  marginBottom,
  marginTop,
  showShareIcon,
  postId,
  userId,
  nickname,
  pfp,
  username,
  wallet,
}: Props) => {
  const naviagtion = useNavigation();
  const dispatch = useAppDispatch();
  const [changeLikeTextColor, setlikesTextColor] = useState(false);
  const [changeRetweetTextColor, setRetweetTextColor] = useState(false);
  const currentUserId = useAppSelector((state) => state.USER.UserData._id);
  const token = useAppSelector((state) => state.USER.didToken);

  const [postData, setPostData] = useState<PostData>();
  const [noOflikes, setNoOflikes] = useState<number>(Likes?.length);
  const [noOfrepost, setNoOfrepost] = useState<number>(Repost?.length);
  const userData = useUserInfo({ userId, token });
  const getPostData = async () => {
    try {
      const res = await getPostById(token, postId);
      setPostData(res);
    } catch (error) {}
  };

  const user = useAppSelector((state) => state.USER.UserData._id);
  const BookMarks = useAppSelector((state) => state.USER.BookMarks);

  useEffect(() => {
    getPostData();
  }, [postId]);
  const retweet = useSharedValue(0);
  const bookmark = useSharedValue(0);
  const liked = useSharedValue(0);
  const handleLike = async () => {
    liked.value = withSpring(liked.value ? 0 : 1);
    setNoOflikes(liked.value ? noOflikes - 1 : noOflikes + 1);
    setlikesTextColor((previous) => !previous);
    await likePost(token, postId);
  };
  const handleRetweet = () => {
    retweet.value = withSpring(retweet.value ? 0 : 1);
    setNoOfrepost(retweet.value ? noOfrepost - 1 : noOfrepost + 1);
    setRetweetTextColor((previous) => !previous);
    dispatch(rePost({ token, postId }));
  };
  const handleBookMark = () => {
    bookmark.value = withSpring(bookmark.value ? 0 : 1);
    dispatch(bookMarkPost({ token, postId }));
  };

  const checkedLikedPost = () => {
    if (Likes?.some((like) => like.userId == user)) {
      liked.value = withSpring(1);
    } else {
      liked.value = withSpring(0);
    }
  };

  const checkRetweetPost = () => {
    if (Repost?.some((repost) => repost.customerId == user)) {
      retweet.value = withSpring(1);
    } else {
      retweet.value = withSpring(0);
    }
  };

  const ckeckBookmarkPost = () => {
    if (BookMarks?.some((bookmark) => bookmark._id == postId)) {
      bookmark.value = withSpring(1);
    } else {
      bookmark.value = withSpring(0);
    }
  };

  useMemo(() => checkRetweetPost(), [Repost?.length]);
  useMemo(() => checkedLikedPost(), [Likes?.length]);
  useMemo(() => ckeckBookmarkPost(), [BookMarks?.length]);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });
  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  const bookmarkoutlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(bookmark.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });
  const bookmarkfillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: bookmark.value,
        },
      ],
      opacity: bookmark.value,
    };
  });

  const retweetoutlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(retweet.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });
  const retweetfillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: retweet.value,
        },
      ],
      opacity: retweet.value,
    };
  });
  let [isLoaded] = useFonts({
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{
        gap: size.getWidthSize(20),
        flexDirection: 'row',
        paddingVertical: size.getHeightSize(8),
        paddingHorizontal: paddingHorizontal
          ? size.getWidthSize(paddingHorizontal)
          : 0,

        marginBottom: marginBottom ? size.getHeightSize(8) : 0,
        marginTop: marginTop ? size.getHeightSize(8) : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <CommentIcon
          onPress={() => naviagtion.navigate('SinglePost' as any, postData)}
          size={size.getHeightSize(24)}
        />
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: 'Outfit-Regular',
            color: appColor.grayLight,
            lineHeight: size.getHeightSize(16),
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
        <Pressable onPress={handleRetweet}>
          <Animated.View
            style={[StyleSheet.absoluteFillObject, retweetoutlineStyle]}
          >
            <Retweet size={size.getHeightSize(24)} />
          </Animated.View>

          <Animated.View style={retweetfillStyle}>
            <Retweeted size={size.getHeightSize(24)} />
          </Animated.View>
        </Pressable>
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: changeRetweetTextColor
              ? 'Outfit-SemiBold'
              : 'Outfit-Regular',
            color: changeRetweetTextColor
              ? appColor.kSecondaryButtonColor
              : appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfrepost}
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
        <Pressable onPress={handleLike}>
          <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
            <LikePost size={size.getHeightSize(24)} />
          </Animated.View>

          <Animated.View style={fillStyle}>
            <LikedIcon size={size.getHeightSize(24)} />
          </Animated.View>
        </Pressable>
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: changeLikeTextColor
              ? 'Outfit-SemiBold'
              : 'Outfit-Regular',
            color: changeLikeTextColor
              ? appColor.kSecondaryButtonColor
              : appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOflikes}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <TipIcon
          onPress={() => {
            if (userId === currentUserId) {
              dispatch(
                updateToast({
                  displayToast: true,
                  toastMessage: 'Cannot tip yourself',
                  toastType: 'info',
                })
              );
            } else {
              dispatch(
                updateTipBottomSheet({
                  status: true,
                  profileImage: pfp
                    ? pfp
                    : Image.resolveAssetSource(images.defaultAvatar).uri,
                  username,
                  wallet,
                  nickname,
                })
              );
            }
          }}
          size={size.getHeightSize(24)}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          gap: size.getWidthSize(2),
        }}
      >
        <Pressable onPress={handleBookMark}>
          <Animated.View
            style={[StyleSheet.absoluteFillObject, bookmarkoutlineStyle]}
          >
            <BookMark size={size.getHeightSize(24)} />
          </Animated.View>
          <Animated.View style={bookmarkfillStyle}>
            <BookMarkedIcon size={size.getHeightSize(24)} />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

export default PostActions;
