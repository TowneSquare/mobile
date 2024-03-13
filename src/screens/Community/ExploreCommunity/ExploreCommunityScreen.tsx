import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommunityAvatar2 from "../../../../assets/images/svg/CommunityAvatar2";
import ExploreAvatar from "../../../../assets/images/svg/ExploreAvatar";
import RecommendedCommunity from "../../../components/Community/Explore Community/RecommendedCommunity";
import TopCommunity from "../../../components/Community/Explore Community/TopCommunity";
import { appColor, images } from "../../../constants";
import { ExploreCommunityScreenProps } from "../../../navigations/NavigationTypes";
import { sizes } from "../../../utils";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<string>);
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
const ExploreCommunityScreen = ({
  navigation,
}: ExploreCommunityScreenProps) => {
  const Images = [
    Image.resolveAssetSource(images.SiothianCommunity).uri,
    Image.resolveAssetSource(images.SiothianCommunity).uri,
    Image.resolveAssetSource(images.SiothianCommunity).uri,
  ];
  let flatListRef = useRef<FlatList<string> | null>();

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
  const renderImage = (image: string) => {
    return (
      <View
        style={{
          width: width,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          source={images.SiothianCommunity}
          style={{
            height: size.getHeightSize(181),
          }}
        >
          <LinearGradient
            colors={["#000", "rgba(0, 0, 0, 0.00)"]}
            locations={[0.3, 0.9]}
            start={[1, 1.5]}
            end={[1, 0]}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <View style={styles.view}>
              <View style={styles.view2}>
                <ExploreAvatar size={size.getHeightSize(42.6)} />
                <Text style={styles.comunityName}>Community X</Text>
              </View>
              <View style={styles.view3}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={styles.imageStyle}
                    source={images.profileImage}
                  />
                  <Image
                    style={styles.image2}
                    source={images.myfeedProfileImage}
                  />
                  <Image style={styles.image3} source={images.stackImage} />
                </View>
                <Text style={styles.memberNo}>13k members</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={navigation.goBack}
        />
        <Text style={styles.title}>Explore communities</Text>
        <AntDesign
          name="search1"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(16),
          }}
        >
          <View
            style={{
              height: size.getHeightSize(181),
            }}
          >
            <AnimatedFlatList
              data={Images}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item }) => renderImage(item)}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={(ref: FlatList<string>) => (flatListRef.current = ref)}
              viewabilityConfig={viewConfigRef}
              onViewableItemsChanged={onViewRef.current}
              pagingEnabled
            />
          </View>

          <View style={styles.view4}>
            {Images.map(({}, index) => (
              <Pressable
                style={{
                  height: size.getHeightSize(8),
                  width: size.getWidthSize(8),
                  borderRadius: 100,
                  backgroundColor:
                    index === currentIndex
                      ? appColor.kSecondaryButtonColor
                      : appColor.kWhiteColor,
                }}
                onPress={() => scrollToIndex(index)}
              />
            ))}
          </View>
          <View
            style={{
              marginTop: size.getHeightSize(32),
              marginHorizontal: size.getWidthSize(16),
            }}
          >
            <Text style={styles.topCommunities}>Top communities</Text>
            <Text style={styles.text}>Communities with the most activity</Text>
            <View style={{ height: size.getHeightSize(24) }} />
            <View
              style={{
                gap: size.getHeightSize(24),
              }}
            >
              <TopCommunity
                pfp={<ExploreAvatar size={size.getHeightSize(40)} />}
                name="Aptos Monkeys"
                description="Official AptosMonkeys Community on TowneSquare that aims to gather as ma..."
              />
              <TopCommunity
                pfp={<CommunityAvatar2 size={size.getHeightSize(40)} />}
                name="Aptosmingos"
                description="Official AptosMonkeys Community on TowneSquare that aims to gather as ma..."
              />
              <TopCommunity
                pfp={<CommunityAvatar2 size={size.getHeightSize(40)} />}
                name="Aptosmingos"
                description="Official AptosMonkeys Community on TowneSquare that aims to gather as ma..."
              />
              <TopCommunity
                pfp={<CommunityAvatar2 size={size.getHeightSize(40)} />}
                name="Aptosmingos"
                description="Official AptosMonkeys Community on TowneSquare that aims to gather as ma..."
              />
            </View>
            <View style={{ height: size.getHeightSize(32) }} />
            <Text style={styles.topCommunities}>Recommended for you</Text>
            <Text style={styles.text}>Based on your activities</Text>
            <View style={{ height: size.getHeightSize(24) }} />
            <RecommendedCommunity />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreCommunityScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingBottom: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: "space-between",
    paddingTop: size.getHeightSize(40),
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
  imageStyle: {
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
  },
  image2: {
    position: "absolute",
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
    left: size.getWidthSize(7),
    borderRadius: 100,
  },
  image3: {
    position: "absolute",
    height: size.getHeightSize(18),
    width: size.getHeightSize(18),
    left: size.getWidthSize(15),
    borderRadius: 100,
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    gap: size.getHeightSize(8),
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  comunityName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Bold",
    letterSpacing: 0.4,
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
  },
  memberNo: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: "Outfit-Regular",
    marginLeft: size.getWidthSize(16),
  },
  view4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: size.getWidthSize(8),
    alignSelf: "center",
    marginTop: size.getHeightSize(20),
  },
  topCommunities: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: "Outfit-Bold",
    letterSpacing: 0.4,
  },
  text: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
    letterSpacing: 0.4,
    marginTop: size.getHeightSize(4),
  },
});
