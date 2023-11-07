import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
const { height, width } = Dimensions.get('window');
import Queen from '../../../assets/images/svg/Queen';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
import APT from '../../../assets//images/svg/APT';
import PostHeader from './PostHeader';
import PostActions from './PostActions';
import { feedStyle } from './FeedsStyles';
import { useFonts } from 'expo-font';
import RepostedHeader from './RepostedHeader';
import ProfilePicture from './SwipeableProfilePicture';
import {
  UserPost,
  FeedContent,
  SWAP_OPTION_INCLUDED,
  FLOOR_PRICE_INCLUDED,
  Message_Only,
  Message_Image,
  GIF,
  Message_External_Link,
  VIDEO,
  NFT_FOR_SALE,
  Repost,
  ATTACHED_NFT,
} from '../../models';
import { Avatar } from 'react-native-elements';
const size = new sizes(height, width);

const Reposted = ({
  data,
  shouldPFPSwipe,
}: {
  data: UserPost;
  shouldPFPSwipe: boolean;
}) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const Header = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: size.getWidthSize(12),
            marginTop: size.getHeightSize(16),
            marginBottom: size.getHeightSize(8),
            gap: size.getWidthSize(8),
          }}
        >
          <Avatar
            source={images.repostImage}
            rounded
            size={size.getHeightSize(24)}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: size.getWidthSize(4),
              width: size.getWidthSize(214),
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: size.fontSize(16),
                color: appColor.kTextColor,
                fontFamily: 'Outfit-Medium',
                lineHeight: size.getHeightSize(21),
                maxWidth: size.getWidthSize(74),
              }}
            >
              {data.username}
            </Text>
            <Queen />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Regular',
                maxWidth: size.getWidthSize(67),
              }}
            >
              @{data.nickname}
            </Text>
            <Text
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Bold',
              }}
            >
              •
            </Text>
            <Text
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Regular',
              }}
            >
              {data.timepost}
            </Text>
          </View>
        </View>
      </>
    );
  };
  let content;
  const type_of_post = data.content as Repost;
  const userPost = data;
  switch (type_of_post.contentTypeOfRepost) {
    case FeedContent.MESSAGE_ONLY:
      userPost.content = data.content as Message_Only;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text
                  style={[
                    styles.message,
                    {
                      marginHorizontal: size.getWidthSize(16),
                      marginBottom: size.getHeightSize(8),
                    },
                  ]}
                >
                  {userPost.content.message}
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
    case FeedContent.MESSAGE_IMAGE:
      userPost.content = data.content as Message_Image;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text
                  style={[
                    styles.message,
                    {
                      marginHorizontal: size.getWidthSize(16),
                    },
                  ]}
                >
                  {userPost.content.message}
                </Text>
                <View style={[styles.mediaContainer, { marginBottom: 0 }]}>
                  <Image
                    source={images.feedImage1}
                    style={[repostStyles.repostImage]}
                    resizeMode="cover"
                  />
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
    case FeedContent.GIF:
      userPost.content = data.content as GIF;

      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <View style={[styles.mediaContainer, { marginBottom: 0 }]}>
                  <Image
                    source={images.feedImage2}
                    style={[repostStyles.repostImage]}
                    resizeMode="cover"
                  />
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
    case FeedContent.VIDEO:
      userPost.content = data.content as VIDEO;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <View
                  style={[
                    styles.mediaContainer,
                    { marginBottom: 0, borderTopRightRadius: 0 },
                  ]}
                >
                  <Image
                    source={images.feedImage3}
                    style={[repostStyles.repostImage]}
                    resizeMode="cover"
                  />
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
    case FeedContent.message_EXTERNAL_LINK:
      const linkContent = data.content as Message_External_Link;

      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text style={[styles.message, repostStyles.repostText]}>
                  {linkContent.message}
                </Text>
                <Text style={[styles.link, repostStyles.repostLink]}>
                  {linkContent.link}
                </Text>
                <View
                  style={[
                    styles.mediaContainer,
                    repostStyles.repostMediaContainer,
                  ]}
                >
                  <Image
                    source={images.feedImageLink}
                    style={[styles.imageStyle, { borderRadius: 0 }]}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={[
                    styles.linkDescriptionContainer,
                    { marginBottom: size.getHeightSize(0) },
                  ]}
                >
                  <Text style={styles.linkTitle}>
                    {linkContent.linkDescription}
                  </Text>
                  <Text style={styles.linkSubTitle}>
                    {linkContent.linkSubTitle}
                  </Text>
                  <Text style={styles.linkText}>{linkContent.url}</Text>
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

    case FeedContent.NFT_FOR_SALE:
      const nftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text style={[styles.message, repostStyles.repostText]}>
                  {nftContent.message}
                </Text>
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
                    style={[repostStyles.repostImage]}
                    resizeMode="cover"
                  />
                  <View style={[styles.nftcollectionContainer]}>
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
      const attachedNftContent = data.content as ATTACHED_NFT;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <View
                  style={[
                    styles.mediaContainer,
                    {
                      marginBottom: size.getHeightSize(8),
                    },
                  ]}
                >
                  <Image
                    source={images.feedImage5}
                    style={[styles.imageStyle, { borderRadius: 0 }]}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={[
                    styles.attachedNftContainer,
                    { marginBottom: size.getHeightSize(8) },
                  ]}
                >
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
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text style={[styles.message, repostStyles.repostText]}>
                  {swapContent.message}
                  <Text style={styles.swapTextTag}>
                    {' '}
                    ${swapContent.messageTag}
                  </Text>
                </Text>
                <View style={repostStyles.swapContainer}>
                  <View style={styles.swapDescription}>
                    <View style={styles.swapImageContainer}>
                      <APT />
                      <Text style={styles.swapLeadingText}>Aptos APT</Text>
                    </View>
                    <Text style={styles.swapPriceTag}>
                      ${swapContent.price}
                    </Text>
                    <Text style={styles.priceFeed}>
                      Price feed{' '}
                      <Text style={styles.priceFeedType}>Liquidswap</Text>
                    </Text>
                  </View>

                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Swap APT</Text>
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
    case FeedContent.FLOOR_PRICE_INCLUDED:
      const floorPriceContent = data.content as FLOOR_PRICE_INCLUDED;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <RepostedHeader />
              <View style={repostStyles.repostContainer}>
                <Header />
                <Text style={[styles.message, repostStyles.repostText]}>
                  {floorPriceContent.message}
                  <Text style={styles.swapTextTag}>
                    {' '}
                    ${floorPriceContent.messageTag}
                  </Text>
                </Text>
                <View
                  style={[
                    styles.floorPriceContainer,
                    {
                      borderRadius: 0,
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                    },
                  ]}
                >
                  <Text style={[styles.floorPrice]}>
                    Floor price{' '}
                    <Text style={styles.floorAmount}>
                      {floorPriceContent.amount} APT
                    </Text>
                  </Text>
                  <APTMonkey
                    style={{
                      marginRight: size.getWidthSize(4),
                    }}
                  />
                  <Text numberOfLines={1} style={styles.swapLeadingText}>
                    {floorPriceContent.collectionName}
                  </Text>
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

export default Reposted;
const styles = StyleSheet.create(feedStyle);
const repostStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(6),
    alignItems: 'center',
  },
  postedIn: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Regular',
  },
  communityName: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.primaryLight,
    fontFamily: 'Outfit-SemiBold',
  },
  repostContainer: {
    borderWidth: size.getWidthSize(0.5),
    borderColor: appColor.grayLight,
    borderRadius: 8,
    marginBottom: size.getHeightSize(8),
  },
  repostText: {
    marginHorizontal: size.getWidthSize(16),
  },
  repostLink: {
    marginHorizontal: size.getWidthSize(8),
  },
  repostMediaContainer: {
    marginBottom: size.getHeightSize(0),
  },
  swapContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: appColor.kGrayLight3,
    borderRadius: 8,
    marginTop: size.getHeightSize(8),
    alignItems: 'center',
    paddingHorizontal: size.getWidthSize(16),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  repostImage: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: '100%',
    maxHeight: size.getHeightSize(400),
  },
});
