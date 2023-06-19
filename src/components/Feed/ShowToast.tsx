import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import ToastIcon from '../../../assets/images/svg/ToastIcon';
const size = new sizes(height, width);
export const toastConfig = {
  success: ({ text1, text2, ...rest }: any) => (
    <View style={styles.toastContainer}>
      <ToastIcon />
      <Text style={styles.toastText}>{text2}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: appColor.kgrayDark2,
    paddingLeft: size.getWidthSize(17.65),
    borderRadius: 4,
    width: size.getWidthSize(340),
    marginTop: size.getHeightSize(35),
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    borderWidth: size.getWidthSize(1),
    paddingVertical: size.getHeightSize(24),
    borderColor: appColor.kGrayLight3,
  },
  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
