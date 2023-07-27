import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useRef, useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import ReportFlag from '../../../assets/images/svg/ReportFlag';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
import { updateBlockUserModal } from '../../controller/FeedsController';
const { height, width } = Dimensions.get('window');
import BlockIcon from '../../../assets/images/svg/BlockIcon';
const size = new sizes(height, width);
interface Props {
  block: () => void;
}
const BlockUserModal = ({ block }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useAppDispatch();
  const blockModal = useAppSelector(
    (state) => state.FeedsSliceController.BlockUserModal
  );
  useEffect(() => {
    if (blockModal === false) {
      bottomSheetRef.current?.close();
    }
  }, [blockModal]);
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
  };
  return (
    <BottomSheet
      onClose={closeModal}
      handleComponent={CustomHandler}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={blockModal ? 0 : -1}
      backdropComponent={renderBackdrop}
      snapPoints={[Platform.OS === 'ios' ? '36%' : '36%']}
      backgroundStyle={{
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <BlockIcon
          style={{
            alignSelf: 'center',
            marginTop: size.getHeightSize(24),
          }}
        />
        <Text
          style={{
            fontSize: size.fontSize(20),
            lineHeight: size.getHeightSize(24),
            color: appColor.kTextColor,
            letterSpacing: size.getWidthSize(0.04),
            fontFamily: 'Outfit-SemiBold',
            textAlign: 'center',
            marginTop: size.getHeightSize(8),
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          Are you sure you want to block JohnFlock?
        </Text>
        <Text
          style={{
            fontSize: size.fontSize(16),
            lineHeight: size.getHeightSize(21),
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            marginTop: size.getHeightSize(8),
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          You will no longer be able to see this user’s posts and follow or
          mention each other
        </Text>
        <Pressable
          onPress={() => {
            dispatch(updateBlockUserModal(false));
            block();
          }}
          style={{
            backgroundColor: appColor.kErrorText,
            marginHorizontal: size.getWidthSize(16),
            borderRadius: 40,
            marginTop: size.getHeightSize(24),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(18),
              lineHeight: size.getHeightSize(23),
              color: appColor.kTextColor,
              letterSpacing: size.getWidthSize(0.02),
              fontFamily: 'Outfit-Medium',
              textAlign: 'center',
              paddingVertical: size.getHeightSize(12.5),
            }}
          >
            Block User
          </Text>
        </Pressable>

        <Text
          onPress={closeModal}
          style={{
            fontSize: size.fontSize(18),
            lineHeight: size.getHeightSize(23),
            color: appColor.kTextColor,
            letterSpacing: size.getWidthSize(0.02),
            fontFamily: 'Outfit-Medium',
            textAlign: 'center',
            marginBottom: size.getHeightSize(32),
            marginTop: size.getHeightSize(12),
          }}
        >
          Cancel
        </Text>
      </View>
    </BottomSheet>
  );
};

export default BlockUserModal;
