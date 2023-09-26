import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useFonts } from 'expo-font';
import LikePost from '../../../assets/images/svg/LikePost';
import LikedIcon from '../../../assets/images/svg/LikedIcon';
import { appColor, fonts } from '../../constants';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
const size = new sizes(height, width);
const CommentLikeButton = () => {
  const [changeLikeTextColor, setlikesTextColor] = useState(false);
  const handleLike = () => {
    liked.value = withSpring(liked.value ? 0 : 1);
    setlikesTextColor((previous) => !previous);
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
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.reactionContent}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <LikePost size={size.getHeightSize(24)} onPress={handleLike} />
      </Animated.View>
      <Animated.View style={fillStyle}>
        <LikedIcon size={size.getHeightSize(24)} onPress={handleLike} />
      </Animated.View>
      <Text style={styles.reactionText}>4</Text>
    </View>
  );
};

export default CommentLikeButton;
const styles = StyleSheet.create({
  reactionContent: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  reactionText: {
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
  },
});
