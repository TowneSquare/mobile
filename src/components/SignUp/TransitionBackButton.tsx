import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import { appColor, fonts } from "../../constants";
import { useFonts } from "expo-font";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
interface Props {
  action: () => void;
}
const TransitionBackButton = ({ action }: Props) => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
  });
  if (!isLoaded) {
    return null;
  }
  const size = new sizes(height, width);
  return (
    <View
      style={{
        alignSelf: "center",
        width: size.getWidthSize(328),
        borderRadius: 40,
        // height: size.getHeightSize(48),
        justifyContent: "center",
        marginTop: size.getHeightSize(8),
        marginBottom: size.getHeightSize(16),
        paddingVertical: size.getHeightSize(16),
      }}
    >
      <Text
        onPress={() => {
          action();
        }}
        style={{
          fontStyle: "normal",
          textAlign: "center",
          color: appColor.kTextColor,
          fontSize: size.fontSize(18),
          fontFamily: "Outfit-Medium",

          lineHeight: size.getHeightSize(23),
          letterSpacing: 0.02,
        }}
      >
        Back
      </Text>
    </View>
  );
};

export default TransitionBackButton;
