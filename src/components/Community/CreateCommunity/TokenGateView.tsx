import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React, {  useContext } from "react";
const { height, width } = Dimensions.get("window");
import CommunityNFTIcon from "../../../../assets/images/svg/CommunityNFTIcon";
import CommunityNFT1 from "../../../../assets/images/svg/CommunityNFT1";
import CommunityNFT2 from "../../../../assets/images/svg/CommunityNFT2";
import AptosIcon from "../../../../assets/images/svg/AptosIcon";
import UsdcIcon from "../../../../assets/images/svg/UsdcIcon";
import TetherIcon from "../../../../assets/images/svg/TetherIcon";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
import { SetCommunityContext } from "../../../context/SetUpCommunityContext";
const size = new sizes(height, width);

const TokenGateView = () => {
  const { communityDetails, setCommunityDetails, updateViews } =
    useContext(SetCommunityContext);
  const assetType = communityDetails.asset;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Token gated it is!</Text>
      <Text style={[styles.title, { marginTop: size.getHeightSize(16) }]}>
        What asset do new members need to hold to join the community?
      </Text>
      <Text style={styles.titleDescription}>
        You can change this later in settings
      </Text>
      <View
        style={{
          paddingVertical: size.getHeightSize(33.5),
          gap: size.getHeightSize(16),
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={() => {
            setCommunityDetails({
              ...communityDetails,
              asset: "NFT",
            });
            updateViews("remove_cryto_asset_view");
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                assetType === "NFT"
                  ? "rgba(146, 100, 248, 0.40)"
                  : "transparent",
              borderWidth: assetType === "NFT" ? 3 : 1,
              borderColor:
                assetType === "NFT"
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.settingsLeadingText}>NFT</Text>
            <Text style={styles.settingsText}>
              New members will need to hold an NFT from the chosen collection.
            </Text>
          </View>
          <View
            style={{
              height: size.getHeightSize(84),
              width: size.getHeightSize(84),
              justifyContent: "center",
            }}
          >
            <CommunityNFTIcon
              size={size.getHeightSize(40)}
              style={{
                marginLeft: size.getWidthSize(13),
              }}
            />
            <CommunityNFT1
              size={size.getHeightSize(43)}
              style={{
                position: "absolute",
                right: size.getWidthSize(0),
                bottom: size.getHeightSize(0),
              }}
            />
            <CommunityNFT2
              size={size.getHeightSize(40)}
              style={{
                position: "absolute",
                right: size.getWidthSize(8.8),
                top: size.getHeightSize(4),
              }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setCommunityDetails({
              ...communityDetails,
              asset: "Crypto_asset",
            });
            updateViews("add_crypto_asset_view");
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                assetType === "Crypto_asset"
                  ? "rgba(146, 100, 248, 0.40)"
                  : "transparent",
              borderWidth: assetType === "Crypto_asset" ? 3 : 1,
              borderColor:
                assetType === "Crypto_asset"
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.settingsLeadingText}>Crypto asset</Text>
            <Text style={styles.settingsText}>
              New members will need to hold a crypto asset ($APT, $USDC etc.)
            </Text>
          </View>
          <View
            style={{
              height: size.getHeightSize(84),
              width: size.getHeightSize(84),
            }}
          >
            <UsdcIcon
              size={size.getHeightSize(40)}
              style={{ marginTop: size.getHeightSize(9.6) }}
            />
            <TetherIcon
              size={size.getHeightSize(40)}
              style={{
                position: "absolute",
                right: size.getWidthSize(24.98),
                bottom: size.getHeightSize(3.3),
              }}
            />
            <AptosIcon
              size={size.getHeightSize(40)}
              style={{
                position: "absolute",
                right: size.getWidthSize(0),
                top: size.getHeightSize(4),
              }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default TokenGateView;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Bold",
    lineHeight: size.getHeightSize(24),
    textAlign: "center",
    marginTop: size.getHeightSize(32),
    letterSpacing: 0.4,
  },
  titleDescription: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
    textAlign: "center",
    marginTop: size.getHeightSize(16),
  },
  settingsLeadingText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Bold",
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  settingsText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderColor: appColor.grayLight,
    borderRadius: 8,
  },
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
    fontFamily: "Outfit-SemiBold",
    lineHeight: size.getHeightSize(21),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
  },
});
