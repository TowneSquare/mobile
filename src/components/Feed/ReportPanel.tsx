import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  BackHandler,
} from 'react-native';
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import Flag from '../../../assets/images/svg/Flag';
import Block from '../../../assets/images/svg/Block';

import {
  updtaeReportingModal,
  updateReportPostModal,
  updateReportUserModal,
  updateBlockUserModal,
} from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const ReportPanel = () => {
  const dispatch = useAppDispatch();
  const reportModal = useAppSelector(
    (state) => state.FeedsSliceController.ReportingModal
  );
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  useEffect(() => {
    if (reportModal === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [reportModal]);
  useEffect(() => {
    const handleBackButton = () => {
      if (reportModal === true) {
        dispatch(updtaeReportingModal(false));
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [reportModal]);
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
        opacity={0.5}
      />
    ),
    []
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  const closeModal = () => {
    bottomSheetRef.current?.close();
    dispatch(updtaeReportingModal(false));
  };

  return (
    <>
      {!reportModal ? (
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
                dispatch(updateReportPostModal(true));
              }}
              style={styles.container}
            >
              <Flag />
              <Text style={styles.text}>Report Post</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                closeModal();
                dispatch(updateReportUserModal(true));
              }}
              style={styles.container}
            >
              <Flag />
              <Text style={styles.text}>Report User</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                closeModal();
                dispatch(updateBlockUserModal(true));
              }}
              style={styles.container}
            >
              <Block />
              <Text style={styles.text}>Block user</Text>
            </Pressable>
            <View style={{ height: size.getHeightSize(44) }} />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ReportPanel;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(16),
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
  },
});
