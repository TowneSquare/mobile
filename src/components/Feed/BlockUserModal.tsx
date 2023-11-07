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
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import {
  updateBlockUserModal,
  updateToast,
} from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
import BlockIcon from '../../../assets/images/svg/BlockIcon';
const size = new sizes(height, width);

const BlockUserModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const dispatch = useAppDispatch();
  const blockModal = useAppSelector(
    (state) => state.FeedsSliceController.BlockUserModal
  );
  useEffect(() => {
    if (blockModal === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [blockModal]);
  useEffect(() => {
    const handleBackButton = () => {
      if (blockModal === true) {
        dispatch(updateBlockUserModal(false));
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [blockModal]);

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
    dispatch(updateBlockUserModal(false));
    bottomSheetRef.current?.close();
  };
  return (
    <>
      {!blockModal ? (
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
            <BlockIcon
              style={{
                alignSelf: 'center',
                marginTop: size.getHeightSize(24),
              }}
            />
            <Text style={styles.contentDescription}>
              Are you sure you want to block JohnFlock?
            </Text>
            <Text style={styles.contentMessage}>
              You will no longer be able to see this user’s posts and follow or
              mention each other
            </Text>
            <Pressable
              onPress={() => {
                dispatch(updateBlockUserModal(false));
                dispatch(
                  updateToast({
                    displayToast: true,
                    toastMessage: 'You have blocked JohnFlock',
                    toastType: 'success',
                  })
                );
              }}
              style={styles.blockButton}
            >
              <Text style={styles.blockButtonText}>Block User</Text>
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

export default BlockUserModal;
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
  blockButtonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    paddingVertical: size.getHeightSize(12.5),
  },
  blockButton: {
    backgroundColor: appColor.kErrorText,
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
  contentMessage: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(16),
  },
});
