import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Handler from './Handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateNftOpen,
  updateNftRender,
} from '../controller/BottomSheetController';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import Customhandler from './Customhandler';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const UploadImageModal = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.uploadImageModalOpen
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.uploadModalRenderCount
  );
  useEffect(() => {
    dispatch(updateUploadModalRenderCount(0));
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

  const animatedIndex = useSharedValue(0);
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

  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateUploadModalRenderCount(0));
        dispatch(updateUploadImageModalOpen(false));
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={['32%']}
      handleComponent={Handler}
      backgroundStyle={{
        backgroundColor: appColor.kNavydark,
      }}
    >
      <Animatable.View
        animation={'fadeInUp'}
        delay={500}
        easing={'ease-in-out'}
        duration={400}
        style={contentStyle}
      >
        <View
          style={{
            height: '100%',
            justifyContent: 'space-around',
            paddingBottom: 30,
          }}
        >
          <Pressable
            onPress={() => {
              dispatch(updateUploadModalRenderCount(0));
              dispatch(updateUploadImageModalOpen(false));
              dispatch(updateNftRender(1));
              dispatch(updateNftOpen(true));
            }}
            style={styles.container}
          >
            <View style={styles.innerStyle}>
              <Image source={images.cat} />
              <Text style={styles.Text}>NFT</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={appColor.kWhiteColor}
              size={size.fontSize(30)}
            />
          </Pressable>
          <View style={styles.container}>
            <View style={styles.innerStyle}>
              <Image source={images.ImagesSquare} />
              <Text style={styles.Text}>Existing photo</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={appColor.kWhiteColor}
              size={size.fontSize(30)}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.innerStyle}>
              <Image source={images.Camera} />
              <Text style={styles.Text}>Take Photo</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={appColor.kWhiteColor}
              size={size.fontSize(30)}
            />
          </View>
          <Text
            style={[styles.Text, { textAlign: 'center', marginTop: 40 }]}
            onPress={() => {
              dispatch(updateUploadModalRenderCount(0));
              dispatch(updateUploadImageModalOpen(false));
            }}
          >
            BACK
          </Text>
        </View>
      </Animatable.View>
    </BottomSheet>
  );
};

export default UploadImageModal;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: size.heightSize(50),
    backgroundColor: appColor.kSecondaryColor,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 40,
    paddingHorizontal: size.hMargin(40),
    alignItems: 'center',
    marginTop: 20,
  },
  innerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  Text: {
    paddingHorizontal: size.hMargin(40),
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Bold',
  },
});
