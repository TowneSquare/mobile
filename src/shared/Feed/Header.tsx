import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
import AntDesign from '@expo/vector-icons/AntDesign';
const size = new sizes(height, width);
interface Props {
  title: string;
}
const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={navigation.goBack}
      />
      <Text style={styles.title}>{title}</Text>
      <AntDesign
        name="arrowleft"
        color={appColor.kgrayDark2}
        size={size.fontSize(24)}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
});
