import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import Header from '../../shared/Feed/Header';
const size = new sizes(height, width);
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileFollowersTab from '../../navigations/ProfileFollowersTab';
const FollowersScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
       
      }}
    >
      <Header title="Real JC" />
      <View style={styles.marginTop} />
      <View style={{
        flex:1,
        paddingHorizontal:size.getWidthSize(16)
      }}>

      <ProfileFollowersTab />
      </View>
    </SafeAreaView>
  );
};

export default FollowersScreen;
const styles = StyleSheet.create({
  marginTop: {
    height: size.getHeightSize(16),
  },
});
