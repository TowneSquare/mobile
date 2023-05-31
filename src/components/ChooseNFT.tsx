import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Customhandler from './Customhandler';
import NFTCollections from './NFTCollections';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';

import { useAppDispatch, useAppSelector } from '../controller/hooks';
import {
  updateNftOpen,
  updateNftRender,
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
} from '../controller/BottomSheetController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ChooseNFT = () => {
  const collectionLength = useAppSelector(
    (state) => state.bottomSheetController.listOfNftCollections.length
  );
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [snapPoint, setSnap] = useState('67%');
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.NftModalOpen
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.NFTRender
  );
  useEffect(() => {
    dispatch(updateNftRender(0));
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
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateNftRender(0));
        dispatch(updateNftOpen(false));
        collectionLength > 0 && setSnap('67%');
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={[collectionLength > 0 ? snapPoint : '30%']}
      handleComponent={Customhandler}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
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
            color: appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
            marginTop: size.getHeightSize(29),
            lineHeight: size.getHeightSize(37),
          }}
        >
          NFT
        </Text>
        <View
          style={{
            width: size.getWidthSize(304),
            alignSelf: 'center',
            marginBottom: size.getHeightSize(32),
            marginTop: size.getHeightSize(8),
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-Regular',
              textAlign: 'center',

              lineHeight: size.getHeightSize(21),
            }}
          >
            Select the NFT you want to use as your PFP
          </Text>
        </View>
      </Animatable.View>
      <BottomSheetScrollView
        onScroll={() => collectionLength > 0 && setSnap('90%')}
        showsVerticalScrollIndicator={false}
      >
        <Animatable.View
          animation={'fadeInUp'}
          delay={500}
          easing={'ease-in-out'}
          duration={400}
          style={contentStyle}
        >
          <NFTCollections />
        </Animatable.View>
      </BottomSheetScrollView>
      <View
        style={{
          justifyContent: 'center',
          height: size.getHeightSize(48),
          marginTop: size.getHeightSize(8),
          paddingVertical: size.getHeightSize(12.5),
          marginBottom: size.getHeightSize(20),
        }}
      >
        <Text
          style={[
            {
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-SemiBold',
              textAlign: 'center',
              lineHeight: size.getHeightSize(23),
            },
          ]}
          onPress={() => {
            dispatch(updateNftRender(0));
            dispatch(updateNftOpen(false));
            dispatch(updateUploadModalRenderCount(1));
            dispatch(updateUploadImageModalOpen(true));
            collectionLength > 0 && setSnap('67%');
          }}
        >
          Back
        </Text>
      </View>
    </BottomSheet>
  );
};

export default ChooseNFT;
const styles = StyleSheet.create({});
