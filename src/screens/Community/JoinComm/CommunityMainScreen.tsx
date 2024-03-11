import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommunityAvatar from "../../../../assets/images/svg/CommunityAvatar";
import CommunityTab from "../../../components/Community/Community/CommunityTab/CommunityTab";
import AboutCommunity from "../../../components/Community/JoinCommunity/AboutCommunity";
import ForCommunityPosts from "../../../components/Community/JoinCommunity/UUserpost";
import { appColor } from "../../../constants";
import { images } from "../../../constants/images";
import CommunityHeader from "../../../shared/Community/CommunityHeader";
import ImageStack from "../../../shared/Feed/ImageStack";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const CommunityMainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommunityHeader title="Community X" />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
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
          <View style={styles.view}>
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
            <Text style={styles.communityName}>Community X</Text>
          </View>

          <View style={styles.row}>
            <ImageStack />
            <Text style={styles.text}>13K members</Text>
          </View>
          <CommunityTab views={[<ForCommunityPosts />, <AboutCommunity />]} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.feedBackground,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: size.getWidthSize(26),
    marginVertical: size.getHeightSize(20),
    alignItems: "center",
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
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: size.getWidthSize(10),
    marginTop: size.getHeightSize(6),
  },
  communityName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    marginLeft: size.getWidthSize(85),
  },
});

export default CommunityMainScreen;
