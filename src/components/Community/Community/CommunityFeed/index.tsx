import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { appColor, fonts } from "../../../../constants";
import CommunityPostIcon from "../../../../../assets/images/svg/CommunityPostIcon";
import CommunityFeedImgPlaceHolder from "../../../../../assets/images/svg/CommunityFeedImgPlaceHolder";
import { useFonts } from "expo-font";
import { sizes } from "../../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
function CommunityFeed() {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: size.getHeightSize(24),
        marginHorizontal: size.getWidthSize(16),
      }}
    >
      <CommunityPostIcon
        size={size.getHeightSize(60)}
        style={{
          zIndex: 1,
        }}
      />
      <CommunityPostIcon
        size={size.getHeightSize(60)}
        style={{
          position: "absolute",
          right: size.getWidthSize(116.5),
          top: size.getHeightSize(16),
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      <View
        style={{
          marginTop: size.getHeightSize(32),
          gap: size.getHeightSize(8),
        }}
      >
        <Text
          style={{
            color: appColor.kWhiteColor,
            fontSize: size.fontSize(16),
            textAlign: "center",
            fontFamily: "Outfit-SemiBold",
            lineHeight: size.getHeightSize(21),
          }}
        >
          Community Posts will show up here
        </Text>
        <Text
          style={{
            color: appColor.kGrayscale,
            fontSize: size.fontSize(16),
            textAlign: "center",
            fontFamily: "Outfit-Regular",
            lineHeight: size.getHeightSize(21),
          }}
        >
          Create the first post and get the conversation going!
        </Text>
      </View>
    </View>
  );
}

export default CommunityFeed;
const styles = StyleSheet.create({});
