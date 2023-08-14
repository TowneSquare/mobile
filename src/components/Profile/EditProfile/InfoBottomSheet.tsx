import { View, Text, Dimensions } from 'react-native';
import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import CustomHandler from '../../Feed/CustomHandler';
import { appColor, fonts } from '../../../constants';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  showDisplayBottomSheet: boolean;
  onCloseDisplayBottomSheet: () => void;
  heading: string;
  contentMessage: string;
}
const InfoBottomSheet = ({
  onCloseDisplayBottomSheet,
  showDisplayBottomSheet,
  contentMessage,
  heading,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
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
  useEffect(() => {
    if (showDisplayBottomSheet === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [showDisplayBottomSheet]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  return (
    <>
      {!showDisplayBottomSheet ? (
        <></>
      ) : (
        <BottomSheet
          onClose={onCloseDisplayBottomSheet}
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
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: 'Outfit-SemiBold',
                textAlign: 'center',
                marginTop: size.getHeightSize(32),
                fontSize: size.fontSize(20),
                letterSpacing: 0.4,
                lineHeight: size.getHeightSize(24),
              }}
            >
              {heading}
            </Text>
            <Text
              style={{
                color: appColor.kTextColor,
                fontFamily: 'Outfit-Regular',
                textAlign: 'left',
                fontSize: size.fontSize(16),
             
                marginBottom: size.getHeightSize(40),
                marginTop: size.getHeightSize(8),
              }}
            >
              {contentMessage}
            </Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default InfoBottomSheet;
