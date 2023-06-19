import { View, Text, Dimensions } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { appColor } from '../../constants';
import User from '../../../assets/images/svg/User';
import NickNameField from './NickNameField';
import UsernameField from './UsernameField';
import { useAppSelector } from '../../controller/hooks';
const size = new sizes(height, width);
const SelectSocialsHeader = () => {

  return (
    <>
      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: 'center',
        }}
      >
        <User />
      </View>
      <View
        style={{
          // height: size.getHeightSize(37),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: 'Outfit-Bold',
            textAlign: 'center',
            marginTop: size.getHeightSize(8),
            lineHeight: size.getHeightSize(37),
          }}
        >
          Choose your username
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginTop: size.getHeightSize(8),
          width: size.getWidthSize(304),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            lineHeight: size.getHeightSize(21),
          }}
        >
          Stand out in Towne Square with a Nickname and a unique username.
        </Text>
      </View>
      <View style={{ height: size.getHeightSize(113.5) }} />
      <View>
        <NickNameField />
        <View style={{ height: size.getHeightSize(32) }} />
        <UsernameField />
      </View>
    </>
  );
};

export default SelectSocialsHeader;
