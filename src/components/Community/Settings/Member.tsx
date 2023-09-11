import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import { sizes } from '../../../utils';
import { appColor, images } from '../../../constants';
import { Avatar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import UserPurplebadge from '../../../../assets/images/svg/UserPurplebadge';
import RemoveIcon from '../../../../assets/images/svg/RemoveIcon';
import UserQueenBadge from '../../../../assets/images/svg/UserQueenBadge';
import SelectedMemberIcon from '../../../../assets/images/svg/SelectedMemberIcon';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  icon?: 'more_icon' | 'cancel_icon' | 'selected';
  callBack?: () => void;
  badge: 'purple_badge' | 'queen_badge';
}

const Member = ({ callBack, icon, badge }: Props) => {
  const IconToRender = () => {
    switch (icon) {
      case 'cancel_icon':
        return <RemoveIcon size={size.getHeightSize(20)} />;
      case 'more_icon':
        return (
          <Feather
            name="more-horizontal"
            color={appColor.kWhiteColor}
            size={size.fontSize(24)}
            onPress={callBack}
          />
        );
      case 'selected':
        return <SelectedMemberIcon size={size.getHeightSize(20)} />;
    }
  };

  return (
    <Pressable
      onPress={callBack}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: size.getWidthSize(8),
        paddingVertical: size.getHeightSize(8),
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: size.getWidthSize(8),
          flex: 1,
        }}
      >
        <Avatar
          rounded
          size={size.getHeightSize(40)}
          source={images.profileImage}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(4),
            }}
          >
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              User Name
            </Text>
            {badge === 'queen_badge' ? (
              <UserQueenBadge size={size.getHeightSize(18)} />
            ) : (
              <UserPurplebadge size={size.getHeightSize(18)} />
            )}
          </View>
          <Text style={styles.username}>@username</Text>
        </View>
      </View>
      {icon && <IconToRender />}
    </Pressable>
  );
};

export default Member;
const styles = StyleSheet.create({
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  username: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.kgrayColor,
    lineHeight: size.getHeightSize(18),
  },
});
