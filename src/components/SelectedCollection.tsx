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
import Customhandler from './Customhandler';
import NFTCollections from './NFTCollections';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ProfilePicsCollection from './ProfilePicsCollection';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import { useAppDispatch, useAppSelector } from '../controller/hooks';
import {
  updateSelectedCollection,
  updateSelectedRender,
  updateNftOpen,
  updateNftRender,
} from '../controller/BottomSheetController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const SelectedCollection = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionModal
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.selectedRender
  );
  const profilePics = useAppSelector(
    (state) => state.bottomSheetController.profilePics
  );
  useEffect(() => {
    dispatch(updateSelectedRender(0));
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
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <BottomSheet
      onClose={() => {
        dispatch(updateSelectedRender(0));
        dispatch(updateSelectedCollection(false));
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={['87%']}
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
            marginTop: size.getHeightSize(29),
            lineHeight: size.getHeightSize(37),
            marginBottom: size.getHeightSize(32),
          }}
        >
          Aptomingos
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
          <ProfilePicsCollection />
        </Animatable.View>
      </BottomSheetScrollView>

      <View
        style={{
          height: size.getHeightSize(116),
        }}
      >
        <Pressable
          onPress={() => {
            dispatch(updateSelectedRender(0));
            dispatch(updateSelectedCollection(false));
          }}
          disabled={typeof profilePics.image === 'undefined' ? true : false}
          style={{
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            height: size.getHeightSize(48),
            justifyContent: 'center',
            marginTop: size.getHeightSize(8),
            backgroundColor:
              typeof profilePics.image === 'undefined'
                ? appColor.kWhiteColorWithOpacity
                : appColor.kWhiteColor,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: appColor.kButtonTextColor,
              fontSize: size.fontSize(16),
              fontFamily: 'Outfit-SemiBold',
              lineHeight: size.getHeightSize(20),
              textTransform: 'uppercase',
              letterSpacing: 0.01,
            }}
          >
            CHOOSE
          </Text>
        </Pressable>
        <Text
          onPress={() => {
            dispatch(updateSelectedRender(0));
            dispatch(updateSelectedCollection(false));
            dispatch(updateNftRender(1));
            dispatch(updateNftOpen(true));
          }}
          style={{
            textAlign: 'center',
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-SemiBold',
            lineHeight: size.getHeightSize(20),
            textTransform: 'uppercase',
            marginTop: size.getHeightSize(20),
          }}
        >
          BACK
        </Text>
      </View>
    </BottomSheet>
  );
};

export default SelectedCollection;
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
