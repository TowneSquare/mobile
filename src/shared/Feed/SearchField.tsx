import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { Octicons } from '@expo/vector-icons';
import { onChange } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  placeholder: string;
  marginTop?: number;
  width?: string | number;
  borderColor?: string;
  onChangeText?: (text: string) => void;
}
const SearchField = ({
  placeholder,
  marginTop,
  width,
  borderColor,
  onChangeText,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: marginTop
            ? size.getHeightSize(marginTop)
            : size.getHeightSize(24),
          width: width ? width : size.getWidthSize(328),
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
        onChangeText={onChangeText}
        placeholderTextColor={appColor.kGrayLight3}
        style={[
          styles.textInput,
          {
            width: width ? width : size.getWidthSize(328),
            borderColor: borderColor ? borderColor : appColor.kWhiteColor,
          },
        ]}
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
