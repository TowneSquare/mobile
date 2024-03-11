import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  BackHandler,
  Dimensions,
  Pressable,
  StyleSheet,
  Text
} from 'react-native';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  privacy: 'Private' | 'Public';
  visibility: boolean;
  handleVisibility: () => void;
}
const PrivacyBottomSheet = ({
  handleVisibility,
  privacy,
  visibility,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility
    ? bottomSheetRef.current?.expand()
    : bottomSheetRef.current?.close();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        handleVisibility();
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
  return (
    <>
      {!visibility ? (
        <></>
      ) : (
        <BottomSheet
          onClose={handleVisibility}
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
            <Text style={styles.contentDescription}>
              Switch to {privacy} community
            </Text>
            <Text style={styles.contentMessage}>
              New members can join only if they have been invited.
            </Text>
            <Pressable
              onPress={() => {
                handleVisibility();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Switch to {privacy}</Text>
            </Pressable>

            <Text onPress={handleVisibility} style={styles.cancel}>
              Cancel
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default PrivacyBottomSheet;
const styles = StyleSheet.create({
  cancel: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginBottom: size.getHeightSize(28.5),
    marginTop: size.getHeightSize(20.5),
    paddingVertical: size.getHeightSize(4),
  },
  buttonText: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.36),
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    paddingVertical: size.getHeightSize(12.5),
  },
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    marginHorizontal: size.getWidthSize(16),
    borderRadius: 40,
    marginTop: size.getHeightSize(32),
  },
  contentDescription: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.4),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
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
