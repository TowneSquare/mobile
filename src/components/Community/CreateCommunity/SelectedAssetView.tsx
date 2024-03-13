import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import AptosIcon from "../../../../assets/images/svg/AptosIcon";
import CloseIcon from "../../../../assets/images/svg/CloseIcon";
import { appColor } from "../../../constants";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const SelectedAssetView = () => {
  const { communityDetails, setRemoveAssetBottomSheetVisibility } =
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
          <AptosIcon
            size={size.getHeightSize(130)}
            style={{
              alignSelf: "center",
            }}
          />
        </View>
        <Text style={styles.text}>
          Aptos{" "}
          {communityDetails.selectedCryptoAsset.amount
            ? communityDetails.selectedCryptoAsset.name
            : ""}
        </Text>
        <Text style={styles.leadingText}>
          Community is token-gated with Aptos (APT)
        </Text>
      </View>
      <Text style={styles.description}>Well done!</Text>
      <Text
        style={{
          fontSize: size.fontSize(16),
          lineHeight: size.getHeightSize(21),
          color: appColor.grayLight,
          fontFamily: "Outfit-Regular",
          textAlign: "center",
          marginTop: size.getHeightSize(32),
        }}
      >
        New members will need to hold{" "}
        <Text
          style={{
            fontFamily: "Outfit-Bold",
            color: appColor.kTextColor,
          }}
        >
          {communityDetails.selectedCryptoAsset.amount
            ? communityDetails.selectedCryptoAsset.amount
            : "ANY AMOUNT"}
        </Text>{" "}
        of
        <Text
          style={{
            fontFamily: "Outfit-Bold",
            color: appColor.kTextColor,
          }}
        >
          {" "}
          {communityDetails.selectedCryptoAsset.name
            ? communityDetails.selectedCryptoAsset.name
            : "Aptos"}
        </Text>{" "}
        to be able to join the community
      </Text>
    </View>
  );
};

export default SelectedAssetView;
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
    color: appColor.kWhiteColor,
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
