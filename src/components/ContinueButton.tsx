import { View, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../constants';
import { sizes } from '../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import {
  updateBottomSheet,
  updateRenderCount,
} from '../controller/BottomSheetController';

import { useAppDispatch } from '../controller/hooks';
interface Props {
  navigateTo?: string;
  marginTop?: number;
  closeModal?: boolean;
  disabled?: boolean;
}
const ContinueButton = ({
  navigateTo,
  marginTop,
  closeModal,
  disabled,
}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        if (closeModal) {
          dispatch(updateRenderCount(0));
          dispatch(updateBottomSheet(false));
        }

        navigation.navigate(navigateTo as never);
      }}
      style={{
        backgroundColor: disabled
          ? appColor.kWhiteColorWithOpacity
          : appColor.kWhiteColor,
        alignSelf: 'center',
        width: size.getWidthSize(328),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: 'center',
        marginTop: marginTop ? size.getHeightSize(8) : 8,
        paddingVertical: size.getHeightSize(16),
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          color: appColor.kButtonTextColor,
          fontSize: size.fontSize(18),
          fontFamily: 'Outfit-Medium',
          fontStyle: 'normal',
          lineHeight: size.getHeightSize(23),
          letterSpacing: 0.02,
        }}
      >
        Continue
      </Text>
    </Pressable>
  );
};

export default ContinueButton;
