import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import ForYou from '../Feed/ForYou';
import { UserPosts } from '../Feed/DuumyData';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
import { appColor, fonts, images } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
const Posts = () => {
  const isSearchFocuesd = useAppSelector(
    (state) => state.SearchPostController.searchFocus
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView>
        {isSearchFocuesd !== 'hide_for_you_tab' && (
          <Text style={[styles.text]}>Posts for you</Text>
        )}
        <FlatList
          data={UserPosts}
          renderItem={({ item }) => <ForYou data={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default Posts;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(8),
    marginLeft: size.getWidthSize(16),
  },
});
