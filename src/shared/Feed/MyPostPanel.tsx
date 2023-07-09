import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { updateMyPostPanel } from '../../controller/FeedsController';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import CustomHandler from '../../components/Feed/CustomHandler';
import DeleteIcon from '../../../assets/images/svg/DeleteIcon';
import { updateDeletePostPanel } from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const MyPostPanel = () => {
  const dispatch = useAppDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const showModal = useAppSelector(
    (state) => state.FeedsSliceController.MyPostPanel
  );
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  useEffect(() => {
    if (showModal === false) {
      bottomSheetRef.current?.close();
    }
  }, [showModal]);
  const closeModal = () => {
    bottomSheetRef.current?.close();
    dispatch(updateMyPostPanel(false));
  };
  return (
    <BottomSheet
      onClose={closeModal}
      handleComponent={CustomHandler}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={showModal ? 0 : -1}
      snapPoints={[Platform.OS === 'ios' ? '15%' : '15%']}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <Pressable
        onPress={() => {
          closeModal();
          dispatch(updateDeletePostPanel(true));
        }}
        style={styles.container}
      >
        <DeleteIcon />
        <Text style={styles.text}>Delete Post</Text>
      </Pressable>
    </BottomSheet>
  );
};

export default MyPostPanel;
const styles = StyleSheet.create({
  container: {
    marginTop: size.heightSize(36),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(16),
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    color: appColor.kErrorText,
    letterSpacing: size.getWidthSize(0.02),
    fontFamily: 'Outfit-Medium',
  },
});
