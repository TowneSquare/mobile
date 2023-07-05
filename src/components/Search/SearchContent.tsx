import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { memo, useEffect } from 'react';
import { useFonts } from 'expo-font';
import SearchPost from '../../../assets/images/svg/SearcPost';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Profile from '../../shared/Feed/Profile';
import CommuintyList from '../../shared/Feed/CommuintyList';
import { Octicons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
const { height, width } = Dimensions.get('window');
import { updateSearchFocus } from '../../controller/SearchPost';
import { resetSearch, updateSearchWord } from '../../controller/SearchPost';
import { batch } from 'react-redux';
const size = new sizes(height, width);

const SearchContent = () => {
  const dispatch = useAppDispatch();
  const { data, searchWord } = useAppSelector((state) => ({
    data: state.SearchPostController.filteredData,
    searchWord: state.SearchPostController.SearchWord,
  }));
  // console.log(data.length);
  const SearchResult = () => {
    return (
      <>
        {data.map((dat) =>
          dat.type === 'community' ? (
            <CommuintyList data={dat} />
          ) : (
            <Profile data={{ name: dat.name, nickname: dat.nickname }} />
          )
        )}
      </>
    );
  };
  return (
    <ScrollView>
      {!searchWord && (
        <>
          <View style={styles.marginTop} />
          <View style={styles.searchDescription}>
            <SearchPost />
            <Text style={styles.descriptionText}>
              Search or Users, Communities or posts.
            </Text>
          </View>
        </>
      )}
      {data.length > 0 && (
        <View
          style={{
            marginHorizontal: size.getWidthSize(16),
          }}
        >
          <SearchResult />
        </View>
      )}
      {searchWord && (
        <Text
          onPress={() => {
            dispatch(updateSearchFocus('hide_for_you_tab'));
          }}
          style={styles.showMore}
        >
          Show more result for {searchWord}
        </Text>
      )}
    </ScrollView>
  );
};

export default SearchContent;
const styles = StyleSheet.create({
  marginTop: {
    height: size.getHeightSize(161),
  },
  searchDescription: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    paddingVertical: size.getHeightSize(12),
    width: size.getWidthSize(201),
  },
  showMore: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.klightPurple,
    marginTop: size.getHeightSize(16),
    textAlign: 'center',
  },
});
//PostNotFound Users
