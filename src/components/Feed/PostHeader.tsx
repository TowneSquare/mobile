import { View, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
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
import Entypo from '@expo/vector-icons/Entypo';
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
      }}
    >
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: 'row',
          gap: size.getWidthSize(4),
          // maxWidth: size.getWidthSize(270),
          alignItems: 'center',
          flex: 1,
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
        <View
          style={{
            flexDirection: 'row',
            flex: 0,
          }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(14),
              lineHeight: size.getHeightSize(18),
              fontFamily: 'Outfit-Regular',
              maxWidth: size.getWidthSize(
                timepost.length === 3
                  ? 152
                  : timepost.length > 3 && timepost.length < 4
                  ? 133
                  : timepost.length > 4
                  ? 129
                  : 157
              ),
            }}
          >
            @{myPost ? 'myaccountName' : nickname}
          </Text>
        </View>
        <View style={{}}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: appColor.grayLight,
              fontSize: size.fontSize(14),
              lineHeight: size.getHeightSize(18),
              fontFamily: 'Outfit-Bold',
            }}
          >
            •{' '}
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: appColor.grayLight,
                fontSize: size.fontSize(14),
                lineHeight: size.getHeightSize(18),
                fontFamily: 'Outfit-Regular',
              }}
            >
              {timepost}
            </Text>
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          alignSelf: 'flex-start',
          // marginLeft: 'auto',
          flex: 0,
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
  );
};

export default PostHeader;
