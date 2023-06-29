import { View, Text, Dimensions, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor, fonts } from '../../constants';
import { useFonts } from 'expo-font';
import Queen from '../../../assets/images/svg/Queen';
const { height, width } = Dimensions.get('window');
import { useAppDispatch } from '../../controller/hooks';
import { updtaeReportingModal } from '../../controller/FeedsController';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
const size = new sizes(height, width);
interface Props {
  username: string;
  nickname: string;
  timepost: string;
  maxWidth?: number;
  onPress?: () => void;
}
const SinglePostCommentHeader = ({
  username,
  nickname,
  timepost,
  onPress,
  maxWidth,
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
    dispatch(updtaeReportingModal(true));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: size.getWidthSize(262),
      }}
    >
      <Pressable onPress={onPress} style={styles.pressable}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: size.fontSize(16),
            color: appColor.kTextColor,
            fontFamily: 'Outfit-Medium',
            lineHeight: size.getHeightSize(21),
            maxWidth: size.getWidthSize(74),
          }}
        >
          {username}
        </Text>
        <Queen />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            color: appColor.grayLight,
            fontSize: size.fontSize(14),
            lineHeight: size.getHeightSize(18),
            fontFamily: 'Outfit-Regular',
            maxWidth: maxWidth
              ? size.getWidthSize(maxWidth)
              : size.getWidthSize(73),
          }}
        >
          {nickname}
        </Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.timePost}>{timepost}</Text>
      </Pressable>

      <Feather
        onPress={showModal}
        name="more-horizontal"
        size={size.fontSize(20)}
        color={appColor.grayLight}
      />
    </View>
  );
};

export default SinglePostCommentHeader;
const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',

    flex: 1,
  },
  dot: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Bold',
  },
  timePost: {
    color: appColor.grayLight,
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
  },
});
