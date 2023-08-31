import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { CommunityPost, UserPosts } from "../../Feed/DuumyData";
import ForYou from "../../Feed/ForYou";
import { appColor } from "../../../constants";

import PinnedPost from "./PinnedPost";
import { sizes } from "../../../utils";

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
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Text style={styles.textTitle}>2 pinned posts</Text>
      <PinnedPost />
      <Text style={[styles.textTitle, { marginTop: size.getHeightSize(16) }]}>
        Community posts
      </Text>
      <ForYou data={data} />
      <ForYou data={data} />
      <ForYou data={data} />
      <ForYou data={data} />

      {/* <FlatList
        data={CommunityPost.slice(0, 2)}
        renderItem={({ item }) => (
          <ComPostModel data={item} navigation={'SinglePost'} />
        )}
        keyExtractor={(item) => item.id}
      /> */}
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
