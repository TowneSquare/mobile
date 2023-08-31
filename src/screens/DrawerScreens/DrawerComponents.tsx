import { View, Text, Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../utils";
const size = new sizes(height, width);
import { Avatar } from "react-native-elements";
import BarCode from "../../../assets/images/svg/Barcode";
import { images, fonts } from "../../constants";
import TowneSquareIcon from "../../../assets/images/svg/TowneSquareIcon";
import SettingsIcon from "../../../assets/images/svg/SettingsIcon";
import CalendarIcon from "../../../assets/images/svg/CalendarIcon";
import QuestionIcon from "../../../assets/images/svg/QuestionIcon";
import LogOutIcon from "../../../assets/images/svg/LogOutIcon";
import BookmarkLogo from "../../../assets/images/svg/BookmarkLogo";
import { useFonts } from "expo-font";
import { appColor } from "../../constants";
import Constants from "expo-constants";
const DrawerComponents = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.kgrayDark2,
      }}
    >
      <View
        style={{
          marginHorizontal: size.getWidthSize(16),
          marginTop: size.getHeightSize(32) + Constants.statusBarHeight,
          flexDirection: "row",

          gap: size.getWidthSize(12),

          alignItems: "center",
        }}
      >
        <Avatar
          source={images.Aptomingos}
          rounded
          size={size.getHeightSize(40)}
        />
        <View>
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(16),
              lineHeight: size.getHeightSize(21),
              fontFamily: "Outfit-SemiBold",
            }}
          >
            @realjczhang
          </Text>
          <Text
            style={{
              color: appColor.primaryLight,
              fontSize: size.fontSize(14),
              lineHeight: size.getHeightSize(18),
              fontFamily: "Outfit-Regular",
            }}
          >
            jczhang.apt
          </Text>
        </View>
        <BarCode
          style={{
            marginLeft: "auto",
          }}
        />
      </View>
      <View
        style={{
          marginTop: size.getHeightSize(16),
          marginHorizontal: size.getWidthSize(16),
          flexDirection: "row",
          backgroundColor: appColor.kGrayscaleDart,
          borderRadius: 10,
          paddingHorizontal: size.getWidthSize(8),
          justifyContent: "space-between",
        }}
      >
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>Communities</Text>
          <Text style={styles.tagSubText}>24</Text>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>Following</Text>
          <Text style={styles.tagSubText}>72K</Text>
        </View>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>Followers</Text>
          <Text style={styles.tagSubText}>24K</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <View
          style={[styles.textContainer, { marginTop: size.getHeightSize(10) }]}
        >
          <TowneSquareIcon />
          <Text style={styles.navigationText}>TowneSquare Purple</Text>
        </View>
        <View style={styles.textContainer}>
          <BookmarkLogo />
          <Text style={styles.navigationText}>Bookmarks</Text>
        </View>
        <View
          style={[
            styles.textContainer,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: appColor.grayDark,
              alignItems: "center",
            },
          ]}
        >
          <View
            style={[styles.textContainer, { marginTop: size.getHeightSize(0) }]}
          >
            <CalendarIcon />
            <Text style={[styles.navigationText, { flex: 1 }]}>Calendar</Text>
            <Text
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: "Outfit-Regular",
              }}
            >
              Coming soon
            </Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <SettingsIcon />
          <Text style={styles.navigationText}>Settings</Text>
        </View>
        <View style={styles.textContainer}>
          <QuestionIcon />
          <Text style={styles.navigationText}>Support</Text>
        </View>
        <View style={styles.textContainer}>
          <LogOutIcon />
          <Text style={styles.navigationText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerComponents;
const styles = StyleSheet.create({
  tagContainer: {
    gap: size.getWidthSize(12),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: size.getHeightSize(8),
  },
  tagText: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(13),
    lineHeight: size.getHeightSize(16),
    fontFamily: "Outfit-Regular",
  },
  tagSubText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Bold",
  },
  navigationText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
  },
  textContainer: {
    flexDirection: "row",
    gap: size.getWidthSize(12),
    alignItems: "center",
    paddingVertical: size.getHeightSize(10),
    marginTop: size.getHeightSize(8),
  },
});
