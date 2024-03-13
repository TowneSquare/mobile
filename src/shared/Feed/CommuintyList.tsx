import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import JoinButton from './JoinButton';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  data: {
    name: string;
  };
}
const CommuintyList = ({ data }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: size.getHeightSize(16),
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          height: size.getHeightSize(40),
          width: size.getWidthSize(40),
        }}
        source={images.createPost1}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 1,
          marginLeft: size.getWidthSize(8),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: size.getWidthSize(153),
          }}
        >
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {data.name}
          </Text>
        </View>
        <Text style={styles.community}>COMMUNITY</Text>
      </View>
      <JoinButton joined={false} />
    </View>
  );
};

export default CommuintyList;
const styles = StyleSheet.create({
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  community: {
    fontSize: size.fontSize(11),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(14),
    letterSpacing: 0.44,
  },
  container: {
    flexDirection: 'row',
    width: size.getWidthSize(328),
    height: size.getHeightSize(56),
    borderRadius: 40,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: size.getHeightSize(8),
  },
  text: {
    fontSize: size.fontSize(20),
    lineHeight: size.getHeightSize(24),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    letterSpacing: size.getWidthSize(0.8),
    marginBottom: size.getHeightSize(8),
  },
  showMore: {
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.klightPurple,
    letterSpacing: size.getWidthSize(0.8),
    marginTop: size.getHeightSize(16),
    textAlign: 'center',
  },
});
