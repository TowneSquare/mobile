import { View, Text, Dimensions, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { sizes } from '../../../utils';
import { appColor } from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Earners from '../../../components/Rewards/UserDisplay/Earners';
import { ranks } from '../../../utils/Rank.dummy';
import MyEarning from '../../../components/Rewards/UserDisplay/MyRank';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Rankings = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.view}>
        <Text style={styles.earners}>Top 500 Earners</Text>
        <View style={styles.dropDownView}>
          <Text style={styles.days}>30 days</Text>
          <Ionicons
            name="caret-down"
            size={size.getHeightSize(10)}
            color={appColor.kWhiteColor}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: size.getHeightSize(12),
        }}
      >
        <FlatList
          contentContainerStyle={{
            gap: size.getHeightSize(4),
            paddingHorizontal: size.getWidthSize(4),
          }}
          data={ranks}
          renderItem={({ item }) => Earners(item)}
        />
      </View>
      <MyEarning name="" rank={9900} username="" />
    </View>
  );
};

export default Rankings;
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(16),
  },
  earners: {
    fontSize: size.fontSize(20),
    fontFamily: 'Outfit-SemiBold',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(24),
    letterSpacing: 0.4,
    flex: 1,
  },
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
    borderWidth: 1,
    borderRadius: 40,
    borderColor: appColor.kGrayLight3,
    paddingVertical: size.getHeightSize(10),
    paddingLeft: size.getWidthSize(16),
    paddingRight: size.getWidthSize(8),
  },
  days: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
  },
});
