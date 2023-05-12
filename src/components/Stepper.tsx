import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
import { appColor } from '../constants';
interface Props {
  steps: number;
}
const Stepper = ({ steps }: Props) => {
  const { height, width } = Dimensions.get('window');
  const size = new sizes(height, width);
  return (
    <>
      <Text
        style={{
          marginVertical: size.sHeight(0.01),
          color: appColor.maintext,
          marginLeft: size.sWidth(0.05),
          alignSelf: 'flex-start',
        }}
      >
        {steps}/
        <Text
          style={{
            color: '#98A2B3',
            textAlign: 'left',
          }}
        >
          3
        </Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: size.sWidth(0.9),
        }}
      >
        <View
          style={{
            height: size.sHeight(0.01),
            width: size.sWidth(0.29),
            borderRadius: 5,
            backgroundColor: appColor.filledStep,
          }}
        />
        <View
          style={{
            height: size.sHeight(0.01),
            width: size.sWidth(0.29),
            borderRadius: 5,
            backgroundColor: steps >= 2 ? appColor.filledStep : appColor.step,
          }}
        />
        <View
          style={{
            height: size.sHeight(0.01),
            width: size.sWidth(0.29),
            borderRadius: 5,
            backgroundColor: steps === 3 ? appColor.filledStep : appColor.step,
          }}
        />
      </View>
    </>
  );
};

export default Stepper;
