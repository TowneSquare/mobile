import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { ReactNode, useState } from "react";
import { appColor, fonts } from "../../../constants";
import { StatusBar } from "expo-status-bar";
import Community from "../../../../assets/images/svg/Community";
import { useFonts } from "expo-font";
const { height, width } = Dimensions.get("window");
import { sizes } from "../../../utils";
import Verified from "../../../../assets/images/svg/Verified";
import PolygonImage from "../../../../assets/images/svg/PolygonImage";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
const size = new sizes(height, width);
interface Communities {
  id: number;
  image: ReactNode;
  name: string;
  message?: string;
}

const ExploreCommunities = () => {
  const navigation = useNavigation();
  const Communities: Array<Communities> = [
    {
      id: 1,
      image: <PolygonImage />,
      name: "Aptomingos",
      message: "You have their NFT!",
    },
    {
      id: 2,
      image: <PolygonImage />,
      name: "Bruh Bears",
      message: "You have their NFT!",
    },
    {
      id: 3,
      image: <PolygonImage />,
      name: "Pontem Space Pirates from Siberia",
      message: "You have their NFT!",
    },
    {
      id: 4,
      image: <PolygonImage />,
      name: "Aptos Monkey",
    },
    {
      id: 5,
      image: <PolygonImage />,
      name: "Aptomingos",
      message: "You have their NFT!",
    },
    {
      id: 6,
      image: <PolygonImage />,
      name: "Bruh Bears",
      message: "You have their NFT!",
    },
    {
      id: 7,
      image: <PolygonImage />,
      name: "Pontem Space Pirates from Siberia",
      message: "You have their NFT!",
    },
    {
      id: 8,
      image: <PolygonImage />,
      name: "Aptos Monkey",
    },
    {
      id: 9,
      image: <PolygonImage />,
      name: "Aptomingos",
      message: "You have their NFT!",
    },
    {
      id: 10,
      image: <PolygonImage />,
      name: "Bruh Bears",
      message: "You have their NFT!",
    },
    {
      id: 11,
      image: <PolygonImage />,
      name: "Pontem Space Pirates from Siberia",
      message: "You have their NFT!",
    },
    {
      id: 12,
      image: <PolygonImage />,
      name: "Aptos Monkey",
    },
    {
      id: 13,
      image: <PolygonImage />,
      name: "Aptomingos",
      message: "You have their NFT!",
    },
    {
      id: 14,
      image: <PolygonImage />,
      name: "Bruh Bears",
      message: "You have their NFT!",
    },
    {
      id: 15,
      image: <PolygonImage />,
      name: "Pontem Space Pirates from Siberia",
      message: "You have their NFT!",
    },
    {
      id: 16,
      image: <PolygonImage />,
      name: "Aptos Monkey",
    },
    {
      id: 17,
      image: <PolygonImage />,
      name: "Aptomingos",
      message: "You have their NFT!",
    },
    {
      id: 18,
      image: <PolygonImage />,
      name: "Bruh Bears",
      message: "You have their NFT!",
    },
    {
      id: 19,
      image: <PolygonImage />,
      name: "Pontem Space Pirates from Siberia",
      message: "You have their NFT!",
    },
    {
      id: 20,
      image: <PolygonImage />,
      name: "Aptos Monkey",
    },
  ];
  const [communities, setCommunities] = useState<Communities[]>([]);
  const [joinAll, setJoinAll] = useState(false);

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const addCommunity = (community: Communities) => {
    const follows = [...communities, community];
    setCommunities(follows);
  };
  const removeCommunity = (communityToRemove: Communities) => {
    const filteredCommunity = communities.filter(
      (follower) => follower.name !== communityToRemove.name
    );
    setCommunities(filteredCommunity);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          height: size.getHeightSize(594),
        }}
      >
        <Header
          SvgImage={<Community />}
          title="Explore Communities"
          subtitle="Here are some communities you might be interested in"
          subTitleWidth={size.getWidthSize(304)}
        />
        <View
          style={{
            width: size.getWidthSize(328),
            marginTop: size.getHeightSize(32),
            alignSelf: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: size.getWidthSize(328),
              flexDirection: "row",
              justifyContent: "space-between",

              paddingVertical: size.getHeightSize(10.5),
              paddingHorizontal: size.getWidthSize(8),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(18),
                fontFamily: "Outfit-Regular",
                textAlign: "center",
                lineHeight: size.getHeightSize(23),
                color: appColor.kTextColor,
                fontStyle: "normal",
              }}
            >
              Suggested Communities
            </Text>
            <View
              style={{
                width: size.getWidthSize(65),
                marginRight: size.getWidthSize(8),
              }}
            >
              <Text
                onPress={() => {
                  communities.length === Communities.length
                    ? setCommunities([])
                    : setCommunities(Communities);
             
                }}
                style={{
                  fontSize: size.fontSize(16),
                  fontFamily: "Outfit-SemiBold",
                  textAlign: "right",
                  color: appColor.kSecondaryButtonColor,
                  lineHeight: size.getHeightSize(21),
                }}
              >
                {communities.length === Communities.length
                  ? "Leave all"
                  : "Join all"}
              </Text>
            </View>
          </View>

          {/* ScrollView */}
          <View
            style={{
              flex: 1,
            }}
          >
            {Communities.map((Community) => (
              <View
                key={Community.id}
                style={{
                  flexDirection: "row",
                  width: size.getWidthSize(328),
                  borderRadius: 40,
                  paddingVertical: size.getHeightSize(8),
                  paddingHorizontal: size.getWidthSize(8),
                  alignItems: "center",
                  marginBottom: size.getHeightSize(8),
                }}
              >
                {Community.image}
                <View
                  style={{
                    flex: 1,
                    marginLeft: size.getWidthSize(8),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: size.getWidthSize(4.56),
                      width: size.getWidthSize(153),
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.username}
                    >
                      {Community.name}
                    </Text>
                    <Verified />
                  </View>

                  {Community.message && (
                    <Text style={styles.message}>{Community.message}</Text>
                  )}
                </View>
                {communities.some(
                  (myCommuinty) => myCommuinty.id === Community.id
                ) ? (
                  <Pressable
                    onPress={() => removeCommunity(Community)}
                    style={styles.myCommunityButton}
                  >
                    <Text style={styles.buttonText}>Joined</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => addCommunity(Community)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Join</Text>
                  </Pressable>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreCommunities;
const styles = StyleSheet.create({
  button: {
    // width: size.getWidthSize(65),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(4),
    justifyContent: "center",
    height: size.getHeightSize(38),
  },
  buttonText: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
    textAlign: "center",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-SemiBold",
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),

    // flexWrap: 'wrap',
    // position: 'relative',
  },
  message: {
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  myCommunityButton: {
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    height: size.getHeightSize(38),
    justifyContent: "center",
    // width: size.getWidthSize(84),
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(16),
  },
});
