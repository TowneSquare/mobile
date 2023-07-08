import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Community from '../../components/Feed/Community';
import { CommunityPost } from '../../components/Feed/DuumyData';
import { appColor } from '../../constants';
import { FlashList } from '@shopify/flash-list';
const CommunitiesPost = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <FlashList
        data={CommunityPost}
        renderItem={({ item }) => <Community data={item} />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default CommunitiesPost;
