import { View, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import SearchField from './SearchField';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import CustomHandler from '../Feed/CustomHandler';
import { updateGifBottomSheet } from '../../controller/createPost';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const GifBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();
  const showSheet = useAppSelector(
    (state) => state.CreatePostController.GIFBottomSheet
  );
  useEffect(() => {
    if (showSheet === false) {
      bottomSheetRef.current?.close();
    }
  }, [showSheet]);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  const closeModal = () => {
    dispatch(updateGifBottomSheet(false));
    bottomSheetRef.current?.close();
  };
  return (
    <BottomSheet
      onClose={closeModal}
      snapPoints={['80']}
      index={showSheet ? 0 : -1}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
      handleComponent={CustomHandler}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
    >
      <SearchField placeholder="Search GIFs" />
      <BottomSheetScrollView>
        <View></View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default GifBottomSheet;
