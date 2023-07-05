import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { appColor, fonts } from '../../constants';
import Communities from '../../components/Search/Communities';
import SuggestedProfiles from '../../components/Search/SuggestedProfiles';
import Trending from '../../components/Search/Trending';
const size = new sizes(height, width);
const ForYouTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <ScrollView style={styles.container}>
        <Text style={styles.trendingLabel}>Trending</Text>
        <Trending />
        <Text style={[styles.labels, {}]}>Suggested profiles</Text>
        <SuggestedProfiles showAll marginTop={8} />
        <Text style={styles.labels}>Communities for you</Text>
        <Communities />
      </ScrollView>
    </View>
  );
};

export default ForYouTab;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: size.getWidthSize(16),
  },
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
  },
  trendingLabel: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(16),
  },
  labels: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(32),
  },
});
