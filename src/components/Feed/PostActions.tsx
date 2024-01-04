import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { useState, useEffect, useMemo } from "react";
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
import { getPostById, likePost } from "../../api";
import { Likes, PostData, Reposts, rePost } from "../../controller/createPost";
import { getUserInfo } from "../../api";
import { UserData, bookMarkPost } from "../../controller/UserController";
import { useNavigation } from "@react-navigation/native";

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
}: Props) => {
  const naviagtion = useNavigation();
  const dispatch = useAppDispatch();
  const [changeLikeTextColor, setlikesTextColor] = useState(false);
  const [changeRetweetTextColor, setRetweetTextColor] = useState(false);

  const token = useAppSelector((state) => state.USER.didToken);
  const [userData, setUserData] = useState<UserData>({
    _id: "655ab007ce8937ff6d512885",
    issuer: "did:ethr:0x8880807e9188a75767c647374d83272d031a0b42",
    aptosWallet: "0x8880807e9188a75767c647374d83272d031a0b42",
    nickname: "TO1",
    username: "TOTO1",
    email: "to@town.com",
    bio: `🖇️ Love everything about blockchain \n🌍3 web3 Native \n 👀 Always on a lookout for blue chips`,
    referralCode: "E1HFN",
    createdAt: "2023-11-20T01:01:59.418Z",
    profileImage:
      "https://townesquare-media.s3.amazonaws.com/20231124T025800.147Z_28i87s00i6s.jpg",
    followers: [],
    following: [],
    badge: [],
    posts: [
      {
        _id: "655df7a347784b1665992617",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: ["https://www.youtube.com/watch?v=EJzB_Fa27ko"],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl: "",
        nftCollection: "",
        nftTokenId: "",
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
          profileImage: "",
          createdAt: "",
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
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
      {
        _id: "6543112773263dcd8d741ba0",
        title: "",
        userId: "65372778b8da0e521b8a3587",
        description: "Test post ",
        imageUrls: [""],
        videoUrls: [""],
        createdAt: "2023-11-02T03:01:59.721Z",
        sellNFTPrice: "",
        nftImageUrl:
          "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png",
        nftCollection: "APtomingos",
        nftTokenId: "Aptomingo #123",
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
          profileImage: "",
          createdAt: "",
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
          profileImage: "",
          createdAt: "",
        },
        repost: false,
        originalPostId: "65430c7f372dd89672e9214d",
        originalCustomerId: "65372778b8da0e521b8a3587",
      },
    ],
    groups: [],
    superstars: {
      _id: "6563f507f07bc47317331a30",
      nftInfoArray: [
        {
          nftTokenId: "Aptomingo #111",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #112",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
        {
          nftTokenId: "Aptomingo #113",
          nftImageUrl:
            "https://airnfts.s3.amazonaws.com/nft-images/20210821/This_is_Link_1629558829889.png",
          nftCollection: "Aptomingos",
        },
      ],
      customerId: "655ab007ce8937ff6d512885",
      createdAt: "2023-11-27T01:46:47.630Z",
    },
    comments: [
      {
        _id: "656495e6f07bc47317331a32",
        content: "Test Content",
        imageUrls: ["https://image.com/image1"],
        videoUrls: ["https://video.com/video1"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655df7a347784b1665992617",
        createdAt: "2023-11-27T13:13:10.776Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
      {
        _id: "655bfe3a45ec78b4b2d04863",
        content: "Test Content",
        imageUrls: ["https://image.com/image1", "https://image.com/image2"],
        videoUrls: ["https://video.com/video1", "https://video.com/video2"],
        userId: "655ab007ce8937ff6d512885",
        postId: "655ab012ce8937ff6d512886",
        createdAt: "2023-11-21T00:47:54.262Z",
        postInfo: {
          _id: "655df7a347784b1665992617",
          description: "Test Post - 4",
          sellNFTPrice: "20.4",
          nftTokenId: "Aptomingo #123",
          nftCollection: "APtomingos",
          nftImageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960",
          userId: "655ab007ce8937ff6d512885",
          createdAt: "2023-11-22T12:44:19.364Z",
          imageUrls: [""],
          isSwapApt: false,
          videoUrls: [""],
          sellPrice: "",
        },
      },
    ],
  });
  const [postData, setPostData] = useState<PostData>();
  const [noOflikes, setNoOflikes] = useState<number>(Likes?.length);
  const [noOfrepost, setNoOfrepost] = useState<number>(Repost?.length);
  const getUser = async () => {
    const result = await getUserInfo(userId, token);
    setUserData(result);
  };
  const getPostData = async () => {
    try {
      const res = await getPostById(token, postId);
      setPostData(res);
    } catch (error) {}
  };

  const user = useAppSelector((state) => state.USER.UserData._id);
  const BookMarks = useAppSelector((state) => state.USER.BookMarks);

  useEffect(() => {
    getUser();
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
        <CommentIcon
          onPress={() => naviagtion.navigate("SinglePost" as any, postData)}
          size={size.getHeightSize(24)}
        />
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
          {noOfrepost}
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
          {noOflikes}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          gap: size.getWidthSize(2),
        }}
      >
        <TipIcon
          onPress={() =>
            dispatch(
              updateTipBottomSheet({
                status: true,
                profileImage: userData.profileImage,
                username: userData.username,
                wallet: userData.aptosWallet,
                nickname: userData.nickname,
              })
            )
          }
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
