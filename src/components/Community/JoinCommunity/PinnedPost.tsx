import { Text, Dimensions, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { sizes } from "../../../utils";
import { appColor, images } from "../../../constants";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { useNavigation } from "@react-navigation/native";
const PinnedPost = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("PinnedPostsScreen")}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: size.getWidthSize(10),
        paddingHorizontal: size.getWidthSize(16),
        paddingBottom: size.getHeightSize(8),
        borderBottomWidth: 1,
        borderBottomColor: appColor.kgrayDark2,
      }}
    >
      <Avatar
        source={images.Comm_Avatar2}
        rounded
        size={size.getHeightSize(40)}
      />
      <Text style={styles.description}>
        New announcement coming soon! Stay tuned for the latest news regarding
        the drop for...
      </Text>
    </Pressable>
  );
};

export default PinnedPost;
const styles = StyleSheet.create({
  PinnedView: {
    flexDirection: "row",
    paddingHorizontal: size.getWidthSize(16),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: "400",
    fontFamily: "Outfit-Regular",
    flex: 1,
  },
});
