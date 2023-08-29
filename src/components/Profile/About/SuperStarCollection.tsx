import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import { appColor, images, fonts } from '../../../constants';
import { sizes } from '../../../utils';
import { useFonts } from 'expo-font';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/NavigationTypes';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  collection: { image?: any; Name?: string; id?: number };
  navigation: NavigationProp<RootStackParamList, 'SuperStarCollectionScreen'>;
}
const data = [
  {
    image: images.aptosMonkey6,
    name: 'Aptos Monkeys #8961',
  },
  {
    image: images.aptosMonkey2,
    name: 'Aptos Monkeys #8962',
  },
  {
    image: images.aptosMonkey3,
    name: 'Aptos Monkeys #8963',
  },
  {
    image: images.aptosMonkey4,
    name: 'Aptos Monkeys #8964',
  },
  {
    image: images.aptosMonkey5,
    name: 'Aptos Monkeys #8965',
  },
  {
    image: images.aptosMonkey6,
    name: 'Aptos Monkeys #8966',
  },
  {
    image: images.aptosMonkey3,
    name: 'Aptos Monkeys #8967',
  },
  {
    image: images.aptosMonkey2,
    name: 'Aptos Monkeys #8968',
  },
  {
    image: images.aptosMonkey3,
    name: 'Aptos Monkeys #8969',
  },
  {
    image: images.aptosMonkey4,
    name: 'Aptos Monkeys #89610',
  },
];
const SuperStarCollection = ({ collection, navigation }: Props) => {
  let [isLoaded] = useFonts({
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SelectedSuperStarCollectionScreen', {
          nfts: data,
          title: 'Aptos Monkeys',
        });
      }}
      style={styles.imageContainer}
    >
      <Image
        source={{ uri: Image.resolveAssetSource(collection.image).uri }}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{collection.Name}</Text>
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{collection.id}</Text>
      </View>
    </Pressable>
  );
};

export default SuperStarCollection;
const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: size.getHeightSize(16),
    overflow: 'hidden',
    width: size.getWidthSize(140),
    height: size.getHeightSize(140),
    borderRadius: 20,
  },
  imageStyle: {
    width: size.getWidthSize(140),
    height: size.getHeightSize(140),
  },
  nameContainer: {
    width: size.getWidthSize(124),
    position: 'absolute',
    backgroundColor: '#121212',
    bottom: size.getHeightSize(8),

    // right: 0,
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(10),
    alignSelf: 'center',
    zIndex: 0,
    opacity: 0.9,
    marginHorizontal: size.getWidthSize(8),
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
  },
  idContainer: {
    height: size.getHeightSize(25),
    width: size.getHeightSize(26),
    position: 'absolute',
    backgroundColor: appColor.kSecondaryButtonColor,
    right: size.getWidthSize(8),
    top: size.getHeightSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    bottom: size.getHeightSize(104),
  },
  id: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
});
