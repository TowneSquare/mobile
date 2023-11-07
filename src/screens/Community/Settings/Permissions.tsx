import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../../constants';
const { height, width } = Dimensions.get('window');
import AntDesign from '@expo/vector-icons/AntDesign';
import SettingsToggle from '../../../components/Community/Settings/SettingsToggle';
import ChangesBottomSheet from '../../../components/Community/Settings/ChangesBottomSheet';
import { PermissionsProps } from '../../../navigations/NavigationTypes';
const size = new sizes(height, width);
const Permissions = ({ navigation }: PermissionsProps) => {
  const [showPermissionBottomSheet, setPermissionBottomSheetVisibility] =
    useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          color={appColor.kWhiteColor}
          size={size.fontSize(24)}
          onPress={() => setPermissionBottomSheetVisibility(true)}
        />
        <Text style={styles.title}>Permissions</Text>
        <Text
          style={{
            color: appColor.primaryLight,
            fontSize: size.fontSize(20),
            lineHeight: size.getHeightSize(24),
            fontFamily: 'Outfit-Regular',
            textAlign: 'center',
            opacity: 0.4,
          }}
        >
          Save
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(16),
          }}
        >
          <Text style={[styles.text, { marginTop: size.getHeightSize(16) }]}>
            General
          </Text>
          <View
            style={{
              gap: size.getHeightSize(16),
            }}
          >
            <SettingsToggle
              title="Edit community info"
              body="Members can change name, community image and other details"
            />
            <SettingsToggle
              title="Verify community"
              body="Members can verify the community by linking community’s official Twitter account"
            />
            <SettingsToggle
              title="Create invite"
              body="Members can invite new people to the community"
            />
            <SettingsToggle
              title="Kick members"
              body="Members can kick other members from the community. Kicked members will be able to rejoin the community"
              disable={true}
            />
            <SettingsToggle
              title="Ban members"
              body="Members can permanently ban other members from the community"
            />
            <SettingsToggle
              title="Manage roles"
              body="Members can create, edit or delete roles"
              dangerous
            />
          </View>

          <Text style={[styles.text]}> Posts </Text>
          <View
            style={{
              gap: size.getHeightSize(16),
            }}
          >
            <SettingsToggle
              title="Create post in community feed"
              body="Members can create post in the community feed"
            />
            <SettingsToggle
              title="Delete post"
              body="Members can delete posts of others"
            />
            <SettingsToggle
              title="Pin posts"
              body="Members can pin and remove pinned posts in the community feed"
            />
          </View>
          <Text style={[styles.text]}> Channels </Text>
          <View
            style={{
              gap: size.getHeightSize(16),
            }}
          >
            <SettingsToggle
              title="Manage channels"
              body=" Members can create, delete and rename channels "
            />
            <SettingsToggle
              title="Send message"
              body=" Members can send message in channels"
            />
            <SettingsToggle
              title="Delete messages"
              body=" Members can create, edit and delete their private channels"
            />
            <SettingsToggle
              title="Manage private channels"
              body=" Members can delete messages of others"
            />
            <SettingsToggle
              title="Attach files"
              body="Members can upload files or media in channels"
            />
            <SettingsToggle
              title="Pin and unpin messages"
              body="Members can pin and unpin messages"
            />
            <SettingsToggle
              title="Ping members"
              body="Members can ping other members using @here to ping members in that channel or @everybody to ping members in the whole community"
            />
          </View>
        </ScrollView>
      </View>
      <ChangesBottomSheet
        visibility={showPermissionBottomSheet}
        onClose={() => setPermissionBottomSheetVisibility(false)}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default Permissions;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: size.fontSize(20),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    marginTop: size.getHeightSize(24),
    marginBottom: size.getHeightSize(24),
  },
});
