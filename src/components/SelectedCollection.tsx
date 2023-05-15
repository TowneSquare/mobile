import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../controllers/hooks';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  updateSelectedSheetRenderCount,
  updateSelectedCollectionSheet,
  updateBottomSheet,
  updateRenderCount,
} from '../controllers/BottomSheetController';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../constants';
import { sizes } from '../utils';
import Collections from './Collections';
const SelectedCollection = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const isVisible = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionSheet
  );
  const renderCount = useAppSelector(
    (state) => state.bottomSheetController.selectedCollectionSheetRenderCount
  );
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  useEffect(() => {
    dispatch(updateSelectedSheetRenderCount(0));
  }, []);
  useEffect(() => {
    if (isVisible === false && renderCount > 1) {
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

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={snapPoints}
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate('ChooseTopics' as never);
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={22}
              color={'white'}
            />
          </Pressable>
          <Text
            style={{
              color: appColor.maintext,
              fontSize: size.fontSize(18),
              fontFamily: 'UrbanistSemiBold',
              textAlign: 'center',
              marginTop: size.sHeight(0.01),
            }}
          >
            Aptomingos
          </Text>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={22}
            color={appColor.modalBackgroundColor}
          />
        </View>
      </Animatable.View>
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation={'fadeInUp'}
          delay={500}
          easing={'ease-in-out'}
          duration={400}
          style={contentStyle}
        >
          <SearchBar
            marginTop={size.sHeight(0.01)}
            color={appColor.grayBlue3}
            borderRadius={10}
            placeholder=" Search by #ID"
          />
          <Collections />
        </Animatable.View>
      </BottomSheetScrollView>
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
