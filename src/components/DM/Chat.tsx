import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { appColor, images } from '../../constants';
import { sizes } from '../../utils';
import { Avatar } from 'react-native-elements';
const { height, width } = Dimensions.get('window');
import GreyBadge from '../../../assets/images/svg/GreyBadge';
import { useNavigation } from '@react-navigation/native';
type Data = {
  name: string;
  text: string;
  time: string;
  noOfUnreadMessages: number;
};
interface Props {
  data: Partial<Data>;
}

const size = new sizes(height, width);
const Chat = ({ data }: Props) => {
  const navigation = useNavigation();
  const { name, noOfUnreadMessages, text, time } = data;
  return (
    <Pressable
      onPress={() => navigation.navigate('Conversation')}
      style={styles.parentContainer}
    >
      <Avatar source={images.pfpImage} size={size.getHeightSize(40)} rounded />
      <View
        style={{
          flex: 1,
          marginLeft: size.getWidthSize(8),
          gap: size.getHeightSize(2),
        }}
      >
        <View style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {name}
          </Text>
          <GreyBadge style={{ flex: 1 }} size={size.getHeightSize(18)} />
          <Text
            style={[
              styles.time,
              {
                color: noOfUnreadMessages
                  ? appColor.primaryLight
                  : appColor.grayLight,
              },
            ]}
          >
            {time}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.getWidthSize(4),
          }}
        >
          <Text numberOfLines={1} style={styles.text}>
            {text}
          </Text>
          {noOfUnreadMessages && (
            <View
              style={{
                alignSelf: 'flex-end',
                backgroundColor: appColor.primaryLight,
                paddingVertical: size.getHeightSize(3),
                paddingHorizontal: size.getWidthSize(8),
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.unread}>{noOfUnreadMessages}</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Chat;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    paddingHorizontal: size.getWidthSize(16),
    paddingVertical: size.getHeightSize(16),
    gap: size.getWidthSize(1),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
  },
  unread: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    lineHeight: size.getHeightSize(18),
    textAlign: 'right',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    alignItems: 'center',
  },
  text: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
    lineHeight: size.getHeightSize(18),
    flex: 1,
  },
});
