import {
  View,
  Text,
  Dimensions,
  TextInput,
  Animated,
  StyleSheet,
} from "react-native";
import { useState, useEffect, useRef, useContext } from "react";
const { height, width } = Dimensions.get("window");
import { addComment } from "../../api";
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../constants";
import SendButton from "../../../assets/images/svg/SendButton";
import SendButtonActive from "../../../assets/images/svg/SendButtonActive";
import { updateToast } from "../../controller/FeedsController";
import { SinglePostContext } from "../../context/SinglePostContext";
import { sizes } from "../../utils";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import axios from "axios";
import { BACKEND_URL } from "../../../config/env";
const size = new sizes(height, width);
interface Props {
  textRef: any;
  handleBlur: () => void;
  showReplyingTo: boolean;
  postId: string;
}
const AddCommentTextInput = ({
  textRef,
  handleBlur,
  showReplyingTo,
  postId,
}: Props) => {
  const { replyingTo } = useContext(SinglePostContext);
  const [height, setHeight] = useState(0);
  const [borderRadius, setBorderRadius] = useState(40);
  const [text, setText] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const token = useAppSelector((state) => state.USER.didToken);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (height > size.getHeightSize(73)) {
      startAnimation();
    } else {
      setBorderRadius(40);
    }
  }, [height]);
  const borderRadiusValue = useRef(new Animated.Value(0)).current;
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const startAnimation = () => {
    const newBorderRadius = 16;

    // Start the animation
    Animated.timing(borderRadiusValue, {
      toValue: newBorderRadius,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setBorderRadius(newBorderRadius);
  };
  const handleContentSizeChange = (event: any) => {
    const newHeight = Math.ceil(event.nativeEvent.contentSize.height);
    setHeight(newHeight);
  };

  // Add comment to a post
  const sendComment = async () => {
    setText("");
    // Add comment to the post
    const commentAdded = await addComment(text, token, postId);

    // if comment is added successfully, show success toast
    if (commentAdded) {
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: "Your comment has been successfully posted!",
          toastType: "success",
        })
      );
    } else {

      // show error toast
      dispatch(
        updateToast({
          displayToast: true,
          toastMessage: "Error posting your comment. Please try again.",
          toastType: "info",
        })
      );
    }
  };
  return (
    <>
      <View
        style={{
          backgroundColor: appColor.kgrayDark2,
        }}
      >
        {showReplyingTo && (
          <View style={styles.replyingTo}>
            <Text style={styles.replyingToText}>Replying to</Text>
            <Text style={styles.username}>{`@${replyingTo}`}</Text>
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            ref={textRef}
            placeholder={showReplyingTo ? "Write a reply" : "Write a comment"}
            placeholderTextColor={appColor.kgrayTextColor}
            cursorColor={appColor.klightPurple}
            multiline
            onBlur={handleBlur}
            onContentSizeChange={handleContentSizeChange}
            onChangeText={setText}
            value={text}
            style={[{ borderRadius: borderRadius }, styles.textInput]}
          />
          {text.length >= 1 ? (
            <SendButtonActive
              onPress={() => {
                sendComment();
              }}
              size={size.getHeightSize(24)}
            />
          ) : (
            <SendButton size={size.getHeightSize(24)} />
          )}
        </View>
        {text.length > 2000 && (
          <View style={styles.errorConatiner}>
            <Text style={styles.errorText}>
              Maximum character limit is 2000
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default AddCommentTextInput;
const styles = StyleSheet.create({
  replyingTo: {
    flexDirection: "row",
    backgroundColor: appColor.kgrayDark2,
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    gap: size.getWidthSize(2),
  },
  replyingToText: {
    fontFamily: "Outfit-Regular",
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
  },
  username: {
    fontFamily: "Outfit-SemiBold",
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
  },
  inputContainer: {
    backgroundColor: appColor.kgrayDark2,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: "row",
    gap: size.getWidthSize(16),
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
    width: size.getWidthSize(288),
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    paddingBottom: size.getHeightSize(8),
    color: appColor.kTextColor,
    maxHeight: size.getHeightSize(115),
    backgroundColor: appColor.feedBackground,
  },
  errorText: {
    fontFamily: "Outfit-Regular",
    color: appColor.kErrorText,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    paddingHorizontal: size.getWidthSize(16),
  },
  errorConatiner: {
    paddingBottom: size.getHeightSize(8),
    backgroundColor: appColor.kgrayDark2,
  },
});
