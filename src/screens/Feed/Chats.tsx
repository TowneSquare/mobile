import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import CoinIconWhite from '../../../assets/images/svg/CoinIconWhite';
import Swipeable from '../../shared/Swipeable';
import {
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  GestureHandlerGestureEvent,
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
import { useState } from 'react';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ButtonWidth = size.getWidthSize(284);
const ButtonHeight = size.getHeightSize(48);
const ButtonPadding = size.getHeightSize(4);
const swipeableDimensions = ButtonHeight - 2 * ButtonPadding;
const h_wave_range = swipeableDimensions + 2 * ButtonPadding;
const h_swipe_range = ButtonWidth - 2 * ButtonPadding - swipeableDimensions;
type ContextType = {
  completed: boolean;
};
const Chats = () => {
  const [toggled, setToggled] = useState(false);
  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (event, ctx) => {
      // X.value = Math.max(
      //   0, // Minimum value (left bound)
      //   Math.min(event.translationX, h_swipe_range) // Maximum value (right bound)
      // );
      let newValue: number;
      if (ctx.completed) {
        newValue = h_swipe_range + event.translationX;
      } else {
        newValue = event.translationX;
      }
      if (newValue >= 0 && newValue <= h_swipe_range) {
        X.value = newValue;
      }
    },
    onEnd: (event) => {
      if (X.value < ButtonWidth / 2 - swipeableDimensions / 2) {
        X.value = withSpring(0);
        runOnJS(setToggled)(false);
      } else {
        X.value = withSpring(h_swipe_range);
        runOnJS(setToggled)(true);
      }
    },
  });
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
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
    
    </SafeAreaView>
  );
};

export default Chats;
const styles = StyleSheet.create({
  swipeCont: {
    height: ButtonHeight,
    width: ButtonWidth,
    padding: ButtonPadding,
    backgroundColor: appColor.kgrayDark2,
    alignItems: 'center',

    borderRadius: ButtonHeight,
    marginTop: size.getHeightSize(24),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
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
