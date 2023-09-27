import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';

const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
const size = new sizes(height, width);
import { appColor, images } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import ChannelArrowIcon from '../../../assets/images/svg/ChannelArrowIcon';

const ChannelList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.channelView}>
        <ChannelArrowIcon
          style={{
            alignSelf: 'flex-end',
          }}
          size={size.getHeightSize(18)}
        />
        <Text style={styles.channelName}>Welcome</Text>
      </View>
      <View style={styles.channelTitleView}>
        <Pressable
          onPress={() => navigation.navigate('ChannelChat')}
          style={styles.view1}
        >
          <Text style={styles.channelTitle}>#general</Text>
          <View style={styles.messageCountView}>
            <Text style={styles.messageCount}>23</Text>
          </View>
        </Pressable>
        <Pressable style={styles.view1}>
          <Text
            style={[
              styles.channelTitle,
              {
                color: appColor.grayLight,
              },
            ]}
          >
            #general
          </Text>
        </Pressable>
        <Pressable style={styles.view1}>
          <Text style={styles.channelTitle}>#general</Text>
          <View style={styles.messageCountView}>
            <Text style={styles.messageCount}>23</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ChannelList;
const styles = StyleSheet.create({
  channelView: {
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    gap: size.getWidthSize(8),
    alignItems: 'flex-start',
  },
  channelName: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'left',
    flex: 1,
  },
  channelTitleView: {
    gap: size.getHeightSize(17),
    paddingHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(12.5),
  },
  channelTitle: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Regular',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(16),
  },
  messageCount: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
  messageCountView: {
    paddingHorizontal: size.getWidthSize(4),
    backgroundColor: appColor.kSecondaryButtonColor,
    borderRadius: 6,
  },
});
