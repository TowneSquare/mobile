import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import TopTabNavigator from '../../navigations/InApp/TopTabNavigator';
import { sizes } from '../../utils';
import Airdrop from './Tabs/Airdrop';
import Earnings from './Tabs/Earnings';
import Rankings from './Tabs/Rankings';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const RewardTab = () => {
  const tabContent = [
    {
      name: 'Rankings',
      content: Rankings,
    },
    {
      name: 'Earnings',
      content: Earnings,
    },
    {
      name: 'Airdrop',
      content: Airdrop,
    },
  ];
  // useBackHandler(() => {
  //   BackHandler.exitApp();
  //   return true;
  // });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Rewards</Text>
      </View>
      <TopTabNavigator components={tabContent} fullRadius={false} />
    </SafeAreaView>
  );
};

export default RewardTab;
const styles = StyleSheet.create({
  header: {
    paddingVertical: size.getHeightSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColor.kgrayDark2,
  },
  headerText: {
    color: appColor.kTextColor,
    textAlign: 'center',
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-Regular',
  },
});
