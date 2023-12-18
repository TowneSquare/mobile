import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useReducer, useState, useMemo, useEffect } from "react";
import { appColor } from "../../constants";
import SuperStarBottomSheet from "../../components/Profile/About/SuperStarBottomSheet";
import Header from "../../components/Profile/Header";
import { useAppDispatch, useAppSelector } from "../../controller/hooks";
import TheirProfileBottomSheet from "../../components/Profile/About/TheirProfileBottomSheet";
import ProfileTabNavigation from "../../navigations/ProfileTabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { updateSuperStarBottomSheet } from "../../controller/BottomSheetController";
import BlockUserModal from "../../components/Feed/BlockUserModal";
import ReportPanel from "../../components/Feed/ReportPanel";
import ReportPostModal from "../../components/Feed/ReportPostModal";
import ReportUserModal from "../../components/Feed/ReportUserModal";
import CheckedIcon from "../../../assets/images/svg/CheckedIcon";
import FollowIcon from "../../../assets/images/svg/FollowIcon";
import MessageIcon from "../../../assets/images/svg/MessageIcon";
import ProfileTipIcon from "../../../assets/images/svg/ProfileTipIcon";
import ProfileCard from "../../components/Profile/About/ProfileCard";
import { sizes } from "../../utils";
import { TheirProfileScreenProps } from "../../navigations/NavigationTypes";
import { updateTipBottomSheet } from "../../controller/FeedsController";
import ViewSuperStarsModal from "../../components/Profile/About/ViewSuperStarsModal";
import ForYou from "../../components/Feed/ForYou";
import Replies from "../../components/Profile/Replies";
import { getCreatedTime } from "../../utils/helperFunction";
import axios from "axios";
import { APTOS_NAME_URL } from "../../../config/env";
import { getUserAptosName } from "../../api";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

