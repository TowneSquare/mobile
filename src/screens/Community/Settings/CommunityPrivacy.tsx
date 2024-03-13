import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SetupPrivacyPrivateIcon from '../../../../assets/images/svg/SetupPrivacyPrivateIcon';
import SetupPrivacyPublicIcon from '../../../../assets/images/svg/SetupPrivacyPublicIcon';
import PrivacyBottomSheet from '../../../components/Community/Settings/PrivacyBottomSheet';
import { appColor } from '../../../constants';
import { CommunityPrivacyProps } from '../../../navigations/NavigationTypes';
import BackButton from '../../../shared/BackButton';
import ContinueButton from '../../../shared/ContinueButton';
import Header from '../../../shared/Feed/Header';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');

const size = new sizes(height, width);

const CommunityPrivacy = ({ navigation }: CommunityPrivacyProps) => {
  const [communityPrivacy, setCommunityPrivacy] = useState<
    'Public' | 'Private'
  >(undefined);
  const [showBottomSheet, setVisibility] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Privacy" />
      <View
        style={{
          paddingHorizontal: size.getWidthSize(16),
          flex: 1,
        }}
      >
        <Text style={styles.label}>Your community is</Text>
        <Text style={styles.label2}>Public</Text>
        <View style={styles.container}>
          <Pressable
            onPress={() => setCommunityPrivacy('Public')}
            style={[
              styles.row,
              {
                backgroundColor:
                  communityPrivacy === 'Public'
                    ? 'rgba(146, 100, 248, 0.40)'
                    : 'transparent',
                borderWidth: communityPrivacy === 'Public' ? 3 : 1,
                borderColor:
                  communityPrivacy === 'Public'
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
                Communities that can be joined by anyone on TowneSquare that
                meet the joining criteria.
              </Text>
            </View>
            <SetupPrivacyPublicIcon size={size.getHeightSize(84)} />
          </Pressable>
          <Pressable
            onPress={() => setCommunityPrivacy('Private')}
            style={[
              styles.row,
              {
                backgroundColor:
                  communityPrivacy === 'Private'
                    ? 'rgba(146, 100, 248, 0.40)'
                    : 'transparent',
                borderWidth: communityPrivacy === 'Private' ? 3 : 1,
                borderColor:
                  communityPrivacy === 'Private'
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
                Communities not publicly discoverable within the app and can
                only be accessed with an invitation.
              </Text>
            </View>
            <SetupPrivacyPrivateIcon size={size.getHeightSize(84)} />
          </Pressable>
        </View>
        <View
          style={{
            paddingHorizontal: size.getWidthSize(16),
            paddingTop: size.getHeightSize(8),
          }}
        >
          <ContinueButton
            callBack={() => setVisibility(true)}
            disable={typeof communityPrivacy === 'undefined'}
          />

          <BackButton callBack={navigation.goBack} />
        </View>
        <PrivacyBottomSheet
          handleVisibility={() => setVisibility(false)}
          visibility={showBottomSheet}
          privacy={communityPrivacy}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommunityPrivacy;
const styles = StyleSheet.create({
  label: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Regular',
    marginTop: size.getHeightSize(34),
    textAlign: 'center',
  },
  label2: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginVertical: size.getHeightSize(32),
    justifyContent: 'center',
    gap: size.getHeightSize(16),
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
});
