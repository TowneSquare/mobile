import { View, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor, fonts } from '../constants';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../utils';
import {
  updateRenderCount,
  updateBottomSheet,
} from '../controller/BottomSheetController';
import { useAppDispatch } from '../controller/hooks';
const { height, width } = Dimensions.get('window');
interface Props {
  marginTop?: number;
  closeModal?: boolean;
}
const BackButton = ({ marginTop, closeModal }: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <Text
      onPress={() => {
        navigation.goBack();
        if (closeModal) {
          dispatch(updateRenderCount(0));
          dispatch(updateBottomSheet(false));
        }
      }}
      style={{
        marginTop: marginTop ? size.vMargin(marginTop) : 0,
        textAlign: 'center',
        color: appColor.kTextColor,
        fontSize: size.fontSize(18),
        fontFamily: 'Outfit-Bold',
      }}
    >
      BACK
    </Text>
  );
};

export default BackButton;
