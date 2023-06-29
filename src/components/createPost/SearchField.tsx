import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import { Octicons, Ionicons } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  placeholder: string;
  marginTop?: number;
}
const SearchField = ({ placeholder, marginTop }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop
            ? size.getHeightSize(marginTop)
            : size.getHeightSize(24),
        },
      ]}
    >
      <Octicons
        name="search"
        size={size.fontSize(20)}
        color={appColor.kGrayLight3}
      />
      <TextInput
        cursorColor={appColor.primaryLight}
        placeholder={placeholder}
        placeholderTextColor={appColor.kGrayLight3}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchField;
const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderWidth: 1,
    width: size.getWidthSize(328),
    alignSelf: 'center',
    borderColor: appColor.kGrayscale,
    marginTop: size.getHeightSize(24),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    backgroundColor: appColor.kGrayscaleDart,
  },
  textInput: {
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    flex: 1,
    paddingVertical: size.getHeightSize(12),
    height: size.getHeightSize(48),
  },
});
