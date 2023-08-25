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
const size = new sizes(height, width);
interface Props {
  steps: number;
  stepDescription?: string;
  title?: string;
  sub_title?: string;
  SvgImage?: ReactNode;
  addOpacity?: boolean;
  subTitleWidth?: number;
  subTitleHeight?: number;
  iconMarginTop?: number;
}
const ScrollableProfileSetUpHeader = ({
  steps,
  stepDescription,
  title,
  sub_title,
  SvgImage,
  addOpacity,
  subTitleWidth,
  subTitleHeight,
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
  return (
    <>
      <View
        style={{
          alignSelf: "center",
          marginTop: size.getHeightSize(38),
        }}
      >
        <Text
          style={{
            color: addOpacity
              ? appColor.kWhiteColorWithOpacity
              : appColor.kTextColor,
            fontFamily: "Outfit-Regular",
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            width: size.getWidthSize(257),
          }}
        >
          {stepDescription}
        </Text>
        <View
          style={{
            marginTop: size.getHeightSize(8),
            width: size.getWidthSize(306),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 1
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: 2,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 2
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: size.getHeightSize(2),
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 3
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: size.getHeightSize(2),
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 4
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: size.getHeightSize(2),
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 5
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: size.getHeightSize(2),
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor:
                steps >= 6
                  ? addOpacity
                    ? appColor.kSecondaryButtonColorWithOpacity
                    : appColor.kSecondaryButtonColor
                  : appColor.kStatusBarNaviDark,
              height: size.getHeightSize(2),
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: iconMarginTop ? iconMarginTop : size.getHeightSize(32),
          alignSelf: "center",
        }}
      >
        {SvgImage}
      </View>
    </>
  );
};

export default ScrollableProfileSetUpHeader;
