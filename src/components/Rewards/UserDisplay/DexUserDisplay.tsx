import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor, images } from '../../../constants';
import { sizes } from '../../../utils';
import { Avatar } from 'react-native-elements';
import Queen from '../../../../assets/images/svg/Queen';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  price: number;
}
const DexSwapUserDisplay = ({ price }: Props) => {
  let priceColor: string;
  if (price < 0) {
    priceColor = appColor.kErrorText;
  } else if (price == 0) {
    priceColor = appColor.kWhiteColor;
  } else {
    priceColor = '#2AB576';
  }
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
            User Name
          </Text>
          <Queen />
        </View>
        <Text style={styles.username}>@username</Text>
      </View>
      <View
        style={{
          gap: size.getHeightSize(2),
        }}
      >
        <Text
          style={{
            fontSize: size.fontSize(16),
            fontFamily: 'Outfit-Bold',
            color: priceColor,
            lineHeight: size.getHeightSize(21),
            textAlign: 'right',
          }}
        >
          +$0,0054 APT
        </Text>
        <Text
          style={{
            fontSize: size.fontSize(14),
            fontFamily: 'Outfit-Regular',
            textAlign: 'right',
            color: appColor.kTextColor,
            lineHeight: size.getHeightSize(18),
          }}
        >
          $0.0054
        </Text>
      </View>
    </View>
  );
};

export default DexSwapUserDisplay;
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
  price: {},
});
