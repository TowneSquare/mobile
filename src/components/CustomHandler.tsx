import { View, Text } from 'react-native';
import React from 'react';
import { appColor } from '../constants';

const CustomHandler = () => {
  return (
    <View
      style={{
        height: 4,
        width: 60,
        backgroundColor: appColor.grayBlue3,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop:10
      }}
    />
  );
};

export default CustomHandler;
