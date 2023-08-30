import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import JoinButton from './JoinButton';
import { useFonts } from 'expo-font';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import ImageStack from '../../components/Notification/ImageStack';
import Users from '../../../assets/images/svg/Users';
import { useAppSelector } from '../../controller/hooks';
const size = new sizes(height, width);
interface Props {
  showAll: boolean;
}
interface Community {
  name: string;
  description: string;
}
const Communities = ({ showAll }: Props) => {
  const { data, searchData, searchFocus } = useAppSelector((state) => ({
    data: state.SearchPostController.communityData,
    searchFocus: state.SearchPostController.searchFocus,
    searchData: state.SearchPostController.communitySearchDataFiltered,
  }));
  const communityData = searchFocus === 'hide_for_you_tab' ? searchData : data;
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const Community = (community: Community) => {
    return (
      <View
        style={{
          borderRadius: 8,
          marginTop: size.getHeightSize(16),
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={images.community}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View style={styles.groupInfoContainer}>
          <Image
            source={images.hexagon}
            style={styles.hexagon}
            resizeMode="cover"
          />
          <View style={styles.groupDescription}>
            <Text style={styles.groupName}>{community.name}</Text>
            <JoinButton joined={false} />
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.groupText}>
            1212 flamingos on the
            <Text style={styles.textBold}>@AptosLand</Text> blockchain striving
            for a stronger a
          </Text>
          <View style={styles.groupDetails}>
            <ImageStack />
            <Text style={styles.members}>2k Members</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      {communityData.length > 0 ? (
        <>
          {communityData.map((item) => Community(item))}
          {!showAll && <Text style={styles.showMore}>Show more</Text>}
        </>
      ) : (
        <>
          <View style={{ height: size.getHeightSize(117) }} />
          <View style={styles.container}>
            <Users />
            <Text style={styles.notFoundText}>
              We didn't find any community matching your search terms
            </Text>
          </View>
        </>
      )}
    </>
  );
};

export default Communities;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    borderRadius: 40,
    width: size.getWidthSize(63),
    paddingVertical: size.getHeightSize(7),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  groupDescription: {
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(8),
    marginTop: size.getHeightSize(8),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  groupName: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.04,
    maxWidth: size.getWidthSize(167),
  },
  groupText: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
    letterSpacing: 0.04,
    maxWidth: size.getWidthSize(238),
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(8),
    marginBottom: size.getHeightSize(16),
  },
  textBold: {
    fontFamily: 'Outfit-SemiBold',
  },
  members: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
    marginLeft: size.getWidthSize(30),
  },
  groupDetails: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    marginLeft: size.getWidthSize(8),
    marginBottom: size.getHeightSize(24),
    alignItems: 'center',
  },
  groupInfoContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: size.getWidthSize(70),
  },
  imageContainer: {
    height: size.getHeightSize(94),
  },
  hexagon: {
    width: size.getHeightSize(64),
    height: size.getHeightSize(64),
    position: 'absolute',
    left: size.getWidthSize(8),
    top: size.getHeightSize(-32),
  },
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
  },
  showMore: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.klightPurple,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(16),
    marginBottom: size.getHeightSize(24),
    textAlign: 'center',
  },
  notFoundText: {
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
  },
});
