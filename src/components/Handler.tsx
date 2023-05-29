import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { appColor } from '../constants';
import { sizes } from '../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Handler = () => {
  return (
    <View
      style={{
        height: 5,
        width: size.getWidthSize(114),
        backgroundColor: appColor.kGrayscale,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: size.getHeightSize(16),
      }}
    />
  );
};

export default Handler;
