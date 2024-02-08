import {
  View,
  Text,
  TextInput,
  Dimensions,
  Animated,
  StyleSheet,
  Image,
  TextInputProps,
  Pressable,
  Alert,
} from "react-native";
import React, {
  useRef,
  useState,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateToast } from "../../controller/FeedsController";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import { useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useContext } from "react";
import { ChatDmContext } from "../../context/ChatContext";
import IdleChatSendButton from "../../../assets/images/svg/IdleChatSendButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import ChatTipIcon from "../../../assets/images/svg/ChatTipIcon";
import { appColor, images } from "../../constants";
import { Video, ResizeMode } from "expo-av";
import { sizes } from "../../utils";
import {
  formatTimestamp,
  pickMedia,
  sendRreplyMessage,
  sendTextToFirestore,
  uploadMediaToFirebaseStorage,
} from "../../utils/ChatUtils";
import SendButtonActive from "../../../assets/images/svg/SendButtonActive";
import SendButton from "../../../assets/images/svg/SendButton";
import { useNavigation } from "@react-navigation/native";
import ReplyingToIcon from "../../../assets/images/svg/ReplyingToIcon";
import CancelIcon from "../../../assets/images/svg/CancelIcon";
import PostCamera from "../../../assets/images/svg/PostCamera";
import PostGif from "../../../assets/images/svg/PostGif";
import PostImage from "../../../assets/images/svg/PostImage";
import PostNft from "../../../assets/images/svg/PostNft";
import { sendImageToFirestore } from "../../utils/ChatUtils";
import { updateAttachNftType } from "../../controller/FeedsController";
import {
  addUploadingItem,
  removeUploadingItem,
} from "../../controller/DMController";
import { nanoid } from "@reduxjs/toolkit";
import { serverTimestamp } from "firebase/firestore";
import { sendPushNotification } from "../../services/PushNotification";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props extends TextInputProps {
  showReplying: boolean;
  username: string;
  dismissShowReplyingTo: () => void;

  chatId: string;
  receiverId: string;
  nickname: string;
  pfp: string;
}
export type ComponentRef = {
  focusTextInput: () => void;
};
const ChatTextInput: ForwardRefRenderFunction<ComponentRef, Props> = (
  {
    showReplying,
    dismissShowReplyingTo,
    chatId,
    receiverId,
    username,
    nickname,
    pfp,
  },
  ref
) => {
  const { replyingToMessage, setReplyingToMessage } = useContext(ChatDmContext);
  console.log("replyingToMessage type");
  console.log(replyingToMessage.type);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const inputRef = useRef<TextInput>();
  const [height, setHeight] = useState(0);
  const [showPostAttachment, postAttachementVisibility] = useState(false);
  const [borderRadius, setBorderRadius] = useState(40);
  const [text, setText] = useState("");
  const [isInputFocused, setFocusChat] = useState(false);
  const borderRadiusValue = useRef(new Animated.Value(0)).current;
  const handleContentSizeChange = (event: any) => {
    const newHeight = Math.ceil(event.nativeEvent.contentSize.height);
    setHeight(newHeight);
  };
  const showKeyboard = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    if (height > size.getHeightSize(73)) {
      startAnimation();
    } else {
      setBorderRadius(40);
    }
  }, [height]);
  useImperativeHandle(ref, () => ({
    focusTextInput() {
      setTimeout(() => {
        showKeyboard();
      }, 500);
    },
  }));
  const navigation = useNavigation();
  const startAnimation = () => {
    const newBorderRadius = 16;
    Animated.timing(borderRadiusValue, {
      toValue: newBorderRadius,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setBorderRadius(newBorderRadius);
  };
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.USER.UserData);
  const sendMessage = async () => {
    setText("");
    await sendTextToFirestore({
      text: text.trim(),
      chatId,
      myId: profile._id,
      myusername: profile.username,
    });
    await sendPushNotification("ExponentPushToken[v0wljdLKh2-w1Og4oYKP9E]", {
      userId: profile._id,
      receiverId,
      title: username,
      msg: text.trim(),
      navigateTo: "Conversation",
      chatId,
      name: username,
      nickname,
      pfp,
    });
  };
  const sendReply = async () => {
    setText("");
    dismissShowReplyingTo();
    await sendRreplyMessage({
      replyingToMessage: replyingToMessage.message,
      replyingtoId: replyingToMessage.id,
      messageType: replyingToMessage.type,
      text: text.trim(),
      chatId,
      mediaUri: replyingToMessage.mediaImageUri
        ? replyingToMessage.mediaImageUri
        : "",
      myusername: replyingToMessage.sender,
      uid: profile._id,
    });
    await sendPushNotification("ExponentPushToken[v0wljdLKh2-w1Og4oYKP9E]", {
      userId: profile._id,
      receiverId,
      title: username,
      msg: text.trim(),
      navigateTo: "Conversation",
      chatId,
      name: username,
      nickname,
      pfp,
    });
  };
  async function verifyPermission() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestPermission();
      console.log(permissionResponse);
      if (permissionResponse.granted === false) {
        dispatch(
          updateToast({
            displayToast: true,
            toastMessage:
              "Insufficient permission! You need to grant camera access to pick image from gallery",
            toastType: "info",
            alignItems: "flex-start",
          })
        );
        return false;
      }
      return permissionResponse.granted;
    }
    return true;
  }
  const sendMedia = async (from: "gallery" | "camera") => {
    const now = new Date();
    const id = nanoid();
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const uri = await pickMedia(from);
    if (!uri) {
      return;
    }

    dispatch(
      addUploadingItem({
        id,
        createdAt: now.toLocaleTimeString("en-us", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        message: {
          messageType: "image",
          imageUri: uri,
        },
        user: {
          _id: profile._id,
          name: profile.username,
        },
        read: false,
        loading: true,
      })
    );
    const firebaseUri = (await uploadMediaToFirebaseStorage(uri)) as string;
    if (!firebaseUri) {
      dispatch(removeUploadingItem(id));
      return;
    }
    const extension = firebaseUri.split(".").pop().split("?")[0];
    let messageType: string;
    if (extension === "mp4") {
      messageType = "video";
    } else {
      messageType = "image";
    }
    dispatch(removeUploadingItem(id));
    await sendImageToFirestore({
      imageUri: firebaseUri,
      chatId,
      messageType,
      myId: profile._id,
      myusername: profile.username,
    });
    await sendPushNotification("ExponentPushToken[v0wljdLKh2-w1Og4oYKP9E]", {
      userId: profile._id,
      receiverId,
      title: username,
      msg: "sent a file",
      navigateTo: "Conversation",
      chatId,
      name: username,
      nickname,
      pfp,
    });
  };

  return (
    <View>
      {showReplying && (
        <View style={styles.replyingTo}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <ReplyingToIcon size={size.getHeightSize(20)} />
              <Text style={styles.replyingToText}>
                Replying to{" "}
                <Text
                  style={{
                    fontFamily: "Outfit-SemiBold",
                  }}
                >
                  {replyingToMessage.sender}
                </Text>
              </Text>
            </View>

            {replyingToMessage.type === "text" ? (
              <Text numberOfLines={1} style={styles.message}>
                {replyingToMessage.message}
              </Text>
            ) : (
              <Text numberOfLines={1} style={styles.message}>
                {replyingToMessage.type.charAt(0).toUpperCase() +
                  replyingToMessage.type.slice(1)}
              </Text>
            )}
          </View>
          {replyingToMessage.type === "image" && (
            <View style={styles.view3}>
              <Image
                source={{ uri: replyingToMessage.mediaImageUri }}
                style={styles.view4}
                resizeMode="cover"
              />
            </View>
          )}
          {replyingToMessage.type === "video" && (
            <View style={styles.view3}>
              <Video
                source={{ uri: replyingToMessage.mediaImageUri }}
                style={styles.view4}
                resizeMode={ResizeMode.COVER}
              />
            </View>
          )}
          <CancelIcon
            onPress={dismissShowReplyingTo}
            size={size.getHeightSize(24)}
          />
        </View>
      )}
      {showPostAttachment && (
        <View style={styles.view5}>
          <Pressable onPress={() => {}} style={styles.iconContainer}>
            <PostCamera onPress={() => sendMedia("camera")} />
          </Pressable>
          <Pressable style={styles.iconContainer}>
            <PostImage onPress={() => sendMedia("gallery")} />
          </Pressable>
          <Pressable style={styles.iconContainer}>
            <PostGif />
          </Pressable>
          <Pressable
            style={styles.iconContainer}
            onPress={() => {
              dispatch(updateAttachNftType("DM"));
              navigation.navigate("NftCollectionScreen");
            }}
          >
            <PostNft />
          </Pressable>
        </View>
      )}
      <View style={styles.view}>
        {isInputFocused ? (
          <AntDesign
            name="right"
            color={appColor.kWhiteColor}
            size={size.getHeightSize(24)}
            onPress={() => setFocusChat(false)}
          />
        ) : (
          <>
            {showPostAttachment ? (
              <AntDesign
                name="close"
                color={appColor.kWhiteColor}
                size={size.getHeightSize(24)}
                style={styles.icon}
                onPress={() => postAttachementVisibility(false)}
              />
            ) : (
              <AntDesign
                name="plus"
                color={appColor.kWhiteColor}
                size={size.getHeightSize(24)}
                style={styles.icon}
                onPress={() => postAttachementVisibility(true)}
              />
            )}
            <ChatTipIcon
              style={{
                marginHorizontal: size.getWidthSize(10),
                marginVertical: size.getHeightSize(10),
              }}
              size={size.getHeightSize(24)}
              onPress={() => navigation.navigate("SendToken")}
            />
          </>
        )}
        <TextInput
          ref={inputRef}
          placeholder="Write..."
          placeholderTextColor={appColor.kgrayTextColor}
          cursorColor={appColor.klightPurple}
          multiline
          onContentSizeChange={handleContentSizeChange}
          onFocus={() => {
            postAttachementVisibility(false);
            setFocusChat(true);
          }}
          onBlur={() => setFocusChat(false)}
          onChangeText={(text) => {
            showPostAttachment && postAttachementVisibility(false);
            setText(text);
            setFocusChat(true);
          }}
          value={text}
          style={[{ borderRadius: borderRadius, flex: 1 }, styles.textInput]}
        />
        {text.length >= 1 ? (
          <SendButtonActive
            onPress={() => {
              showReplying ? sendReply() : sendMessage();
            }}
            size={size.getHeightSize(24)}
          />
        ) : (
          <IdleChatSendButton size={size.getHeightSize(24)} />
        )}
      </View>
      {text.length > 2000 && (
        <View style={styles.errorConatiner}>
          <Text style={styles.errorText}>Maximum character limit is 2000</Text>
        </View>
      )}
    </View>
  );
};

