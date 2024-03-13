import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  Text,
  View
} from 'react-native';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  visibility: boolean;
  onClose: () => void;
  callBack: () => void;
}
const ChangesBottomSheet = ({ callBack, onClose, visibility }: Props) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.8}
      />
    ),
    []
  );
  visibility === false
    ? bottomSheetRef.current?.collapse()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        onClose();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [visibility]);
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            onClose();
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
          handleComponent={CustomHandler}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: size.getWidthSize(16),
              }}
            >
              <Text
                style={{
                  color: appColor.kTextColor,
                  fontSize: size.fontSize(20),
                  fontFamily: 'Outfit-Bold',
                  lineHeight: size.getHeightSize(24),
                  textAlign: 'center',
                  marginTop: size.getHeightSize(24),
                }}
              >
                You have unsaved changes
              </Text>
              <Text
                style={{
                  fontSize: size.fontSize(16),
                  color: appColor.kTextColor,
                  textAlign: 'center',
                  marginTop: size.getHeightSize(8),
                  marginBottom: size.getHeightSize(32),
                  lineHeight: size.getHeightSize(24),
                  fontFamily: 'Outfit-Regular',
                }}
              >
                Do you want to save them before leaving this page
              </Text>
              <View style={{ height: size.getHeightSize(10) }} />
              <Pressable
                onPress={() => {
                  onClose();
                  navigation.goBack();
                }}
                style={{
                  backgroundColor: appColor.kWhiteColor,
                  alignSelf: 'center',
                  width: size.getWidthSize(328),
                  borderRadius: 40,
                  justifyContent: 'center',
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: appColor.kGrayscaleDart,
                    fontSize: size.fontSize(18),
                    fontFamily: 'Outfit-Medium',
                    fontStyle: 'normal',
                    lineHeight: size.getHeightSize(23),
                    letterSpacing: 0.02,
                  }}
                >
                  Save changes
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  onClose();
                }}
                style={{
                  alignSelf: 'center',
                  width: size.getWidthSize(328),
                  justifyContent: 'center',
                  marginTop: size.getHeightSize(8),
                  marginBottom: size.getHeightSize(16),
                  paddingVertical: size.getHeightSize(12.5),
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: appColor.kWhiteColor,
                    fontSize: size.fontSize(18),
                    fontFamily: 'Outfit-Medium',
                    fontStyle: 'normal',
                    lineHeight: size.getHeightSize(23),
                    letterSpacing: 0.02,
                  }}
                >
                  Dont Save
                </Text>
              </Pressable>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ChangesBottomSheet;
