import {
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../controller/hooks';
import { SuperStarCollectionScreenProps } from '../../navigations/NavigationTypes';
import { initialData, useUserNFT } from '../../api/hooks';
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
  // const userNFT = useUserNFT({
  //   userAddress:
  //     "0xab772ae1cbc258f8d65d5def3bcf2968ec00803c66ef0a559e832441612cd05f",
  // });
  const userNFT = initialData
  console.log("==========",userNFT.data, "UserNFT");
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
        <ScrollView style={{ marginBottom: size.getHeightSize(16) }}>
          <View style={styles.collectionContainer}>
            {userNFT.data.map((collection) => (
              <SuperStarCollection
                navigation={navigation}
                collectionName={collection.collection}
                collectionLogo={collection.logo_url}
                ownsTotal={collection.owns_total}
                assets={collection.assets}
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
