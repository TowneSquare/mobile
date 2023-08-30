import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useContext } from 'react';
const { height, width } = Dimensions.get('window');
import SetupPrivacyPrivateIcon from '../../../assets/images/svg/SetupPrivacyPrivateIcon';
import SetupPrivacyPublicIcon from '../../../assets/images/svg/SetupPrivacyPublicIcon';
import { appColor } from '../../constants';
import { SetCommunityContext } from '../../context/SetUpCommunityContext';
import { CommunityDetailsType } from '../../context/SetUpCommunityContext';
import { sizes } from '../../utils';
const size = new sizes(height, width);
const PrivacySettingsView = () => {
  const { communityDetails, setCommunityDetails } =
    useContext(SetCommunityContext);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        First things first, is this a Public or Private community?
      </Text>
      <Text style={styles.titleDescription}>
        You can change this later in settings
      </Text>
      <View
        style={{
          paddingVertical: size.getHeightSize(33.5),
          gap: size.getHeightSize(16),
          flex: 1,
          justifyContent: 'center',

          marginVertical: size.getHeightSize(32),
        }}
      >
        <Pressable
          onPress={() =>
            setCommunityDetails({
              ...communityDetails,
              privacy: 'public',
            })
          }
          style={[
            styles.row,
            {
              backgroundColor:
                communityDetails.privacy === 'public'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: communityDetails.privacy === 'public' ? 3 : 1,
              borderColor:
                communityDetails.privacy === 'public'
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.privacyLeadingText}>Public community</Text>
            <Text style={styles.privacyText}>
              Communities that can be joined by anyone on TowneSquare that meet
              the joining criteria.
            </Text>
          </View>
          <SetupPrivacyPublicIcon size={size.getHeightSize(84)} />
        </Pressable>
        <Pressable
          onPress={() =>
            setCommunityDetails({
              ...communityDetails,
              privacy: 'private',
            })
          }
          style={[
            styles.row,
            {
              backgroundColor:
                communityDetails.privacy === 'private'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: communityDetails.privacy === 'private' ? 3 : 1,
              borderColor:
                communityDetails.privacy === 'private'
                  ? appColor.primaryLight
                  : appColor.grayLight,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.privacyLeadingText}>Private community</Text>
            <Text style={styles.privacyText}>
              Communities not publicly discoverable within the app and can only
              be accessed with an invitation.
            </Text>
          </View>
          <SetupPrivacyPrivateIcon size={size.getHeightSize(84)} />
        </Pressable>
      </View>
    </View>
  );
};

export default PrivacySettingsView;
const styles = StyleSheet.create({
  title: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(32),
    letterSpacing: 0.4,
  },
  titleDescription: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  privacyLeadingText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  privacyText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderColor: appColor.grayLight,
    borderRadius: 8,
  },
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(16),
    width: size.getWidthSize(328),
  },
  leadingText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    lineHeight: size.getHeightSize(21),
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(21),
  },
});
