import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Pressable,
  Share,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from "../../../constants";
import Header from "../../../shared/Feed/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { sizes } from "../../../utils";
import FollowingTab from "../../Profile/FollowingTab";
import FollowersInviteTab from "./FollowersInviteTab";
import { useAppSelector, useAppDispatch } from "../../../controller/hooks";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();
const size = new sizes(height, width);
import { fonts } from "../../../constants";
import { useFonts } from "expo-font";
import {
  clearInviteMembers,
  sendInvite,
} from "../../../controller/CommunityController";
import { updateToast } from "../../../controller/FeedsController";
const InviteMembersScreen = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const renderTabBarLabel = ({ focused, route }) => {
    return (
      <View style={[styles.focused]}>
        <Text style={[focused ? styles.focusedtabText : styles.tabText]}>
          {route.name}
        </Text>
      </View>
    );
  };

  const INVITE_MEMBERS = useAppSelector(
    (state) => state.COMMUNITY.invitedMembers
  );
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "https://x.com/JCZhang/status/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const disabledSendInvite = INVITE_MEMBERS.length <= 0;

  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title="InviteMembers" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          lazy: true,
          tabBarStyle: {
            backgroundColor: appColor.kgrayDark2,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderWidth: 0,
          },
          tabBarIndicatorStyle: {
            display: "none",
          },
          tabBarIndicatorContainerStyle: {},
          tabBarLabelStyle: {
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(20),
            fontFamily: "Outfit-SemiBold",
          },

          tabBarIndicator: () => null,
        })}
        tabBar={({ state, descriptors, navigation }) => (
          <View style={styles.labelContainer}>
            {state.routes.map((route: any, index: number) => {
              const { options } = descriptors[route.key];
              const label = options.tabBarLabel || options.title || route.name;
              const isFocused = state.index === index;
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: !isFocused
                      ? "transparent"
                      : appColor.kSecondaryButtonColor,
                    borderRadius: 20,
                    marginTop: size.getHeightSize(4),
                    flex: 1,
                  }}
                  key={route.key}
                  onPress={() => {
                    navigation.emit({
                      type: "tabPress",
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (!isFocused) {
                      navigation.navigate(route.name);
                    }
                  }}
                >
                  {renderTabBarLabel({ focused: isFocused, route })}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      >
        <Tab.Screen name="Followers" component={FollowersInviteTab} />
        <Tab.Screen name="Following" component={FollowingTab} />
      </Tab.Navigator>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          disabled={disabledSendInvite}
          style={{
            backgroundColor: appColor.kSecondaryButtonColor,
            width: 328,
            paddingVertical: 16,
            borderRadius: 40,
            marginBottom: 8,
            opacity: INVITE_MEMBERS.length > 0 ? 1 : 0.5,
          }}
          onPress={() => {
            navigation.goBack();
            dispatch(
              updateToast({
                displayToast: true,
                toastMessage: "invite sent successfully",
                toastType: "success",
              })
            );
            console.log(INVITE_MEMBERS);
            dispatch(sendInvite());
          }}
        >
          <Text
            style={{
              color: appColor.kWhiteColor,
              textAlign: "center",
              fontFamily: "Outfit-SemiBold",
              fontSize: size.fontSize(18),
              fontWeight: "500",
            }}
          >{`Send invite ${
            INVITE_MEMBERS.length > 0 ? INVITE_MEMBERS.length : ""
          }`}</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: appColor.kWhiteColor,
            width: 328,
            paddingVertical: 16,
            borderRadius: 40,
          }}
          onPress={onShare}
        >
          <Text
            style={{
              color: appColor.feedBackground,
              textAlign: "center",
              fontFamily: "Outfit-Medium",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Share Invitation Link
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default InviteMembersScreen;
const styles = StyleSheet.create({
  focusedtabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(20),
    fontFamily: "Outfit-SemiBold",
    justifyContent: "center",
  },
  tabText: {
    color: appColor.kTextColor,
    textAlign: "center",
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: "Outfit-Regular",
    overflow: "hidden",
  },
  focused: {
    paddingVertical: size.getHeightSize(8),
    justifyContent: "center",
    borderRadius: 40,
    paddingHorizontal: size.getWidthSize(16),
    minHeight: size.getHeightSize(36),
  },
  labelContainer: {
    flexDirection: "row",
    backgroundColor: appColor.kgrayDark2,
    borderRadius: 20,
    paddingBottom: size.getHeightSize(4),
    paddingHorizontal: size.getWidthSize(4),
    justifyContent: "center",
  },
});
