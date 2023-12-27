import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ForYou from "../../components/Feed/ForYou";
import { UserPosts } from "../../components/Feed/DuumyData";
import { sizes } from "../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import { appColor } from "../../constants";
import { useAppSelector, useAppDispatch } from "../../controller/hooks";
import { FlashList } from "@shopify/flash-list";

const Posts = () => {
  const { isSearchFocuesd , AllPost} = useAppSelector((state) => ({
    isSearchFocuesd: state.SearchPostController.searchFocus,
    AllPost: state.CreatePostController.AllPost
  }));

  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {isSearchFocuesd !== "hide_for_you_tab" && (
          <Text style={[styles.text]}>Posts for you</Text>
        )}
        <FlashList
          data={AllPost}
          renderItem={({ item }) => (
            <ForYou data={item} shouldPFPSwipe={false} />
          )}
          keyExtractor={(item) => item._id}
          estimatedItemSize={200}
        />
      </ScrollView>
      {/* <>
        <View style={{ height: size.getHeightSize(117) }} />
        <View style={styles.container}>
          <PostNotFound />
          <Text style={styles.label}>
            We didn't find any posts matching your search terms
          </Text>
        </View>
      </> */}
    </View>
  );
};

export default Posts;
const styles = StyleSheet.create({
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-SemiBold",
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(8),
    marginBottom: size.getHeightSize(8),
    marginLeft: size.getWidthSize(16),
  },
  label: {
    textAlign: "center",
    lineHeight: size.getHeightSize(21),
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    color: appColor.grayLight,
    width: size.getWidthSize(271),
  },
  container: {
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
    paddingBottom: size.getHeightSize(16),
  },
});
