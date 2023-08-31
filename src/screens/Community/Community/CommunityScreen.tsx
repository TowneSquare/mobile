import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor, fonts, images } from "../../../constants";
import { StatusBar } from "expo-status-bar";

import Camera from "../../../../assets/images/svg/Camera";
import { useFonts } from "expo-font";
import BellIcon from "../../../../assets/images/svg/BellIcon";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import CommunityStepCard from "../../../components/Community/Community/CommunityStepCard";
import { sizes } from "../../../utils";
import CommunityAbout from "../../../components/Community/Community/CommunityAbout";

import AntDesign from "@expo/vector-icons/AntDesign";
import CommunityAvatar from "../../../../assets/images/svg/CommunityAvatar";
import { useAppDispatch, useAppSelector } from "../../../controller/hooks";
import CommunityTab from "../../../navigations/CommunityTabNav";
import CommunityHeader from "../../../shared/Community/CommunityHeader";
import CommunityFeed from "../../../components/Community/Community/CommunityFeed";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const CommunityScreen = () => {
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
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.signUpBackground} />
      <CommunityHeader title="Community X" />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={styles.imgPlaceHolder}>
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
                  fontSize: size.fontSize(16),
                  lineHeight: size.getHeightSize(24),
                }}
              >
                Upload
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: size.getWidthSize(10),
              marginTop: size.getHeightSize(6),
              paddingRight: size.getWidthSize(16),
            }}
          >
            <View>
              <CommunityAvatar
                size={size.getHeightSize(75)}
                style={{
                  position: "absolute",
                  bottom: size.getHeightSize(-24),
                  marginLeft: size.getWidthSize(16),
                }}
              />
            </View>
            <Text
              style={{
                color: appColor.kTextColor,
                fontSize: size.fontSize(20),
                lineHeight: size.getHeightSize(24),
                letterSpacing: 0.4,
                fontFamily: "Outfit-Bold",
                marginLeft: size.getWidthSize(85),
                flex: 1,
              }}
            >
              Community X
            </Text>
            <BellIcon size={size.getHeightSize(20)} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: size.getHeightSize(18),
              gap: size.getWidthSize(8),
              marginLeft: size.getWidthSize(26),
            }}
          >
            <Avatar source={images.profileImage} rounded size={24} />
            <Text
              style={{
                color: appColor.kWhiteColor,
                fontSize: size.fontSize(16),
                lineHeight: size.getHeightSize(21),
                fontFamily: "Outfit-Regular",
              }}
            >
              {N0_OF_MEMBERS > 1
                ? `${N0_OF_MEMBERS} members`
                : `${N0_OF_MEMBERS} member`}
            </Text>
          </View>
          <CommunityStepCard />
          {/* <View
            style={{
              flex: 1,
              marginTop: size.getHeightSize(16),
            }}
          >
          
          </View> */}
          {/* <CommunityTab /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgPlaceHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.grayDark,
    height: size.getHeightSize(124),
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

export default CommunityScreen;
