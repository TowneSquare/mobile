import { Text, Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
import { useAppSelector, useAppDispatch } from '../../../controller/hooks';
import { updateRewardBottomsheetVisibility } from '../../../controller/RewardController';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const ReferralBottomsheet = () => {
  const disptach = useAppDispatch();
  const visibility = useAppSelector(
    (state) => state.RewardController.isRewardInfoBottomsheetVisible
  );
  return (
    <BottomsheetWrapper
      onClose={() => disptach(updateRewardBottomsheetVisibility(false))}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.title}>Referrals</Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        {`Invite your frens to join TowneSquare and get points when they become active users! For them to become active they need to: Buy or sell an NFT, swap tokens, or send tokens to another user.`}
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        For very active referral that joins TowneSquare you will get 100 Cred
        Points!
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        If your referral doesn't become active during the first 7 days upon
        registration, you will not get points from that referral.
      </Text>
      <Text style={[styles.text, { marginTop: size.getHeightSize(24) }]}>
        New referrals give you more points if you have more active referrals:
      </Text>
      <View style={[styles.row, { marginTop: size.getHeightSize(24) }]}>
        <Text style={styles.text}>•</Text>
        <Text style={styles.text2}>
          Every 25-49th active referral gives you 110 Cred Points
        </Text>
      </View>
      <View style={[styles.row]}>
        <Text style={styles.text}>•</Text>
        <Text style={[styles.text2]}>
          Every 50-74th active referral gives you 115 Cred Points
        </Text>
      </View>
      <View style={[styles.row]}>
        <Text style={styles.text}>•</Text>
        <Text style={[styles.text2]}>
          Every 75-119th active referral gives you 120 Cred Points
        </Text>
      </View>
      <View style={[styles.row]}>
        <Text style={styles.text}>•</Text>
        <Text style={[styles.text2]}>
          Every 120-199th active referral gives you 125 Cred Points
        </Text>
      </View>
      <View style={[styles.row]}>
        <Text style={styles.text}>•</Text>
        <Text style={[styles.text2]}>
          Every 200+ active referral gives you 130 Cred Points
        </Text>
      </View>
      <View style={{ height: size.getHeightSize(24) }} />
    </BottomsheetWrapper>
  );
};

export default ReferralBottomsheet;
const styles = StyleSheet.create({
  title: {
    marginTop: size.getHeightSize(24),
    marginHorizontal: size.getWidthSize(16),
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
  },
  text: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(8),
    paddingLeft: size.getWidthSize(8),
  },
  text2: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    color: appColor.kTextColor,
    fontFamily: 'Outfit-Regular',
    flex: 1,
  },
});
