import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  updateAttachNftCountDown,
  updateShowPriceModal,
} from '../../controller/createPost';
import { batch } from 'react-redux';
import { LinearProgress } from 'react-native-elements';
import ToastIcon from '../../../assets/images/svg/ToastIcon';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { sizes } from '../../utils';
const size = new sizes(height, width);
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
interface Props {
  text: string;
  functions: (() => void)[];
  position: 'top' | 'bottom';
  marginVertical?: number;
  alignItems?: 'flex-start' | 'center';
}
const CustomToast = ({
  text,
  functions,
  position,
  marginVertical,
  alignItems,
}: Props) => {
  const dispatch = useAppDispatch();
  const [progressValue, setProgressValue] = useState(0);
  const { shouldShowNftAttachmentToast, shouldShowPublishToast } =
    useAppSelector((state) => ({
      shouldShowNftAttachmentToast:
        state.CreatePostController.startToastCountdown,
      shouldShowPublishToast: state.CreatePostController.shouldShowPublishToast,
    }));
  useEffect(() => {
    if (shouldShowNftAttachmentToast || shouldShowPublishToast) {
      const animationDuration = 4000;
      const animationSteps = 100;
      const stepDuration = animationDuration / animationSteps;
      const stepValue = 1 / animationSteps;

      let step = 0;
      const interval = setInterval(() => {
        setProgressValue((prevValue) => {
          const newValue = prevValue + stepValue;
          step++;
          if (step >= animationSteps) {
            clearInterval(interval);
            setTimeout(() => {
              batch(() => {
                functions.forEach((func) => {
                  func();
                });
              });
            }, 1000);
          }
          return Math.min(newValue, 1);
        });
      }, stepDuration);

      return () => {
        clearInterval(interval);
      };
    }
  }, [shouldShowNftAttachmentToast, shouldShowPublishToast]);
  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          bottom: position === 'bottom' ? size.getHeightSize(8) : undefined,
          top: position === 'top' ? size.getHeightSize(35) : undefined,
        },
      ]}
    >
      <View
        style={[
          styles.toastRow,
          {
            marginVertical: marginVertical
              ? size.getHeightSize(marginVertical)
              : size.getHeightSize(16),
            alignItems: alignItems ? alignItems : 'center',
          },
        ]}
      >
        <ToastIcon />
        <Text style={styles.toastText}>{text}</Text>
      </View>

      <LinearProgress
        color="white"
        trackColor={appColor.kgrayDark2}
        value={progressValue}
        variant="determinate"
      />
    </Animated.View>
  );
};

export default CustomToast;
const styles = StyleSheet.create({
  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  toastContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 4,
    width: size.getWidthSize(340),
    marginTop: size.getHeightSize(35),
    borderWidth: size.getWidthSize(1),
    borderColor: appColor.kGrayLight3,
    bottom: 0,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
  toastRow: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),

    width: size.getWidthSize(286),
    alignSelf: 'center',
  },
});
