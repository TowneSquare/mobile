import { View, Text } from 'react-native';
import React from 'react';
import { appColor } from '../constants';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const CustomBackground = () => {
//   const containerStyle = useAnimatedStyle(() => ({
  
//     backgroundColor: appColor.modalBackgroundColor,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     opacity: interpolate(
//       animatedIndex.value,
//       [0, 0.08],
//       [0, 1],
//       Extrapolation.CLAMP
//     ),
//   }));
  return <View style={{ backgroundColor: appColor.maintext }} />;
};

export default CustomBackground;
