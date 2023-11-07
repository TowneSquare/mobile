import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { memo } from 'react';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import Reposted from './Reposted';
import APT from '../../../assets/images/svg/APT';
import { Avatar } from 'react-native-elements';
import ProfilePicture from './SwipeableProfilePicture';
import { useNavigation } from '@react-navigation/native';
import {
  UserPost,
  FeedContent,
  SWAP_OPTION_INCLUDED,
  FLOOR_PRICE_INCLUDED,
} from '../../models';
const size = new sizes(height, width);
import PostHeader from './PostHeader';
import {
  Message_Only,
  Message_Image,
  GIF,
  Message_External_Link,
  VIDEO,
  NFT_FOR_SALE,
} from '../../models';
import PostActions from './PostActions';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
import { feedStyle } from './FeedsStyles';
interface NavigationParameter {
  username: string;
  nickname: string;
}
interface Props {
  myPost?: boolean;
  data: UserPost;
  shouldPFPSwipe: boolean;
}
const ForYou = memo(({ data, myPost, shouldPFPSwipe }: Props) => {
  const navigation = useNavigation();

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const handleNavigation = () => {
    const params: NavigationParameter = {
      username: data.username,
      nickname: data.nickname,
    };
    navigation.navigate('SinglePost' as any, params);
  };

  let content;

  const type_of_post = data.type;
  const userPost = data;
  switch (type_of_post) {
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
                myPost={myPost ? myPost : false}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {userPost.content.message}
              </Text>

              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              {/* <ShowThread /> */}
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
                myPost={myPost ? myPost : false}
              />

              <Text onPress={handleNavigation} style={styles.message}>
                {userPost.content.message}
              </Text>

              <Pressable
                onPress={() => navigation.navigate('ViewImageScreen' as never)}
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                <Image
                  source={images.feedImage1}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </Pressable>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              {/* <ShowThread /> */}
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
                onPress={handleNavigation}
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
                myPost={myPost ? myPost : false}
              />

              <View
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
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
              {/* <ShowThread /> */}
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
                onPress={handleNavigation}
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
                myPost={myPost ? myPost : false}
              />

              <Pressable
                onPress={() => navigation.navigate('VideoPlayer' as never)}
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                <Image
                  source={images.feedImage3}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </Pressable>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              {/* <ShowThread /> */}
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
                myPost={myPost ? myPost : false}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {linkContent.message}
              </Text>
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
                    {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      width: '100%',
                    },
                  ]}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.linkDescriptionContainer}>
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
              {/* <ShowThread /> */}
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
                myPost={myPost ? myPost : false}
              />
              <Text onPress={handleNavigation} style={styles.message}>
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
                  style={[
                    styles.imageStyle,
                    { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
                  ]}
                  resizeMode="cover"
                />
                <View style={[styles.nftcollectionContainer, {}]}>
                  <View style={styles.collectionInfo}>
                    <Avatar
                      size={size.getHeightSize(16)}
                      rounded
                      source={images.collectionImage}
                    />
                    <Text style={styles.collectionName}>
                      {nftContent.collectionName}
                    </Text>
                  </View>

                  <Text style={styles.collectionId}>
                    {nftContent.collectionName} {nftContent.collectionId}
                  </Text>
                </View>
              </View>

              <View style={styles.nftCollection}>
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
            <ProfilePicture swipeable={shouldPFPSwipe} />
            <View style={styles.subHeading}>
              <PostHeader
                onPress={handleNavigation}
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
                myPost={myPost ? myPost : false}
              />
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
                  style={[styles.imageStyle]}
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
                marginTop
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              {/* <ShowThread /> */}
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
                myPost={myPost ? myPost : false}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {swapContent.message}
                <Text style={styles.swapTextTag}>
                  {' '}
                  ${swapContent.messageTag}
                </Text>
              </Text>
              <View style={styles.SwapContainer}>
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
              {/* <ShowThread /> */}
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
                myPost={myPost ? myPost : false}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {floorPriceContent.message}
                <Text style={styles.swapTextTag}>
                  {' '}
                  ${floorPriceContent.messageTag}
                </Text>
              </Text>
              <View style={styles.floorPriceContainer}>
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
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              {/* <ShowThread /> */}
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.REPOST:
      content = <Reposted data={data} shouldPFPSwipe={shouldPFPSwipe} />;
      break;
  }
  return <>{content}</>;
});

export default ForYou;
const styles = StyleSheet.create(feedStyle);
const communityStyles = StyleSheet.create({
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
