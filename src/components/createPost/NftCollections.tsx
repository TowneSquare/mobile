import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useFonts } from 'expo-font';
import { fonts, appColor } from '../../constants';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { sizes } from '../../utils';
const size = new sizes(height, width);
import { useAppSelector } from '../../controller/hooks';
interface NftCollection {
  image?: any;
  Name?: string;
  id?: number;
}
interface Props {
  callBack?: () => {};
}
const NftCollections = ({ callBack }: Props) => {
  const navigation = useNavigation();
  const collections = useAppSelector(
    (state) => state.bottomSheetController.listOfNftCollections
  );
  let [isLoaded] = useFonts({
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const Nft = (collection: NftCollection) => {
    return (
      <Pressable
        key={collection.id}
        style={styles.collection}
        onPress={() => {
          callBack ? callBack : navigation.navigate('SelectedCollectionScreen');
        }}
      >
        {
          <Image
            source={collection.image}
            resizeMode="cover"
            style={{
              width: size.getWidthSize(140),
              height: size.getHeightSize(140),
            }}
          />
        }
        <View style={styles.collectionNameContainer}>
          <Text style={styles.collectionName}>{collection.Name}</Text>
        </View>
        <View style={styles.collectionIdContainer}>
          <Text style={styles.collectionIdText}>{collection.id}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={collections}
      renderItem={({ item }) => Nft(item)}
      numColumns={2}
      keyExtractor={(item) => item.id?.toString()}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default NftCollections;
const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: size.getWidthSize(16),

    width: size.getWidthSize(328),
    alignSelf: 'center',
  },
  collectionIdText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  collectionIdContainer: {
    height: size.getHeightSize(25),
    width: size.getHeightSize(26),
    position: 'absolute',
    backgroundColor: appColor.kSecondaryButtonColor,
    right: size.getWidthSize(8),
    top: size.getHeightSize(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    bottom: size.getHeightSize(104),
  },
  collectionNameContainer: {
    width: size.getWidthSize(124),
    position: 'absolute',
    backgroundColor: '#121212',
    bottom: size.getHeightSize(8),
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(10),
    alignSelf: 'center',
    zIndex: 0,
    opacity: 0.9,
    marginHorizontal: size.getWidthSize(8),
  },
  collectionName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
  },
  collection: {
    marginBottom: size.getHeightSize(16),
    overflow: 'hidden',
    width: size.getWidthSize(140),
    height: size.getHeightSize(140),
    borderRadius: 20,
  },
});
