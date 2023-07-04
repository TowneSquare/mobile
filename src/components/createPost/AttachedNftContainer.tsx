import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import React, { useState, useContext } from "react";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { sizes } from "../../utils";
import { updatePostNft } from "../../controller/createPost";
import { useAppDispatch } from "../../controller/hooks";
const size = new sizes(height, width);
import RemoveAttachment from "../../../assets/images/svg/RemoveAttachment";
const AttachedNftContainer = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={images.NftCollection}
          style={{ height: "100%", width: "100%", borderRadius: 8 }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.row}>
          <Avatar
            size={size.getHeightSize(16)}
            rounded
            source={images.collectionImage}
          />
          <Text style={styles.name}>Aptomingos</Text>
        </View>
        <Text style={styles.id}>Aptomingos #9280</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(updatePostNft(null))}
        activeOpacity={0.2}
        style={{
          position: "absolute",
          right: size.getWidthSize(0),
          top: size.getHeightSize(8),
        }}
      >
        <RemoveAttachment />
      </TouchableOpacity>
    </View>
  );
};

export default AttachedNftContainer;
const styles = StyleSheet.create({
  container: {
    height: size.getHeightSize(322),
    width: size.getWidthSize(280),
    alignSelf: "flex-start",
    marginLeft: size.getWidthSize(64),
  },
  imageContainer: {
    height: size.getHeightSize(267),
    width: size.getWidthSize(280),
  },
  descriptionContainer: {
    marginLeft: size.getWidthSize(8),
    marginTop: size.getHeightSize(8),
  },
  row: {
    flexDirection: "row",
    gap: size.getWidthSize(4),
    alignItems: "center",
  },
  name: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
  },
  id: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Medium",
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(8),
  },
});
