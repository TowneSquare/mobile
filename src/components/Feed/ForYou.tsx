import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { memo, useRef } from "react";
import { sizes } from "../../utils";
import { appColor, fonts, images } from "../../constants";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
import Reposted from "./Reposted";
import APT from "../../../assets/images/svg/APT";
import { Avatar } from "react-native-elements";
import ProfilePicture from "./SwipeableProfilePicture";
import { useNavigation } from "@react-navigation/native";
import {
  UserPost,
  FeedContent,
  SWAP_OPTION_INCLUDED,
  FLOOR_PRICE_INCLUDED,
} from "../../models";
const size = new sizes(height, width);
import PostHeader from "./PostHeader";
import {
  Message_Only,
  Message_Image,
  GIF,
  Message_External_Link,
  VIDEO,
  NFT_FOR_SALE,
} from "../../models";
import PostActions from "./PostActions";
import APTMonkey from "../../../assets/images/svg/APTMonkey";
import { feedStyle } from "./FeedsStyles";
import { PostData } from "../../controller/createPost";
import { Video, ResizeMode } from "expo-av";
import { UserCommentData } from "../../controller/UserController";
import { useAppSelector } from "../../controller/hooks";
import { getPostTime } from "../../utils/helperFunction";
// interface NavigationParameter {
//   username: string;
//   nickname: string;
// }
interface Props {
  data: PostData;
  shouldPFPSwipe: boolean;
}
const ForYou = memo(({ data, shouldPFPSwipe }: Props) => {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const userId = useAppSelector((state) => state.USER.UserData._id);
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const handleNavigation = () => {
    const params: PostData = data;
    navigation.navigate("SinglePost" as any, params);
  };
  const myPost = userId == data?.customer?._id;
  const timePost = getPostTime(data.createdAt);
  let content;

  const type_of_post = data?.repost
    ? FeedContent.REPOST
    : data?.videoUrls[0] && data?.description
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
  const userPost = data;
  switch (type_of_post) {
    case FeedContent.MESSAGE_ONLY:
      // userPost.content = data.content as Message_Only;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture
              profileImageUri={userPost.customer.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              <PostHeader
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {userPost?.description}
              </Text>

              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              {/* <ShowThread /> */}
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
            <ProfilePicture
              profileImageUri={userPost?.customer?.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={[styles.subHeading, { marginLeft: 0 }]}>
              <PostHeader
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
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
              />
            </View>
          </View>
        </>
      );
      break;
    case FeedContent.MESSAGE_IMAGE:
      //userPost.content = data.content as Message_Image;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture
              profileImageUri={userPost?.customer?.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              {/* <PostHeader
                username={userPost.customer.username}
                nickname={userPost.customer.nickname}
                timepost={userPost.timepost}
                myPost={myPost ? myPost : false}
              /> */}

              <PostHeader
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
              />

              <Text onPress={handleNavigation} style={styles.message}>
                {userPost?.description}
              </Text>

              <Pressable
                onPress={() => navigation.navigate("ViewImageScreen" as never)}
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                {/* <Image
                  source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                      ? userPost.imageUrl[0]
                      : Image.resolveAssetSource(images.Aptomingos).uri,
                  }}
                  style={styles.imageStyle}
                  resizeMode="contain"
                /> */}
                <Image
                  source={{
                    uri: userPost.imageUrls[0]
                      ? userPost.imageUrls[0]
                      : Image.resolveAssetSource(images.Aptomingos).uri,
                  }}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </Pressable>
              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
              />

              {/* <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              /> */}
              {/* <ShowThread /> */}
            </View>
          </View>
        </>
      );
      break;
    // case FeedContent.GIF:
    // userPost.content = data.content as GIF;
    // content = (
    //   <>
    //     <View style={styles.feedContainer}>
    //       <ProfilePicture swipeable={shouldPFPSwipe} />
    //       <View style={styles.subHeading}>
    //         <PostHeader
    //           onPress={handleNavigation}
    //           username={userPost.username}
    //           nickname={userPost.nickname}
    //           timepost={userPost.timepost}
    //           myPost={myPost ? myPost : false}
    //         />

    //         <View
    //           style={[
    //             styles.mediaContainer,
    //             { marginBottom: size.getHeightSize(0) },
    //           ]}
    //         >
    //           <Image
    //             source={images.feedImage2}
    //             style={styles.imageStyle}
    //             resizeMode="cover"
    //           />
    //         </View>
    //         {/* <PostActions
    //          noOfComments={userPost.comments.length}
    //           noOfLikes={userPost.likes.length}
    //           noOfRetweet={userPost.retweet.length}
    //         /> */}
    //         <PostActions
    //           noOfComments={userPost.comments}
    //           noOfLikes={userPost.like}
    //           noOfRetweet={userPost.retweet}
    //         />
    //         {/* <ShowThread /> */}
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
            <ProfilePicture
              profileImageUri={userPost.customer.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              <PostHeader
                onPress={handleNavigation}
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
              />

              <Text onPress={handleNavigation} style={styles.message}>
                {userPost?.description}
              </Text>

              <Pressable
                onPress={() =>
                  navigation.navigate("VideoPlayer" as any, {
                    videoUrl: data.videoUrls[0],
                  })
                }
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                <Video
                  // source={{
                  //   uri: userPost.videoUrl[0]
                  //     ? userPost.videoUrl[0]
                  //     : Image.resolveAssetSource(images.Aptomingos).uri,
                  // }}
                  source={{
                    uri: data.videoUrls[0],
                  }}
                  ref={videoRef}
                  useNativeControls
                  style={communityStyles.video}
                  resizeMode={ResizeMode.CONTAIN}
                  shouldPlay={true}
                />
                {/* <Image
                source={images.feedImage2}
                 style={styles.imageStyle}
                 resizeMode="cover"
               /> */}
              </Pressable>
              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              {/* <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              /> */}
              {/* <ShowThread /> */}
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
            <ProfilePicture
              profileImageUri={userPost.customer.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              <PostHeader
                onPress={handleNavigation}
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
              />

              <Pressable
                onPress={() => navigation.navigate("VideoPlayer" as never)}
                style={[
                  styles.mediaContainer,
                  { marginBottom: size.getHeightSize(0) },
                ]}
              >
                {/* <Image
                  source={images.feedImage3}
                  style={styles.imageStyle}
                  resizeMode="cover"
                /> */}
                <View style={communityStyles.container2}>
                  <Video
                    // source={{
                    //   uri: userPost.videoUrl[0]
                    //     ? userPost.videoUrl[0]
                    //     : Image.resolveAssetSource(images.Aptomingos).uri,
                    // }}
                    source={{
                      uri: data.videoUrls[0],
                    }}
                    ref={videoRef}
                    style={communityStyles.video}
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    shouldPlay
                  />
                </View>
              </Pressable>
              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              {/* <PostActions
                noOfComments={userPost.comments}
                noOfLikes={userPost.like}
                noOfRetweet={userPost.retweet}
              /> */}
              {/* <ShowThread /> */}
            </View>
          </View>
        </>
      );
      break;
    // case FeedContent.message_EXTERNAL_LINK:
    // const linkContent = data.content as Message_External_Link;
    // content = (
    //   <>
    //     <View style={styles.feedContainer}>
    //       <ProfilePicture swipeable={shouldPFPSwipe} />
    //       <View style={styles.subHeading}>
    //         {/* <PostHeader
    //           username={userPost.customer.username}
    //           nickname={userPost.customer.nickname}
    //           timepost={userPost.timepost}
    //           myPost={myPost ? myPost : false}
    //         /> */}
    //         <PostHeader
    //           username={userPost.username}
    //           nickname={userPost.nickname}
    //           timepost={userPost.timepost}
    //           myPost={myPost ? myPost : false}
    //         />
    //         <Text onPress={handleNavigation} style={styles.message}>
    //           {linkContent.message}
    //         </Text>
    //         <Text style={styles.link}>{linkContent.link}</Text>
    //         <View
    //           style={[
    //             styles.mediaContainer,
    //             { marginBottom: size.getHeightSize(0) },
    //           ]}
    //         >
    //           <Image
    //             source={images.feedImageLink}
    //             style={[
    //               styles.imageStyle,
    //               {
    //                 borderBottomLeftRadius: 0,
    //                 borderBottomRightRadius: 0,
    //                 width: "100%",
    //               },
    //             ]}
    //             resizeMode="cover"
    //           />
    //         </View>
    //         <View style={styles.linkDescriptionContainer}>
    //           <Text style={styles.linkTitle}>
    //             {linkContent.linkDescription}
    //           </Text>
    //           <Text style={styles.linkSubTitle}>
    //             {linkContent.linkSubTitle}
    //           </Text>
    //           <Text style={styles.linkText}>{linkContent.url}</Text>
    //         </View>
    //         <PostActions
    //           noOfComments={userPost.comments}
    //           noOfLikes={userPost.like}
    //           noOfRetweet={userPost.retweet}
    //         />
    //         {/* <ShowThread /> */}
    //       </View>
    //     </View>
    //   </>
    // );
    // break;

    case FeedContent.NFT_FOR_SALE:
      //const nftContent = data.content as NFT_FOR_SALE;
      content = (
        <>
          <View style={styles.feedContainer}>
            <ProfilePicture
              profileImageUri={userPost?.customer?.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              <PostHeader
                onPress={handleNavigation}
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              <Text onPress={handleNavigation} style={styles.message}>
                {data.description}
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
                  source={{
                    uri: userPost.nftImageUrl,
                  }}
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: size.getHeightSize(200),
                  }}
                  resizeMode="cover"
                  loadingIndicatorSource={images.Aptomingos}
                />
                <View style={[styles.nftcollectionContainer, {}]}>
                  <View style={styles.collectionInfo}>
                    <Avatar
                      size={size.getHeightSize(16)}
                      rounded
                      source={{ uri: userPost.nftImageUrl }}
                    />
                    <Text style={styles.collectionName}>
                      {data.nftCollection}
                    </Text>
                  </View>

                  <Text style={styles.collectionId}>
                    {data.nftCollection} {data.nftTokenId}
                  </Text>
                </View>
              </View>

              <View style={styles.nftCollection}>
                <View style={styles.collectionPriceContainer}>
                  <Text style={styles.price}>Price</Text>
                  <Text style={styles.amount}>{data.sellNFTPrice} APT</Text>
                </View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Buy now</Text>
                </View>
              </View>
              {/* <PostActions
                noOfComments={userPost.comments.length}
                noOfLikes={userPost.likes.length}
                noOfRetweet={userPost.retweet.length}
              /> */}
              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
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
            <ProfilePicture
              profileImageUri={userPost?.customer?.profileImage}
              userId={userPost?.customer._id}
              swipeable={myPost}
            />
            <View style={styles.subHeading}>
              <PostHeader
                onPress={handleNavigation}
                username={userPost?.customer?.username}
                nickname={userPost?.customer?.nickname}
                timepost={timePost}
                myPost={myPost ? myPost : false}
                postId={userPost._id}
                userId={userPost.customer._id}
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
                  source={{
                    uri: userPost.nftImageUrl,
                  }}
                  style={{
                    alignSelf: "center",
                    width: "100%",
                    height: size.getHeightSize(200),
                  }}
                  resizeMode="cover"
                  loadingIndicatorSource={images.Aptomingos}
                />
              </View>
              <View style={styles.attachedNftContainer}>
                <View style={styles.collectionInfo}>
                  <Image source={{ uri: data.nftImageUrl }} />
                  <Text style={styles.collectionName}>
                    {data.nftCollection}
                  </Text>
                </View>

                <Text style={styles.collectionId}>
                  {data.nftCollection} {data.nftTokenId}
                </Text>
              </View>

              {/* <PostActions
                marginTop
                noOfComments={userPost.comments.length}
                noOfLikes={userPost.likes.length}
                noOfRetweet={userPost.retweet.length}
              /> */}
              <PostActions
                noOfComments={userPost?.comments?.length}
                Likes={userPost?.likes}
                Repost={userPost?.reposts}
                postId={userPost._id}
                userId={userPost.customer._id}
              />
              {/* <ShowThread /> */}
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
    //         <ProfilePicture id={data.id} swipeable={shouldPFPSwipe} />
    //         <View style={styles.subHeading}>
    //           <PostHeader
    //             username={userPost.username}
    //             nickname={userPost.nickname}
    //             timepost={userPost.timepost}
    //             myPost={myPost ? myPost : false}
    //           />
    //           <Text onPress={handleNavigation} style={styles.message}>
    //             {swapContent.message}
    //             <Text style={styles.swapTextTag}>
    //               {" "}
    //               ${swapContent.messageTag}
    //             </Text>
    //           </Text>
    //           <View style={styles.SwapContainer}>
    //             <View style={styles.swapDescription}>
    //               <View style={styles.swapImageContainer}>
    //                 <APT />
    //                 <Text style={styles.swapLeadingText}>Aptos APT</Text>
    //               </View>
    //               <Text style={styles.swapPriceTag}>${swapContent.price}</Text>
    //               <Text style={styles.priceFeed}>
    //                 Price feed{" "}
    //                 <Text style={styles.priceFeedType}>Liquidswap</Text>
    //               </Text>
    //             </View>

    //             <View style={styles.button}>
    //               <Text style={styles.buttonText}>Swap APT</Text>
    //             </View>
    //           </View>
    //           {/* <PostActions
    //             noOfComments={userPost.comments.length}
    //             noOfLikes={userPost.likes.length}
    //             noOfRetweet={userPost.retweet.length}
    //           /> */}
    //           <PostActions
    //             noOfComments={userPost.comments}
    //             noOfLikes={userPost.like}
    //             noOfRetweet={userPost.retweet}
    //           />
    //           {/* <ShowThread /> */}
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
    //         <ProfilePicture id={data.id} swipeable={shouldPFPSwipe} />
    //         <View style={styles.subHeading}>
    //           <PostHeader
    //             username={userPost.username}
    //             nickname={userPost.nickname}
    //             timepost={userPost.timepost}
    //             myPost={myPost ? myPost : false}
    //           />
    //           <Text onPress={handleNavigation} style={styles.message}>
    //             {floorPriceContent.message}
    //             <Text style={styles.swapTextTag}>
    //               {" "}
    //               ${floorPriceContent.messageTag}
    //             </Text>
    //           </Text>
    //           <View style={styles.floorPriceContainer}>
    //             <Text style={[styles.floorPrice]}>
    //               Floor price{" "}
    //               <Text style={styles.floorAmount}>
    //                 {floorPriceContent.amount} APT
    //               </Text>
    //             </Text>
    //             <APTMonkey
    //               style={{
    //                 marginRight: size.getWidthSize(4),
    //               }}
    //             />
    //             <Text numberOfLines={1} style={styles.swapLeadingText}>
    //               {floorPriceContent.collectionName}
    //             </Text>
    //           </View>
    //           {/* <PostActions
    //             noOfComments={userPost.comments.length}
    //             noOfLikes={userPost.likes.length}
    //             noOfRetweet={userPost.retweet.length}
    //           /> */}
    //           <PostActions
    //             noOfComments={userPost.comments}
    //             noOfLikes={userPost.like}
    //             noOfRetweet={userPost.retweet}
    //           />
    //           {/* <ShowThread /> */}
    //         </View>
    //       </View>
    //     </>
    //   );
    //   break;
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
    flexDirection: "row",
    gap: size.getWidthSize(6),
    alignItems: "center",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  postedIn: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.grayLight,
    fontFamily: "Outfit-Regular",
  },
  communityName: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.primaryLight,
    fontFamily: "Outfit-SemiBold",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
