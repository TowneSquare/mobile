import {
  View,
  Text,
  Dimensions,
  Pressable,
  BackHandler,
} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ProfilePicsCollection from './ProfilePicsCollection';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../../constants';
import { sizes } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import {
  updateSelectedCollection,
  updateSelectedRender,
  updateNftOpen,
  updateNftRender,
} from '../../../controller/BottomSheetController';
import Customhandler from '../Customhandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const SelectedCollection = () => {
  const [snapPoint, setSnap] = useState('67%');
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { isVisible, renderCount, profilePics } = useAppSelector((state) => ({
    isVisible: state.bottomSheetController.selectedCollectionModal,
    renderCount: state.bottomSheetController.selectedRender,
    profilePics: state.USER.UserData.profileImage,
  }));

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
  useEffect(() => {
    const handleBackButton = () => {
      if (isVisible === true && renderCount > 0) {
        dispatch(updateSelectedRender(0));
        dispatch(updateSelectedCollection(false));
        setSnap('67%');
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
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
        setSnap('67%');
      }}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={bottomSheetOpen ? 0 : -1}
      snapPoints={[snapPoint]}
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
            marginBottom: size.getHeightSize(32),
          }}
        >
          Aptomingos
        </Text>
      </Animatable.View>
      <BottomSheetScrollView
        onScroll={() => setSnap('90%')}
        showsVerticalScrollIndicator={false}
      >
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
          marginBottom: size.getHeightSize(16),
        }}
      >
        <Pressable
          onPress={() => {
            dispatch(updateSelectedRender(0));
            dispatch(updateSelectedCollection(false));
            setSnap('67%');
          }}
          disabled={typeof profilePics === 'undefined' ? true : false}
          style={{
            alignSelf: 'center',
            width: size.getWidthSize(328),
            borderRadius: 40,
            // height: size.getHeightSize(48),
            justifyContent: 'center',
            marginTop: size.getHeightSize(8),
            backgroundColor:
              typeof profilePics === 'undefined'
                ? appColor.kWhiteColorWithOpacity
                : appColor.kWhiteColor,
            paddingVertical: size.getHeightSize(12.5),
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: appColor.kButtonTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-SemiBold',
              lineHeight: size.getHeightSize(23),

              letterSpacing: 0.01,
            }}
          >
            Choose
          </Text>
        </Pressable>
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
            onPress={() => {
              dispatch(updateSelectedRender(0));
              dispatch(updateSelectedCollection(false));
              dispatch(updateNftRender(1));
              dispatch(updateNftOpen(true));
              setSnap('67%');
            }}
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              fontFamily: 'Outfit-SemiBold',
              textAlign: 'center',
              lineHeight: size.getHeightSize(23),
            }}
          >
            Back
          </Text>
        </View>
      </View>
    </BottomSheet>
  );
};

export default SelectedCollection;
