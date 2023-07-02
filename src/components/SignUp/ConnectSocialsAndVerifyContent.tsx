import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../utils";
import { appColor } from "../../constants";
import User from "../../../assets/images/svg/User";
import Link from "../../../assets/images/svg/Link";
import NickNameField from "./NickNameField";
import UsernameField from "./UsernameField";
import SealChecks from "../../../assets/images/svg/SealChecks";
import Clap from "../../../assets/images/svg/Clap";
import Robot from "../../../assets/images/svg/Robot";
import UserFriends from "../../../assets/images/svg/UserFriends";
const size = new sizes(height, width);

const ConnectSocialsAndVerifyContent = () => {
  return (
    <>
      <View
        style={{
          marginTop: size.getHeightSize(32),
          alignSelf: "center",
        }}
      >
        <Link />
      </View>
      <View
        style={{
          // height: size.getHeightSize(37),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(29),
            fontFamily: "Outfit-Bold",
            textAlign: "center",
            marginTop: size.getHeightSize(8),
            lineHeight: size.getHeightSize(37),
          }}
        >
          Connect socials & verify
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: size.getHeightSize(8),
          width: size.getWidthSize(304),
          marginHorizontal: size.getWidthSize(16),
        }}
      >
        <Text
          style={{
            color: appColor.kTextColor,
            fontSize: size.fontSize(16),
            fontFamily: "Outfit-Regular",
            textAlign: "center",
            lineHeight: size.getHeightSize(21),
          }}
        >
          Connect your socials, help us fight bots, and get rewarded!
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <View
        style={{
          width: size.getWidthSize(328),
          alignSelf: "center",
          height: size.getHeightSize(224),
          alignItems: "center",
        }}
      >
        <View style={[styles.row]}>
          <SealChecks />
          <Text style={styles.description}>
            Gain status points in TowneSquare
          </Text>
        </View>
        <View style={styles.row}>
          <UserFriends />
          <Text style={styles.description}>Find your friends faster</Text>
        </View>
        <View style={styles.row}>
          <Clap />
          <Text style={styles.description}>Build trust with others</Text>
        </View>
        <View style={styles.row}>
          <Robot />
          <Text style={styles.description}>Bye to bots & spammers</Text>
        </View>
      </View>
      <View style={{ flex: 1 }} />
    </>
  );
};

export default ConnectSocialsAndVerifyContent;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: size.getHeightSize(56),
    width: size.getWidthSize(339),
    alignSelf: "center",
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(12),
    gap: size.getWidthSize(8),
  },
  description: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    lineHeight: size.getHeightSize(21),
  },
});
