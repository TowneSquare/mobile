import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Pressable,
  BackHandler,
} from 'react-native';
import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { updateMyPostPanel } from '../../controller/FeedsController';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import CustomHandler from '../../components/Feed/CustomHandler';
import DeleteIcon from '../../../assets/images/svg/DeleteIcon';
import { updateDeletePostPanel } from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const MyPostPanel = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const showModal = useAppSelector(
    (state) => state.FeedsSliceController.MyPostPanel
  );
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
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  useEffect(() => {
    if (showModal === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [showModal]);
  useEffect(() => {
    const handleBackButton = () => {
      if (showModal === true) {
        closeModal();
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [showModal]);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });

  const closeModal = () => {
    bottomSheetRef.current?.close();
    dispatch(updateMyPostPanel(false));
  };

  return (
    <>
      {!showModal ? (
        <></>
      ) : (
        <BottomSheet
          onClose={closeModal}
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
            <Pressable
              onPress={() => {
                closeModal();
                dispatch(updateDeletePostPanel(true));
              }}
              style={styles.container}
            >
              <DeleteIcon />
              <Text style={styles.text}>Delete Post</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default MyPostPanel;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(16),
    alignItems: 'center',
    marginBottom: size.getHeightSize(46),
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kErrorText,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
  },
});
