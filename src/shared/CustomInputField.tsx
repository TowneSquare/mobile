import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../utils';
import { appColor } from '../constants';
const size = new sizes(height, width);

interface Props extends TextInputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  marginTop?: number;
}

const CustomInputField: ForwardRefRenderFunction<TextInput, Props> = (
  { marginTop, placeholder, onChangeText, ...restProps },
  ref
) => {
  return (
    <TextInput
      ref={ref}
      onChangeText={onChangeText}
      cursorColor={appColor.primaryLight}
      placeholder={placeholder}
      placeholderTextColor={appColor.kgrayTextColor}
      style={[
        styles.textInput,
        { marginTop: marginTop ? size.getHeightSize(marginTop) : 0 },
      ]}
      {...restProps}
    />
  );
};

export default forwardRef(CustomInputField);
const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    minHeight: size.getHeightSize(48),
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: appColor.kGrayscaleDart,
    borderColor: appColor.kGrayscale,
    alignSelf: 'center',

    paddingHorizontal: size.getWidthSize(16),
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
  },
});
