import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import CommunityHeaderIcon from '../../../assets/images/svg/CommunityHeaderIcon';
const size = new sizes(height, width);
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}
const CommunityHeader = ({ title }: Props) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Pressable style={styles.header}>
      <CommunityHeaderIcon onPress={openDrawer} size={size.getHeightSize(44)} />
      <Text style={styles.headerText}>{title}</Text>
      <Feather
        name="more-horizontal"
        size={size.fontSize(24)}
        color={appColor.kWhiteColor}
        onPress={() => navigation.navigate('CommunitySettings')}
      />
    </Pressable>
  );
};

export default CommunityHeader;
const styles = StyleSheet.create({
  header: {
    height: size.getHeightSize(64),
    backgroundColor: appColor.kgrayDark2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: 'space-between',
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
});
