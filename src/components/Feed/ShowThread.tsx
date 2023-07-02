import { View, Text, Dimensions } from "react-native";
import { sizes } from "../../utils";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { appColor, fonts } from "../../constants";
import React from "react";

const ShowThread = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <Text
      style={{
        marginBottom: size.getHeightSize(22),
        fontFamily: "Outfit-Regular",
        color: appColor.primary300,
        fontSize: size.fontSize(14),
        lineHeight: size.getHeightSize(20),
      }}
    >
      Show this thread
    </Text>
  );
};

export default ShowThread;
