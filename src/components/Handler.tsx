import { View, Text } from 'react-native';
import React from 'react';
import { appColor } from '../constants';

const Handler = () => {
  return (
    <View
      style={{
        height: 5,
        width: '40%',
        backgroundColor: appColor.kChooseWalletButtonColor,
        borderRadius: 8,
        alignSelf:"center",
        marginTop:15
      }}
    />
  );
};

export default Handler;
