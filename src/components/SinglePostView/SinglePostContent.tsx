import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { sizes } from '../../utils';
import { fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import APT from '../../../assets/images/svg/APT';
import SinglePostHeader from './SinglePostHeader';
import { singlePostStyles } from './SinglePostsStyles';
import {
  UserPost,
  FeedContent,
  SWAP_OPTION_INCLUDED,
  FLOOR_PRICE_INCLUDED,
} from '../../models';
const size = new sizes(height, width);
import {
  Message_Only,
  Message_Image,
  GIF,
  Message_External_Link,
  VIDEO,
  NFT_FOR_SALE,
} from '../../models';
import PostActions from '../Feed/PostActions';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
const SinglePostContent = ({ data }: { data: UserPost }) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const type_of_post = data.type;
  const userPost = data;
  let content;
  switch (type_of_post) {
    case FeedContent.MESSAGE_ONLY:
      userPost.content = data.content as Message_Only;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <Text style={styles.message}>{userPost.content.message}</Text>

              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.MESSAGE_IMAGE:
      userPost.content = data.content as Message_Image;

      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <Text style={styles.message}>{userPost.content.message}</Text>

              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={images.feedImage1}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.GIF:
      userPost.content = data.content as GIF;

      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={images.feedImage2}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.VIDEO:
      userPost.content = data.content as VIDEO;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={images.feedImage3}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.message_EXTERNAL_LINK:
      const linkContent = data.content as Message_External_Link;

      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <Text style={styles.message}>{linkContent.message}</Text>
              <Text style={styles.link}>{linkContent.link}</Text>
              <View
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                <Image
                  source={images.feedImageLink}
                  style={[
                    styles.imageStyle,
                    { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View
                style={[styles.linkDescriptionContainer, { marginBottom: 0 }]}
              >
                <Text style={styles.linkTitle}>
                  {linkContent.linkDescription}
                </Text>
                <Text style={styles.linkSubTitle}>
                  {linkContent.linkSubTitle}
                </Text>
                <Text style={styles.linkText}>{linkContent.url}</Text>
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;

    case FeedContent.NFT_FOR_SALE:
      const nftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <Text style={styles.message}>{nftContent.message}</Text>
              <View style={[styles.mediaContainer]}>
                <Image
                  source={images.test}
                  style={[
                    styles.imageStyle,
                    { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.nftcollectionContainer}>
                <View style={styles.collectionInfo}>
                  <Image source={images.collectionImage} />
                  <Text style={styles.collectionName}>
                    {nftContent.collectionName}
                  </Text>
                </View>

                <Text style={styles.collectionId}>
                  {nftContent.collectionName} {nftContent.collectionId}
                </Text>
              </View>
              <View style={[styles.nftCollection, { marginBottom: 0 }]}>
                <View style={styles.collectionPriceContainer}>
                  <Text style={styles.price}>Price</Text>
                  <Text style={styles.amount}>{nftContent.price} APT</Text>
                </View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Buy now</Text>
                </View>
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.ATTACHED_NFT:
      const attachedNftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={images.feedImage5}
                  style={[
                    styles.imageStyle,
                    { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.attachedNftContainer}>
                <View style={styles.collectionInfo}>
                  <Image source={images.collectionImage} />
                  <Text style={styles.collectionName}>
                    {attachedNftContent.collectionName}
                  </Text>
                </View>

                <Text style={styles.collectionId}>
                  {attachedNftContent.collectionName}
                  {attachedNftContent.collectionId}
                </Text>
              </View>

              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.SWAP_OPTION_INCLUDED:
      const swapContent = data.content as SWAP_OPTION_INCLUDED;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <Text style={styles.message}>
                {swapContent.message}
                <Text style={styles.swapTextTag}>
                  {' '}
                  ${swapContent.messageTag}
                </Text>
              </Text>
              <View
                style={[
                  styles.SwapContainer,
                  { marginBottom: 0, backgroundColor: 'transparent' },
                ]}
              >
                <View style={styles.swapDescription}>
                  <View style={styles.swapImageContainer}>
                    <APT />
                    <Text style={styles.swapLeadingText}>APT</Text>
                  </View>
                  <Text style={styles.swapPriceTag}>${swapContent.price}</Text>
                  <Text style={styles.priceFeed}>
                    Price feed{' '}
                    <Text style={styles.priceFeedType}>Liquidswap</Text>
                  </Text>
                </View>

                <View style={styles.button}>
                  <Text style={styles.buttonText}>Swap APT</Text>
                </View>
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.FLOOR_PRICE_INCLUDED:
      const floorPriceContent = data.content as FLOOR_PRICE_INCLUDED;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <Text style={styles.message}>
                {floorPriceContent.message}
                <Text style={styles.swapTextTag}>
                  {' '}
                  ${floorPriceContent.messageTag}
                </Text>
              </Text>
              <View style={[styles.SwapContainer, { marginBottom: 0 }]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: size.getHeightSize(8),
                    // gap: size.getWidthSize(8),
                  }}
                >
                  <View style={styles.swapImageContainer}>
                    <Text
                      style={[
                        styles.floorPrice,
                        { marginRight: size.getWidthSize(8) },
                      ]}
                    >
                      Floor price{' '}
                      <Text style={styles.floorAmount}>
                        {floorPriceContent.amount} APT
                      </Text>
                    </Text>
                    <APTMonkey />
                    <Text
                      numberOfLines={1}
                      style={[styles.swapLeadingText, { flex: 1 }]}
                    >
                      {floorPriceContent.collectionName}
                    </Text>
                  </View>
                </View>
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
            </View>
          </View>
        </>
      );
      break;
  }
  return <>{content}</>;
};

export default SinglePostContent;
const styles = StyleSheet.create(singlePostStyles);
