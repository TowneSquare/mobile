import { memo, useRef, useMemo, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "../../../constants";
import { Video, ResizeMode } from "expo-av";
import { FeedContent } from "../../../models";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import ProfilePicture from "../../Feed/SwipeableProfilePicture";
import PostHeader from "../../Feed/PostHeader";
import PostActions from "../../Feed/PostActions";
import { feedStyle } from "../../Feed/FeedsStyles";
import { sizes } from "../../../utils";
import { images, appColor } from "../../../constants";
import { UserCommentData } from "../../../controller/UserController";
import { getPostById } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../controller/hooks";
import { PostData } from "../../../controller/createPost";
import { getPostTime } from "../../../utils/helperFunction";
import axios from "axios";
import { BACKEND_URL } from "../../../../config/env";
import { useQuery } from "react-query";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

interface Props {
  myPost?: boolean;
  data: UserCommentData;
  shouldPFPSwipe: boolean;
  nickname: string;
  username: string;
}

const Replies = memo(
  ({ data, myPost, nickname, username, shouldPFPSwipe }: Props) => {
    const videoRef = useRef(null);
    const dispatch = useAppDispatch();

    const token = useAppSelector((state) => state.USER.didToken);
    const postId = data?.postId;

    

    const getPostById = async (): Promise<PostData> => {
      return await axios
        .get(`${BACKEND_URL}posts/${data.postId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => response.data);
    };

    function useGetPostById() {
      return useQuery({ queryKey: ["userInfo", postId], queryFn: getPostById });
    }
    const userPost = useGetPostById();


    let [isLoaded] = useFonts({
      "Outfit-Bold": fonts.OUTFIT_BOLD,
      "Outfit-Medium": fonts.OUTFIT_NORMAL,
      "Outfit-Regular": fonts.OUTFIT_REGULAR,
    });
    const navigation = useNavigation();

    if (!isLoaded) {
      return null;
    }

    const handleNavigation = () => {
      const params: any = userPost;
      navigation.navigate("SinglePost" as any, params);
    };

    const timePost = getPostTime(data?.createdAt);

    let content;

    const type_of_post =
      data?.videoUrls[0] && data?.content
        ? FeedContent.MESSAGE_VIDEO
        : data?.imageUrls[0] && data?.content
        ? FeedContent.MESSAGE_IMAGE
        : data?.videoUrls[0]
        ? FeedContent.VIDEO_ONLY
        : data?.imageUrls[0]
        ? FeedContent.IMAGE_ONLY
        : data?.content
        ? FeedContent.MESSAGE_ONLY
        : FeedContent.EMPTY;
    switch (type_of_post) {
      case FeedContent.MESSAGE_ONLY:
        content = (
          <>
            <View style={styles.feedContainer}>
              <ProfilePicture
                profileImageUri={userPost.data?.customer?.profileImage}
                userId={data?.userId}
                swipeable={myPost}
              />
              <View style={styles.subHeading}>
                <PostHeader
                  onPress={handleNavigation}
                  username={username}
                  nickname={nickname}
                  timepost={timePost}
                  myPost={myPost ? myPost : false}
                  postId={data._id}
                  userId={data?.userId}
                />
                <Text onPress={handleNavigation} style={styles.message}>
                  {data.content}
                </Text>

                <PostActions
                  noOfComments={userPost?.data?.comments?.length}
                  Likes={userPost?.data?.likes}
                  Repost={userPost?.data?.reposts}
                  postId={userPost?.data?._id}
                  userId={userPost?.data?.customer?._id}
                />
                {/* <ShowThread /> */}
              </View>
            </View>
          </>
        );
        break;
      case FeedContent.MESSAGE_IMAGE:
        content = (
          <>
            <View style={styles.feedContainer}>
              <ProfilePicture
                profileImageUri={userPost?.data.customer?.profileImage}
                userId={data?.userId}
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
                  onPress={handleNavigation}
                  username={username}
                  nickname={nickname}
                  timepost={timePost}
                  myPost={myPost ? myPost : false}
                  postId={data._id}
                  userId={data?.userId}
                />

                <Text onPress={handleNavigation} style={styles.message}>
                  {data.content}
                </Text>

                <Pressable
                  onPress={() =>
                    navigation.navigate("ViewImageScreen" as never)
                  }
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
                    source={{uri: userPost.data.imageUrls[0]}}
                    style={styles.imageStyle}
                    resizeMode="cover"
                  />
                </Pressable>
               <PostActions
                  noOfComments={userPost?.data?.comments?.length}
                  Likes={userPost?.data?.likes}
                  Repost={userPost?.data?.reposts}
                  postId={userPost?.data?._id}
                  userId={userPost?.data?.customer?._id}
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
                profileImageUri={userPost?.data.customer?.profileImage}
                userId={data?.userId}
                swipeable={myPost}
              />
              <View style={styles.subHeading}>
                <PostHeader
                  onPress={handleNavigation}
                  username={userPost?.data.customer?.username}
                  nickname={userPost?.data.customer?.nickname}
                  timepost={timePost}
                  myPost={myPost ? myPost : false}
                  postId={postId}
                  userId={userPost?.data.customer?._id}
                />

                <Text onPress={handleNavigation} style={styles.message}>
                  {data.content}
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
                  noOfComments={userPost?.data?.comments?.length}
                  Likes={userPost?.data?.likes}
                  Repost={userPost?.data?.reposts}
                  postId={userPost?.data?._id}
                  userId={userPost?.data?.customer?._id}
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
                profileImageUri={userPost?.data.customer?.profileImage}
                userId={data?.userId}
                swipeable={myPost}
              />
              <View style={styles.subHeading}>
                <PostHeader
                  onPress={handleNavigation}
                  username={username}
                  nickname={nickname}
                  timepost={timePost}
                  myPost={myPost ? myPost : false}
                  postId={postId}
                  userId={userPost?.data.customer?._id}
                />

                <Pressable
                  onPress={() => navigation.navigate("VideoPlayer" as any, {
                    videoUrl: data.videoUrls[0],
                  })}
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
                  noOfComments={userPost?.data?.comments?.length}
                  Likes={userPost?.data?.likes}
                  Repost={userPost?.data?.reposts}
                  postId={userPost?.data?._id}
                  userId={userPost?.data?.customer?._id}
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

      // case FeedContent.NFT_FOR_SALE:
      //   const nftContent = data.content as NFT_FOR_SALE;
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
      //             {nftContent.message}
      //           </Text>
      //           <View
      //             style={[
      //               styles.mediaContainer,
      //               {
      //                 marginBottom: size.getHeightSize(0),
      //               },
      //             ]}
      //           >
      //             <Image
      //               source={images.feedImage5}
      //               style={[
      //                 styles.imageStyle,
      //                 { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 },
      //               ]}
      //               resizeMode="cover"
      //             />
      //             <View style={[styles.nftcollectionContainer, {}]}>
      //               <View style={styles.collectionInfo}>
      //                 <Avatar
      //                   size={size.getHeightSize(16)}
      //                   rounded
      //                   source={images.collectionImage}
      //                 />
      //                 <Text style={styles.collectionName}>
      //                   {nftContent.collectionName}
      //                 </Text>
      //               </View>

      //               <Text style={styles.collectionId}>
      //                 {nftContent.collectionName} {nftContent.collectionId}
      //               </Text>
      //             </View>
      //           </View>

      //           <View style={styles.nftCollection}>
      //             <View style={styles.collectionPriceContainer}>
      //               <Text style={styles.price}>Price</Text>
      //               <Text style={styles.amount}>{nftContent.price} APT</Text>
      //             </View>
      //             <View style={styles.button}>
      //               <Text style={styles.buttonText}>Buy now</Text>
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
      //         </View>
      //       </View>
      //     </>
      //   );
      //   break;
      // case FeedContent.ATTACHED_NFT:
      //   const attachedNftContent = data.content as NFT_FOR_SALE;
      //   content = (
      //     <>
      //       <View style={styles.feedContainer}>
      //         <ProfilePicture id={data.id} swipeable={shouldPFPSwipe} />
      //         <View style={styles.subHeading}>
      //           <PostHeader
      //             onPress={handleNavigation}
      //             username={userPost.username}
      //             nickname={userPost.nickname}
      //             timepost={userPost.timepost}
      //             myPost={myPost ? myPost : false}
      //           />
      //           <View
      //             style={[
      //               styles.mediaContainer,
      //               {
      //                 marginBottom: size.getHeightSize(8),
      //               },
      //             ]}
      //           >
      //             <Image
      //               source={images.feedImage5}
      //               style={[styles.imageStyle]}
      //               resizeMode="cover"
      //             />
      //           </View>
      //           <View style={styles.attachedNftContainer}>
      //             <View style={styles.collectionInfo}>
      //               <Image source={images.collectionImage} />
      //               <Text style={styles.collectionName}>
      //                 {attachedNftContent.collectionName}
      //               </Text>
      //             </View>

      //             <Text style={styles.collectionId}>
      //               {attachedNftContent.collectionName}
      //               {attachedNftContent.collectionId}
      //             </Text>
      //           </View>

      //           {/* <PostActions
      //             marginTop
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
    }
    return userPost.isSuccess ? <>{content}</> : <></>;
  }
);

export default Replies;
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