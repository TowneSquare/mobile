import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
  SectionList,
} from "react-native";
import { ReactNode, useState, useEffect } from "react";
import { appColor, fonts } from "../../../constants";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { sizes } from "../../../utils";
import Hands from "../../../../assets/images/svg/Hands";
import VerifiedBlue from "../../../../assets/images/svg/VerifiedBlue";
import AvatarFriend from "../../../../assets/images/svg/AvatarFriend";
import Queen from "../../../../assets/images/svg/Queen";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from '../../../controller/hooks';
import {
  updateFollowedFriends
} from '../../../controller/UserController';
import { getSuggestFollowers, updatefollowFriends } from "../../../api";

const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
import Constants from "expo-constants";
interface Friend {
  id: string;
  image: ReactNode;
  name: string;
  username: string;
  verification: string;
}

const FindFriends = ({ token }: { token: string }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [following, setFollowers] = useState<Friend[]>([]);
  
  const temp_friends: Array<Friend> = [
    {
      id: "abc",
      image: <AvatarFriend />,
      name: "User Name",
      username: "@username1",
      verification: "citizen",
    }
  ];
  const [friends, setFriends] = useState<Friend[]>(temp_friends);

  useEffect(() => {
    const updateSuggestFollowers = async () => {
      const res = await getSuggestFollowers(token);
      const convertedData: Friend[] = res.map((item, index) => ({
        id: item.userData._id,
        image: <AvatarFriend />,
        name: item.userData.nickname,
        username: item.userData.username,
        verification: item.userData.issuer ? "citizen" : ""
      }));
      setFriends(convertedData);
    };
    if (token != "")
      updateSuggestFollowers();
  }, [token]);

  let [isLoaded] = useFonts({
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-SemiBold": fonts.OUTFIT_SEMIBOLD,
  });
  if (!isLoaded) {
    return null;
  }
  const addFollowers = (follow: Friend) => {
    const updateSuggestFollowers = async () => {
      const res = await updatefollowFriends(token, follow.id);
    }
    const follows = [...following, follow];
    setFollowers(follows);
    updateSuggestFollowers();
  };
  const removeFollowers = (followerToRemove: Friend) => {
    const filteredFollowers = following.filter(
      (follower) => follower.username !== followerToRemove.username
    );
    setFollowers(filteredFollowers);
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
          SvgImage={<Hands />}
          title="Find your friends"
          subtitle="Say hi to your friends that are already on TowneSquare!"
          subTitleWidth={size.getWidthSize(304)}
        />
        <View
          style={{
            marginTop: size.getHeightSize(32),
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: size.getWidthSize(328),
              flexDirection: "row",
              justifyContent: "space-between",

              paddingVertical: size.getHeightSize(10.5),
              alignItems: "center",
              paddingHorizontal: size.getWidthSize(8),
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
              Suggested Friends
            </Text>
            <View
              style={{
                width: size.getWidthSize(91),
                marginRight: size.getWidthSize(8),
              }}
            >
              <Text
                onPress={() => {
                  following.length === friends.length
                    ? setFollowers([])
                    : setFollowers(friends);


                }}
                style={{
                  fontSize: size.fontSize(16),
                  fontFamily: "Outfit-SemiBold",
                  textAlign: "right",
                  color: appColor.kSecondaryButtonColor,
                  lineHeight: size.getHeightSize(24),
                }}
              >
                {following.length === friends.length
                  ? "Unfollow all"
                  : "Follow all"}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            {friends.map((friend) => (
              <View
                key={friend.id}
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
                {friend.image}
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
                      {friend.name}
                    </Text>
                    {friend.verification === "verified" ? (
                      <VerifiedBlue />
                    ) : (
                      <Queen />
                    )}
                  </View>

                  <Text style={styles.subusername}>{friend.username}</Text>
                </View>
                {following.some(
                  (myFollower) => myFollower.username === friend.username
                ) ? (
                  <Pressable
                    onPress={() => removeFollowers(friend)}
                    style={styles.followingButton}
                  >
                    <Text style={styles.buttonText}>Following</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => addFollowers(friend)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Follow</Text>
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

export default FindFriends;
const styles = StyleSheet.create({
  button: {
    // width: size.getWidthSize(91),
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
  },
  subusername: {
    fontSize: size.fontSize(14),
    fontFamily: "Outfit-Regular",
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
  followingButton: {
    backgroundColor: appColor.kGrayLight3,
    borderRadius: 40,
    height: size.getHeightSize(38),
    justifyContent: "center",
    // width: size.getWidthSize(116),
    paddingVertical: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(16),
  },
});
