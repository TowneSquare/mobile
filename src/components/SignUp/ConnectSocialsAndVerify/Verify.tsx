import { View, Text, Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../../utils";
import { appColor } from "../../../constants";
import SealChecks from "../../../../assets/images/svg/SealChecks";
import Clap from "../../../../assets/images/svg/Clap";
import Robot from "../../../../assets/images/svg/Robot";
import UserFriends from "../../../../assets/images/svg/UserFriends";
import Header from "../Header";
import Link from "../../../../assets/images/svg/Link";
const size = new sizes(height, width);

const Verify = () => {
  return (
    <>
      <Header 
        SvgImage={<Link />}
        title="Connect Socials & Verify"
        subtitle="Connect your socials, help us fight bots, and get rewarded!"
        subTitleWidth={328}
      />
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

export default Verify;
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
