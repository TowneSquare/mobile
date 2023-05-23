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
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
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
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateNftRender(0));
        dispatch(updateNftOpen(false));
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={['70%']}
      handleComponent={Customhandler}
      backgroundStyle={{
        backgroundColor: appColor.kNavydark,
      }}
    >
      <Animatable.View
        style={styles.header}
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
            marginTop: size.sHeight(0.015),
          }}
        >
          NFT
        </Text>
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Medium',
            textAlign: 'center',
            marginTop: size.sHeight(0.01),
            marginHorizontal: 20,
          }}
        >
          Select the NFT you want to use as your PFP
        </Text>
      </Animatable.View>
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
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
          height: 70,
        }}
      >
        <Text
          style={[
            {
              paddingBottom: size.vMargin(20),
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-Bold',
              textAlign: 'center',
            },
          ]}
          onPress={() => {
            dispatch(updateNftRender(0));
            dispatch(updateNftOpen(false));
            dispatch(updateUploadModalRenderCount(1));
            dispatch(updateUploadImageModalOpen(true));
          }}
        >
          BACK
        </Text>
      </View>
    </BottomSheet>
  );
};

export default ChooseNFT;
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
