import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import CommunityAvatar from "../../../../assets/images/svg/CommunityAvatar";

import RenderDescription from "../../../components/Community/JoinCommunity/Description";
import ImageStack from "../../../shared/Feed/ImageStack";
import { appColor, images } from "../../../constants";
import { sizes } from "../../../utils/size";
import PinnedPost from "../../../components/Community/JoinCommunity/PinnedPost";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import CommunityHeader from "../../../shared/Community/CommunityHeader";
import ForYou from "../../../components/Feed/ForYou";
import CommunityModal from "../../../components/Community/JoinCommunity/JoinModal";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const data = {
  id: "1",
  pfp: "",
  username: "Real JC",
  nickname: "Real",
  timepost: "6d",
  comments: "99k",
  retweet: "99k",
  like: "99k",
  type: "message only",
  content: {
    message: "Just joined TowneSquare, a new web3 social platform!",
  },
};

const CommunityInfoScreen = () => {
  const navigation = useNavigation();
  const [showEligibilityBottomSheet, setEligibilitySheetVisibility] =
    useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <CommunityHeader title="Community X" />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: size.getHeightSize(124),
            }}
          >
            <Image
              resizeMode="cover"
              style={{
                height: "100%",
                width: "100%",
              }}
              source={images.SiothianCommunity}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: size.getWidthSize(10),
              marginTop: size.getHeightSize(6),
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
                textAlign: "center",
                marginLeft: size.getWidthSize(85),
              }}
            >
              Community X
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: size.getWidthSize(26),
              marginVertical: size.getHeightSize(16),
              alignItems: "center",
            }}
          >
            <ImageStack />
            <Text style={styles.text}> 13K members</Text>
          </View>

          <RenderDescription
            showCategories={true}
            description="Description lorem ispum et quotindolor sit amet quot amet ipuet ipuet ipuet ipuet ipuet ipusm dolorit emoit escription lorem ispum et quoti ndolor sit amet qum dolorit emoi"
            link="www.site.com"
          />
          <Text style={styles.textTitle}>2 pinned posts</Text>
          <PinnedPost />
          <Text
            style={[styles.textTitle, { marginTop: size.getHeightSize(16) }]}
          >
            Community posts
          </Text>
          <ForYou data={data} />
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          backgroundColor: appColor.kgrayDark2,
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("CommunityWelcomeScreen")}
          style={{
            minHeight: size.getHeightSize(48),
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: appColor.kSecondaryButtonColor,
            borderRadius: 40,
            marginTop: size.getHeightSize(16),
            marginBottom: size.getHeightSize(24),
          }}
        >
          <Text
            style={{
              color: appColor.kTextColor,
              fontSize: size.fontSize(18),
              letterSpacing: 0.36,
              fontFamily: "Outfit-Medium",
              textAlign: "center",
            }}
          >
            Join community
          </Text>
        </Pressable>
        {/* <Text style={styles.eligibilityText}>
          You are not eligible to join this community
          </Text>
          <Pressable
          onPress={() => {
            setEligibilitySheetVisibility(true);
          }}
          style={styles.requirementButton}
        >
          <Text style={styles.buttonText}>See requirements</Text>
        </Pressable> */}
      </View>
      <CommunityModal
        visibility={showEligibilityBottomSheet}
        onClose={() => setEligibilitySheetVisibility(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.feedBackground,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: "400",
    fontFamily: "Outfit-Regular",
    paddingLeft: size.getWidthSize(36),
  },

  textTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: "700",
    paddingHorizontal: size.getWidthSize(16),
    paddingBottom: size.getHeightSize(10),
    fontFamily: "Outfit-Regular",
  },
  eligibilityText: {
    color: appColor.kErrorText,
    fontSize: size.fontSize(14),
    letterSpacing: 0.36,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    lineHeight: size.getHeightSize(23),
    paddingVertical: size.getHeightSize(16),
  },
  requirementButton: {
    minHeight: size.getHeightSize(48),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 40,
    marginBottom: size.getHeightSize(24),
  },
  buttonText: {
    color: appColor.kButtonTextColor,
    fontSize: size.fontSize(18),
    letterSpacing: 0.36,
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    lineHeight: size.getHeightSize(23),
  },
});

export default CommunityInfoScreen;
