import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React from "react";
import { sizes } from "../../utils";
import { appColor, fonts, images } from "../../constants";
import { useFonts } from "expo-font";
import Queen from "../../../assets/images/svg/Queen";
const { height, width } = Dimensions.get("window");
import { useAppDispatch } from "../../controller/hooks";
import { updateReportingModal } from "../../controller/FeedsController";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
const size = new sizes(height, width);
interface Props {
  username: string;
  nickname: string;
  timepost: string;
}
const PostHeader = ({ username, nickname, timepost }: Props) => {
  const dispatch = useAppDispatch();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const showModal = () => {
    dispatch(updateReportingModal(true));
  };
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: size.getWidthSize(4),
          width: size.getWidthSize(214),
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: size.fontSize(17),
            color: appColor.kTextColor,
            fontFamily: "Outfit-Medium",
            lineHeight: size.getHeightSize(21),
            maxWidth: size.getWidthSize(74),
          }}
        >
          {username}
        </Text>
        <Queen />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(15),
            lineHeight: size.getHeightSize(18),
            fontFamily: "Outfit-Regular",
            maxWidth: size.getWidthSize(67),
          }}
        >
          @{nickname}
        </Text>
        <Text
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(15),
            lineHeight: size.getHeightSize(18),
            fontFamily: "Outfit-Bold",
          }}
        >
          •
        </Text>
        <Text
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(15),
            lineHeight: size.getHeightSize(18),
            fontFamily: "Outfit-Regular",
          }}
        >
          {timepost}
        </Text>
      </View>
      <View
        style={{
          alignSelf: "flex-end",
        }}
      >
        <Pressable onPress={showModal}>
          <Image source={images.More} />
        </Pressable>
      </View>
    </View>
  );
};

export default PostHeader;
