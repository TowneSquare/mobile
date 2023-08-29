import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Avatar } from 'react-native-elements';
import SearchedCommunityImage from '../../../assets/images/svg/SearchedCommunityImage';
import RecentSearchIcon from '../../../assets/images/svg/RecentSearchIcon';
const size = new sizes(height, width);
interface SearchTermProps {
  word: string;
}
interface CommunityNameProps {
  name: string;
}
const RecentSearch = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Oufit-SemiBold': fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const UserDisplay = () => {
    return (
      <View style={styles.parentContainer}>
        <Avatar
          rounded
          size={size.getHeightSize(32)}
          source={images.profileImage}
        />
        <View style={styles.nameConatiner}>
          <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              Web3Guru
            </Text>
          </View>
          <Text style={styles.username}>@web3_guru</Text>
        </View>
        <AntDesign
          name="close"
          color={appColor.kWhiteColor}
          size={size.fontSize(20)}
        />
      </View>
    );
  };
  const SearchTerm = ({ word }: SearchTermProps) => {
    return (
      <View style={styles.searchContainer}>
        <RecentSearchIcon />
        <Text
          style={[styles.name, { paddingLeft: size.getWidthSize(8), flex: 1 }]}
        >
          {word}
        </Text>
        <AntDesign
          name="close"
          color={appColor.kWhiteColor}
          size={size.fontSize(20)}
        />
      </View>
    );
  };
  const Community = ({ name }: CommunityNameProps) => {
    return (
      <View style={styles.searchContainer}>
        <SearchedCommunityImage />
        <Text
          style={[styles.name, { paddingLeft: size.getWidthSize(8), flex: 1 }]}
        >
          {name}
        </Text>
        <AntDesign
          name="close"
          color={appColor.kWhiteColor}
          size={size.fontSize(20)}
        />
      </View>
    );
  };
  return (
    <View style={styles.recentContainer}>
      <View style={styles.inner}>
        <Text style={styles.recentSearch}>Recent searches</Text>
        <Text
          style={[
            styles.recentSearch,
            {
              color: appColor.kSecondaryButtonColor,
              paddingRight: size.getWidthSize(8),
            },
          ]}
        >
          Clear all
        </Text>
      </View>
      <View
        style={{
          gap: size.getHeightSize(16),
        }}
      >
        <UserDisplay />
        <SearchTerm word="Web3" />
        <SearchTerm word="Cryptos" />
        <Community name="Web3Community" />
      </View>
    </View>
  );
};

export default RecentSearch;
const styles = StyleSheet.create({
  recentSearch: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Oufit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  parentContainer: {
    flexDirection: 'row',
    marginTop: size.getHeightSize(16),
    alignItems: 'center',
    paddingRight: size.getWidthSize(8),
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    width: size.getWidthSize(153),
  },
  recentContainer: {
    paddingHorizontal: size.getWidthSize(16),
    paddingBottom: size.getHeightSize(8),
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: size.getHeightSize(8),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: size.getWidthSize(8),
  },
});