export default forwardRef(ChatTextInput);
const styles = StyleSheet.create({
  replyingTo: {
    flexDirection: "row",
    backgroundColor: appColor.grayDark,
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(8),
    gap: size.getWidthSize(1),
    alignItems: "center",
  },
  replyingToText: {
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    flex: 1,
  },
  message: {
    fontFamily: "Outfit-Regular",
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
  },
  textInput: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    paddingHorizontal: size.getWidthSize(16),
    paddingTop: size.getHeightSize(8),
    paddingBottom: size.getHeightSize(8),
    color: appColor.kTextColor,
    maxHeight: size.getHeightSize(115),
    backgroundColor: appColor.feedBackground,
    borderWidth: 1,
    borderColor: appColor.kGrayscale,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(12),
    paddingTop: size.getHeightSize(8),
    paddingBottom: size.getHeightSize(24),
    backgroundColor: appColor.kgrayDark2,
    width: "100%",
  },
  icon: {
    marginHorizontal: size.getWidthSize(10),
    marginVertical: size.getHeightSize(10),
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
  view1: {
    gap: size.getWidthSize(8),
    flex: 1,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.getWidthSize(8),
  },
  view3: {
    height: size.getHeightSize(44),
    width: size.getWidthSize(44),
    borderRadius: 2,
  },
  view4: {
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(8),
    width: "100%",
    backgroundColor: appColor.kgrayDark2,
    marginBottom: 1,
  },
  iconContainer: {
    width: size.getWidthSize(40),
    height: size.getWidthSize(40),
    alignItems: "center",
    justifyContent: "center",
  },
});
