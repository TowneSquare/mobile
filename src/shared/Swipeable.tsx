import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Animated as RNAnimated,
  StyleSheet,
  View
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import CoinIconWhite from '../../assets/images/svg/CoinIconWhite';
import SwipeArrow1 from '../../assets/images/svg/SlideArrow1';
import SwipeArrow2 from '../../assets/images/svg/SwipeArrow2';
import SwipeArrow3 from '../../assets/images/svg/SwipeArrow3';
import { appColor, images } from '../constants';
import { sizes } from '../utils';
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
interface Props {
  onEnd: () => void;
  onComplete: () => void;
}
const Swipeable = ({ onEnd, onComplete }: Props) => {
  const [toggled, setToggled] = useState(false);
  const [fadeAnim] = useState(new RNAnimated.Value(0));
  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, ctx) => {
      ctx.completed = toggled;
      //   console.log("starting")
    },
    onActive: (event, ctx) => {
      // console.log("active")
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
        runOnJS(onEnd)();
      } else {
        X.value = withSpring(h_swipe_range);
        runOnJS(onComplete)();
        runOnJS(onEnd)();
      }
    },
    onCancel(event, context) {
      console.log('canceled')
    },
    onFail(event, context) {
      console.log('failed')
    },
    onFinish(event, context, isCanceledOrFailed) {
      console.log('finished')
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
  useEffect(() => {
    RNAnimated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <RNAnimated.View style={[styles.swipeCont, { opacity: fadeAnim }]}>
      <Animated.View
        style={[styles.colorWave, AnimatedStyles.colorWave]}
      ></Animated.View>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
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
          flex: 1,
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
      <Animated.Text style={[styles.text]}>Swipe to send tip</Animated.Text>
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
  );
};

export default Swipeable;
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
