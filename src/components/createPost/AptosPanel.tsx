import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { batch } from "react-redux";
const { height, width } = Dimensions.get("window");
import { useFonts } from "expo-font";
import { appColor, fonts, images } from "../../constants";
import { sizes } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import {
  updateShowAptosSwap,
  updateShowAptosPanel,
  updateSelectedAptTag,
  updateMedia,
} from "../../controller/createPost";
import APTLarge from "../../../assets/images/svg/APTLarge";
import APTMonketLarge from "../../../assets/images/svg/APTMonkeyLarge";
interface Data {
  name: string;
  collection?: string;
}
const size = new sizes(height, width);
const AptosPanel = () => {
  const aptTags = useAppSelector(
    (state) => state.CreatePostController.filteredAptTag
  );
  const dispatch = useAppDispatch();
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const updateSwapVisibility = (name: string) => {
    const community = name === "Aptos Monkeys" ? "Aptos Monkeys" : "Aptos";
    batch(() => {
      dispatch(updateShowAptosSwap(community));
      dispatch(updateShowAptosPanel(false));
      dispatch(updateSelectedAptTag(name.replace(" ", "")));
      dispatch(updateMedia(false));
    });
  };
  const Tags = (data: Data) => {
    return (
      <Pressable
        onPress={() => updateSwapVisibility(data.name)}
        style={styles.row}
      >
        {data.name === "Aptos Monkeys" ? <APTMonketLarge /> : <APTLarge />}
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Text style={styles.text}>{data.name}</Text>
          {data.collection && (
            <Text style={styles.subtext}>{data.collection}</Text>
          )}
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={aptTags}
        renderItem={({ item }) => Tags(item)}
      />
    </View>
  );
};

export default AptosPanel;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Medium",
  },
  row: {
    flexDirection: "row",
    gap: size.getWidthSize(8),
    alignItems: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),

    justifyContent: "space-between",
    paddingVertical: size.getHeightSize(8),
    backgroundColor: appColor.kgrayDark2,
  },
  subtext: {
    color: appColor.grayLight,
    fontSize: size.fontSize(11),
    lineHeight: size.getHeightSize(14),
    fontFamily: "Outfit-SemiBold",
    letterSpacing: 0.04,
    textTransform: "uppercase",
  },
});
