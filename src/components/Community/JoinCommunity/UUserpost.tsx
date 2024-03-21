import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";
import { appColor } from "../../../constants";
import { sizes } from "../../../utils";
import ForYou from "../../Feed/ForYou";
import PinnedPost from "./PinnedPost";

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
const ForCommunityPosts = () => {
  return (
    <View style={{}}>
      <Text style={styles.textTitle}>2 pinned posts</Text>
      <PinnedPost />
      <Text style={[styles.textTitle, { marginTop: size.getHeightSize(16) }]}>
        Community posts
      </Text>
      {/* <ForYou data={data} />
      <ForYou data={data} />
      <ForYou data={data} />
      <ForYou data={data} />
      <ForYou data={data} /> */}
    </View>
  );
};

export default ForCommunityPosts;
const styles = StyleSheet.create({
  textTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    letterSpacing: 0.4,
    fontWeight: "700",
    paddingHorizontal: size.getWidthSize(16),
    paddingBottom: size.getHeightSize(10),
    fontFamily: "Outfit-Regular",
    marginTop: size.getHeightSize(13),
  },
});
