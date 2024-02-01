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
import { AssetsData } from '../../../controller/UserController/models';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  collectionName: string;
  collectionLogo:string;
  ownsTotal:number;
  assets:Array<AssetsData>
  navigation: NavigationProp<RootStackParamList, 'SuperStarCollectionScreen'>;
}
const data = [
  {
    nftImageUrl: images.aptosMonkey6,
    nftTokenId: 'Aptos Monkeys #8961',
    nftCollection: "AptosMonkeys"
  },
  {
    nftImageUrl: images.aptosMonkey2,
    nftTokenId: 'Aptos Monkeys #8962',
    nftCollection: "Aptos Monkeys"
  },
  {
    nftImageUrl: images.aptosMonkey3,
    nftTokenId: 'Aptos Monkeys #8963',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey4,
    nftTokenId: 'Aptos Monkeys #8964',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey5,
    nftTokenId: 'Aptos Monkeys #8965',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey6,
    nftTokenId: 'Aptos Monkeys #8966',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey3,
    nftTokenId: 'Aptos Monkeys #8967',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey2,
    nftTokenId: 'Aptos Monkeys #8968',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey3,
    nftTokenId: 'Aptos Monkeys #8969',
    nftCollection:"Aptos Monkey"
  },
  {
    nftImageUrl: images.aptosMonkey4,
    nftTokenId: 'Aptos Monkeys #89610',
    nftCollection:"Aptos Monkey"
  },
];
const SuperStarCollection = ({ collectionName, collectionLogo, navigation, ownsTotal, assets }: Props) => {
  let [isLoaded] = useFonts({
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
    'Outfit-Bold': fonts.OUTFIT_BOLD,
  });

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SelectedSuperStarCollectionScreen', {
          nfts: assets,
         title:collectionName
        });
      }}
      style={styles.imageContainer}
    >
      <Image
        source={{ uri: collectionLogo }}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{collectionName}</Text>
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{ownsTotal}</Text>
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
