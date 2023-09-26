import { View, Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { sizes } from '../../../utils';
import Header from '../../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../../constants';
import { CommunitySettingsProps } from '../../../navigations/NavigationTypes';
import ArrowRight from '../../../../assets/images/svg/ArrowRight';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);
const CommunitySettings = ({ navigation }: CommunitySettingsProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Settings" />
      <Pressable
        onPress={() => navigation.navigate('GeneralSettings')}
        style={[
          styles.view,
          { borderTopWidth: 1, borderColor: appColor.grayDark },
        ]}
      >
        <Text style={styles.text}>General</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('AddMembers')}
        style={styles.view}
      >
        <Text style={styles.text}>Members</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Roles')}
        style={styles.view}
      >
        <Text style={styles.text}>Roles</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('NotificationSettings')}
        style={styles.view}
      >
        <Text style={styles.text}>Notification settings</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <View style={styles.view}>
        <Text style={styles.text}>Verify Community</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('BannedMember')}
        style={styles.view}
      >
        <Text style={styles.text}>Banned members</Text>
        <ArrowRight size={size.getHeightSize(24)} />
      </Pressable>
      <View style={styles.noBorder}>
        <Text style={styles.text}>Leave community</Text>
      </View>
      <View style={styles.noBorder}>
        <Text style={[styles.text, { color: appColor.kErrorText }]}>
          Delete community
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CommunitySettings;
const styles = StyleSheet.create({
  view: {
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: appColor.grayDark,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(18),
    lineHeight: size.getHeightSize(23),
    letterSpacing: 0.36,
    fontFamily: 'Outfit-SemiBold',
    flex: 1,
  },
  noBorder: {
    paddingVertical: size.getHeightSize(12.5),
    paddingHorizontal: size.getWidthSize(16),
    gap: size.getWidthSize(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
