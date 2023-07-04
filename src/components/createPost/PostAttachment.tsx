import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { sizes } from "../../utils";
import PostImage from "../../../assets/images/svg/PostImage";
import PostGif from "../../../assets/images/svg/PostGif";
import PostNft from "../../../assets/images/svg/PostNft";
import PostCamera from "../../../assets/images/svg/PostCamera";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import {
  updateMedia,
  updateGifBottomSheet,
  updateNftBottomSheet,
} from "../../controller/createPost";
import PostCameraBlur from "../../../assets/images/svg/PostCameraBlur";
const size = new sizes(height, width);
const PostAttachment = () => {
  const dispatch = useAppDispatch();
  const { mediaValue, attachedNft } = useAppSelector((state) => ({
    mediaValue: state.CreatePostController.posts.media,
    attachedNft: state.CreatePostController.posts.nft,
  }));
  const disable = mediaValue || attachedNft;
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: size.getWidthSize(16),
        paddingVertical: size.getHeightSize(10),
        paddingHorizontal: size.getWidthSize(16),
        width: "100%",
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <PostCamera
        style={{
          opacity: disable ? 0.7 : 1,
        }}
        onPress={() => {
          dispatch(updateMedia(images.feedImage2));
        }}
        disabled={disable}
      />
      <PostImage
        style={{
          opacity: disable ? 0.7 : 1,
        }}
        disabled={disable}
        onPress={() => dispatch(updateMedia(images.feedImage1))}
      />
      <PostGif
        style={{
          opacity: disable ? 0.7 : 1,
        }}
        disabled={disable}
        onPress={() => dispatch(updateGifBottomSheet(true))}
      />
      <PostNft
        style={{
          opacity: disable ? 0.7 : 1,
        }}
        disabled={disable}
        onPress={() => navigation.navigate("NftCollectionScreen" as never)}
      />
    </View>
  );
};

export default PostAttachment;
