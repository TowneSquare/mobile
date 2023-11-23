import {
  View,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  useEffect,
  useState,
  useCallback,
} from 'react';
import { sizes } from '../../utils';
import { appColor, fonts } from '../../constants';
import { useFonts } from 'expo-font';
import Queen from '../../../assets/images/svg/Queen';
const { height, width } = Dimensions.get('window');
import { useAppDispatch } from '../../controller/hooks';
import {
  updtaeReportingModal,
  updateMyPostPanel,
} from '../../controller/FeedsController';
import Feather from '@expo/vector-icons/Feather';
const size = new sizes(height, width);
interface Props {
  username: string;
  nickname: string;
  timepost: string;
  maxWidth?: number;
  onPress?: () => void;
  myPost?: boolean;
}
const PostHeader = ({
  username,
  nickname,
  timepost,
  onPress,
  maxWidth,
  myPost,
}: Props) => {
  const dispatch = useAppDispatch();
  const [textWidth, setTextWidth] = useState<number | undefined>(undefined);
  const [timePostLayout, setTimePostLayout] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [usernameLayout, setLayout] = useState(0);
  const [nicknameLayout, setNickNameLayout] = useState(0);
  const [isLayoutComplete, setIsLayoutComplete] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  useEffect(() => {
    if (renderCount === 0) {
      if (nicknameLayout + usernameLayout + 4 > size.getWidthSize(270)) {
        setTextWidth(size.getWidthSize(268) - usernameLayout - timePostLayout);
      }
      setIsTruncated(true);
    }
  }, [nicknameLayout, usernameLayout, timePostLayout]);

  const handleUsernameLayout = useCallback((event) => {
    setLayout(event.nativeEvent.layout.width);
  }, []);
  const handleNickNameWidth = useCallback((event) => {
    setNickNameLayout(event.nativeEvent.layout.width);
  }, []);
  const handleTimePostLayout = useCallback((event) => {
    setTimePostLayout(event.nativeEvent.layout.width);
  }, []);

  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  const showModal = () => {
   
    dispatch(myPost ? updateMyPostPanel(true) : updtaeReportingModal(true));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: size.getWidthSize(290),
      }}
    >
      <View
        style={{
          justifyContent: 'center',

          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={onPress}
          style={{
            flexDirection: 'row',
            gap: size.getWidthSize(4),
            alignItems: 'center',
            width: size.getWidthSize(270),
            // overflow: 'hidden',
          }}
        >
          <View
            onLayout={handleUsernameLayout}
            key={'username'}
            style={{
              flexDirection: 'row',
              gap: size.getWidthSize(4),
              alignItems: 'center',
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
              }}
            >
              {truncateText(myPost ? 'MyAccountName' : username, 15)}
            </Text>
            <Queen />
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(14),
              lineHeight: size.getHeightSize(18),
              fontFamily: 'Outfit-Regular',

              // maxWidth: textWidth
              //   ? size.getWidthSize(textWidth)
              //   : undefined,
            }}
          >
            @{myPost ? 'myaccountName' : nickname}
            <Text
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Regular',
                marginLeft: 'auto',
              }}
            >
              {' '}
              • {timepost}
            </Text>
          </Text>
          {/* <View style={{ marginLeft: 'auto' }} onLayout={handleTimePostLayout}>
            <Text
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Regular',
              }}
            >
              • {timepost}
            </Text>
          </View> */}
        </Pressable>
        <View
          style={{
            alignSelf: 'flex-start',
            // marginLeft: 'auto',
            // flex: 0,
            flexDirection: 'row',
          }}
        >
          <Feather
            onPress={showModal}
            name="more-horizontal"
            size={size.fontSize(20)}
            color={appColor.grayLight}
          />
        </View>
      </View>
    </View>
  );
};

export default PostHeader;
