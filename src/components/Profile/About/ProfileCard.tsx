import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { appColor } from "../../../constants";
import { useFonts } from "expo-font";
import { fonts } from "../../../constants";
import { images } from "../../../constants";
import { sizes } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../controller/hooks";
import PurpleBadge from "../../../../assets/images/svg/PurpleBadge";
import GreenBadge from "../../../../assets/images/svg/GreenBadge";
import BlueBadge from "../../../../assets/images/svg/BlueBadge";
import TowneSquareProfileLogo from "../../../../assets/images/svg/TowneSquareProfileLogo";
import { LinearGradient } from "expo-linear-gradient";
import TownesquareGradient from "../../../../assets/images/svg/TownesquareGradient";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
interface Props {
  NAME: string;
  NICKNAME: string;
  APTOS_DOMAIN_NAME: string;
  DATE: string;
  FOLLOWING: string;
  FOLLOWERS: string;
  COMMUNITIES: string;
  POST: string;
  profileImageUri: string;
  BADGES: string[];
}

const ProfileCard = ({
  APTOS_DOMAIN_NAME,
  NAME,
  NICKNAME,
  DATE,
  COMMUNITIES,
  FOLLOWERS,
  FOLLOWING,
  POST,
  profileImageUri,
  BADGES
}: Props) => {
  const navigation = useNavigation();
  const profilePics = useAppSelector(
    (state) => state.USER.UserData.profileImage
  );
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const colors = [
    "#DDC1E1",
    "#F1C6DD",
    "#C1A4E8",
    "#B8E2FB",
    "#F2EFE8",
    "#F9DCDD",
    "#C7EDEB",
    "#E1C1E5",
    "#E7F5EB",
    "#EDF2E9",

    "#BDAFE3",
  ];
  const numberOfColors = colors.length;
  const stepSize = 1 / (numberOfColors - 1);
  const locations = Array.from(
    { length: numberOfColors },
    (_, index) => index * stepSize
  );

  return (
    <View style={[styles.view1]}>
      <View style={{}}>
        <View
          style={{
            position: "relative",
            backgroundColor: "#9D9D9D",

            borderRadius: 10,
            // height: size.getHeightSize(207),
          }}
        >
          <View
            style={{
              position: "relative",
              backgroundColor: "#060606",
              borderRadius: 10,
              top: size.getHeightSize(1),
            }}
          >
            <LinearGradient
              colors={[
                "#3D4043",
                "#292D30",
                "#313436",
                "#292B2C",
                "#292A2C",
                "#111214",
              ]}
              locations={[0.0152, 0.3642, 0.479, 0.5846, 0.724, 1]}
              start={[-0.18, 0.01]}
              end={[0.7, 0.99]}
              style={{
                paddingHorizontal: size.getWidthSize(16),
                paddingTop: size.getHeightSize(16),
                paddingBottom: size.getHeightSize(12.38),
                borderRadius: 10,
                marginBottom: size.getHeightSize(1),
              }}
            >
              <Image
                source={images.profileVector}
                style={{
                  position: "absolute",
                  bottom: 0,
                  marginTop: size.getHeightSize(16),
                  height: size.getHeightSize(185),
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                resizeMode="cover"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: size.getWidthSize(1.5),
                    gap: size.getWidthSize(4),
                  }}
                >
                  <TowneSquareProfileLogo />
                  <TownesquareGradient
                    style={{ marginTop: size.getHeightSize(3) }}
                  />
                </View>
                <View
                  style={{ flexDirection: "row", gap: size.getWidthSize(8) }}
                >
                  {BADGES.includes("ts_purple") && <PurpleBadge />}
                  {BADGES.includes("community_check") && <GreenBadge />}
                  {BADGES.includes("partner") && <BlueBadge />}
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: size.getWidthSize(12),
                  marginTop: size.getHeightSize(13),
                }}
              >
                <LinearGradient
                  colors={colors}
                  locations={locations}
                  style={styles.imageShadow}
                  start={[0, 1]}
                  end={[1, 0.95]}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: profileImageUri
                        ? profileImageUri
                        : Image.resolveAssetSource(images.profilepicture).uri,
                    }}
                    resizeMode="center"
                  />
                </LinearGradient>

                <View style={{}}>
                  <Text
                    style={{
                      color: appColor.kTextColor,
                      fontFamily: "Outfit-SemiBold",
                      fontSize: size.fontSize(16),
                      lineHeight: size.getHeightSize(21),
                    }}
                  >
                    {NAME}
                  </Text>
                  <Text
                    style={{
                      color: appColor.kGrayscale,
                      fontSize: size.fontSize(16),
                      fontFamily: "Outfit-Regular",
                      lineHeight: size.getHeightSize(21),
                    }}
                  >
                    @{NICKNAME}
                  </Text>
                  <Text
                    style={{
                      color: appColor.kSecondaryButtonColor,
                      fontFamily: "Outfit-SemiBold",
                      fontSize: size.fontSize(16),
                    }}
                  >
                    {`${APTOS_DOMAIN_NAME}.apt`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: size.getHeightSize(42),
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Outfit-SemiBold",
                    color: "#E1E1E1",
                    fontSize: size.fontSize(14),
                    letterSpacing: 0.44,
                  }}
                >{`REGISTERED SINCE ${DATE}`}</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <Pressable
          onPress={() =>
            navigation.navigate("FollowersScreen", { screen: "Following" })
          }
          style={styles.view2Box}
        >
          <Text style={styles.view2TextUp}>{FOLLOWING}</Text>
          <Text style={styles.view2TextDown}>Following</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("FollowersScreen", { screen: "Followers" })
          }
          style={styles.view2Box}
        >
          <Text style={styles.view2TextUp}>{FOLLOWERS}</Text>
          <Text style={styles.view2TextDown}>Followers</Text>
        </Pressable>
        <Pressable style={styles.view2Box}>
          <Text style={styles.view2TextUp}>{POST}</Text>
          <Text style={styles.view2TextDown}>Post</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // navigation.navigate('FollowersScreen', { screen: 'Communities' })
          }}
          style={styles.view2Box}
        >
          {/* <Text style={styles.view2TextUp}>{COMMUNITIES}</Text> */}
          <Text style={styles.view2TextDown}>Communities</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  view1: {
    borderRadius: 10,
    marginTop: size.getHeightSize(16),
    backgroundColor: appColor.kgrayDark2,
    marginHorizontal: size.getWidthSize(16),
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: "Outfit-Bold",
    paddingLeft: 5,
  },
  shadowProp: {
    shadowColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: size.getHeightSize(8),
    marginHorizontal: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(8),
  },
  view2Box: {
    justifyContent: "center",
    alignItems: "center",
  },
  view2TextUp: {
    fontFamily: "Outfit-SemiBold",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
  },
  view2TextDown: {
    fontFamily: "Outfit-Regular",
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
  },
  aboutDiv: {
    marginVertical: 20,
  },
  aboutHeader: {
    color: appColor.kTextColor,
    fontFamily: "Outfit-Bold",
    fontSize: size.fontSize(20),
    paddingBottom: 10,
  },
  aboutText: {
    color: appColor.kTextColor,
    fontFamily: "Outfit-Regular",
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    height: size.getHeightSize(39),
  },
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-SemiBold",
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
  },
  tab: {
    backgroundColor: "transparent",
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
  imageContainer: {},
  image: {
    width: size.getHeightSize(84),
    height: size.getHeightSize(84),
    borderRadius: 200,
    marginBottom: size.getHeightSize(2),
  },
  imageShadow: {
    width: size.getHeightSize(84),
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
