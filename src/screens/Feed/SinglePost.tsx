import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState, useRef } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import SinglePostContextProvider from "../../context/SinglePostContext";
import { appColor, fonts } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Comments from "../../components/SinglePostView/Comments";
import AddCommentTextInput from "../../components/SinglePostView/AddCommentTextInput";
import { sizes } from "../../utils";
const size = new sizes(height, width);
import { useNavigation } from "@react-navigation/native";
import { SinglePostProps } from "../../navigations/NavigationTypes";
import SinglePostContent from "../../components/SinglePostView/SinglePostContent";
import { useAppDispatch } from "../../controller/hooks";
import { updateCommentReplyData } from "../../controller/createPost";
const SinglePost = ({ route }: SinglePostProps) => {
  const props = route.params;
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [replyingTo, setReplyingTo] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // const data = {
  //   id: '9',
  //   pfp: '',
  //   username,
  //   nickname,
  //   timepost: '5m',
  //   comments: '99k',
  //   retweet: '99k',
  //   like: '99k',
  //   type: 'swap-option-included',
  //   content: {
  //     message: 'Just joined TowneSquare, a new web3 social platform!',
  //     messageTag: 'APT',
  //     collectionName: '',
  //     logo: '',
  //     price: 8.46,
  //   },
  // };
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  // const handleCommentPress = (username:string) => {
  //   textInputRef.current?.focus();
  //   setReplyingTo(true);
  //   textInputRef.current?.clear();
  //   dispatch(updateCommentReplyData({username}))
  //   if (scrollViewRef.current) {
  //     const commentIndex = 4;
  //     const yOffset = commentIndex * 100;
  //     scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  //   }
  // };
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
      <SinglePostContextProvider>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          ref={scrollViewRef}
        >
          <SinglePostContent data={props} />
          {props.comments
            ?.slice()
            .reverse()
            .map((comment, index) => (
              <Comments
                handleCommentButton={handleCommentPress}
                key={index}
                data={comment}
              />
            ))}

            {/* TODO */}
          {/* <Comments handleCommentButton={handleCommentPress} myPost /> */}
          {/* {props?.comments.map((comment, index) => (
          <Comments handleCommentButton={handleCommentPress} CommentData={comment} key={index}/>
        ))} */}
        </ScrollView>

        <AddCommentTextInput
          showReplyingTo={replyingTo}
          handleBlur={handleBlur}
          textRef={textInputRef}
          postId={props?._id}

        />
      </SinglePostContextProvider>
      {/* {isAnyModalOpen && <View style={styles.overlay} />} */}
    </SafeAreaView>
  );
};

export default SinglePost;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: "space-between",
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
  scrollView: {
    paddingBottom: size.getHeightSize(32),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
