import { View, Text } from 'react-native';
import { appColor } from '../../constants';

const RewardTab = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'center',
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Text
        style={{
          color: appColor.kWhiteColor,
          textAlign: 'center',
          fontSize: 34,
          fontFamily: 'Outfit-SemiBold',
        }}
      >
        Reward
      </Text>
    </View>
  );
};

export default RewardTab;
