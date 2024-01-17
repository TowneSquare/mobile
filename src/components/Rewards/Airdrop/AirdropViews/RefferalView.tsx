import { View, Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { appColor } from '../../../../constants';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import MyRefferals from '../MyRefferals';
import RewardEmptystate from '../../RewardEmptystate';
import { useNavigation } from '@react-navigation/native';
import { updatePointsonHoldBottomsheetVisibility } from '../../../../controller/RewardController';
import { useAppDispatch } from '../../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const RefferalView = () => {
  const referralData = [
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
    {
      active: true,
      amount: 100,
    },
    {
      active: false,
      amount: 100,
    },
  ];
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <>
      {referralData.length > 0 ? (
        <ScrollView>
          <View
            style={{
              paddingHorizontal: size.getWidthSize(16),
              marginTop: size.getHeightSize(16),
            }}
          >
            <Balance
              onInfoButtonPressed={() =>
                dispatch(updatePointsonHoldBottomsheetVisibility(true))
              }
              onHold
              balance=""
              title="Total received from referrals"
            />
            <View
              style={{
                marginTop: size.getHeightSize(22),
              }}
            >
              {referralData.map((refferal) => (
                <MyRefferals
                  amount={refferal.amount}
                  active={refferal.active}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <RewardEmptystate
          onHold
          showButton
          buttonLabel="Share referral code"
          balance="0"
          balanceTitle="Total received from referrals"
          label="You don't have any referrals"
          description="When you invite someone to join TowneSquare, they will show up here together with the Cred Points earned"
          onPress={() => navigate('ShareReferralCode')}
        />
      )}
    </>
  );
};

export default RefferalView;
