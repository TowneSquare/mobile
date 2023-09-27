import {
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
import ReportFlag from '../../../assets/images/svg/ReportFlag';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { updateToast } from '../../controller/FeedsController';
import { updateReportPostModal } from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const ReportPostModal = () => {
  const dispatch = useAppDispatch();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const reportPostModal = useAppSelector(
    (state) => state.FeedsSliceController.ReportPostModal
  );
  const bottomSheetRef = useRef<BottomSheet>(null);
  useEffect(() => {
    if (reportPostModal === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [reportPostModal]);
  useEffect(() => {
    const handleBackButton = () => {
      if (reportPostModal === true) {
        dispatch(updateReportPostModal(false));
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [reportPostModal]);
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
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  const closeModal = () => {
    dispatch(updateReportPostModal(false));
    bottomSheetRef.current?.close();
  };
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
      {!reportPostModal ? (
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
          handleComponent={()=><CustomHandler/>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <ReportFlag
              style={{
                alignSelf: 'center',
                marginTop: size.getHeightSize(24),
              }}
            />
            <Text style={styles.contentDescription}>
              Are you sure you want to report this post?
            </Text>
            <Pressable
              onPress={() => {
                dispatch(
                  updateToast({
                    displayToast: true,
                    toastMessage: 'Post is reported succesfully',
                    toastType: 'success',
                  })
                );
                dispatch(updateReportPostModal(false));
              }}
              style={styles.reportButton}
            >
              <Text style={styles.reportButtonText}>Report post</Text>
            </Pressable>

            <Text onPress={closeModal} style={styles.cancel}>
              Cancel
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ReportPostModal;
const styles = StyleSheet.create({
  cancel: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginBottom: size.getHeightSize(46),
    marginTop: size.getHeightSize(8),
    paddingVertical: size.getHeightSize(4),
  },
  reportButtonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    paddingVertical: size.getHeightSize(12.5),
  },
  reportButton: {
    backgroundColor: appColor.kSecondaryButtonColor,
    marginHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    marginTop: size.getHeightSize(24),
  },
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.04),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(16),
  },
});
