import { Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Communities from './Communities';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const CommunitiesForYou = () => {
  return (
    <ScrollView style={styles.container}>
      <Communities marginTop={8} />
    </ScrollView>
  );
};

export default CommunitiesForYou;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: size.getWidthSize(16),
  },
});
