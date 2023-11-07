import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { sizes } from '../../../../utils';
import Balance from '../Balance';
import DefiTrades from '../DefiTrades';
import { appColor, images } from '../../../../constants';
import PointsIcon from '../../../../../assets/images/svg/Reward/PointsIcon';

const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const AptosMokeyView = () => {
  const aptosMonkes = [
    { amount: 100 },
    { amount: 100 },
    { amount: 100 },
    { amount: 100 },
    { amount: 100 },
    { amount: 100 },
  ];
  return (
    <ScrollView
      style={{
        paddingHorizontal: size.getWidthSize(16),
        marginTop: size.getHeightSize(16),
      }}
    >
      <Balance title="TS points from this collection" balance="200" />
      <View style={styles.parentView}>
        {aptosMonkes.map((aptosMonkey, index) => (
          <View
            style={{
              gap: size.getHeightSize(8),
            }}
          >
            <View style={styles.view1}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={images.aptosMonkey3}
              />
            </View>
            <View style={styles.view2}>
              <Text style={styles.amount}>50</Text>
              <PointsIcon size={size.getHeightSize(16)} />
              <Text style={styles.date}>/day</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AptosMokeyView;

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    // alignItems: 'center',
    rowGap: size.getWidthSize(16),
    columnGap: size.getHeightSize(16),
    marginTop: size.getHeightSize(16),
    flexWrap: 'wrap',

  },
  view1: {
    height: size.getWidthSize(161),
    width: size.getWidthSize(161),
    borderRadius: 8,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(4),
    alignSelf: 'center',
  },
  amount: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
  date: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(21),
  },
});
