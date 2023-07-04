import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ReportPostModal from "../../components/Feed/ReportPostModal";
import ReportUserModal from "../../components/Feed/ReportUserModal";
import BlockUserModal from "../../components/Feed/BlockUserModal";
import ReportPanel from "../../components/Feed/ReportPanel";
import AntDesign from "@expo/vector-icons/AntDesign";
import Comments from "../../components/SinglePostView/Comments";
import AddCommentTextInput from "../../components/SinglePostView/AddCommentTextInput";
import { sizes } from "../../utils";
import MyPostPanel from "../../shared/Feed/MyPostPanel";
import { toastConfig } from "../../components/Feed/ShowToast";
import ToastHook from "../../hooks/Feeds/ToastHook";
import DeleteMyPostPanel from "../../shared/Feed/DeleteMyPostPanel";
const size = new sizes(height, width);
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

import SinglePostContent from "../../components/SinglePostView/SinglePostContent";
import { useAppSelector } from "../../controller/hooks";

const SinglePost = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [replyingTo, setReplyingTo] = useState(false);
  const { showBlockToast, showReportUserToast, showReportPostToast } =
    ToastHook();
  const navigation = useNavigation();
  const modals = useAppSelector((state) => ({
    reportPostModal: state.FeedsSliceController.ReportPostModal,
    reportPanel: state.FeedsSliceController.ReportingModal,
    reportUser: state.FeedsSliceController.ReportUserModal,
    blockUser: state.FeedsSliceController.BlockUserModal,
    myPostModal: state.FeedsSliceController.MyPostPanel,
    deletePost: state.FeedsSliceController.DeleteMyPostPanel,
  }));
  const data = {
    id: "6",
    pfp: "",
    username: "Username",
    nickname: "username",
    timepost: "5min",
    comments: "99k",
    retweet: "99k",
    like: "99k",
    type: "message-external-link",
    content: {
      message: "Just joined TowneSquare, a new web3 social platform",
      link: "https://aptos.com/121907/building-aptos-theres-new-web3-accelerator",
      linkDescription: "Aptos Autumn is Here",
      url: "www.aptos.com",
      linkSubTitle:
        "Membership eaWe welcome everyone to participate in this movemen aime...",
    },
  };
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const isAnyModalOpen = Object.values(modals).some((value) => value === true);
  const handleCommentPress = () => {
    textInputRef.current?.focus();
    setReplyingTo(true);
    textInputRef.current?.clear();
    if (scrollViewRef.current) {
      const commentIndex = 4;
      const yOffset = commentIndex * 100;
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };
  const handleBlur = () => {
    setReplyingTo(false);
    textInputRef.current?.clear();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.headerText}>Post</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView} ref={scrollViewRef}>
        <SinglePostContent data={data} />
        <Comments handleCommentButton={handleCommentPress} />
        <Comments handleCommentButton={handleCommentPress} myPost />
      </ScrollView>

      <AddCommentTextInput
        showReplyingTo={replyingTo}
        handleBlur={handleBlur}
        textRef={textInputRef}
      />
      {isAnyModalOpen && <View style={styles.overlay} />}

      <Toast config={toastConfig} />
      <ReportUserModal reportUser={showReportUserToast} />
      <ReportPanel />
      <MyPostPanel />
      <ReportPostModal reportPost={showReportPostToast} />
      <BlockUserModal block={showBlockToast} />
      <DeleteMyPostPanel />
    </SafeAreaView>
  );
};

export default SinglePost;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: size.getWidthSize(16),
    height: size.getHeightSize(48),
    backgroundColor: appColor.kgrayDark2,
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
    width: size.getWidthSize(264),
  },
  scrollView: {
    paddingBottom: size.getHeightSize(32),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
