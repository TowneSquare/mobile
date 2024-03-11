import React from "react";
import {
  Dimensions,
  FlatList,
  Text,
  View
} from "react-native";
import CommunityAvatar2 from "../../../../assets/images/svg/CommunityAvatar2";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const RecommendedCommunity = () => {
  const names = [
    "Just Red Glasses Aptomingos",
    "Official French Aptomingos Community",
    "Official French Aptomingos Community",
  ];
  const renderTag = () => {
    return (
      <View
        style={{
          width: size.getWidthSize(140),
          minHeight: size.getHeightSize(190),
          gap: size.getHeightSize(8),
          alignItems: "center",
        }}
      >
        <CommunityAvatar2 size={size.getHeightSize(60)} />
        <View style={{ gap: size.getHeightSize(4) }}>
          <Text
            numberOfLines={2}
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              fontFamily: "Outfit-SemiBold",
              textAlign: "center",
            }}
          >
            Just Red Glasses Aptomingos
          </Text>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              fontFamily: "Outfit-Regular",
              textAlign: "center",
            }}
          >
            13k members
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFAD33",
            paddingVertical: size.getHeightSize(4),
            paddingHorizontal: size.getWidthSize(6),
            borderRadius: 2,
            elevation: 1,
          }}
        >
          <Text
            style={{
              color: appColor.kgrayDark2,
              fontSize: size.fontSize(11),
              lineHeight: size.getHeightSize(14),
              fontFamily: "Outfit-SemiBold",
              letterSpacing: 0.44,
              width: size.getWidthSize(65),
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            You HOLD their NFT!
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        renderItem={renderTag}
        data={names}
        horizontal
        contentContainerStyle={{
          gap: size.getWidthSize(8),
        }}
      />
    </View>
  );
};

export default RecommendedCommunity;
