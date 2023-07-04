import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { appColor, images, fonts } from "../../constants";
import { sizes } from "../../utils";
import ImageStack from "./ImageStack";
import HexagonImage from "./HexagonImage";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
const size = new sizes(height, width);
const CommunityInvite = () => {
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
        width: size.getWidthSize(254),
        borderRadius: 8,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={images.commuintyInvite}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <HexagonImage />
      </View>
      <View style={styles.groupInfoContainer}>
        <View style={styles.groupDescription}>
          <Text style={styles.groupName}>Aptomingos from Space</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Join</Text>
          </View>
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.groupText}>
          1212 flamingos on the
          <Text style={styles.textBold}>@AptosLand</Text> blockchain striving
          for a stronger a
        </Text>
        <View style={styles.groupDetails}>
          <ImageStack />
          <Text style={styles.members}>2k Members</Text>
        </View>
      </View>
    </View>
  );
};

export default CommunityInvite;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: "center",
    borderRadius: 40,
    width: size.getWidthSize(63),
    paddingVertical: size.getHeightSize(7),
  },
  buttonText: {
    textAlign: "center",
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.02,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  groupDescription: {
    flexDirection: "row",
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(8),
    marginTop: size.getHeightSize(8),
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  groupName: {
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Regular",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.04,
    maxWidth: size.getWidthSize(167),
  },
  groupText: {
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
    letterSpacing: 0.04,
    maxWidth: size.getWidthSize(238),
    marginTop: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(8),
    marginBottom: size.getHeightSize(16),
  },
  textBold: {
    fontFamily: "Outfit-SemiBold",
  },
  members: {
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
    marginLeft: size.getWidthSize(30),
  },
  groupDetails: {
    flexDirection: "row",
    gap: size.getWidthSize(4),
    marginLeft: size.getWidthSize(8),
    marginBottom: size.getHeightSize(24),
    alignItems: "center",
  },
  groupInfoContainer: {
    backgroundColor: appColor.kgrayDark2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  imageContainer: {
    height: size.getHeightSize(94),
    width: size.getWidthSize(254),
  },
});
