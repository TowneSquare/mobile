import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import { sizes } from "../../utils";
import { images } from "../../constants";
import { appColor } from "../../constants";
import { ChatImage, ChatVideo } from "../../models/conversationModel";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props {
  data: ChatImage | ChatVideo;
  uid: string;
}
const LoadingMediaContent = ({
  data: { createdAt, id, message, user },
  uid,
}: Props) => {
  const getContent = () => {
    if (user._id === uid) {
      return (
        <View
          style={{
            paddingVertical: size.getHeightSize(8),
          }}
        >
          <View
            style={{
              gap: size.getHeightSize(6),
              alignSelf: "flex-end",
              paddingRight: size.getWidthSize(8),
              paddingLeft: size.getWidthSize(64),
            }}
          >
            <View
              style={
                user._id !== uid ? styles.imageView2 : styles.imageView
              }
            >
              <Image
                source={{ uri: message.imageUri }}
                style={
                  user._id !== uid ? styles.imageStyle2 : styles.imageStyle
                }
                resizeMode="cover"
              />
            </View>
            <View style={styles.sendingView}>
              <Text style={styles.sendingText}>Sending...</Text>
              <ActivityIndicator
                size={size.getHeightSize(16)}
                color={appColor.primaryLight}
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            paddingVertical: size.getHeightSize(8),
          }}
        >
          <View style={styles.view1}>
            <Avatar
              source={images.pfpImage}
              size={size.getHeightSize(40)}
              rounded
            />
            <View style={styles.view2}>
              <View
                style={
                  user._id !== uid ? styles.imageView2 : styles.imageView
                }
              >
                <Image
                  source={{ uri: message.imageUri }}
                  style={
                    user._id !== uid
                      ? styles.imageStyle2
                      : styles.imageStyle
                  }
                  resizeMode="cover"
                />
              </View>
              <View style={styles.sendingView}>
                <Text style={styles.sendingText}>Sending...</Text>
                <ActivityIndicator
                  size={size.getHeightSize(16)}
                  color={appColor.primaryLight}
                />
              </View>
            </View>
          </View>
        </View>
      );
    }
  };

  return getContent();
};

export default LoadingMediaContent;

const styles = StyleSheet.create({
  timeStamp: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(18),
    textAlign: "right",
  },
  imageView: {
    height: size.getHeightSize(218),
    width: size.getWidthSize(264),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  imageView2: {
    height: size.getHeightSize(218),
    width: size.getWidthSize(264),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: size.getHeightSize(4),
  },
  imageStyle: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    width: "100%",
    height: "100%",
  },
  imageStyle2: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
    height: "100%",
  },
  view1: {
    gap: size.getHeightSize(8),
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: size.getWidthSize(32),
    paddingLeft: size.getWidthSize(8),
  },
  view2: {
    flex: 1,
    gap: size.getHeightSize(6),
  },
  timeStamp2: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(18),
  },
  sendingView: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.getWidthSize(2),
    alignSelf: "flex-end",
  },
  sendingText: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(18),
  },
});
