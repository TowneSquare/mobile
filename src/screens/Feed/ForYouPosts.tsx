import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { UserPosts } from '../../components/Feed/DuumyData';
import ForYou from '../../components/Feed/ForYou';
import { appColor } from '../../constants';
import { FlashList } from '@shopify/flash-list';
const ForYouPosts = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <FlashList
        data={UserPosts}
        renderItem={({ item }) => <ForYou data={item} />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default ForYouPosts;
