import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import HashTags from "../../components/createPost/HashTags";
import { sizes } from "../../utils";
import ToastIcon from "../../../assets/images/svg/ToastIcon";
import AtMention from "../../components/createPost/AtMention";
import { useNavigation } from "@react-navigation/native";
import FieldInput from "../../components/createPost/FieldInput";
import { useAppSelector } from "../../controller/hooks";
import PostAttachment from "../../components/createPost/PostAttachment";
import AttachedNftContainer from "../../components/createPost/AttachedNftContainer";
const size = new sizes(height, width);
import SwapPost from "../../components/createPost/SwapPost";
import FloorPricePost from "../../components/createPost/FloorPricePost";
import AptosPanel from "../../components/createPost/AptosPanel";
import Media from "../../components/createPost/Media";
import GifBottomSheet from "../../components/createPost/GifBottomSheet";
import OfferSaleSheet from "../../components/createPost/OfferSaleSheet";
import { Avatar } from "react-native-elements";
import Toast from "react-native-toast-message";
import { LinearProgress } from "react-native-elements";
import { CreatePostProps } from "../../navigations/NavigationTypes";
const CreatePost = ({ route }: CreatePostProps) => {
  const { showToast } = route.params;
  const {
    showAtMentions,
    showHashTags,
    showAPTPanel,
    showApt,
    media,
    nft,
    post,
    interval,
  } = useAppSelector((state) => ({
    showAtMentions: state.CreatePostController.showAtMentionContainer,
    showHashTags: state.CreatePostController.showHashTags,
    showAPTPanel: state.CreatePostController.showAptosPanel,
    showApt: state.CreatePostController.posts.community,
    message: state.CreatePostController.posts.message,
    media: state.CreatePostController.posts.media,
    tags: state.CreatePostController.posts.tags,
    community: state.CreatePostController.posts.community,
    nft: state.CreatePostController.posts.nft,
    post: state.CreatePostController.posts,
    interval: state.CreatePostController.attachNftCountDown,
  }));
  // console.log(interval)
  const shouldShowAptosPanel = showAPTPanel;
  const shouldShowAtMention = showAtMentions;
  const shouldShowHashTags = showHashTags;
  const shouldShowSwapApt = showApt === "Aptos";
  const shouldShowAptMonkey = showApt === "Aptos Monkeys";
  const shouldShowPostAttachment =
    !showAPTPanel && !showAtMentions && !showHashTags;
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
  const toastConfig = {
    success: ({ text1, text2, ...rest }: any) => {
      return (
        <View style={styles.toastContainer}>
          <View style={styles.toastRow}>
            <ToastIcon />
            <Text style={styles.toastText}>{text2}</Text>
          </View>

          <LinearProgress
            color="white"
            trackColor={appColor.kgrayDark2}
            value={interval}
            variant="determinate"
          />
        </View>
      );
    },
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Text onPress={navigation.goBack} style={styles.cancel}>
          Cancel
        </Text>
        <View style={styles.publishButton}>
          <Text style={styles.publishText}>Publish</Text>
        </View>
      </View>
      <View style={styles.fieldInputContainer}>
        <Avatar
          rounded
          source={images.createPostPfp}
          size={size.getHeightSize(40)}
        />
        <FieldInput />
      </View>
      {nft && <AttachedNftContainer />}
      {media && <Media />}
      {shouldShowSwapApt && <SwapPost />}
      {shouldShowAptMonkey && <FloorPricePost />}
      <View style={{ flex: 1 }} />
      {shouldShowAptosPanel && (
        <View style={styles.tagConatiners}>
          <AptosPanel />
        </View>
      )}
      {shouldShowAtMention && (
        <View style={styles.tagConatiners}>
          <AtMention />
        </View>
      )}
      {shouldShowPostAttachment && (
        <View>
          <PostAttachment />
        </View>
      )}
      {shouldShowHashTags && (
        <View style={styles.tagConatiners}>
          <HashTags />
        </View>
      )}
      <OfferSaleSheet />
      <GifBottomSheet />
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
};

export default CreatePost;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: size.getWidthSize(16),
    height: size.getHeightSize(56),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: "space-between",
    paddingVertical: size.getHeightSize(12),
  },
  cancel: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-Medium",
    letterSpacing: 0.04,
    width: size.getWidthSize(152),
  },
  publishButton: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(7),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    width: size.getWidthSize(81),
  },
  publishText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
  },

  fieldInputContainer: {
    flexDirection: "row",
    gap: size.getWidthSize(8),
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(8),
  },
  tagConatiners: {
    maxHeight: size.getHeightSize(260),
    backgroundColor: appColor.kgrayDark2,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  toastText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(18),
  },
  toastContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 4,
    width: size.getWidthSize(340),
    marginTop: size.getHeightSize(35),
    borderWidth: size.getWidthSize(1),
    borderColor: appColor.kGrayLight3,
  },
  toastRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(4),
    marginVertical: size.getHeightSize(16),
    width: size.getWidthSize(286),
    alignSelf: "center",
  },
});
