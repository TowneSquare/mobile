import { View, Dimensions, StyleSheet } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import Header from '../../shared/Feed/Header';
import FollowersTab from './FollowersTab';
import FollowingTab from './FollowingTab';
import CommunitiesTab from './CommunitiesTab';
const size = new sizes(height, width);
import { SafeAreaView } from 'react-native-safe-area-context';
import TopTabNavigator from '../../navigations/InApp/TopTabNavigator';
import { useAppSelector } from '../../controller/hooks';
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
