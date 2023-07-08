import { Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
import { useFonts } from 'expo-font';
import { appColor } from '../../constants';
import { sizes } from '../../utils';

import { useAppSelector } from '../../controller/hooks';
import UserDisplay from '../../shared/Feed/UserDisplay';
const size = new sizes(height, width);

interface Props {
  showAll?: boolean;
}
const SuggestedProfiles = ({ showAll }: Props) => {
  const { searchFocus, searchData, data } = useAppSelector((state) => ({
    searchFocus: state.SearchPostController.searchFocus,
    searchData: state.SearchPostController.peopleToSearchDataFiltered,
    data: state.SearchPostController.profileData,
  }));
  const profileData = searchFocus === 'hide_for_you_tab' ? searchData : data;
  return (
    <>
      {profileData.length > 0 &&
        profileData.map((profile) => <UserDisplay data={profile} />)}
      {!showAll && <Text style={styles.showMore}>Show more</Text>}
    </>
  );
};
export default SuggestedProfiles;
const styles = StyleSheet.create({
  showMore: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.klightPurple,

    marginTop: size.getHeightSize(16),
    textAlign: 'center',
  },
});
