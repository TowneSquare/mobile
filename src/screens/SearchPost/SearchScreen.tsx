import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import SearchContent from '../../components/Search/SearchContent';
import { useEffect } from 'react';
import { sizes } from '../../utils';
import TopTabNavigator from '../../navigations/TopTabNavigator';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../../constants';
import SearchPostSearchField from '../../components/Search/SearchPostSearchField';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
const size = new sizes(height, width);
import Posts from './Posts';
import ForYouTab from './ForYouTab';
import PeopleTab from './PeopleTab';
import CommuintiesTab from './CommuintiesTab';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { SearchScreenProps } from '../../navigations/NavigationTypes';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { updateSearchFocus } from '../../controller/SearchPost';
const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const dispatch = useAppDispatch();
  const { isSearchFiledFocused, searchWord } = useAppSelector((state) => ({
    isSearchFiledFocused: state.SearchPostController.searchFocus,
    searchWord: state.SearchPostController.SearchWord,
  }));

  useEffect(() => {
    dispatch(updateSearchFocus('default'));
  }, []);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  let tabContent = [
    {
      name: 'For you',
      content: ForYouTab,
    },
    {
      name: 'Posts',
      content: Posts,
    },
    {
      name: 'People',
      content: PeopleTab,
    },
    {
      name: 'Communities',
      content: CommuintiesTab,
    },
  ];
  if (isSearchFiledFocused !== 'hide_for_you_tab') {
    tabContent = tabContent;
  } else {
    tabContent = tabContent.slice(1);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      {isSearchFiledFocused === 'hide_for_you_tab' ||
      isSearchFiledFocused === 'default' ? (
        <>
          <View style={styles.Header}>
            <Animated.View
              entering={FadeInUp.duration(30)}
              exiting={FadeOutUp.duration(30)}
            >
              <Pressable
                onPress={() => dispatch(updateSearchFocus('search_focused'))}
                style={styles.searchfield}
              >
                <AntDesign
                  name="arrowleft"
                  color={appColor.kWhiteColor}
                  size={size.fontSize(24)}
                  onPress={navigation.goBack}
                />
                <View style={styles.searchContainer}>
                  <Octicons
                    name="search"
                    size={size.fontSize(20)}
                    color={
                      isSearchFiledFocused === 'hide_for_you_tab'
                        ? appColor.kWhiteColor
                        : appColor.kGrayLight3
                    }
                  />
                  {isSearchFiledFocused === 'hide_for_you_tab' ? (
                    <Text
                      style={[
                        styles.searchText,
                        { color: appColor.kTextColor },
                      ]}
                    >
                      {searchWord}
                    </Text>
                  ) : (
                    <Text style={styles.searchText}>Search</Text>
                  )}
                </View>
              </Pressable>
            </Animated.View>
          </View>
          <TopTabNavigator components={tabContent} fullRadius={false} />
        </>
      ) : undefined}
      {isSearchFiledFocused === 'search_focused' && (
        <>
          <View style={styles.Header}>
            <Animated.View
              entering={FadeInUp.duration(80)}
              exiting={FadeOutUp.duration(80)}
              style={styles.searchfield}
            >
              <AntDesign
                name="arrowleft"
                color={appColor.kWhiteColor}
                size={size.fontSize(24)}
                onPress={navigation.goBack}
              />
              <SearchPostSearchField />
            </Animated.View>
          </View>
          <SearchContent />
        </>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  Header: {
    width: '100%',
    backgroundColor: appColor.kgrayDark2,
    height: size.getHeightSize(80),
    justifyContent: 'center',
  },
  searchfield: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    marginHorizontal: size.getWidthSize(16),
  },
  searchContainer: {
    borderRadius: 40,
    width: size.getWidthSize(296),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kGrayscaleDart,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
  },
  searchText: {
    lineHeight: size.getHeightSize(24),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayLight3,
    paddingVertical: size.getHeightSize(12),
    height: size.getHeightSize(48),
  },
});
