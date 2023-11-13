import { View, Text, Dimensions } from 'react-native';
import { sizes } from '../../utils';
import { appColor, fonts } from '../../constants';
import { useFonts } from 'expo-font';
const { height, width } = Dimensions.get('window');
import { useAppDispatch } from '../../controller/hooks';
import { updtaeReportingModal } from '../../controller/FeedsController';
import Feather from '@expo/vector-icons/Feather';
import ProfilePicture from '../Feed/SwipeableProfilePicture';
const size = new sizes(height, width);
interface Props {
  username: string;
  nickname: string;
  timepost: string;
  onPress?: () => void;
}
const SinglePostHeader = ({ username, nickname, timepost, onPress }: Props) => {
  const dispatch = useAppDispatch();
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const showModal = () => {
    dispatch(updtaeReportingModal(true));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}
    >
      <ProfilePicture left={-1} top={-4} swipeable />

      <View
        style={{
          flex: 1,
          marginLeft: size.getWidthSize(48),
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: size.fontSize(16),
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Medium',
            lineHeight: size.getHeightSize(21),
            maxWidth: size.getWidthSize(230),
          }}
        >
          {username}
        </Text>

        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            fontFamily: 'Outfit-Regular',
            maxWidth: size.getWidthSize(230),
          }}
        >
          @{nickname}
        </Text>
      </View>
      <Text
        style={{
          color: appColor.grayLight,
          fontSize: size.fontSize(14),
          lineHeight: size.getHeightSize(18),
          fontFamily: 'Outfit-Regular',
          marginRight: size.getWidthSize(8),
          marginTop: size.getHeightSize(3),
        }}
      >
        {timepost}
      </Text>

      <Feather
        onPress={showModal}
        name="more-horizontal"
        size={size.fontSize(20)}
        color={appColor.grayLight}
      />
    </View>
  );
};

export default SinglePostHeader;
