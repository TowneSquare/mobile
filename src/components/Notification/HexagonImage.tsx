import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const size = new sizes(height, width);

const HexagonImage = () => {
  const points = '50% 0, 100% 22%, 100% 76%, 50% 100%, 0 76%, 0 22%';
  return (
    <View
      style={{
        position: 'absolute',
      }}
    >
      {/* <View style={styles.container}>
        <View style={styles.hexagon}></View>
      </View> */}
    </View>
  );
};

export default HexagonImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexagon: {
    top: '30%',
    left: '40%',
    position: 'absolute',
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    width: 100,
    height: 63,
    borderWidth: 2,
    borderColor: 'transparent',
    transform: [{ rotate: '45deg' }],
    transitionDuration: 1000,
  
    
  },
});
