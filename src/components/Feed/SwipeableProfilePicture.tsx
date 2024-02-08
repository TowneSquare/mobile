import {
  Pressable,
  Dimensions,
  StyleSheet,
  View,
  PanResponder,
  Animated as RNAnimated,
  Image,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { useState, useRef } from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { images, appColor } from '../../constants';
const size = new sizes(height, width);
import { useNavigation } from '@react-navigation/native';
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
} from 'react-native-reanimated';
import CoinIconWhite from '../../../assets/images/svg/CoinIconWhite';
import SwipeArrow1 from '../../../assets/images/svg/SlideArrow1';
import SwipeArrow2 from '../../../assets/images/svg/SwipeArrow2';
import SwipeArrow3 from '../../../assets/images/svg/SwipeArrow3';

interface Props {
  PFPsize?: number;
  swipeable?: boolean;
  userId: string;
  nickname?: string;
  username?: string;
  wallet?: string;
  profileImageUri: string;
  top?: number;
  left?: number;
}
const ButtonWidth = size.getWidthSize(284);
const ButtonHeight = size.getHeightSize(48);
const ButtonPadding = size.getHeightSize(4);
const swipeableDimensions = ButtonHeight - 2 * ButtonPadding;
const h_wave_range = swipeableDimensions + 2 * ButtonPadding;
const h_swipe_range = ButtonWidth - 2 * ButtonPadding - swipeableDimensions;

const ProfilePicture = ({
  swipeable,
  userId,
  username,
  nickname,
  wallet,
  profileImageUri,
  top,
  left,
}: Props) => {
  const [showSwipe, setShowSwipe] = useState(false);

  const X = useSharedValue(0);
  const longPressDuration = 1000;
  const interpolateXInput = [0, h_swipe_range];

  const currentUserId = useAppSelector((state) => state.USER.UserData._id);
  const dispatch = useAppDispatch();
  const onLongPress = () => {
    if (userId == currentUserId) {
      console.log('Cannot tip yourself');
    } else {
      setShowSwipe(true);
    }
  };

  const offset = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = (event) => {
    width.value = event.nativeEvent.layout.width;
  };

  // const handleShortPress = () => {
  //   if (userId == currentUserId) {
  //     navigation.navigate("Profile");
  //   } else {
  //     navigation.navigate("TheirProfileScreen", {
  //       userId: userId,
  //       username: username,
  //       nickname: nickname,
  //     });
  //   }

  //   setShowSwipe((previous) => {
  //     if (previous) {
  //       return false;
  //     }
  //   });
  // };

  let longPressTimer: any;
  const LONG_PRESS_DURATION = 500;
  const navigation = useNavigation();
  const fadeAnim = useRef(new RNAnimated.Value(0)).current;

  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: X.value,
          },
        ],
      };
    }),
    swipeableText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          interpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP
        ),
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: swipeableDimensions + X.value,
      };
    }),
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        longPressTimer = setTimeout(() => {
          swipeable && setShowSwipe(true);
          RNAnimated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }, LONG_PRESS_DURATION);
      },
      onPanResponderMove: (_, gestureState) => {
        X.value = Math.max(0, Math.min(gestureState.dx, h_swipe_range));
      },
      onPanResponderRelease: (_, gestureState) => {
        clearTimeout(longPressTimer);
        if (
          gestureState.moveX === gestureState.x0 &&
          gestureState.moveY === gestureState.y0
        ) {
          handleShortPress();
        }
        if (X.value > size.getWidthSize(235)) {
          if (userId === currentUserId) {
            setShowSwipe(false);
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: 'Cannot tip yourself',
                toastType: 'info',
              })
            );
          } else {
            setShowSwipe(false);
            dispatch(
              updateTipBottomSheet({
                status: true,
                profileImage: profileImageUri
                  ? profileImageUri
                  : Image.resolveAssetSource(images.defaultAvatar).uri,
                username,
                wallet,
                nickname,
              })
            );
          }
        } else {
          setShowSwipe(false);
        }
      },
    })
  ).current;
  const handleShortPress = () => {
    console.log('============================================');
    console.log(userId, username, nickname, wallet, profileImageUri);

    setShowSwipe((previous) => {
      if (previous) {
        return false;
      } else {
        if (userId == currentUserId) {
        } else {
          navigation.navigate("TheirProfileScreen", {
            userId: userId,
            username: username,
            nickname: nickname,
          });
        }
      }
    });
  };

  return (
    <>
      <View
        {...panResponder.panHandlers}
        style={[
          styles.pfp,
          {
            left: left ? size.getWidthSize(left) : size.getWidthSize(16),
            top: top ? size.heightSize(top) : size.getHeightSize(8),
          },
        ]}
      >
        <Image
          source={profileImageUri ? { uri: profileImageUri } : images.pfpImage}
          style={styles.image}
        />
      </View>

      {showSwipe && (
        <View
          style={[
            styles.swipeView,
            {
              left: left ? size.getWidthSize(left) : size.getWidthSize(16),
              top: top ? size.heightSize(top) : size.getHeightSize(8),
            },
          ]}
        >
          <RNAnimated.View style={[styles.swipeCont, { opacity: fadeAnim }]}>
            <Animated.View
              style={[styles.colorWave, AnimatedStyles.colorWave]}
            ></Animated.View>
            <PanGestureHandler>
              <Animated.View
                style={[styles.swipeable, AnimatedStyles.swipeable]}
              >
                <Image
                  source={
                    profileImageUri ? { uri: profileImageUri } : images.pfpImage
                  }
                  style={styles.image}
                />
              </Animated.View>
            </PanGestureHandler>
            <View style={styles.view1}>
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
            <View style={styles.tip}>
              <CoinIconWhite size={size.getHeightSize(24)} />
            </View>
          </RNAnimated.View>
        </View>
      )}
    </>
  );
};

export default ProfilePicture;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    // position: 'absolute',
  },
  swipeCont: {
    height: ButtonHeight,
    width: ButtonWidth,
    padding: ButtonPadding,
    backgroundColor: appColor.kgrayDark2,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: ButtonHeight,
    position: 'absolute',
    top: size.getHeightSize(-4),
  },
  swipeable: {
    height: swipeableDimensions,
    width: swipeableDimensions,
    borderRadius: swipeableDimensions,
    backgroundColor: appColor.kErrorText,
    position: 'absolute',
    left: ButtonPadding,
    zIndex: 3,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    zIndex: 2,
    marginHorizontal: size.getWidthSize(8),
    flex: 1,
  },
  colorWave: {
    position: 'absolute',
    left: ButtonPadding,
    height: swipeableDimensions,
    borderRadius: ButtonHeight,
    backgroundColor: appColor.kSecondaryButtonColor,
    zIndex: 3,
  },
  tip: {
    height: size.getHeightSize(40),
    width: size.getWidthSize(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: size.getHeightSize(40),
    backgroundColor: appColor.kSecondaryButtonColor,
  },
  swipe: {
    position: 'absolute',

    zIndex: 3,
  },
  pfp: {
    height: size.getHeightSize(40),
    width: size.getHeightSize(40),
    borderRadius: 200,
    position: 'absolute',

    zIndex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: swipeableDimensions,
  },
  swipeView: {
    position: 'absolute',

    zIndex: 3,
  },
  view1: {
    marginLeft: size.getWidthSize(53),
    flexDirection: 'row',
    alignItems: 'center',
    width: size.getWidthSize(60),
  },
});
