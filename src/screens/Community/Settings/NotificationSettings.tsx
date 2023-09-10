import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { sizes } from '../../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../../constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import ChangesBottomSheet from '../../../components/Community/Settings/ChangesBottomSheet';
import { NotificationSettingsProps } from '../../../navigations/NavigationTypes';
import RadioButton from '../../../../assets/images/png/RadioButton';
import DefaultButton from '../../../../assets/images/svg/DefaultButton';
import NotificationSettingsToggle from '../../../components/Community/Settings/NotificationSettingsToggle';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const NotificationSettings = ({ navigation }: NotificationSettingsProps) => {
  const [settings, setSettings] = useState<
    'notification' | 'mentions' | 'nothing'
  >('notification');
  const [showChangesBottomSheet, setBottomSheetVisibility] = useState(false);
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
          onPress={() => setBottomSheetVisibility(true)}
        />
        <Text style={styles.title}>Notifications settings</Text>
        <Text style={styles.save}>Save</Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <Text style={styles.notificationText}>Notification settings</Text>
        <Text style={styles.text1}>Set push notification</Text>
        <Pressable
          onPress={() => setSettings('notification')}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: size.getWidthSize(8),
            borderBottomWidth: 1,
            borderBottomColor:
              settings === 'notification' ? appColor.grayDark : undefined,
            paddingBottom:
              settings === 'notification' ? size.getHeightSize(36) : 0,
            marginTop: size.getHeightSize(24),
          }}
        >
          {settings === 'notification' ? (
            <RadioButton size={size.getHeightSize(24)} />
          ) : (
            <DefaultButton size={size.getHeightSize(24)} />
          )}
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.rowText}>All notifications</Text>
            <Text style={[styles.text1, { marginTop: size.getHeightSize(4) }]}>
              Get notified about all ctivities inside community
            </Text>
            {settings === 'notification' && (
              <View
                style={{
                  gap: size.getHeightSize(24),
                  marginTop: size.getHeightSize(28),
                }}
              >
                <NotificationSettingsToggle title="New post on community feed" />
                <NotificationSettingsToggle title="Reply to my post" />
                <NotificationSettingsToggle title="New messages" />
                <NotificationSettingsToggle title="Reply to my messages" />
                <NotificationSettingsToggle title="Mentions" />
                <NotificationSettingsToggle title="Community info update" />
                <NotificationSettingsToggle title="New members join" />
              </View>
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSettings('mentions')}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: size.getWidthSize(8),
            marginTop: size.getHeightSize(16),
          }}
        >
          {settings === 'mentions' ? (
            <RadioButton size={size.getHeightSize(24)} />
          ) : (
            <DefaultButton size={size.getHeightSize(24)} />
          )}
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.rowText}>Only @mentions</Text>
            <Text style={[styles.text1, { marginTop: size.getHeightSize(4) }]}>
              Get notified when someone mention you in the channel or in a post
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setSettings('nothing')}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: size.getWidthSize(8),
            marginTop: size.getHeightSize(16),
          }}
        >
          {settings === 'nothing' ? (
            <RadioButton size={size.getHeightSize(24)} />
          ) : (
            <DefaultButton size={size.getHeightSize(24)} />
          )}
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.rowText}>Nothing</Text>
            <Text style={[styles.text1, { marginTop: size.getHeightSize(4) }]}>
              Don't gent any notification from this community
            </Text>
          </View>
        </Pressable>
      </View>
      <ChangesBottomSheet
        visibility={showChangesBottomSheet}
        onClose={() => setBottomSheetVisibility(false)}
        callBack={() => {}}
      />
    </SafeAreaView>
  );
};

export default NotificationSettings;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: size.getHeightSize(20),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    justifyContent: 'space-between',
  },
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
  },
  save: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    opacity: 0.4,
  },
  text1: {
    color: appColor.grayLight,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    letterSpacing: 0.4,
  },
  notificationText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Bold',
    textAlign: 'left',
    marginTop: size.getHeightSize(16),
    letterSpacing: 0.4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  rowText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
  },
});
