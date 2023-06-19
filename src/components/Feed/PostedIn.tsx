import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import APTMonkey from '../../../assets/images/svg/APTMonkey';
import { appColor } from '../../constants';
const { height, width } = Dimensions.get('window');
import { sizes } from '../../utils';
const size = new sizes(height, width);
interface Props {
  communityName: string;
}
const PostedIn = ({ communityName }: Props) => {
  return (
    <View style={communityStyles.container}>
      <Text style={communityStyles.postedIn}>posted in</Text>
      <APTMonkey />
      <Text style={communityStyles.communityName}>{communityName}</Text>
    </View>
  );
};

export default PostedIn;
const communityStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(6),
    alignItems: 'center',
    marginBottom: size.getHeightSize(4),
    marginTop: size.getHeightSize(3),
  },
  postedIn: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.grayLight,
    fontFamily: 'Outfit-Regular',
  },
  communityName: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    color: appColor.primaryLight,
    fontFamily: 'Outfit-SemiBold',
  },
});
