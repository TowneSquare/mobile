import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Bell from "../../../assets/images/svg/Bell";
import Camera from "../../../assets/images/svg/Camera";
import CommunityAbout from "../../components/Community/CommunityAbout";
import CommunityFeed from "../../components/Community/CommunityFeed";
import CommunityHeader from "../../components/Community/CommunityHeader";
import CommunityStepCard from "../../components/Community/CommunityStepCard";
import { appColor, fonts, images } from "../../constants";
import { useAppSelector } from "../../controller/hooks";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);


const Community = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const [view, setView] = useState<number>(1);
  const [refreshing, setRefreshing] = useState(false);
  const verificationStatus = useAppSelector(
    (state) => state.COMMUNITY.verificationStatus
  );

  const N0_OF_MEMBERS = 1;

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  //   console.log("refresh", CommunityCardStepDetails.length, verificationStatus == VerifyCommunityState.APPROVED)
  // }, []);

  const COMMUNITY_FEED_AND_ABOUT =
    view == 2 ? <CommunityAbout /> : <CommunityFeed />;
  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
        position: "relative",
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <CommunityHeader title="Community X" typeOfProfile="myProfile" />
      <ScrollView stickyHeaderIndices={[3]}>
        <View>
          <View style={styles.imgPlaceHolder}>
            <Pressable>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Camera />
                <Text
                  style={{
                    color: appColor.klightPurple,
                    fontFamily: "Outfit-Regular",
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  Upload
                </Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              position: "absolute",
              top: 110,
              left: 16,
            }}
          >
            <Image style={styles.img} source={images.aptosMonkey1} />

          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
                paddingRight: 16,
              }}
            >
              <Text
                style={{
                  color: appColor.kWhiteColor,
                  fontSize: 20,
                  fontWeight: "600",
                  fontFamily:"Outfit-Medium"
                }}
              >
                Community X
              </Text>
              <Bell />
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 32,
            marginTop: 32,
          }}
        >
          <Avatar source={images.profileImage} rounded size={24} />
          <Text
            style={{
              color: appColor.kWhiteColor,
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "400",
              fontFamily: "Outfit-Regular",
            }}
          >
            {N0_OF_MEMBERS > 1
              ? `${N0_OF_MEMBERS} members`
              : `${N0_OF_MEMBERS} member`}
          </Text>
        </View>
        <CommunityStepCard />
        <View>
          <View style={styles.tabView}>
            <Pressable
              style={view == 1 ? styles.focusedTab : styles.tab}
              onPress={() => {
                setView(1);
              }}
            >
              <Text style={view == 1 ? styles.focusedtabText : styles.tabText}>
                Feed
              </Text>
            </Pressable>
            <Pressable
              style={view == 2 ? styles.focusedTab : styles.tab}
              onPress={() => {
                setView(2);
              }}
            >
              <Text style={view == 2 ? styles.focusedtabText : styles.tabText}>
                About
              </Text>
            </Pressable>
          </View>
        </View>
        <View>{COMMUNITY_FEED_AND_ABOUT}</View>
      </ScrollView>
      {view == 1 ? (
        <View
          style={{
            position: "absolute",
            bottom: 20,
            right: 16,
          }}
        >
          <Pressable
            style={{
              height: 56,
              backgroundColor: appColor.kSecondaryButtonColor,
              width: 146,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign name="plus" size={25} color={appColor.kTextColor} />
            <Text
              style={{
                color: appColor.kWhiteColor,
                textAlign: "center",
                fontFamily: "Outfit-Regular",
                marginLeft: 8,
              }}
            >
              Create Post
            </Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgPlaceHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.grayDark,
    height: 152,
  },
  img: {
    width: 75,
    height: 75,
  },
  tabView: {
    flexDirection: "row",
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 40,
    width: size.getWidthSize(344),
    paddingVertical: size.getHeightSize(4),
    marginBottom: size.getHeightSize(8),
    alignSelf: "center",
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(12),
    justifyContent: "center",
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    minHeight: size.getHeightSize(36),
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
    paddingVertical: size.getHeightSize(12),
    justifyContent: "center",
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
});

export default Community;
