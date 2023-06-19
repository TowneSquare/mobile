import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { appColor, fonts, images } from '../../constants';
import { useFonts } from 'expo-font';
import Queen from '../../../assets/images/svg/Queen';
const { height, width } = Dimensions.get('window');
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import RepostedIcon from '../../../assets/images/svg/RepostedIcon';
import { Avatar } from 'react-native-elements';
const size = new sizes(height, width);
const RepostedHeader = () => {
  let [isLoaded] = useFonts({
    'Outfit-Bold': fonts.OUTFIT_BOLD,
    'Outfit-Medium': fonts.OUTFIT_NORMAL,
    'Outfit-Regular': fonts.OUTFIT_REGULAR,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: size.getHeightSize(5),
        marginBottom: size.getHeightSize(9.5),
        alignItems: 'center',
        gap: size.getWidthSize(8),
      }}
    >
      <RepostedIcon />
      <Text
        style={{
          fontSize: size.fontSize(14),
          color: appColor.grayLight,
          lineHeight: size.getHeightSize(18),
          fontFamily: 'Outfit-Regular',
        }}
      >
        reposted
      </Text>
    </View>
  );
};

export default RepostedHeader;
