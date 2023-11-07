import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  moreIconCallBack: () => void;
}

const ConversationHeader = ({ moreIconCallBack }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <AntDesign
        name="arrowleft"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={navigation.goBack}
      />
      <View style={styles.view1}>
        <Avatar source={images.pfpImage} size={size.getHeightSize(40)} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(4),
            }}
          >
            <Text style={styles.name}>UsernameX</Text>
            <GreyBadge size={size.getHeightSize(18)} />
          </View>
          <Text style={styles.username}>@jczhang</Text>
        </View>
      </View>
      <Feather
        name="more-horizontal"
        color={appColor.kWhiteColor}
        size={size.fontSize(24)}
        onPress={moreIconCallBack}
      />
    </View>
  );
};

export default ConversationHeader;
const styles = StyleSheet.create({
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  view: {
    width: '100%',
    paddingVertical: size.getHeightSize(12),
    paddingHorizontal: size.getWidthSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColor.kgrayDark2,
  },
  username: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kGrayscale,
    lineHeight: size.getHeightSize(21),
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    width: size.getWidthSize(244),
    justifyContent: 'center',
  },
});
