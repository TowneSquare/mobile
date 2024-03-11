import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import GreenToastIcon from '../../../assets/images/svg/GreenToastIcon';
import ToastInfoIcon from '../../../assets/images/svg/ToastInfoIcon';
import { appColor } from '../../constants';
import { useAppDispatch } from '../../controller/hooks';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  text: string;
  functions: (() => void)[];
  position: 'top' | 'bottom';
  marginVertical?: number;
  alignItems?: 'flex-start' | 'center';
  type?: 'sucess' | 'info';
}
const CustomToast = ({
  text,
  functions,
  position,
  marginVertical,
  alignItems,
  type,
}: Props) => {
  const dispatch = useAppDispatch();
  const [progressValue, setProgressValue] = useState(0);

  // useEffect(() => {
  //   if (shouldShowToast) {
  //     const animationDuration = 4000;
  //     const animationSteps = 100;
  //     const stepDuration = animationDuration / animationSteps;
  //     const stepValue = 1 / animationSteps;

  //     let step = 0;
  //     const interval = setInterval(() => {
  //       setProgressValue((prevValue) => {
  //         const newValue = prevValue + stepValue;
  //         step++;
  //         if (step >= animationSteps) {
  //           clearInterval(interval);
  //           setTimeout(() => {
  //             batch(() => {
  //               functions.forEach((func) => {
  //                 func();
  //               });
  //             });
  //           }, 1000);
  //         }
  //         return Math.min(newValue, 1);
  //       });
  //     }, stepDuration);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [shouldShowToast]);
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
        {type === 'sucess' ? <GreenToastIcon /> : <ToastInfoIcon />}
        <Text style={styles.toastText}>{text}</Text>
      </View>

      <LinearProgress
        color={type === 'sucess' ? '#2AB576' : '#FFF'}
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
