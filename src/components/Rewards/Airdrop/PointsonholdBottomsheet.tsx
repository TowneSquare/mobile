import { Text, Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import { appColor } from '../../../constants';
import { sizes } from '../../../utils';
import BottomsheetWrapper from '../../../shared/BottomsheetWrapper';
import { useAppDispatch, useAppSelector } from '../../../controller/hooks';
import { updatePointsonHoldBottomsheetVisibility } from '../../../controller/RewardController';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const PointsonholdBottomsheet = () => {
  const dispatch = useAppDispatch();
  const visibility = useAppSelector(
    (state) => state.RewardController.isPointsonHoldBottomsheetVisible
  );
  return (
    <BottomsheetWrapper
      onClose={() => dispatch(updatePointsonHoldBottomsheetVisibility(false))}
      backdropOpacity={0.7}
      visibility={visibility}
    >
      <Text style={styles.title}>Points on hold</Text>
      <Text style={[styles.text]}>
        You will receive the points that are “On hold” when your referrals
        become “active” by doing one of the following actions in the app after
        signup:
      </Text>
      <Text
        style={[
          styles.text,
          {
            marginLeft: size.getWidthSize(4),
            marginTop: size.getHeightSize(24),
          },
        ]}
      >
        • Buy or sell an NFT
      </Text>
      <Text style={[styles.text, { marginLeft: size.getWidthSize(4) }]}>
        • Swap tokens
      </Text>
      <Text style={[styles.text, { marginLeft: size.getWidthSize(4) }]}>
        • Send tokens to another user
      </Text>
      <View style={{ height: size.getHeightSize(48) }} />
    </BottomsheetWrapper>
  );
};

export default PointsonholdBottomsheet;
const styles = StyleSheet.create({
  title: {
    marginVertical: size.getHeightSize(24),
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
});
