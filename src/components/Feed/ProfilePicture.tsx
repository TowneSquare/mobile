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
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { useState, useRef, useMemo, useEffect } from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { images, appColor } from '../../constants';
import * as Animatable from 'react-native-animatable';
const size = new sizes(height, width);
import { useNavigation } from '@react-navigation/native';
import { updateTipBottomSheet } from '../../controller/FeedsController';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import Swipeable from '../../shared/Swipeable';
import { updateSelectedSwipeablePFPId } from '../../controller/FeedsController';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import CoinIconWhite from '../../../assets/images/svg/CoinIconWhite';
import SwipeArrow1 from '../../../assets/images/svg/SlideArrow1';
import SwipeArrow2 from '../../../assets/images/svg/SwipeArrow2';
import SwipeArrow3 from '../../../assets/images/svg/SwipeArrow3';
interface Props {
  PFPsize?: number;
  swipeable?: boolean;
  id: string;
}
const ButtonWidth = size.getWidthSize(284);
const ButtonHeight = size.getHeightSize(48);
const ButtonPadding = size.getHeightSize(4);
const swipeableDimensions = ButtonHeight - 2 * ButtonPadding;
const h_wave_range = swipeableDimensions + 2 * ButtonPadding;
const h_swipe_range = ButtonWidth - 2 * ButtonPadding - swipeableDimensions;
const ProfilePicture = ({ PFPsize, swipeable, id }: Props) => {
  const [showSwipe, setShowSwipe] = useState(false);
  const navigation = useNavigation();
  const fadeAnim = useRef(new RNAnimated.Value(0)).current;
  const X = useSharedValue(0);
  const longPressDuration = 1000;
  const interpolateXInput = [0, h_swipe_range];
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
  const dispatch = useAppDispatch();
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        swipeable && setShowSwipe(true);
        RNAnimated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderMove: (_, gestureState) => {
        let newValue: number;

        X.value = Math.max(0, Math.min(gestureState.dx, h_swipe_range));
      },
      onPanResponderRelease: (_, gestureState) => {
        if (X.value > size.getWidthSize(235)) {
          setShowSwipe(false);
          dispatch(updateTipBottomSheet(true));
          // X.value = 0;
        } else {
          setShowSwipe(false);
          // X.value = withSpring(0);
          // dispatch(updateTipBottomSheet(false));
          // runOnJS(setShowSwipe)(false);
        }
      },
    })
  ).current;

  return (
    <>
      <View
        {...panResponder.panHandlers}
        style={{
          height: size.getHeightSize(40),
          width: size.getHeightSize(40),
          borderRadius: 200,
          position: 'absolute',
          left: size.getWidthSize(16),
          top: size.getHeightSize(8),
          zIndex: 1,
        }}
      >
        <Image
          source={images.pfpImage}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: swipeableDimensions,
          }}
        />
      </View>

      {showSwipe && (
        <View
          style={{
            position: 'absolute',
            left: size.getWidthSize(16),
            top: size.getHeightSize(8),
            zIndex: 3,
          }}
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
                  source={images.pfpImage}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: swipeableDimensions,
                  }}
                />
              </Animated.View>
            </PanGestureHandler>
            <View
              style={{
                marginLeft: size.getWidthSize(53),
                flexDirection: 'row',
                alignItems: 'center',
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
            <View
              style={{
                height: size.getHeightSize(40),
                width: size.getWidthSize(40),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: size.getHeightSize(40),
                backgroundColor: appColor.kSecondaryButtonColor,
              }}
            >
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
    top: -4,
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
});