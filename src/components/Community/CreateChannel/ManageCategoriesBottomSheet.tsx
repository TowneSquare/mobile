import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import CustomHandler from '../../Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  visibility: boolean;
  onClose: () => void;
  onRenamePressed: () => void;
  onDeletePressed: () => void;
}
const ManageCategoriesBottomSheet = ({
  onClose,
  visibility,
  onRenamePressed,
  onDeletePressed,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
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
          handleComponent={()=><CustomHandler/>}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView onLayout={handleContentLayout}>
            <Text style={styles.title}>Manage Category</Text>
            <View style={styles.view}>
              <Text
                onPress={onRenamePressed}
                style={[
                  styles.text,
                  {
                    color: appColor.kTextColor,
                  },
                ]}
              >
                Rename
              </Text>
              <Text onPress={onDeletePressed} style={styles.text}>
                Delete
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default ManageCategoriesBottomSheet;
const styles = StyleSheet.create({
  title: {
    fontSize: size.fontSize(20),
    color: appColor.kTextColor,
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Bold',
    letterSpacing: 0.4,
  },
  view: {
    paddingTop: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
    borderTopWidth: 1,
    borderTopColor: appColor.grayDark,
    paddingHorizontal: size.getWidthSize(16),
    marginBottom: size.getHeightSize(24),
    marginTop: size.getHeightSize(24),
  },
  text: {
    fontSize: size.fontSize(18),
    color: appColor.kErrorText,
    textAlign: 'left',
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
    flex: 1,
    paddingVertical: size.getHeightSize(12.5),
  },
});
