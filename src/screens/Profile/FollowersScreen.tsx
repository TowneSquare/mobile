import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
import TopTabNavigator from '../../navigations/InApp/TopTabNavigator';
import Header from '../../shared/Feed/Header';
import { sizes } from '../../utils';
import FollowersTab from './FollowersTab';
import FollowingTab from './FollowingTab';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const FollowersScreen = () => {
  const title = useAppSelector((state) => state.USER.UserData.username);
  const tabContent = [
    {
      name: 'Followers',
      content: FollowersTab,
    },
    {
      name: 'Following',
      content: FollowingTab,
    },
    // {
    //   name: 'Communities',
    //   content: CommunitiesTab,
    // },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={title} />
      <View style={styles.marginTop} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: size.getWidthSize(16),
        }}
      >
        <TopTabNavigator components={tabContent} fullRadius={true} />
      </View>
    </SafeAreaView>
  );
};

export default FollowersScreen;
const styles = StyleSheet.create({
  marginTop: {
    height: size.getHeightSize(16),
  },
});
