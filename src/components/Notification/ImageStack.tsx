import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const size = new sizes(height, width);
const ImageStack = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Image style={styles.imageStyle} source={images.profileImage} />
      <Image style={styles.image2} source={images.myfeedProfileImage} />
      <Image style={styles.image3} source={images.stackImage} />
    </View>
  );
};

export default ImageStack;
const styles = StyleSheet.create({
  imageStyle: {
    height: size.getHeightSize(24),
    width: size.getHeightSize(24),
  },
  image2: {
    position: 'absolute',
    height: size.getHeightSize(24),
    width: size.getHeightSize(24),
    left: size.getHeightSize(15),
    borderRadius: 100,
  },
  image3: {
    position: 'absolute',
    height: size.getHeightSize(24),
    width: size.getHeightSize(24),
    left: size.getHeightSize(30),
    borderRadius: 100,
  },
});
