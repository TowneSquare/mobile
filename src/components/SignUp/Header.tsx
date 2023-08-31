import {
  View,
  Text,
  Dimensions,
} from "react-native";
import { ReactNode } from "react";
import { useFonts } from "expo-font";
import { appColor, fonts } from "../../constants";
import { sizes } from "../../utils";

const { height, width } = Dimensions.get("window");
interface Props {
title: string;
subtitle: string;
SvgImage: ReactNode;
addOpacity?: boolean;
subTitleWidth?: number;
iconMarginTop?: number;
}
const Header = ({
  title,
  subtitle,
  SvgImage,
  addOpacity,
  subTitleWidth,
  iconMarginTop,
  }: Props) => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }

  const size = new sizes(height, width);
  return (
    <>
        <View
            style={{
            marginTop: iconMarginTop ? iconMarginTop : size.getHeightSize(32),
            alignSelf: "center",
            }}
        >
            {SvgImage}
        </View>
        <View
            style={{
            marginHorizontal: size.getWidthSize(16),
            }}
        >
            <Text
            style={{
                color: addOpacity
                ? appColor.kWhiteColorWithOpacity
                : appColor.kTextColor,
                fontSize: size.fontSize(29),
                fontFamily: "Outfit-Bold",
                textAlign: "center",
                marginTop: size.getHeightSize(8),
                lineHeight: size.getHeightSize(37),
            }}
            >
            {title}
            </Text>
        </View>
        <View
            style={{
            alignSelf: "center",
            marginTop: size.getHeightSize(8),
            width: subTitleWidth ? size.getWidthSize(subTitleWidth) : undefined,
            marginHorizontal: size.getWidthSize(16),
            }}
        >
            <Text
            style={{
                color: addOpacity
                ? appColor.kWhiteColorWithOpacity
                : appColor.kTextColor,
                fontSize: size.fontSize(16),
                fontFamily: "Outfit-Regular",
                textAlign: "center",
                lineHeight: size.getHeightSize(21),
            }}
            >
            {subtitle.replace(/\\n/g, "\n")}
            </Text>
        </View>
        <View style={{ flex: 1 }} />
    </>
  );
};

export default Header;