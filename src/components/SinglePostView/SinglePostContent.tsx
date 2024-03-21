import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { useRef } from 'react';
import { sizes } from '../../utils';
import { fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import ParsedText from 'react-native-parsed-text';
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
import PostActions from '../Feed/PostActions';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
import { PostData } from '../../controller/createPost';
import { Video, ResizeMode } from 'expo-av';
import { getPostTime } from '../../utils/helperFunction';
import { useAppSelector } from '../../controller/hooks';

const SinglePostContent = ({ data }: { data: PostData }) => {
  const videoRef = useRef(null);
  const userId = useAppSelector((state) => state.USER.UserData?._id);
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  function handleNamePress(name: string) {
    console.log(`Name ${name} was pressed!`);
  }

  function handleHashTagPress(hashtag: string) {
    console.log(`Hashtag ${hashtag} was pressed!`);
  }

  function handleMoneySignPress(moneySign: string) {
    console.log(`Money sign ${moneySign} was pressed!`);
  }
  const myPost = userId == data?.userId;
  const type_of_post =
    data?.videoUrls[0] && data?.description
      ? FeedContent.MESSAGE_VIDEO
      : data?.imageUrls[0] && data?.description
      ? FeedContent.MESSAGE_IMAGE
      : data?.videoUrls[0]
      ? FeedContent.VIDEO_ONLY
      : data?.imageUrls[0]
      ? FeedContent.IMAGE_ONLY
      : data?.nftImageUrl && data?.sellNFTPrice
      ? FeedContent.NFT_FOR_SALE
      : data?.nftImageUrl && !data?.sellNFTPrice
      ? FeedContent.ATTACHED_NFT
      : data?.description
      ? FeedContent.MESSAGE_ONLY
      : FeedContent.EMPTY;

  const userPost: PostData = data;
  const timepost = getPostTime(data?.createdAt);
  let content;
  switch (type_of_post) {
    case FeedContent.MESSAGE_ONLY:
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                wallet={userPost?.customer?.aptosWallet}
                timepost={timepost}
                postId={userPost?._id}
                userId={userPost?.customer._id}
                profileImageUri={userPost?.customer.profileImage}
                myPost={myPost}
              />

              <ParsedText
                parse={[
                  {
                    pattern: /@(\w+)/,
                    style: styles.tags,
                    onPress: handleNamePress,
                  },
                  {
                    pattern: /#(\w+)/,
                    style: styles.tags,
                    onPress: handleHashTagPress,
                  },
                  {
                    pattern: /\$(\w+)/,
                    style: styles.tags,
                    onPress: handleMoneySignPress,
                  },
                ]}
                style={styles.message}
              >
                {userPost?.description}
              </ParsedText>

              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost?._id}
                userId={userPost?.customer?._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.MESSAGE_IMAGE:
      // userPost.content = data.content as Message_Image;

      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timepost}
                wallet={userPost?.customer?.aptosWallet}
                postId={userPost?._id}
                userId={userPost?.customer?._id}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
              />

              <ParsedText
                parse={[
                  {
                    pattern: /@(\w+)/,
                    style: styles.tags,
                    onPress: handleNamePress,
                  },
                  {
                    pattern: /#(\w+)/,
                    style: styles.tags,
                    onPress: handleHashTagPress,
                  },
                  {
                    pattern: /\$(\w+)/,
                    style: styles.tags,
                    onPress: handleMoneySignPress,
                  },
                ]}
                style={styles.message}
              >
                {userPost?.description}
              </ParsedText>

              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={{
                    uri: userPost.imageUrls[0],
                  }}
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: size.getHeightSize(200),
                    borderRadius: 8,
                  }}
                  resizeMode="cover"
                  loadingIndicatorSource={images.Aptomingos}
                />
              </View>
              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    //  case FeedContent.GIF:
    // userPost.content = data.content as GIF;

    // content = (
    //   <>
    //     <View style={styles.feedContainer}>
    //       <View style={[styles.subHeading, { marginLeft: 0 }]}>
    //         <SinglePostHeader
    //           username={userPost.username}
    //           nickname={userPost.nickname}
    //           timepost={userPost.timepost}
    //         />

    //         <View
    //           style={[
    //             styles.mediaContainer,
    //             {
    //               marginBottom: size.getHeightSize(0),
    //             },
    //           ]}
    //         >
    //           <Image
    //             source={images.feedImage2}
    //             style={styles.imageStyle}
    //             resizeMode="cover"
    //           />
    //         </View>
    //         <PostActions
    //           noOfComments={userPost.comments}
    //           noOfLikes={userPost.like}
    //           noOfRetweet={userPost.retweet}
    //         />
    //       </View>
    //     </View>
    //   </>
    // );
    // break;
    case FeedContent.MESSAGE_VIDEO:
      //userPost.content = data.content as VIDEO;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                timepost={timepost}
                wallet={userPost?.customer?.aptosWallet}
                postId={userPost._id}
                userId={userPost.customer._id}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
              />
              <ParsedText
                parse={[
                  {
                    pattern: /@(\w+)/,
                    style: styles.tags,
                    onPress: handleNamePress,
                  },
                  {
                    pattern: /#(\w+)/,
                    style: styles.tags,
                    onPress: handleHashTagPress,
                  },
                  {
                    pattern: /\$(\w+)/,
                    style: styles.tags,
                    onPress: handleMoneySignPress,
                  },
                ]}
                style={styles.message}
              >
                {userPost?.description}
              </ParsedText>
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Video
                  // source={{
                  //   uri: userPost.videoUrl[0]
                  //     ? userPost.videoUrl[0]
                  //     : Image.resolveAssetSource(images.Aptomingos).uri,
                  // }}
                  source={{
                    uri: userPost.videoUrls[0],
                  }}
                  ref={videoRef}
                  style={{
                    width: '100%',
                    height: size.heightSize(347),
                  }}
                  resizeMode={ResizeMode.COVER}
                  shouldPlay={true}
                />
              </View>
              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.VIDEO_ONLY:
      //userPost.content = data.content as VIDEO;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                wallet={userPost?.customer?.aptosWallet}
                timepost={timepost}
                postId={userPost._id}
                userId={userPost.customer._id}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
              />
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Video
                  // source={{
                  //   uri: userPost.videoUrl[0]
                  //     ? userPost.videoUrl[0]
                  //     : Image.resolveAssetSource(images.Aptomingos).uri,
                  // }}
                  source={{
                    uri: userPost.videoUrls[0],
                  }}
                  ref={videoRef}
                  style={styles.imageStyle}
                  resizeMode={ResizeMode.CONTAIN}
                />
              </View>
              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.IMAGE_ONLY:
      //userPost.content = data.content as VIDEO;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                timepost={timepost}
                wallet={userPost?.customer?.aptosWallet}
                postId={userPost._id}
                userId={userPost.customer._id}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
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
                  source={{
                    uri: userPost.imageUrls[0]
                      ? userPost.imageUrls[0]
                      : Image.resolveAssetSource(images.Aptomingos).uri,
                  }}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.NFT_FOR_SALE:
      //const nftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                timepost={timepost}
                postId={userPost._id}
                wallet={userPost?.customer?.aptosWallet}
                userId={userPost.customer._id}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
              />
              <Text style={styles.message}>{userPost.description}</Text>
              <View style={[styles.mediaContainer]}>
                <Image
                  source={{
                    uri: userPost.nftImageUrl,
                  }}
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: size.getHeightSize(200),
                  }}
                  resizeMode="cover"
                  //loadingIndicatorSource={images.Aptomingos}
                />
              </View>
              <View style={styles.nftcollectionContainer}>
                <View style={styles.collectionInfo}>
                  <Image source={{ uri: userPost.nftImageUrl }} />
                  <Text style={styles.collectionName}>
                    {userPost.nftCollection}
                  </Text>
                </View>

                <Text style={styles.collectionId}>
                  {userPost.nftCollection} {userPost.nftTokenId}
                </Text>
              </View>
              <View style={[styles.nftCollection, { marginBottom: 0 }]}>
                <View style={styles.collectionPriceContainer}>
                  <Text style={styles.price}>Price</Text>
                  <Text style={styles.amount}>{userPost.sellNFTPrice} APT</Text>
                </View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Buy now</Text>
                </View>
              </View>
              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.ATTACHED_NFT:
      //const attachedNftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <SinglePostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                timepost={timepost}
                postId={userPost._id}
                userId={userPost.customer._id}
                wallet={userPost?.customer?.aptosWallet}
                profileImageUri={userPost.customer.profileImage}
                myPost={myPost}
              />
              <Text style={styles.message}>{userPost.description}</Text>
              <View
                style={[
                  styles.mediaContainer,
                  {
                    marginBottom: size.getHeightSize(0),
                  },
                ]}
              >
                <Image
                  source={{
                    uri: userPost.nftImageUrl,
                  }}
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: size.getHeightSize(200),
                  }}
                  resizeMode="cover"
                  //loadingIndicatorSource={images.Aptomingos}
                />
              </View>
              <View style={styles.attachedNftContainer}>
                <View style={styles.collectionInfo}>
                  <Image source={{ uri: userPost.nftImageUrl }} />
                  <Text style={styles.collectionName}>
                    {userPost.nftCollection}
                  </Text>
                </View>

                <Text style={styles.collectionId}>
                  {userPost.nftCollection}
                  {userPost.nftTokenId}
                </Text>
              </View>

              <PostActions
                noOfComments={userPost.comments.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
                nickname={userPost.customer.nickname}
                pfp={userPost.customer.profileImage}
                username={userPost.customer.username}
                wallet={userPost.customer.aptosWallet}
                currentScreen={'SinglePost'}
              />
            </View>
          </View>
        </>
      );
      break;
    // case FeedContent.SWAP_OPTION_INCLUDED:
    //   const swapContent = data.content as SWAP_OPTION_INCLUDED;
    //   content = (
    //     <>
    //       <View style={styles.feedContainer}>
    //         <View style={[styles.subHeading, { marginLeft: 0 }]}>
    //           <SinglePostHeader
    //             username={userPost.username}
    //             nickname={userPost.nickname}
    //             timepost={userPost.timepost}
    //           />
    //           <Text style={styles.message}>
    //             {swapContent.message}
    //             <Text style={styles.swapTextTag}>
    //               {' '}
    //               ${swapContent.messageTag}
    //             </Text>
    //           </Text>
    //           <View
    //             style={[
    //               styles.SwapContainer,
    //               { marginBottom: 0, backgroundColor: 'transparent' },
    //             ]}
    //           >
    //             <View style={styles.swapDescription}>
    //               <View style={styles.swapImageContainer}>
    //                 <APT />
    //                 <Text style={styles.swapLeadingText}>APT</Text>
    //               </View>
    //               <Text style={styles.swapPriceTag}>${swapContent.price}</Text>
    //               <Text style={styles.priceFeed}>
    //                 Price feed{' '}
    //                 <Text style={styles.priceFeedType}>Liquidswap</Text>
    //               </Text>
    //             </View>

    //             <View style={styles.button}>
    //               <Text style={styles.buttonText}>Swap APT</Text>
    //             </View>
    //           </View>
    //           <PostActions
    //             noOfComments={userPost.comments}
    //             noOfLikes={userPost.like}
    //             noOfRetweet={userPost.retweet}
    //           />
    //         </View>
    //       </View>
    //     </>
    //   );
    //   break;
    //  case FeedContent.FLOOR_PRICE_INCLUDED:
    //   const floorPriceContent = data.content as FLOOR_PRICE_INCLUDED;
    //   content = (
    //     <>
    //       <View style={styles.feedContainer}>
    //         <View style={[styles.subHeading, { marginLeft: 0 }]}>
    //           <SinglePostHeader
    //             username={userPost.username}
    //             nickname={userPost.nickname}
    //             timepost={userPost.timepost}
    //           />
    //           <Text style={styles.message}>
    //             {floorPriceContent.message}
    //             <Text style={styles.swapTextTag}>
    //               {' '}
    //               ${floorPriceContent.messageTag}
    //             </Text>
    //           </Text>
    //           <View style={[styles.SwapContainer, { marginBottom: 0 }]}>
    //             <View
    //               style={{
    //                 flexDirection: 'row',
    //                 alignItems: 'center',
    //                 paddingVertical: size.getHeightSize(8),
    //                 // gap: size.getWidthSize(8),
    //               }}
    //             >
    //               <View style={styles.swapImageContainer}>
    //                 <Text
    //                   style={[
    //                     styles.floorPrice,
    //                     { marginRight: size.getWidthSize(8) },
    //                   ]}
    //                 >
    //                   Floor price{' '}
    //                   <Text style={styles.floorAmount}>
    //                     {floorPriceContent.amount} APT
    //                   </Text>
    //                 </Text>
    //                 <APTMonkey />
    //                 <Text
    //                   numberOfLines={1}
    //                   style={[styles.swapLeadingText, { flex: 1 }]}
    //                 >
    //                   {floorPriceContent.collectionName}
    //                 </Text>
    //               </View>
    //             </View>
    //           </View>
    //           <PostActions
    //             noOfComments={userPost.comments}
    //             noOfLikes={userPost.like}
    //             noOfRetweet={userPost.retweet}
    //           />
    //         </View>
    //       </View>
    //     </>
    //   );
    //   break;
  }
  return <>{content}</>;
};

export default SinglePostContent;
const styles = StyleSheet.create(singlePostStyles);
