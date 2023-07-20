import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import React, { memo, useState, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { Octicons } from '@expo/vector-icons';
import { batch } from 'react-redux';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { updateSearchFocus } from '../../controller/SearchPost';
import DelIcon from '../../../assets/images/svg/DelIcon';
import { useAppDispatch } from '../../controller/hooks';
import {
  updateFilteredData,
  updateFilteredProfilSearcheData,
  updateFilteredCommunitySearchData,
  resetSearch,
} from '../../controller/SearchPost';

const SearchPostSearchField = () => {
  const dispatch = useAppDispatch();
  const textInputRef = useRef(null);
  const [text, setText] = useState('');
  useEffect(() => {
    dispatch(resetSearch());
    textInputRef.current.focus();
  }, []);
  const handleTextChange = (text: string) => {
    setText(text);
    batch(() => {
      dispatch(updateFilteredProfilSearcheData(text));
      dispatch(updateFilteredCommunitySearchData(text));
      dispatch(updateFilteredData(text));
    });
  };
  return (
    <View style={[styles.container]}>
      <Octicons
        name="search"
        size={size.fontSize(20)}
        color={appColor.kWhiteColor}
      />
      <TextInput
        ref={textInputRef}
        keyboardType="url"
        returnKeyType="search"
        onChangeText={handleTextChange}
        cursorColor={appColor.primaryLight}
        placeholder={'Search'}
        onKeyPress={(event) => {}}
        placeholderTextColor={appColor.kGrayLight3}
        style={[styles.textInput]}
      />
      {text ? (
        <DelIcon onPress={() => dispatch(updateSearchFocus('default'))} />
      ) : (
        <View />
      )}
    </View>
  );
};

export default memo(SearchPostSearchField);
const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderWidth: 1,
    width: size.getWidthSize(296),
    alignSelf: 'center',
    borderColor: appColor.kWhiteColor,

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
