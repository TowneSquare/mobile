import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';
const { height, width } = Dimensions.get('window');
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import GrayInfoIcon from '../../../assets/images/svg/GrayInfoIcon';
import {
  updatePostNft,
  updateShowPriceModal,
} from '../../controller/createPost';
import { useAppDispatch, useAppSelector } from '../../controller/hooks';
const size = new sizes(height, width);
import RemoveAttachment from '../../../assets/images/svg/RemoveAttachment';
const AttachedNftContainer = () => {
  // const price = useAppSelector(
  //   (state) => state.CreatePostController.posts.nft.sellNFTPrice
  // );

  const {price, collectionName,nftTokenId } = useAppSelector((state) => ({
    price:state.CreatePostController.posts.nft.sellNFTPrice,
    collectionName: state.CreatePostController.posts.nft.nftCollection,
    nftTokenId: state.CreatePostController.posts.nft.nftTokenId
  }))
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={images.NftCollection}
          style={{ height: '100%', width: '100%', borderRadius: 8 }}
          resizeMode="cover"
        />
        {price && (
          <View style={styles.descriptionContainer}>
            <View style={styles.row}>
              <Avatar
                size={size.getHeightSize(16)}
                rounded
                source={images.collectionImage}
              />
              <Text style={styles.name}>{collectionName}</Text>
            </View>
            <Text style={styles.id}>{`${collectionName} ${nftTokenId}`}</Text>
          </View>
        )}
      </View>
      {!price && (
        <View
          style={{
            bottom: 0,
            paddingLeft: size.getWidthSize(16),
            backgroundColor: '#00000070',
            paddingTop: size.getHeightSize(8),
          }}
        >
          <View style={styles.row}>
            <Avatar
              size={size.getHeightSize(16)}
              rounded
              source={images.collectionImage}
            />
           <Text style={styles.name}>{collectionName}</Text>
          </View>
          <Text style={styles.id}>{`${collectionName} ${nftTokenId}`}</Text>
        </View>
      )}
      {price && (
        <View style={[styles.publishContainer, { position: 'relative' }]}>
          <Text style={styles.publishText}>Price</Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(20),
              lineHeight: size.getHeightSize(24),
              fontFamily: 'Outfit-SemiBold',
              letterSpacing: 0.4,
            }}
          >
            {price} APT
          </Text>
        </View>
      )}
      {price && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.getHeightSize(16),
            gap: size.widthSize(4),
          }}
        >
          <GrayInfoIcon />
          <Text
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(14),
              fontFamily: 'Outfit-Regular',
            }}
          >
            Publish the post to offer the NFT on sale
          </Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          dispatch(updatePostNft(null)), dispatch(updateShowPriceModal(false));
        }}
        activeOpacity={0.2}
        style={{
          position: 'absolute',
          right: size.getWidthSize(0),
          top: size.getHeightSize(0),
          paddingTop: size.getHeightSize(8),
          paddingRight: size.getWidthSize(8),
        }}
      >
        <RemoveAttachment />
      </TouchableOpacity>
    </View>
  );
};

export default AttachedNftContainer;
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(322),
    width: size.getWidthSize(280),
    alignSelf: 'flex-start',
    marginLeft: size.getWidthSize(64),
    marginTop: size.getHeightSize(8),
  },
  imageContainer: {
    height: size.getHeightSize(267),
    width: size.getWidthSize(280),
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: size.getWidthSize(16),
    backgroundColor: '#00000070',
    right: 0,
    left: 0,
    paddingTop: size.getHeightSize(8),
  },
  row: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  id: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(8),
  },
  publishContainer: {
    justifyContent: 'center',
    backgroundColor: appColor.kGrayLight3,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: size.getHeightSize(8),
    paddingLeft: size.getWidthSize(16),
  },
  publishText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(13),
    fontFamily: 'Outfit-Regular',
  },
});
