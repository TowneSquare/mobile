import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useAppSelector, useAppDispatch } from '../controllers/hooks';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { updateRenderCount } from '../controllers/BottomSheetController';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
import { sizes } from '../utils';
import Collections from './Collections';

const BottomSheetModal = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
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
    if (isVisible === false && renderCount > 0) {
      setBottomSheetOpen(true);
      bottomSheetRef.current?.expand();
    } else {
      setBottomSheetOpen(false);
      bottomSheetRef.current?.collapse();
    }
  }, [isVisible]);

  const { height, width } = Dimensions.get('window');
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
  const snapPoints = useMemo(() => ['30%', '80%'], []);
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  console.log(`Bottomshet ${bottomSheetOpen}`);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={['30%']}
      handleComponent={CustomHandler}
      backgroundStyle={{
        backgroundColor: appColor.modalBackgroundColor,
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
            color: appColor.maintext,
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
            textAlign: 'center',
            marginTop: size.sHeight(0.01),
          }}
        >
          Choose collection
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
          <Collections />
        </Animatable.View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetModal;

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
