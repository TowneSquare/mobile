import { View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import MyRefferals from '../MyRefferals';
import { updatePointsonHoldBottomsheetVisibility } from '../../../../controller/RewardController';
import { useAppDispatch } from '../../../../controller/hooks';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const RefferalView = () => {
  const dispatch = useAppDispatch();
  return (
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
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
          <MyRefferals amount={100} active />
          <MyRefferals amount={100} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RefferalView;
