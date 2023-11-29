import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { sizes } from "../../utils";
import { appColor, fonts } from "../../constants";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
import Retweet from "../../../assets/images/svg/Retweet";
import BookMark from "../../../assets/images/svg/BookMark";
import LikePost from "../../../assets/images/svg/LikePost";
import TipIcon from "../../../assets/images/svg/TipIcon";
import LikedIcon from "../../../assets/images/svg/LikedIcon";
import Retweeted from "../../../assets/images/svg/Retweeted";
import BookMarkedIcon from "../../../assets/images/svg/BookMarkedIcon";
import CommentIcon from "../../../assets/images/svg/CommentIcon";
import { updateTipBottomSheet } from "../../controller/FeedsController";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { likePost } from "../../api";
import { rePost } from "../../controller/createPost";

const size = new sizes(height, width);
interface Props {
  noOfComments: number;
  noOfRetweet: number;
  noOfLikes: number;
  paddingHorizontal?: number;
  marginBottom?: boolean;
  marginTop?: boolean;
  showShareIcon?: boolean;
  postId:string
}
const PostActions = ({
  noOfComments,
  noOfLikes,
  noOfRetweet,
  paddingHorizontal,
  marginBottom,
  marginTop,
  showShareIcon,
  postId
}: Props) => {
  const dispatch = useAppDispatch();
  const [changeLikeTextColor, setlikesTextColor] = useState(false);
  const [changeRetweetTextColor, setRetweetTextColor] = useState(false);
  const token = useAppSelector((state) => state.USER.didToken)
  const handleLike = () => {
    liked.value = withSpring(liked.value ? 0 : 1);
    setlikesTextColor((previous) => !previous);
    likePost(token,postId)
  };
  const handleRetweet = () => {
    retweet.value = withSpring(retweet.value ? 0 : 1);
    setRetweetTextColor((previous) => !previous);
    dispatch(rePost({token, postId}))
  };
  const handleBookMark = () => {
    bookmark.value = withSpring(bookmark.value ? 0 : 1);
  };
  const liked = useSharedValue(0);
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
  const bookmark = useSharedValue(0);
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
  const retweet = useSharedValue(0);
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
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{
        gap: size.getWidthSize(20),
        flexDirection: "row",
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
          flexDirection: "row",
          alignItems: "center",
          gap: size.getWidthSize(2),
        }}
      >
        <CommentIcon size={size.getHeightSize(24)} />
        <Text
          style={{
            fontSize: size.fontSize(13),
            fontFamily: "Outfit-Regular",
            color: appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfComments}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
              ? "Outfit-SemiBold"
              : "Outfit-Regular",
            color: changeRetweetTextColor
              ? appColor.kSecondaryButtonColor
              : appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfRetweet}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
              ? "Outfit-SemiBold"
              : "Outfit-Regular",
            color: changeLikeTextColor
              ? appColor.kSecondaryButtonColor
              : appColor.grayLight,
            lineHeight: size.getHeightSize(16),
          }}
        >
          {noOfLikes}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          gap: size.getWidthSize(2),
        }}
      >
        <TipIcon
          onPress={() => dispatch(updateTipBottomSheet(true))}
          size={size.getHeightSize(24)}
        />
      </View>
      <View
        style={{
          alignItems: "center",
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
