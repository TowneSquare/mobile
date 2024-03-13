import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import CommunityDiscoverIcon from '../../../../assets/images/svg/CommunityDiscoverIcon';
import CoomunityMonetizeIcon from '../../../../assets/images/svg/CommunityMonetizeIcon';
import CommunityUserIcon from '../../../../assets/images/svg/CommunityUserIcon';
import CommunityUsersIcon from '../../../../assets/images/svg/CommunityUsersIcon';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const IntroView = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <CommunityUsersIcon
        size={size.getHeightSize(76)}
        style={{
          marginTop: size.getHeightSize(32),
        }}
      />
      <Text style={styles.ask}>"Why should create a community?"</Text>
      <Text style={styles.text}>We thought you'd never ask!</Text>
      <View
        style={{
          gap: size.getHeightSize(24),
          marginTop: size.getHeightSize(32),
          paddingVertical: size.getHeightSize(11.5),
        }}
      >
        <View style={styles.view}>
          <CommunityDiscoverIcon size={size.getHeightSize(48)} />
          <View style={{ width: size.getWidthSize(264) }}>
            <Text style={styles.leadingText}>
              Discover the latest opportunities from your circle!
            </Text>
            <Text style={styles.description}>
              Either through posts for meaningful conversations or with chat
              channels for all purpose discussions, you can have it all!
            </Text>
          </View>
        </View>
        <View style={styles.view}>
          <CommunityUserIcon size={size.getHeightSize(48)} />
          <View style={{ width: size.getWidthSize(264) }}>
            <Text style={styles.leadingText}>
              Find your friends more easily with assets & on-chain data!
            </Text>
            <Text style={styles.description}>
              Token gated access lorem ispum dolor sit amet
            </Text>
          </View>
        </View>
        <View style={styles.view}>
          <CoomunityMonetizeIcon size={size.getHeightSize(48)} />
          <View style={{ width: size.getWidthSize(264) }}>
            <Text style={styles.leadingText}>Monetize (coming soon)</Text>
            <Text style={styles.description}>
              New ways of monetization your content and communities on web3
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroView;
const styles = StyleSheet.create({
  ask: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(29),
    fontFamily: 'Outfit-Bold',
    lineHeight: size.getHeightSize(39),
    textAlign: 'center',
    marginTop: size.getHeightSize(16),
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
