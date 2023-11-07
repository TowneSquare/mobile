import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { appColor,  } from '../../../constants';
import { sizes } from '../../../utils';
import WhiteArrowUp from '../../../../assets/images/svg/WhiteArrowUp';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
interface Props {
  type: 'receive' | 'send';
}
const Transaction = ({ type }: Props) => {
  let priceColor: string;
  if (type == 'receive') {
    priceColor = '#2AB576';
  } else {
    priceColor = appColor.kErrorText;
  }
  return (
    <View style={styles.parentContainer}>
      <View style={styles.view}>
        <WhiteArrowUp size={size.getHeightSize(16)} />
      </View>
      <View style={styles.nameConatiner}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          You withdrew
        </Text>
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
          -0,0054 APT
        </Text>
        <Text style={styles.price}>$0.0054</Text>
      </View>
    </View>
  );
};

export default Transaction;
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
  title: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },

  price: {
    fontSize: size.fontSize(14),
    fontFamily: 'Outfit-Regular',
    textAlign: 'right',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(18),
  },
  view: {
    width: size.getHeightSize(32),
    height: size.getHeightSize(32),
    borderRadius: 20,
    backgroundColor: appColor.kSecondaryButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
