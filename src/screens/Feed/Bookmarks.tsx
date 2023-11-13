import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { sizes } from '../../utils';
import { UserPosts } from '../../components/Feed/DuumyData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';
import ForYou from '../../components/Feed/ForYou';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const Bookmarks = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Bookmarks" />
      <FlashList
        data={UserPosts}
        renderItem={({ item }) => <ForYou data={item} shouldPFPSwipe />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({});
