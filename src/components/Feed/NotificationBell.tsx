import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
import Bell from "../../../assets/images/svg/Bell";
import { useNavigation } from "@react-navigation/native";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
import { appColor, fonts } from "../../constants";
import { useFonts } from "expo-font";
const size = new sizes(height, width);
const NotificationBell = () => {
  const navigation = useNavigation();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <Pressable onPress={() => navigation.navigate("Notifications" as never)}>
      <Bell />
      <View
        style={{
          position: "absolute",
          backgroundColor: "#FF4471",
          height: size.getHeightSize(17),
          width: size.getHeightSize(17),
          borderRadius: 23,
          paddingHorizontal: size.getWidthSize(2),
          paddingVertical: size.getHeightSize(1.5),
          justifyContent: "center",
          right: size.getWidthSize(-5),
          top: size.getHeightSize(-1.5),
        }}
      >
        <Text
          style={{
            fontSize: size.fontSize(11),
            lineHeight: size.getHeightSize(14),
            fontFamily: "Outfit-Medium",

            color: appColor.kTextColor,
            textAlign: "center",
          }}
        >
          99
        </Text>
      </View>
    </Pressable>
  );
};

export default NotificationBell;
