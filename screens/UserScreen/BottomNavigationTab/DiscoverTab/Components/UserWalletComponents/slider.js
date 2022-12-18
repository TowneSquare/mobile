import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import SwipeButton from "rn-swipe-button";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const COLOR = {
  SLIDE_BUTTON: "#dffc55",
  BUTTON_COLOR: "#253836",
  BACKGROUND_COLOR: "#132223",
  ARROW_COLOR: "#000000",
};
const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 60;
const SwipeToAction = () => {
  const X = useSharedValue(0);
  const [toggled, setToggled] = useState(false);
  const handleComplete = (isToggled) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
    }
  };
  const handleGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = 290 + e.translationX;
      } else {
        newValue = e.translationX;
      }
      if (newValue >= 0 && newValue <= 300) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(300);
      }
      runOnJS(handleComplete)(true);
    },
  });
  const AnimatedStyles = {
    swipeStyles: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: X.value,
          },
        ],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(X.value, [0, 150], [1, 0], Extrapolation.CLAMP),
      };
    }),
  };

  return (
    <View style={styles.container}>
      {/* Container for swipe container */}
      <View
        style={{
          width: BUTTON_WIDTH,
          height: BUTTON_HEIGHT,
          backgroundColor: COLOR.BUTTON_COLOR,
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        {/* Swipe Container */}
        <PanGestureHandler onGestureEvent={handleGestureEvent}>
          <Animated.View
            style={[
              {
                backgroundColor: COLOR.SLIDE_BUTTON,
                height: 50,
                width: 50,
                position: "absolute",
                left: 0,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              },
              AnimatedStyles.swipeStyles,
            ]}
          >
            <AntDesign name="arrowright" color={"black"} />
          </Animated.View>
        </PanGestureHandler>
        {/* <Animated.Text style={[{
          color:"white"
        }, AnimatedStyles.swipeText]}>Slide to send</Animated.Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop:100
  },
});

export default SwipeToAction;
