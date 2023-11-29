import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import SelectedStars from '../../components/Profile/About/SelectedStars';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { updateSelectedSuperStar } from '../../controller/UserController';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../../controller/hooks';
import { SelectedSuperStarCollectionScreenProps } from '../../navigations/NavigationTypes';
import SelectedIcon from '../../../assets/images/svg/SelectedIcon';

const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const SelectedSuperStarCollectionScreen = ({
  navigation,
  route,
}: SelectedSuperStarCollectionScreenProps) => {
  const selected = useAppSelector((state) => state.USER.selectedSuperStar);
  const dispatch = useAppDispatch();
  const {title, nfts} = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} />
      <View
        style={{
          flex: 1,
          paddingTop: size.getHeightSize(16),
        }}
      >
        <ScrollView>
          <View style={styles.collectionContainer}>
            {nfts.map((collection, index) => (
              <>
                <Pressable
                  key={index}
                  disabled={
                    selected.length === 6 ||
                    selected.some(
                      (obj) =>
                        obj.hasOwnProperty('nftTokenId') &&
                        obj['nftTokenId'] === collection.nftTokenId
                    )
                  }
                  onPress={() => {
                    dispatch(
                      updateSelectedSuperStar({
                        nftImageUrl: Image.resolveAssetSource(collection.nftImageUrl).uri,
                        nftTokenId: collection.nftTokenId,
                        nftCollection: collection.nftCollection
                      })
                    );
                  }}
                  style={styles.nftContainer}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: Image.resolveAssetSource(collection.nftImageUrl).uri,
                      }}
                      resizeMode="cover"
                      style={styles.imageStyle}
                    />
                    {selected.some(
                      (obj) =>
                        obj.hasOwnProperty('nftTokenId') &&
                        obj['nftTokenId'] === collection.nftTokenId
                    ) && (
                      <View
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          borderRadius: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'rgba(151, 71, 255, 0.70)',
                        }}
                      >
                        <SelectedIcon />
                      </View>
                    )}
                  </View>
                  <Text style={styles.name}>{collection.nftTokenId}</Text>
                </Pressable>
              </>
            ))}
          </View>
        </ScrollView>
      </View>
      <SelectedStars navigation={navigation} />
    </SafeAreaView>
  );
};

export default SelectedSuperStarCollectionScreen;
const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: size.getWidthSize(16),
  },
  nftContainer: {
    width: size.getWidthSize(109.23357),
    gap: size.getHeightSize(3.64),
    marginBottom: size.getHeightSize(8),
  },
  imageContainer: {
    height: size.getHeightSize(109.23357),
    width: size.getWidthSize(109.23357),
  },
  imageStyle: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
  },
});
