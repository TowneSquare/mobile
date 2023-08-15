import { View, Text, Dimensions, StyleSheet, BackHandler } from 'react-native';
import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import CustomHandler from '../../Feed/CustomHandler';
import { appColor, fonts } from '../../../constants';
import Flag from '../../../../assets/images/svg/Flag';
import RedFlagIcon from '../../../../assets/images/svg/RedFlagIcon';
import BottomSheetShareIcon from '../../../../assets/images/svg/BottomSheetShareIcon';
import { sizes } from '../../../utils';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
import { updateTheirProfileBottomSheet } from '../../../controller/UserController';
import Block from '../../../../assets/images/svg/Block';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TheirProfileBottomSheet = () => {
  const dispatch = useAppDispatch();
  const isBottomSheet = useAppSelector(
    (state) => state.USER.theirProfileBottomSheet
  );
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
    if (isBottomSheet === false) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [isBottomSheet]);
  useEffect(() => {
    const handleBackButton = () => {
      if (isBottomSheet === true) {
        dispatch(updateTheirProfileBottomSheet(false));
        return true;
      } else {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [isBottomSheet]);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  return (
    <>
      {!isBottomSheet ? (
        <></>
      ) : (
        <BottomSheet
          onClose={() => {
            dispatch(updateTheirProfileBottomSheet(false));
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
          <BottomSheetView
            style={{
              paddingHorizontal: size.getWidthSize(16),
            }}
            onLayout={handleContentLayout}
          >
            <View style={styles.container}>
              <BottomSheetShareIcon />
              <Text style={styles.text}>Share profile</Text>
            </View>
            <View style={[styles.container]}>
              <RedFlagIcon />
              <Text style={[styles.text, { color: appColor.kErrorText }]}>
                Report user
              </Text>
            </View>
            <View
              style={[
                styles.container,
                { marginBottom: size.getHeightSize(32) },
              ]}
            >
              <Block />
              <Text style={[styles.text, { color: appColor.kErrorText }]}>
                Block user
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default TheirProfileBottomSheet;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),

    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kTextColor,
    letterSpacing: 0.36,
    fontFamily: 'Outfit-Medium',
  },
});
