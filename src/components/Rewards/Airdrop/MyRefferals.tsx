import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { Avatar } from 'react-native-elements';
import Queen from '../../../../assets/images/svg/Queen';
import InactivePointIcon from '../../../../assets/images/svg/Reward/InactivePointIcon';

import PointsIcon from '../../../../assets/images/svg/Reward/PointsIcon';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);

interface Props {
  active?: boolean;
  amount: number;

}
const MyRefferals = ({ active, amount }: Props) => {

  return (
    <View style={styles.parentContainer}>
      <Avatar
        rounded
        size={size.getHeightSize(32)}
        source={images.profileImage}
      />
      <View style={styles.nameConatiner}>
        <View style={styles.container}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            User1
          </Text>
          <Queen />
          <View
            style={{
              paddingHorizontal: size.getWidthSize(8),
              paddingVertical: size.getHeightSize(4),
              borderRadius: 48,
              backgroundColor: appColor.kgrayDark2,
            }}
          >
            <Text
              style={{
                fontSize: size.fontSize(11),
                fontFamily: 'Outfit-SemiBold',
                color: active ? '#2AB576' : appColor.kGrayLight3,
                lineHeight: size.getHeightSize(14),
                letterSpacing: 0.44,
              }}
            >
              {active ? 'ACTIVE' : 'INACTIVE'}
            </Text>
          </View>
        </View>
        <Text style={styles.username}>@username</Text>
      </View>
      <Text
        style={{
          fontSize: size.fontSize(16),
          fontFamily: 'Outfit-SemiBold',
          color: active ? appColor.kTextColor : appColor.kGrayLight3,
          lineHeight: size.getHeightSize(21),
          marginRight: size.getWidthSize(8),
        }}
      >
        100
      </Text>
      {active ? (
        <PointsIcon size={size.getHeightSize(16)} />
      ) : (
        <InactivePointIcon size={size.getHeightSize(16)} />
      )}
    </View>
  );
};

export default MyRefferals;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: appColor.grayDark,
    paddingVertical: size.getHeightSize(8.5),
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
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
  container: {
    flexDirection: 'row',
    gap: size.getWidthSize(4),
    width: size.getWidthSize(153),
    alignItems: 'center',
  },
});
