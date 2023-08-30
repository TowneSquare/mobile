import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState, useContext } from 'react';
const { height, width } = Dimensions.get('window');
import TokengatedIcon from '../../../assets/images/svg/TokengatedIcon';
import SetupPrivacyPrivateIcon from '../../../assets/images/svg/SetupPrivacyPrivateIcon';
import SetupPrivacyPublicIcon from '../../../assets/images/svg/SetupPrivacyPublicIcon';
import NonGatedIcon from '../../../assets/images/svg/NonGatedIcon';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import { SetCommunityContext } from '../../context/SetUpCommunityContext';
const size = new sizes(height, width);

const SelectTokenView = () => {
  const { communityDetails, setCommunityDetails, updateViews } =
    useContext(SetCommunityContext);
  const privacy = communityDetails.gate;

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        Do you want the community to be token-gated?
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
          onPress={() => {
            setCommunityDetails({ ...communityDetails, gate: 'gated' });
            updateViews;
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                privacy === 'gated'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: privacy === 'gated' ? 3 : 1,
              borderColor:
                privacy === 'gated'
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
            <Text style={styles.settingsLeadingText}>Token-gated</Text>
            <Text style={styles.settingsText}>
              You get to choose which NFT or crypto asset members needs to hold
              to join this community
            </Text>
          </View>
          <TokengatedIcon size={size.getHeightSize(84)} />
        </Pressable>
        <Pressable
          onPress={() => {
            setCommunityDetails({ ...communityDetails, gate: 'nongated' });
          }}
          style={[
            styles.row,
            {
              backgroundColor:
                privacy === 'nongated'
                  ? 'rgba(146, 100, 248, 0.40)'
                  : 'transparent',
              borderWidth: privacy === 'nongated' ? 3 : 1,
              borderColor:
                privacy === 'nongated'
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
            <Text style={styles.settingsLeadingText}>Non token-gated</Text>
            <Text style={styles.settingsText}>
              Members don't need to hold any particular NFT or crypto asset to
              join.
            </Text>
          </View>
          <NonGatedIcon size={size.getHeightSize(84)} />
        </Pressable>
      </View>
    </View>
  );
};

export default SelectTokenView;
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
  settingsLeadingText: {
    color: appColor.primaryLight,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
  settingsText: {
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
