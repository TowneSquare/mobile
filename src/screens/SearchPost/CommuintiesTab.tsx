import { Dimensions, StyleSheet, View, ScrollView, Text } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import Communities from '../../components/Search/Communities';
import { StatusBar } from 'expo-status-bar';
import { appColor, fonts } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { useAppSelector } from '../../controller/hooks';
const CommuintiesTab = () => {
  const searchFocus = useAppSelector(
    (state) => state.SearchPostController.searchFocus
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView style={styles.container}>
        {searchFocus !== 'hide_for_you_tab' && (
          <Text style={[styles.labels]}>Communities for you</Text>
        )}
        <Communities marginTop={8} />
      </ScrollView>
    </View>
  );
};

export default CommuintiesTab;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: size.getWidthSize(16),
  },
  labels: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
  },
});
