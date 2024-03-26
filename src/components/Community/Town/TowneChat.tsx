import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { Avatar } from 'react-native-elements';
import { sizes } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const TowneChat = () => {
    const navigation=useNavigation()
  return (
    <Pressable onPress={() => {
        navigation.navigate("TownChatScreen")
    }} style={styles.parentContainer}>
      <Avatar source={images.siothian} size={size.getHeightSize(40)} rounded />
      <View
        style={{
          flex: 1,
          marginLeft: size.getWidthSize(8),
          gap: size.getHeightSize(2),
        }}
      >
        <View style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            CoolSIOths
          </Text>

          <Text
            style={[
              styles.time,
              {
                color: appColor.grayLight,
              },
            ]}
          >
            {'12:23'}
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
            No new messages
          </Text>
          {/* {data.unreadMessagesCount > 0 && (
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
              <Text style={styles.unread}>{data.unreadMessagesCount}</Text>
            </View>
          )} */}
        </View>
      </View>
    </Pressable>
  );
};

export default TowneChat;

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
