import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import BackButton from './BackButton';
import ContinueButton from './ContinueButton';
import { MaterialIcons } from '@expo/vector-icons';
import Customhandler from './Customhandler';
import * as Animatable from 'react-native-animatable';
import {
  updateRenderCount,
  updateBottomSheet,
} from '../../controller/BottomSheetController';
import Info from '../../../assets/images/svg/Info';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
const { height, width } = Dimensions.get('window');
const CompleteSignUpModal = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
 
  const size = new sizes(height, width);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
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
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });


  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );
  return (
    <>
      {!isVisible ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            dispatch(updateRenderCount(0));
            dispatch(updateBottomSheet(false));
          }}
          ref={bottomSheetRef}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          handleComponent={Customhandler}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Animatable.View
              animation={'fadeInUp'}
              delay={300}
              easing={'ease-in-out'}
              duration={400}
              style={{}}
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
                Connecting your wallet allows you to perform transactions by
                signing natively in the app.
              </Text>

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
                  marginTop: size.getHeightSize(24),
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
                      lineHeight: size.getHeightSize(21),
                      fontFamily: 'Outfit-Regular',
                    }}
                  >
                    TowneSquare will not be able to make any changes to your
                    wallet without your permission.
                  </Text>
                </View>
              </View>
              <View style={{height:size.getHeightSize(32)}}/>
              <ContinueButton closeModal navigateTo="ChooseUsernameSlide" />
              <BackButton marginTop={8} closeModal={true} />
            </Animatable.View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default CompleteSignUpModal;
