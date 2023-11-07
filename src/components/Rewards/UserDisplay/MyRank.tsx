import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { Avatar } from 'react-native-elements';
import Queen from '../../../../assets/images/svg/Queen';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  username: string;
  name: string;
  rank: number;
}
const MyRank = ({ name, rank, username }: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.numberView}>
        <Text style={styles.numberText}>{rank}</Text>
      </View>
      <View style={styles.parentContainer}>
        <Avatar
          rounded
          size={size.getHeightSize(32)}
          source={images.profileImage}
        />
        <View style={styles.nameConatiner}>
          <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
              User Name
            </Text>
            <Queen />
          </View>
          <Text style={styles.username}>@username</Text>
        </View>
      </View>
      <Text style={styles.reward}>$3,921.99</Text>
    </View>
  );
};

export default MyRank;
const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameConatiner: {
    flex: 1,
    marginLeft: size.getWidthSize(8),
  },
  name: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kSecondaryButtonColor,
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
  view: {
    width: '100%',
    paddingVertical: size.getHeightSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    paddingHorizontal: size.getWidthSize(16),
    backgroundColor: appColor.kgrayDark2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-start',
  },
  numberView: {
    minWidth: size.getWidthSize(26),
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColor.kGrayLight3,
    paddingHorizontal: size.getWidthSize(4),
  },
  numberText: {
    color: appColor.kTextColor,
    letterSpacing: 0.44,
    fontSize: size.fontSize(11),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-SemiBold',
  },
  reward: {
    color: appColor.kTextColor,
    fontSize: size.fontSize(16),
    lineHeight: size.getHeightSize(21),
    fontFamily: 'Outfit-Medium',
    textAlign: 'right',
  },
});
