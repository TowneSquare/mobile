import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
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
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
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
      snapPoints={['50%']}
      backgroundStyle={{
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={500}
        easing={'ease-in-out'}
        duration={400}
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
          natively in the app
        </Text>
        <View
          style={{
            paddingVertical: size.getHeightSize(16),
            paddingLeft: size.getWidthSize(18),
            paddingRight:size.getWidthSize(16),
            height: size.getHeightSize(95),
            width: size.getWidthSize(328),
            backgroundColor: appColor.kSecondaryColor,
            alignSelf: 'center',
            flexDirection: 'row',
            borderRadius: 8,
            marginTop: size.vMargin(25),
          }}
        >
          <Info />
          <View
            style={{
              flexShrink: 1,
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(16),
                color: appColor.kTextColor,
                fontFamily: 'Outfit-Medium',
                textAlign: 'left',
                paddingLeft:size.getWidthSize(10),
              }}
            >
              Townesquare will not be able to make any changes to your wallet
              without your permission
            </Text>
          </View>
        </View>
        <ContinueButton marginTop={32} closeModal navigateTo="ChooseUsername" />
        <BackButton marginTop={8} closeModal={true} />
      </Animatable.View>
    </BottomSheet>
  );
};

export default CompleteSignUpModal;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: 18,
    color: 'white',
  },
  locationIcon: {
    tintColor: 'gray',
  },
  scrollBox: {
    marginTop: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    marginTop: 10,
  },
  sectionTitle: {
    color: 'gray',
    fontWeight: 'normal',
  },
  summary: {
    marginHorizontal: 10,
  },
  summaryText: {
    color: 'red',
  },
  rating: {
    marginHorizontal: 10,
  },
});
