import {
  Pressable,
  Dimensions,
  StyleSheet,
  View,
  Animated as RNAnimated,
  Image,
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
  nickname?: string;
  username?: string;
  wallet?: string;
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
  swipeable,
  userId,
  username,
  nickname,
  wallet,
  profileImageUri,
}: Props) => {
  const [showSwipe, setShowSwipe] = useState(false);

  let longPressTimer: any;
  const LONG_PRESS_DURATION = 500;
  const navigation = useNavigation();
  const fadeAnim = useRef(new RNAnimated.Value(0)).current;
  const X = useSharedValue(0);
  const longPressDuration = 1000;
  const interpolateXInput = [0, h_swipe_range];
  const token = useAppSelector((state) => state.USER.didToken);

  const dispatch = useAppDispatch();
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

  const handleShortPress = () => {
    if (swipeable) {
      navigation.navigate("Profile");
    } else {
      navigation.navigate("TheirProfileScreen", {
        userId: userId,
        username: username,
        nickname: nickname,
      });
    }

    setShowSwipe((previous) => {
      if (previous) {
        return false;
      }
    });
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
          profileImage:
            profileImageUri ||
            Image.resolveAssetSource(images.profileVector).uri,
          username: username,
          wallet: wallet,
          nickname: nickname,
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
    if (offset.value > 235) {
      dispatch(
        updateTipBottomSheet({
          status: true,
          profileImage:
            profileImageUri ||
            Image.resolveAssetSource(images.profileVector).uri,
          username,
          wallet,
          nickname,
        })
      );
    }
  }, []);

  return (
    <>
      {showSwipe ? (
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