type SuperStarReducerState = {
  showSuperStarModal: boolean;
  imageUri: string;
};
type SuperStarReducerAction = {
  type: "SHOW" | "CLOSE";
  payload?: {
    showSuperStarModal: boolean;
    imageUri: string;
  };
};
const selectedSuperStarsReducer = (
  state: SuperStarReducerState,
  action: SuperStarReducerAction
) => {
  switch (action.type) {
    case "SHOW":
      return {
        showSuperStarModal: action.payload.showSuperStarModal,
        imageUri: action.payload.imageUri,
      };
    case "CLOSE":
      return {
        showSuperStarModal: false,
        imageUri: "",
      };

    default:
      return state;
  }
};
const TheirProfileScreen = ({ route }: TheirProfileScreenProps) => {
  const dispatch = useAppDispatch();
  const [view, setView] = useState<number>(2);
  const [aptosName, setAptosName] = useState<string>("unavailable");
  const { userData } = route.params;
  const userFollowing = useAppSelector(
    (state) => state.USER.UserData.following
  );
  const title = "Real JC";
  const COMMUNITIES = "10";
  const APTOS_DOMAIN_NAME = "";


  const following = userFollowing.some(
    (following) => following._id == userData._id
  );
  const [superStarModal, useDispatch] = useReducer(selectedSuperStarsReducer, {
    showSuperStarModal: false,
    imageUri: "",
  });

  const getUserAptosName = async ( address:string) => {
  try {
    const res = await axios.get(`${APTOS_NAME_URL}${address}`);
    const aptosName: string = res?.data;
    setAptosName(aptosName)
  } catch (error) {
    setAptosName("unavailable∏")
    return "unavailable";
  }
};

  // useMemo( () => {
  //  getUserAptosName(userData?.aptosWallet)
  // }, [userData?.aptosWallet])
  

  const Posts = () => {
    return userData.posts.map((userpost) => (
      <ForYou key={userpost._id} data={userpost} shouldPFPSwipe={false} />
    ));
  };

  const UserReplies = () => {
    return userData.comments.map((userpost) => (
      <Replies
        key={userpost._id}
        data={userpost}
        nickname={userData.nickname}
        username={userData.username}
        myPost
        shouldPFPSwipe={false}
      />
    ));
  };

  const Media = () => {
    return userData.posts
      .filter((userpost) => userpost.imageUrls[0] || userpost.videoUrls[0])
      .map((userpost) => (
        <ForYou key={userpost._id} data={userpost} shouldPFPSwipe={false} />
      ));
  };

  const POST_MEDIA_REPLIES = () => {
    if (view == 2) {
      return Posts();
    }
    if (view == 1) {
      return UserReplies();
    }
    if (view == 0) {
      return Media();
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} typeOfProfile="theirProfile" />
      {/* <ProfileTabNavigation typeOfProfile="theirProfile" /> */}
      <ScrollView>
        <ProfileCard
          NAME={userData.username}
          NICKNAME={userData.nickname}
          APTOS_DOMAIN_NAME={aptosName}
          DATE={getCreatedTime(userData.createdAt)}
          COMMUNITIES={COMMUNITIES}
          FOLLOWERS={userData.followers.length.toString()}
          FOLLOWING={userData.following.length.toString()}
          POST={userData.posts.length.toString()}
        />
        <View style={styles.view}>
          <Pressable
            onPress={() => {}}
            style={[
              styles.followView,
              {
                backgroundColor: following
                  ? appColor.kGrayLight3
                  : appColor.kSecondaryButtonColor,
                paddingHorizontal: following
                  ? size.getWidthSize(13.5)
                  : size.getWidthSize(25),
              },
            ]}
          >
            {following ? (
              <CheckedIcon size={size.getHeightSize(24)} />
            ) : (
              <FollowIcon size={size.getHeightSize(24)} />
            )}
            <Text style={styles.followText}>
              {following ? "Following" : "Follow"}
            </Text>
          </Pressable>
          <View style={styles.iconView}>
            <MessageIcon />
          </View>
          <View style={styles.iconView}>
            <ProfileTipIcon
              size={size.getHeightSize(24)}
              onPress={() => {
                dispatch(
                  updateTipBottomSheet({
                    status: true,
                    profileImage: userData.profileImage,
                    username: userData.username,
                    wallet: userData.aptosWallet,
                    nickname: userData.nickname,
                  })
                );
              }}
            />
          </View>
        </View>
        <View style={styles.aboutDiv}>
          <Text
            style={[
              styles.aboutHeader,
              { marginBottom: size.getHeightSize(12) },
            ]}
          >
            About
          </Text>
          <View>
            <Text style={styles.aboutText}>{userData?.bio}</Text>
          </View>
        </View>
        {userData.superstars.nftInfoArray.length > 0 ? (
          <>
            <ScrollView
              style={{
                marginLeft: size.getWidthSize(16),
              }}
              horizontal={true}
              contentContainerStyle={{
                paddingRight: size.getWidthSize(10),
              }}
            >
              {userData.superstars.nftInfoArray.map((item, index) => (
                <Pressable
                  onPress={() => {
                    useDispatch({
                      type: "SHOW",
                      payload: {
                        showSuperStarModal: true,
                        imageUri: item.nftImageUrl,
                      },
                    });
                  }}
                  key={index}
                >
                  <Image
                    style={{
                      marginRight: size.getWidthSize(6),
                      width: size.getHeightSize(130),
                      height: size.getHeightSize(130),
                      borderRadius: 8,
                    }}
                    source={{ uri: item.nftImageUrl }}
                  />
                </Pressable>
              ))}
            </ScrollView>
          </>
        ) : (
          <></>
        )}
        <View style={styles.tabView}>
          <Pressable
            style={view == 2 ? styles.focusedTab : styles.tab}
            onPress={() => {
              setView(2);
            }}
          >
            <Text style={view == 2 ? styles.focusedtabText : styles.tabText}>
              Posts
            </Text>
          </Pressable>
          <Pressable
            style={view == 1 ? styles.focusedTab : styles.tab}
            onPress={() => {
              setView(1);
            }}
          >
            <Text style={view == 1 ? styles.focusedtabText : styles.tabText}>
              Replies
            </Text>
          </Pressable>
          <Pressable
            style={view == 0 ? styles.focusedTab : styles.tab}
            onPress={() => setView(0)}
          >
            <Text style={view == 0 ? styles.focusedtabText : styles.tabText}>
              Media
            </Text>
          </Pressable>
        </View>
        <View>{POST_MEDIA_REPLIES()}</View>
        <TheirProfileBottomSheet />
        <SuperStarBottomSheet
          handleVisibility={() => {
            dispatch(updateSuperStarBottomSheet(false));
          }}
          typeOfProfile="theirProfile"
        />
        <ReportUserModal />
        <ReportPanel />
        <ReportPostModal />
        <BlockUserModal />
        <ViewSuperStarsModal
          visibility={superStarModal.showSuperStarModal}
          close={() =>
            useDispatch({
              type: "CLOSE",
            })
          }
          imageUri={superStarModal.imageUri}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    backgroundColor: appColor.kgrayDark2,
    marginTop: 15,
    borderRadius: 40,
    borderColor: "white",
    padding: 15,
  },
  text: {
    color: appColor.kGrayscale,
    fontFamily: "Outfit-Bold",
    paddingLeft: 5,
  },

  view2Box: {
    justifyContent: "center",
    alignItems: "center",
  },
  view2TextUp: {
    fontFamily: "Outfit-Bold",
    color: appColor.kTextColor,
  },
  view2TextDown: {
    fontFamily: "Outfit-Regular",
    color: appColor.kGrayscale,
  },
  aboutDiv: {
    marginVertical: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
  },
  aboutHeader: {
    color: appColor.kTextColor,
    fontFamily: "Outfit-Bold",
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
  },
  aboutText: {
    color: appColor.kTextColor,
    fontFamily: "Outfit-Regular",
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(20),
  },
  focusedTab: {
    backgroundColor: appColor.kSecondaryButtonColor,
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    marginHorizontal: size.getWidthSize(4),
    borderRadius: 40,
    minHeight: size.getHeightSize(36),
  },
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-SemiBold",
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
  },
  tab: {
    backgroundColor: "transparent",
    flex: 1,
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    paddingHorizontal: size.getWidthSize(4),
    borderRadius: 40,
  },
  imageContainer: {
    height: size.getHeightAndWidth(140),
    width: size.getHeightAndWidth(140),
    borderRadius: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  superStarView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: size.getWidthSize(16),
  },
  edit: {
    color: appColor.kSecondaryButtonColor,
    fontFamily: "Outfit-SemiBold",
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
  },
  setNft: {
    flexDirection: "row",
    paddingVertical: size.getHeightSize(16),
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: "space-between",
    borderStyle: "dashed",
    borderColor: appColor.kGrayLight3,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: size.getWidthSize(16),
  },
  setNftText: {
    color: appColor.kGrayscale,
    fontFamily: "Outfit-Regular",
    fontSize: size.fontSize(14),
  },
  setNftButton: {
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 30,
    paddingHorizontal: size.getWidthSize(16),
    justifyContent: "center",
  },
  setNftButtonText: {
    textAlign: "center",
    fontFamily: "Outfit-Medium",
    fontSize: size.fontSize(16),
    color: appColor.kGrayscaleDart,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
  tabView: {
    flexDirection: "row",
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 40,
    marginTop: size.getHeightSize(32),
    marginHorizontal: size.getWidthSize(16),
    width: size.getWidthSize(344),
    paddingVertical: size.getHeightSize(4),
    marginBottom: size.getHeightSize(8),
    alignSelf: "center",
  },
  view: {
    paddingHorizontal: size.getWidthSize(42),
    flexDirection: "row",
    alignItems: "center",
    marginTop: size.getHeightSize(24),
    alignSelf: "center",
    gap: size.getWidthSize(16),
  },
  followView: {
    flexDirection: "row",
    paddingVertical: size.getHeightSize(4),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(25),
    minHeight: size.getHeightSize(34),
  },
  followText: {
    textAlign: "center",
    fontFamily: "Outfit-Medium",
    fontSize: size.fontSize(16),
    color: appColor.kWhiteColor,
    letterSpacing: 0.32,
    lineHeight: size.getHeightSize(20),
  },
  iconView: {
    flexDirection: "row",
    paddingVertical: size.getHeightSize(4),
    alignItems: "center",
    backgroundColor: appColor.kWhiteColor,
    borderRadius: 40,
    gap: size.getWidthSize(8),
    justifyContent: "center",
    paddingHorizontal: size.getWidthSize(16),
  },
});

export default TheirProfileScreen;
