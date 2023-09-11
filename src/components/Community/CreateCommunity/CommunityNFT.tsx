import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
const { height, width } = Dimensions.get("window");
import CloseIcon from "../../../../assets/images/svg/CloseIcon";
import { appColor, images } from "../../../constants";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
import { sizes } from "../../../utils";
const size = new sizes(height, width);
const CommunityNFT = () => {
  const { setRemoveAssetBottomSheetVisibility } =
    useContext(SetCommunityContext);
  return (
    <View
      style={{
        flex: 1,
        marginTop: size.getHeightSize(74),
        marginBottom: size.getHeightSize(40),
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: appColor.grayLight,
          width: size.getWidthSize(280),
          height: size.getHeightSize(261.125),
          alignSelf: "center",

          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <CloseIcon
          size={size.getHeightSize(38)}
          style={{
            position: "absolute",
            top: size.getHeightSize(5.25),
            right: size.getWidthSize(6.75),
          }}
          onPress={() => setRemoveAssetBottomSheetVisibility(true)}
        />
        <View
          style={{
            marginTop: size.getHeightSize(16),
            alignSelf: "center",
            height: size.getHeightSize(133.509),
            width: size.getWidthSize(131.125),
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 8,
            }}
            source={{ uri: Image.resolveAssetSource(images.siothian).uri }}
          />
        </View>
        <Text style={styles.text}>SIOthians</Text>
        <Text style={styles.leadingText}>
          Community is token-gated with SIOthian NFT's
        </Text>
      </View>
      <Text style={styles.description}>Well done!</Text>
      <Text style={styles.text2}>
        New members will need to hold at least one NFT from this collection to
        join the community.
      </Text>
    </View>
  );
};

export default CommunityNFT;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Bold",
    lineHeight: size.getHeightSize(24),
    textAlign: "center",
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
    textAlign: "center",
    marginTop: size.getHeightSize(16),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(29),
    fontFamily: "Outfit-Bold",
    lineHeight: size.getHeightSize(37),
    textAlign: "center",
    marginTop: size.getHeightSize(32),
  },
  text2: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
    textAlign: "center",
    marginTop: size.getHeightSize(16),
  },
});
