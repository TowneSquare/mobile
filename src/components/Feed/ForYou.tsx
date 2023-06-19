import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import FeedLink from '../../../assets/images/svg/FeedLink';
import Reposted from './Reposted';
import APT from '../../../assets/images/svg/APT';
import {
  UserPost,
  FeedContent,
  SWAP_OPTION_INCLUDED,
  FLOOR_PRICE_INCLUDED,
} from '../../models';
const size = new sizes(height, width);
import PostedIn from './PostedIn';
import AvatarFeed from '../../../assets/images/svg/AvatarFeed';
import ImageFeed2 from '../../../assets/images/svg/ImageFeed2';
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
import ShowThread from './ShowThread';
const ForYou = memo(({ data }: { data: UserPost }) => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  let content;
  const type_of_post = data.type;
  const userPost = data;
  switch (type_of_post) {
    case FeedContent.MESSAGE_ONLY:
      userPost.content = data.content as Message_Only;
      content = (
        <>
          <View style={styles.feedContainer}>
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
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
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <Text style={styles.message}>{userPost.content.message}</Text>

              <View style={styles.mediaContainer}>
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
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <View style={styles.mediaContainer}>
                <Image
                  source={images.feedImage2}
                  style={styles.imageStyle}
                  resizeMode="stretch"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />

              <View style={styles.mediaContainer}>
                <Image
                  source={images.feedImage3}
                  style={styles.imageStyle}
                  resizeMode="stretch"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
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
                  resizeMode="stretch"
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
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <Text style={styles.message}>{nftContent.message}</Text>
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                    height: size.getHeightSize(275),
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost.username}
                nickname={userPost.nickname}
                timepost={userPost.timepost}
              />
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                    height: size.getHeightSize(275),
                  },
                ]}
              >
                <Image
                  source={images.feedImage5}
                  style={[
                    styles.imageStyle,
                    { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
                  ]}
                  resizeMode="stretch"
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
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
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
              <View style={styles.SwapContainer}>
                <View style={styles.swapDescription}>
                  <View style={styles.swapImageContainer}>
                    <APT />
                    <Text style={styles.swapLeadingText}>Aptos APT</Text>
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
              <ShowThread />
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
            <AvatarFeed />
            <View style={styles.subHeading}>
              <PostHeader
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
              <View style={styles.SwapContainer}>
                <View style={styles.swapDescription}>
                  <View style={styles.swapImageContainer}>
                    <APTMonkey />
                    <Text style={styles.swapLeadingText}>
                      {floorPriceContent.collectionName}
                    </Text>
                  </View>
                  <Text style={styles.floorPrice}>
                    Floor price{' '}
                    <Text style={styles.floorAmount}>
                      {floorPriceContent.amount} APT
                    </Text>
                  </Text>
                </View>
              </View>
              <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              />
              <ShowThread />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.REPOST:
      content = <Reposted data={data} />;
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
});
