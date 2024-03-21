import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Pressable, StyleSheet, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommunityHeaderIcon from '../../../assets/images/svg/CommunityHeaderIcon';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

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
      {/* <CommunityHeaderIcon onPress={openDrawer} size={size.getHeightSize(44)} /> */}
      <AntDesign
        name="arrowleft"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={navigation.goBack}
      />
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
