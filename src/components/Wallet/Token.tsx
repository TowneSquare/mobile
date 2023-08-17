import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import BarCodeIcon from '../../../assets/images/svg/BarcodeIcon';
import SendIcon from '../../../assets/images/svg/SendIcon';
import SwapIcon from '../../../assets/images/svg/SwapIcon';
import { images, fonts, appColor } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
const { height, width } = Dimensions.get('window');
import ArrowUp from '../../../assets/images/svg/ArrowUp';
const size = new sizes(height, width);
interface Props {
  name: string;
  id: string;
  amount: string;
  priceChange: string;
  currentPrice: string;
  imageUri: string;
}
const Token = ({
  amount,
  currentPrice,
  id,
  name,
  priceChange,
  imageUri,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: size.getWidthSize(16),
        paddingHorizontal: size.getWidthSize(8),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: appColor.grayDark,
        alignSelf: 'center',
        marginHorizontal: size.getWidthSize(16),
      }}
    >
      <Avatar
        source={{ uri: imageUri }}
        size={size.getHeightSize(32)}
        rounded
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginLeft: size.getWidthSize(8),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-SemiBold',
            lineHeight: size.getHeightSize(21),
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(14),
            fontFamily: 'Outfit-Regular',
            lineHeight: size.getHeightSize(18),
          }}
        >
          {id}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-SemiBold',
            lineHeight: size.getHeightSize(21),
          }}
        >
          {amount}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ArrowUp />
          <Text
            style={{
              color: '#2AB576',
              fontSize: size.fontSize(14),
              fontFamily: 'Outfit-Regular',
              lineHeight: size.getHeightSize(18),
            }}
          >
            {priceChange}{' '}
          </Text>
          <Text
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(14),
              fontFamily: 'Outfit-Regular',
              lineHeight: size.getHeightSize(18),
            }}
          >
            ${currentPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Token;
