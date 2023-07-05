import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../../constants';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
const size = new sizes(height, width);
const SearchField = () => {
  return <View></View>;
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
