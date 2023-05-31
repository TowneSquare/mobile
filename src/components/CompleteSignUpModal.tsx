import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import { MaterialIcons } from '@expo/vector-icons';
import Customhandler from './Customhandler';
import * as Animatable from 'react-native-animatable';
import {
  updateRenderCount,
  updateBottomSheet,
} from '../controller/BottomSheetController';
import Info from '../images/svg/Info';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import { useAppSelector, useAppDispatch } from '../controller/hooks';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
const { height, width } = Dimensions.get('window');
const CompleteSignUpModal = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const animatedIndex = useSharedValue(0);
  const size = new sizes(height, width);

  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.isBottomSheetOpen
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.renderCount
  );
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  useEffect(() => {
    dispatch(updateRenderCount(0));
  }, []);
  useEffect(() => {
    if (isVisible === true && renderCount > 0) {
      setBottomSheetOpen(true);
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
      setBottomSheetOpen(false);
    }
  }, [isVisible]);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateRenderCount(0));
        dispatch(updateBottomSheet(false));
      }}
      handleComponent={Customhandler}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={[Platform.OS === 'ios' ? '58%' : '58%']}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={500}
        easing={'ease-in-out'}
        duration={400}
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Bold',
            fontSize: size.fontSize(29),
            marginTop: size.getHeightSize(48),
            fontStyle: 'normal',
            lineHeight: size.getHeightSize(37),
          }}
        >
          Complete Signing in
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Medium',
            marginTop: size.getHeightSize(16),
            fontSize: size.fontSize(16),
            marginHorizontal: size.getWidthSize(16),
            lineHeight: size.getHeightSize(21),
            fontStyle: 'normal',
          }}
        >
          Connecting your wallet allows you to perform transactions by signing
          natively in the app.
        </Text>
        <View style={{ flex:1}}/>
        <View
          style={{
            paddingVertical: size.getHeightSize(16),
            paddingLeft: size.getWidthSize(16),
            paddingRight: size.getWidthSize(16),
            // height: size.getHeightSize(95),
            width: size.getWidthSize(328),
            backgroundColor: appColor.kGrayLight3,
            alignSelf: 'center',
            flexDirection: 'row',
            borderRadius: 8,
            // marginTop: size.getHeightSize(24),
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          <Info />
          <View
            style={{
              flexShrink: 1,
              width: size.getWidthSize(264),
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(16),
                color: appColor.kTextColor,
                textAlign: 'left',
                paddingLeft: size.getWidthSize(10),
                lineHeight:  size.getHeightSize(21),
                fontFamily: 'Outfit-Regular',
              }}
            >
              All transactions on TowneSquare need to be signed by you like
              anywhere else.
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}
        />
        <View
          style={{
            marginBottom: size.getHeightSize(28),
          }}
        >
          <ContinueButton closeModal navigateTo="ChooseUsername" />
          <BackButton marginTop={8} closeModal={true} />
        </View>
      </Animatable.View>
    </BottomSheet>
  );
};

export default CompleteSignUpModal;
