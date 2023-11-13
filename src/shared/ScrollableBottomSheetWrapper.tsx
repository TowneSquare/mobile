import { Dimensions, BackHandler, StyleSheet } from 'react-native';
import React, {
  useRef,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';
import { appColor } from '../constants';
import { sizes } from '../utils';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
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
  snapPoints: string[];
  title?: string;
  header?: JSX.Element;
}
const ScrollableBottomSheetWrapper = ({
  onClose,
  visibility,
  hideHandle,
  children,
  backdropOpacity,
  handlerWidth,
  snapPoints,
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
          snapPoints={snapPoints ? snapPoints : ['80%']}
          index={visibility ? 0 : -1}
          enablePanDownToClose={true}
          animateOnMount={true}
          backgroundStyle={{
            backgroundColor: appColor.kgrayDark2,
          }}
          backdropComponent={renderBackdrop}
          handleComponent={() => <CustomHandler />}
        >
          {children}
        </BottomSheet>
      )}
    </>
  );
};

export default ScrollableBottomSheetWrapper;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: size.getHeightSize(24),
    lineHeight: size.getHeightSize(24),
  },
});
