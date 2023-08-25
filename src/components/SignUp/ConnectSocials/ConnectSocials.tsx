import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { sizes } from "../../../utils";
import { appColor } from "../../../constants";
import DiscordBG from "../../../../assets/images/svg/DiscordBG";
import TwitterBG from "../../../../assets/images/svg/TwitterBg";
import Checked from "../../../../assets/images/svg/Checked";
import Header from "../Header";
import Link from "../../../../assets/images/svg/Link";

const { width, height } = Dimensions.get("window");
const size = new sizes(height, width);

const ConnectSocials = () => {
  const [isTwitterConected, setTwitterConnected] = useState(false);
  const [isDiscordConnected, setDiscordConnected] = useState(false);

  const handleTwitterConnection = () => {
    setTwitterConnected(!isTwitterConected);
  };
  const handleDiscordConnection = () => {
    setDiscordConnected(!isDiscordConnected);
  };

  return(
    <SafeAreaView>
      <View
        style={{
          flex: 1,
        }}
      />
      <Header 
        SvgImage={<Link />}
        title="Connect your socials"
        subtitle="Connect both to receive extra credentials in your profile"
        subTitleWidth={328}
      />
      <View
        style={{
          height: size.getHeightSize(343),
          width: size.getWidthSize(328),
          alignSelf: "center",
          justifyContent: "center",
          gap: size.getHeightSize(16),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TwitterBG />

          <Text style={styles.socialText}>Twitter</Text>
          {isTwitterConected ? (
            <Pressable
              onPress={handleTwitterConnection}
              style={styles.isConnected}
            >
              <Checked />
              <Text style={styles.isConnectedText}>Connected</Text>
            </Pressable>
          ) : (
            <Pressable onPress={handleTwitterConnection} style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <DiscordBG />
          <Text style={styles.socialText}>Discord</Text>
          {isDiscordConnected ? (
            <Pressable
              onPress={handleDiscordConnection}
              style={styles.isConnected}
            >
              <Checked />
              <Text style={styles.isConnectedText}>Connected</Text>
            </Pressable>
          ) : (
            <Pressable onPress={handleDiscordConnection} style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ConnectSocials;

const styles = StyleSheet.create({
  socialText: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    paddingLeft: size.getWidthSize(16),
    color: appColor.kTextColor,
    flex: 1,
    lineHeight: size.getHeightSize(16),
    fontStyle: "normal",
  },
  button: {
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    justifyContent: "center",
    height: size.getHeightSize(38),
    // width: size.getWidthSize(100),
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  isConnected: {
    paddingVertical: size.getHeightSize(10),
    justifyContent: "center",
    flexDirection: "row",
    width: size.getWidthSize(113),
    height: size.getHeightSize(38),
    gap: size.getWidthSize(8),
    alignItems: "center",
  },
  isConnectedText: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
    fontStyle: "normal",
  },
});