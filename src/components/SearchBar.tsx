import { View, Dimensions, TextInput } from 'react-native';
import React from 'react';
interface Props {
  marginTop: number;
  color: string;
  borderRadius: number;
  placeholder: string;
}
import { useFonts } from 'expo-font';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { appColor, fonts } from '../constants';
import { sizes } from '../utils';

const { height, width } = Dimensions.get('window');
const SearchBar = ({ marginTop, color, borderRadius, placeholder }: Props) => {
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        marginTop: marginTop,
        borderWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: color,
        borderRadius: borderRadius,
        alignItems: 'center',
        paddingLeft: 3,
        width: '90%',
        alignSelf:"center"
      }}
    >
      <AntDesign name="search1" size={20} color={color} />
      <TextInput
        style={{
          fontSize: size.fontSize(18),
          fontFamily: 'UrbanistSemiBold',
          paddingLeft: 15,
          color: appColor.secondaryTextColor,
          height: 25,
          width: '80%',
          marginVertical: 10,
          borderColor: 'white',
        }}
        placeholder={placeholder}
        placeholderTextColor={appColor.secondaryTextColor}
      />
    </View>
  );
};

export default SearchBar;
