import {
  Pressable,
  Dimensions,
  StyleSheet,
  View,
  PanResponder,
  Alert,
  Animated as RNAnimated,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { useState, useRef, useMemo, useEffect } from "react";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../utils";
import { images, appColor } from "../../constants";
import * as Animatable from "react-native-animatable";
const size = new sizes(height, width);
import { useNavigation } from "@react-navigation/native";
import { updateTipBottomSheet } from "../../controller/FeedsController";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import Swipeable from "../../shared/Swipeable";
import { updateSelectedSwipeablePFPId } from "../../controller/FeedsController";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDecay,
} from "react-native-reanimated";
import CoinIconWhite from "../../../assets/images/svg/CoinIconWhite";
import SwipeArrow1 from "../../../assets/images/svg/SlideArrow1";
import SwipeArrow2 from "../../../assets/images/svg/SwipeArrow2";
import SwipeArrow3 from "../../../assets/images/svg/SwipeArrow3";
import { getUserInfo } from "../../api";
import { UserData } from "../../controller/UserController";

interface Props {
  PFPsize?: number;
  swipeable?: boolean;
  userId: string;
  profileImageUri: string;
}
const ButtonWidth = size.getWidthSize(284);
const ButtonHeight = size.getHeightSize(48);
const ButtonPadding = size.getHeightSize(4);
const swipeableDimensions = ButtonHeight - 2 * ButtonPadding;
const h_wave_range = swipeableDimensions + 2 * ButtonPadding;
const h_swipe_range = ButtonWidth - 2 * ButtonPadding - swipeableDimensions;
const SIZE = 120;
const ProfilePicture = ({
  PFPsize,
  swipeable,
  userId,
  profileImageUri,
}: Props) => {
  const [showSwipe, setShowSwipe] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    _id: "655d71b07123f56056b546d8",
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
  let longPressTimer: any;
  const LONG_PRESS_DURATION = 500;
  const navigation = useNavigation();
  const fadeAnim = useRef(new RNAnimated.Value(0)).current;
  const X = useSharedValue(0);
  const longPressDuration = 1000;
  const interpolateXInput = [0, h_swipe_range];
  const token = useAppSelector((state) => state.USER.didToken);
  const getUser = async () => {
    const result = await getUserInfo(userId, token);
    setUserData(result);
  };

  //useMemo(() => getUser(), [userId])  @un-comment

  const dispatch = useAppDispatch();
  const handleShortPress = () => {
    console.log("========");
    navigation.navigate("TheirProfileScreen", {
      userData,
    });

    setShowSwipe((previous) => {
      if (previous) {
        return false;
      } else {
      }
    });
  };

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onPanResponderGrant: () => {
  //       longPressTimer = setTimeout(() => {
  //         swipeable && setShowSwipe(true);
  //         RNAnimated.timing(fadeAnim, {
  //           toValue: 1,
  //           duration: 300,
  //           useNativeDriver: false,
  //         }).start();
  //       }, LONG_PRESS_DURATION);
  //     },
  //     onPanResponderMove: (_, gestureState) => {
  //       X.value = Math.max(0, Math.min(gestureState.dx, h_swipe_range));
  //     },
  //     onPanResponderRelease: (_, gestureState) => {
  //       clearTimeout(longPressTimer);
  //       if (
  //         gestureState.moveX === gestureState.x0 &&
  //         gestureState.moveY === gestureState.y0
  //       ) {
  //         handleShortPress();
  //       }
  //       if (X.value > size.getWidthSize(235)) {
  //         console.log("tippppppp");
  //         setShowSwipe(false);
  //         dispatch(
  //           updateTipBottomSheet({
  //             status: true,
  //             profileImage: userData.profileImage,
  //             username: userData.username,
  //             wallet: userData.aptosWallet,
  //             nickname: userData.nickname,
  //           })
  //         );
  //       } else {
  //         setShowSwipe(false);
  //       }
  //     },
  //   })
  // ).current;

  const onLongPress = () => {
    if (swipeable) {
      console.log("Cannot tip yourself");
    } else {
      setShowSwipe(true);
    }
  };

  const offset = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = (event) => {
    width.value = event.nativeEvent.layout.width;
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeX;
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
    })
    .runOnJS(true)
    .onEnd((event) => {
      "runOnJS";
      dispatch(
        updateTipBottomSheet({
          status: true,
          profileImage: userData.profileImage,
          username: userData.username,
          wallet: userData.aptosWallet,
          nickname: userData.nickname,
        })
      );
      setShowSwipe(false);
      offset.value = 0;
    });

  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: offset.value,
          },
        ],
      };
    }),
    swipeableText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          offset.value,
          interpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP
        ),
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: swipeableDimensions + offset.value,
      };
    }),
  };

  useEffect(() => {
    console.log(width.value, "offset");
    if (offset.value > 235) {
      dispatch(
        updateTipBottomSheet({
          status: true,
          profileImage: userData.profileImage,
          username: userData.username,
          wallet: userData.aptosWallet,
          nickname: userData.nickname,
        })
      );
    }
  }, []);

  return (
    <>
      {showSwipe ? (
        // <View
        //   style={{
        //     position: "absolute",
        //     left: size.getWidthSize(16),
        //     top: size.getHeightSize(8),
        //     zIndex: 3,
        //   }}
        // >
        //   <RNAnimated.View style={[styles.swipeCont, { opacity: fadeAnim }]}>
        // <Animated.View
        //   style={[styles.colorWave, AnimatedStyles.colorWave]}
        // ></Animated.View>
        //     <PanGestureHandler>
        //       <Animated.View
        //         style={[styles.swipeable, AnimatedStyles.swipeable]}
        //       >
        //         <Image
        //           source={{
        //             uri: profileImageUri
        //               ? profileImageUri
        //               : Image.resolveAssetSource(images.pfpImage).uri,
        //           }}
        //           style={{
        //             height: "100%",
        //             width: "100%",
        //             borderRadius: swipeableDimensions,
        //           }}
        //         />
        //       </Animated.View>
        //     </PanGestureHandler>
        // <View
        //   style={{
        //     marginLeft: size.getWidthSize(53),
        //     flexDirection: "row",
        //     alignItems: "center",
        //     width: size.getWidthSize(60),
        //   }}
        // >
        //   <SwipeArrow1 size={size.getHeightSize(32)} />
        //   <SwipeArrow2
        //     size={size.getHeightSize(32)}
        //     style={{
        //       left: size.getWidthSize(-13),
        //     }}
        //   />
        //   <SwipeArrow3
        //     size={size.getHeightSize(32)}
        //     style={{
        //       left: size.getWidthSize(-26),
        //     }}
        //   />
        // </View>
        // <Animated.Text style={[styles.text]}>
        //   Swipe to send tip
        // </Animated.Text>
        //     <View
        //       style={{
        //         height: size.getHeightSize(40),
        //         width: size.getWidthSize(40),
        //         justifyContent: "center",
        //         alignItems: "center",
        //         borderRadius: size.getHeightSize(40),
        //         backgroundColor: appColor.kSecondaryButtonColor,
        //       }}
        //     >
        //       <CoinIconWhite size={size.getHeightSize(24)} />
        //     </View>
        //   </RNAnimated.View>
        // </View>
        <View
          style={{
            position: "absolute",
            left: size.getWidthSize(16),
            top: size.getHeightSize(8),
            zIndex: 3,
          }}
        >
          <GestureHandlerRootView style={styles.swipeCont}>
            <View onLayout={onLayout} style={styles.wrapper}>
              <Animated.View
                style={[styles.colorWave, AnimatedStyles.colorWave]}
              ></Animated.View>
              <GestureDetector gesture={pan}>
                <Animated.View
                  style={[styles.swipeable, AnimatedStyles.swipeable]}
                >
                  <Image
                    source={{
                      uri: profileImageUri
                        ? profileImageUri
                        : Image.resolveAssetSource(images.pfpImage).uri,
                    }}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: swipeableDimensions,
                    }}
                  />
                </Animated.View>
              </GestureDetector>
              <View
                style={{
                  marginLeft: size.getWidthSize(53),
                  flexDirection: "row",
                  alignItems: "center",
                  width: size.getWidthSize(60),
                }}
              >
                <SwipeArrow1 size={size.getHeightSize(32)} />
                <SwipeArrow2
                  size={size.getHeightSize(32)}
                  style={{
                    left: size.getWidthSize(-13),
                  }}
                />
                <SwipeArrow3
                  size={size.getHeightSize(32)}
                  style={{
                    left: size.getWidthSize(-26),
                  }}
                />
              </View>
              <Animated.Text style={[styles.text]}>
                Swipe to send tip
              </Animated.Text>
            </View>
          </GestureHandlerRootView>
        </View>
      ) : (
        <Pressable
          onPress={handleShortPress}
          onLongPress={onLongPress}
          style={{
            height: size.getHeightSize(40),
            width: size.getHeightSize(40),
            borderRadius: 200,
            position: "absolute",
            left: size.getWidthSize(16),
            top: size.getHeightSize(8),
            zIndex: 1,
          }}
        >
          <Image
            source={{
              uri: profileImageUri
                ? profileImageUri
                : Image.resolveAssetSource(images.pfpImage).uri,
            }}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: swipeableDimensions,
            }}
          />
        </Pressable>
      )}
    </>
  );
};

export default ProfilePicture;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    // position: 'absolute',
  },
  swipeCont: {
    height: ButtonHeight,
    width: ButtonWidth,
    padding: ButtonPadding,
    backgroundColor: appColor.kgrayDark2,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: ButtonHeight,
    position: "absolute",
    top: -4,
  },
  swipeable: {
    height: swipeableDimensions,
    width: swipeableDimensions,
    borderRadius: swipeableDimensions,
    backgroundColor: appColor.kErrorText,
    position: "absolute",
    left: ButtonPadding,
    zIndex: 3,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    zIndex: 2,
    marginHorizontal: size.getWidthSize(8),
    flex: 1,
  },
  colorWave: {
    position: "absolute",
    left: ButtonPadding,
    height: swipeableDimensions,
    borderRadius: ButtonHeight,
    backgroundColor: appColor.kSecondaryButtonColor,
    zIndex: 3,
  },

  wrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  grab: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "white",
    borderRadius: 20,
    cursor: "grab",
    alignItems: "center",
    justifyContent: "center",
  },
});
