import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearProgress } from 'react-native-elements';
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
  error: ({ text1, text2, ...rest }: any) => (
    <View
      style={{
        backgroundColor: appColor.kgrayDark2,
        borderRadius: 4,
        width: size.getWidthSize(340),
        marginTop: size.getHeightSize(35),
        borderWidth: size.getWidthSize(1),
        borderColor: appColor.kGrayLight3,
      }}
    >
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginHorizontal: size.getWidthSize(16),
          gap: size.getWidthSize(4),
          marginVertical: size.getHeightSize(16),
          width: size.getWidthSize(286),
          alignSelf:"center"
        }}
      >
        <ToastIcon />
        <Text style={styles.toastText}>{text2}</Text>
      </View>

      <LinearProgress
        color="white"
        trackColor={appColor.kgrayDark2}
        value={0.5}
        variant="determinate"
      />
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
    alignItems: 'flex-start',
  },
  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
