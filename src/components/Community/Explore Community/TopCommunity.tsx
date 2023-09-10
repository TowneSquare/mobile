import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React, { ReactNode } from "react";
import { sizes } from "../../../utils";
import CommunityCheck from "../../../../assets/images/svg/CommunityCheck";
import { appColor, images } from "../../../constants";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props {
  pfp: ReactNode;
  name: string;
  description: string;
}
const TopCommunity = ({ description, name, pfp }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: size.getWidthSize(8),
      }}
    >
      {pfp}
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: size.getWidthSize(8),
          }}
        >
          <Text style={styles.name}>{name}</Text>
          <CommunityCheck size={size.getHeightSize(18)} />
        </View>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <View style={styles.view3}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image style={styles.imageStyle} source={images.profileImage} />
            <Image style={styles.image2} source={images.myfeedProfileImage} />
            <Image style={styles.image3} source={images.stackImage} />
          </View>
          <Text style={styles.memberNo}>13k members</Text>
        </View>
      </View>
    </View>
  );
};

export default TopCommunity;
const styles = StyleSheet.create({
  imageStyle: {
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
  },
  image2: {
    position: "absolute",
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
    left: size.getWidthSize(7),
    borderRadius: 100,
  },
  image3: {
    position: "absolute",
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
    left: size.getWidthSize(15),
    borderRadius: 100,
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
    marginTop: size.getHeightSize(8),
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-SemiBold",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",

    gap: size.getWidthSize(8),
    marginTop: size.getHeightSize(12),
  },
  memberNo: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
    marginLeft: size.getWidthSize(14),
  },
});
