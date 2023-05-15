import { View, Text, Dimensions } from 'react-native';
import { sizes } from '../utils';
import React from 'react';
import { appColor, fonts } from '../constants';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
const Topics = () => {
  const size = new sizes(height, width);
  let [isLoaded] = useFonts({
    'Urbanist-Bold': fonts.EXTRABOLD,
    UrbanistSemiBold: fonts.SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{
        marginTop: size.sHeight(0.01),
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: size.sWidth(0.9),
      }}
    >
      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
          margin: 5,
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
          margin: 5,
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
          margin: 5,
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
          margin: 5,
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: appColor.buttonColor,
          padding: 10,
          //   width: size.sWidth(0.3),
          height: size.sHeight(0.05),
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: appColor.maintext,
            textAlign: 'center',
            fontSize: size.fontSize(18),
            fontFamily: 'UrbanistSemiBold',
          }}
        >
          Defi
        </Text>
      </View>
    </View>
  );
};

export default Topics;
