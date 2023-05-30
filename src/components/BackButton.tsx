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
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <View
      style={{
        alignSelf: 'center',
        width: size.getWidthSize(328),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: 'center',
        marginTop:  marginTop ? size.getHeightSize(8) : 8,
        marginBottom: size.getHeightSize(16),
        marginHorizontal: size.getWidthSize(16),
        paddingVertical: size.getHeightSize(12),
        
      }}
    >
      <Text
        onPress={() => {
          if (closeModal) {
            dispatch(updateRenderCount(0));
            dispatch(updateBottomSheet(false));
          }
          navigation.goBack();
        }}
        style={{
          fontStyle: 'normal',
          textAlign: 'center',
          color: appColor.kTextColor,
          fontSize: size.fontSize(18),
          fontFamily: 'Outfit-SemiBold',

          lineHeight: size.getHeightSize(20),
        }}
      >
        Back
      </Text>
    </View>
  );
};

export default BackButton;
