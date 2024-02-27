import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../controller/hooks';
import { SuperStarCollectionScreenProps } from '../../navigations/NavigationTypes';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
import SelectedStars from '../../components/Profile/About/SelectedStars';
import SuperStarCollection from '../../components/Profile/About/SuperStarCollection';
import SearchField from '../../shared/Feed/SearchField';
const SuperStarCollectionScreen = ({
  navigation,
}: SuperStarCollectionScreenProps) => {
  const collections = useAppSelector(
    (state) => state.bottomSheetController.listOfNftCollections
  );
  console.log(collections);
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title="My Super Stars" />
      <SearchField
        placeholder="Search by Collection name or ID#"
        marginTop={16}
      />
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginTop: size.getHeightSize(16) }}>
          <View style={styles.collectionContainer}>
            {collections.map((collection) => (
              <SuperStarCollection
                navigation={navigation}
                collection={collection}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <SelectedStars navigation={navigation} />
    </SafeAreaView>
  );
};

export default SuperStarCollectionScreen;
const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: size.getWidthSize(328),
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
});
