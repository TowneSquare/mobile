import { View, Text, Image, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { appColor } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
interface Props {
  label: string;
  OnPress?(): void;
  image: any;
  onClose(): void;
}
const Wallets: React.FC<Props> = ({ label, OnPress, image, onClose }) => {
  const handlePress = () => {
    if (OnPress) {
      OnPress();
    }
    if (onClose) {
      onClose();
    }
  };
  const size = new sizes(height, width);
  return (
    <Pressable
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={image} />
      <Text
        style={{
          color: appColor.maintext,
          textAlign: 'center',
          fontWeight: '400',
          fontSize: size.fontSize(20),
          marginLeft: size.sWidth(0.04),
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Wallets;
