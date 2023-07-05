import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');

import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import User from '../../../assets/images/svg/User';
import UserCircle from '../../../assets/images/svg/UserCirlce';
import { appColor, fonts } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
import PostNotFound from '../../../assets/images/svg/PostNotFound';
import SuggestedProfiles from '../../components/Search/SuggestedProfiles';
const size = new sizes(height, width);
const PeopleTab = () => {
  const { data, searchFocus, searchData } = useAppSelector((state) => ({
    data: state.SearchPostController.profileData,
    searchFocus: state.SearchPostController.searchFocus,
    searchData: state.SearchPostController.peopleToSearchDataFiltered,
  }));
  const profileData = searchFocus === 'hide_for_you_tab' ? searchData : data;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      {searchFocus !== 'hide_for_you_tab' && (
        <Text style={[styles.labels]}>Suggested profiles</Text>
      )}
      {profileData.length > 0 ? (
        <ScrollView contentContainerStyle={styles.container}>
          <SuggestedProfiles showAll marginTop={8} />
        </ScrollView>
      ) : (
        <>
          <View style={{ height: size.getHeightSize(117) }} />
          <View style={styles.container}>
            <UserCircle />
            <Text style={styles.text}>
              We didn't find any posts matching your search terms
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default PeopleTab;
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    width: size.getWidthSize(271),
  },
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  labels: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
    marginLeft: size.getWidthSize(16),
  },
  peopleContainer: {
    marginHorizontal: size.getWidthSize(16),
  },
});
