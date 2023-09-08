import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddAdminsHeader from "../../../../shared/Community/AddAdminsHeader";
import { sizes } from "../../../../utils";
import { appColor } from "../../../../constants";
import { useFonts } from "expo-font";
import { fonts } from "../../../../constants";
import CommunityPermissionCard from "../../../../components/Community/Community/CommunityPermissionCard";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const PermissionsScreen = () => {
  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <AddAdminsHeader title="Permissions" buttonText="Save" enabled={false} />
      <ScrollView style={styles.container}>
        <View
          style={{
            marginBottom: size.getHeightSize(12),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(20),
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Medium",
            }}
          >
            General
          </Text>
        </View>
        <CommunityPermissionCard
          title="Edit Community Info"
          description="Members can change name, community image and other details"
        />
        <CommunityPermissionCard
          title="Verify community"
          description="Members can verify the community by linking community’s official Twitter account"
        />
        <CommunityPermissionCard
          title="Create invite"
          description="Members can invite new people to the community"
        />
        <CommunityPermissionCard
          title="Kick members"
          description="Members can kick other members from the community. Kicked members will be able to rejoin the community"
        />
        <CommunityPermissionCard
          title="Ban members"
          description="Members can permanently ban other members from the community"
        />
        <CommunityPermissionCard
          title="Manage roles"
          description="Members can create, edit or delete roles."
          warningDescription="This is a very dangerous permission to grant!"
        />
        <View
          style={{
            marginVertical: size.getHeightSize(16),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(20),
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Medium",
            }}
          >
            Posts
          </Text>
        </View>
        <CommunityPermissionCard
          title="Create post in vommunity feed"
          description="Members can create post in the community feed"
        />
        <CommunityPermissionCard
          title="Delete post"
          description="Members can delete posts of others"
        />
        <CommunityPermissionCard
          title="Pin posts"
          description="Members can pin and remove pinned posts in the community feed"
        />
          <View
          style={{
            marginVertical: size.getHeightSize(16),
          }}
        >
          <Text
            style={{
              fontSize: size.fontSize(20),
              color: appColor.kWhiteColor,
              fontFamily: "Outfit-Medium",
            }}
          >
            Channels
          </Text>
        </View>
        <CommunityPermissionCard
          title="Manage channels"
          description="Members can create, delete and rename channels"
        />
        <CommunityPermissionCard
          title="Send message"
          description="Members can send message in channels"
        />
        <CommunityPermissionCard
          title="Delete messages"
          description="Members can delete messages of others"
        />
        <CommunityPermissionCard
          title="Manage private channels"
          description="Members can create, edit and delete their private channels"
        />
        <CommunityPermissionCard
          title="Attach files"
          description="Members can upload files or media in channels"
        />
        <CommunityPermissionCard
          title="Pin and unpin messages"
          description="Members can pin and unpin messages"
        />
        <CommunityPermissionCard
          title="Ping members"
          description="Members can ping other members using @here to ping members in that channel or @everybody to ping members in the whole community"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
  },
});
