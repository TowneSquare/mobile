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
      snapPoints={['60%']}
      backgroundStyle={{
        backgroundColor: appColor.kDisabledColor,
      }}
    >
      <Animatable.View
        style={contentStyle}
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
            marginTop: size.vMargin(40),
          }}
        >
          Complete Signing in
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Regular',
            marginTop: size.vMargin(20),
            fontSize: size.fontSize(18),
          }}
        >
          Connecting your wallet allows you to performtransactions by signing
          natively in the app
        </Text>
        <View
          style={{
            paddingVertical: size.vMargin(30),
            paddingHorizontal: size.hMargin(40),

            width: size.sWidth(0.9),
            backgroundColor: appColor.kSecondaryColor,
            alignSelf: 'center',
            flexDirection: 'row',
            borderRadius: 25,
            marginTop: size.vMargin(25),
          }}
        >
          <Image source={images.info} />
          <View
            style={{
              flexShrink: 1,
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(18),
                color: appColor.kTextColor,
                fontFamily: 'Outfit-Regular',
                textAlign: 'left',
                paddingLeft: size.hMargin(20),
              }}
            >
              Townesquare will not be able to make any changes to your wallet
              without your permission
            </Text>
          </View>
        </View>
        <ContinueButton marginTop={60}  navigateTo='ChooseUsername'/>
        <BackButton marginTop={50} closeModal={true} />
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
