import { View, Text, Dimensions, BackHandler, StyleSheet } from 'react-native';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import CustomHandler from '../Feed/CustomHandler';
import { useFonts } from 'expo-font';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { updateCreateChannelBottomSheetVisibility } from '../../controller/CommunityController';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const CreateChannelBottomSheet = () => {
  const navigation = useNavigation();
  const visibility = useAppSelector(
    (state) => state.COMMUNITY.createChannelBottomSheetVisibility
  );
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  visibility === false
    ? bottomSheetRef.current?.close()
    : bottomSheetRef.current?.expand();
  useEffect(() => {
    const handleBackButton = () => {
      if (visibility === true) {
        dispatch(updateCreateChannelBottomSheetVisibility(false));
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
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });

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
            dispatch(updateCreateChannelBottomSheetVisibility(false));
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
          <BottomSheetView onLayout={handleContentLayout}>
            <Text style={styles.title}>Create</Text>
            <View style={styles.view}>
              <Text
                onPress={() => {
                  dispatch(updateCreateChannelBottomSheetVisibility(false));
                  navigation.navigate('CreateChannel');
                }}
                style={styles.text}
              >
                New channel
              </Text>
              <Text
                onPress={() =>
                  dispatch(updateCreateChannelBottomSheetVisibility(false))
                }
                style={styles.text}
              >
                Channel category
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

export default CreateChannelBottomSheet;
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
    color: appColor.kTextColor,
    textAlign: 'left',
    lineHeight: size.getHeightSize(23),
    fontFamily: 'Outfit-Medium',
    letterSpacing: 0.36,
    flex: 1,
    paddingVertical: size.getHeightSize(12.5),
  },
});
