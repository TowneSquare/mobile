import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import HorizontalMoreIcon from '../../../assets/images/svg/HorizontalMoreIcon';
import Chat from '../../components/DM/Chat';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Data {
  text: string;
  name: string;
  time: string;
  noOfUnreadMessages?: number;
}

const data: Data[] = [
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
    noOfUnreadMessages: 24,
  },
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
  },
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
    noOfUnreadMessages: 99,
  },
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
    noOfUnreadMessages: 24,
  },
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
    noOfUnreadMessages: 24,
  },
  {
    text: "Due to the backend's toggle switasdascctio...",
    name: 'User name',
    time: '12.23',
    noOfUnreadMessages: undefined,
  },
];
const Chats = () => {
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.header}>
        <HorizontalMoreIcon size={size.getHeightSize(24)} />
        <Text style={styles.headerText}>Messages</Text>
        <View
          style={{
            width: size.getWidthSize(24),
          }}
        />
      </View>
      <FlatList data={data} renderItem={({ item }) => <Chat data={item} />} />
    </SafeAreaView>
  );
};

export default Chats;
const styles = StyleSheet.create({
  text: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    zIndex: 2,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(20),
    backgroundColor: appColor.kgrayDark2,
  },
  headerText: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
  },
});
