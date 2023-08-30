import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { LinearProgress } from 'react-native-elements';
import GreenToastIcon from '../../../assets/images/svg/GreenToastIcon';
const { height, width } = Dimensions.get('window');
import { appColor, fonts, images } from '../../constants';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { sizes } from '../../utils';
import React, { useEffect, useState, useCallback } from 'react';
import { updateToast, resetToast } from '../../controller/FeedsController';
import ToastInfoIcon from '../../../assets/images/svg/ToastInfoIcon';
import { batch } from 'react-redux';
const size = new sizes(height, width);

const CToast = () => {
  const dispatch = useAppDispatch();
  const [progressValue, setProgressValue] = useState(0);
  const [animation] = useState(new Animated.Value(0));
  const { toastProperty } = useAppSelector((state) => ({
    toastProperty: state.FeedsSliceController.showToast,
  }));

  useEffect(() => {
    if (toastProperty) {
      Toast.show({
        type: 'tomatoToast',
      });
    }
  }, [toastProperty]);
  const handleOnHide = () => {
    setProgressValue(0);
    dispatch(resetToast());
  };
  const onToastShow = () => {
    const animationDuration = 3000; // 4 seconds
    const animationSteps = 10; // You can adjust this based on the desired smoothness of the animation
    const stepDuration = animationDuration / animationSteps;
    const stepValue = 1 / animationSteps;
    let step = 0;
    const interval = setInterval(() => {
      setProgressValue((prevValue) => {
        const newValue = prevValue + stepValue;
        step++;
        if (step >= animationSteps) {
          // Reset progress value
          clearInterval(interval);
        }
        return Math.min(newValue, 1);
      });
    }, stepDuration);
  };
  const toastConfig = {
    tomatoToast: () => (
      <View style={styles.toastContainer}>
        <View
          style={[
            styles.toastRow,
            {
              marginVertical: size.getHeightSize(24),
              alignItems: toastProperty.alignItems,
            },
          ]}
        >
          {toastProperty.toastType === 'success' ? (
            <GreenToastIcon />
          ) : (
            <ToastInfoIcon />
          )}
          <Text style={styles.toastText}>{toastProperty.toastMessage}</Text>
        </View>

        <LinearProgress
          color={toastProperty.toastType === 'success' ? '#2AB576' : '#FFF'}
          trackColor={appColor.kgrayDark2}
          value={progressValue}
          variant="determinate"
        />
      </View>
    ),
  };
  return (
    <Toast
      config={toastConfig}
      onHide={handleOnHide}
      onShow={onToastShow}
      topOffset={size.getHeightSize(53)}
      position={toastProperty.position}
      bottomOffset={size.getHeightSize(60)}
    />
  );
};

export default CToast;
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
    borderWidth: size.getWidthSize(1),
    borderColor: appColor.kGrayLight3,
  },
  toastRow: {
    flexDirection: 'row',
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),
    width: size.getWidthSize(286),
  },
});
