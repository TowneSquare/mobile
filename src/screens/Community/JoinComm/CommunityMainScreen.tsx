import React from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { sizes } from "../../../utils";

import { images } from "../../../constants/images";

import ImageStack from "../../../components/Notification/ImageStack";
import { appColor } from "../../../constants";

import CommunityTab from "../../../navigations/CommunityTabNav";
import CommunityAvatar from "../../../../assets/images/svg/CommunityAvatar";
import { SafeAreaView } from "react-native-safe-area-context";
import CommunityHeader from "../../../shared/Community/CommunityHeader";
import Feather from "react-native-vector-icons/Feather";
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
          style={{}}
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

          <View style={styles.row}>
            <ImageStack />
            <Text style={styles.text}>13K members</Text>
          </View>
          <CommunityTab />
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
});

export default CommunityMainScreen;
