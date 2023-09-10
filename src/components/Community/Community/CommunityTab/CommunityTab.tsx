import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import CommunityFeed from "../CommunityFeed";
import CommunityAbout from "../CommunityAbout";
import { appColor } from "../../../../constants";
import { sizes } from "../../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

interface Props {
  views: Array<JSX.Element>;
}
const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList<JSX.Element>
);
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const CommunityTab = ({ views }: Props) => {
  // const views = [<CommunityFeed />, <CommunityAbout />];
  let flatListRef = useRef<FlatList<JSX.Element> | null>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          minHeight: size.getHeightSize(44),
          paddingVertical: size.getHeightSize(4),
          paddingHorizontal: size.getWidthSize(4),
          backgroundColor: appColor.kgrayDark2,
          marginHorizontal: size.getWidthSize(8),
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Pressable
          onPress={() => {
            scrollToIndex(0);
          }}
          style={currentIndex === 0 ? styles.focusedtab : styles.tab}
        >
          <Text style={styles.label}>Feed</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            scrollToIndex(1);
          }}
          style={currentIndex === 1 ? styles.focusedtab : styles.tab}
        >
          <Text style={styles.label}>About</Text>
        </Pressable>
      </View>

      <AnimatedFlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={views}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={(ref: FlatList<JSX.Element>) => (flatListRef.current = ref)}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        renderItem={({ item }: any) => {
          return (
            <View
              style={{
                width: width,
              }}
            >
              {item}
            </View>
          );
        }}
      />
    </>
  );
};

export default CommunityTab;
const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-SemiBold",
    lineHeight: size.getHeightSize(20),
  },
  focusedtab: {
    minHeight: size.getHeightSize(36),
    paddingVertical: size.getHeightSize(8),
    flex: 1,
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
  },
  tab: {
    minHeight: size.getHeightSize(36),
    paddingVertical: size.getHeightSize(8),
    flex: 1,
  },
});
