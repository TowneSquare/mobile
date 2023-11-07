import {
  View,
  Text,
  Dimensions,
  BackHandler,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {
  useRef,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { appColor, fonts } from '../constants';
import { sizes } from '../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import CustomHandler from '../components/Feed/CustomHandler';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  visibility: boolean;
  onClose: () => void;
  hideHandle?: boolean;
  children: ReactNode;
  backdropOpacity?: number;
  handlerWidth?: number;
  onMount?: () => void;
  paddingHorizontal?: boolean;
}
const BottomsheetWrapper = ({
  onClose,
  visibility,
  hideHandle,
  children,
  backdropOpacity,
  handlerWidth,
  onMount,
  paddingHorizontal = true,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    onMount?.();
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
        opacity={backdropOpacity ? backdropOpacity : 0.8}
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
          handleComponent={() =>
            hideHandle ? <></> : <CustomHandler width={handlerWidth} />
          }
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView
            style={{
              paddingHorizontal: paddingHorizontal ? size.getWidthSize(16) : 0,
            }}
            onLayout={handleContentLayout}
          >
            {children}
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default BottomsheetWrapper;
