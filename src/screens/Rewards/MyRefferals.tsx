import { Dimensions, FlatList } from 'react-native';
import { appColor } from '../../constants';
import { sizes } from '../../utils';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyReferrals from '../../components/Rewards/UserDisplay/MyReferrals';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

const refferals = [
  {
    name: 'John Doe',
    username: '@johndoe',
    active: true,
    price: 2000,
  },
  {
    name: 'John Doe',
    username: '@johndoe',
    active: true,
    price: 2000,
  },
  {
    name: 'John Doe',
    username: '@johndoe',
    active: false,
    price: 2000,
  },
  {
    name: 'John Doe',
    username: '@johndoe',
    active: true,
    price: 2000,
  },
  {
    name: 'John Doe',
    username: '@johndoe',
    active: false,
    price: 2000,
  },
  {
    name: 'John Doe',
    username: '@johndoe',
    active: false,
    price: 2000,
  },
];
const MyRefferals = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="My referrals" />
      <FlatList
        style={{
          marginTop: size.getHeightSize(8),
        }}
        contentContainerStyle={{
          paddingHorizontal: size.getWidthSize(16),
        }}
        data={refferals}
        renderItem={({ item }) => MyReferrals(item)}
      />
    </SafeAreaView>
  );
};

export default MyRefferals;
