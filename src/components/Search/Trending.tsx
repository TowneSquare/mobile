import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchField from '../createPost/SearchField';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
import { appColor, fonts } from '../../constants';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
interface Trends {
  tags: string;
  no: string;
}
const size = new sizes(height, width);
const Trending = () => {
  const data = [
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
    {
      tags: '#hashtag',
      no: '999',
    },
  ];
  const [trendData, setTrendData] = useState<Trends[][]>([]);
  useEffect(() => {
    const size = 2;
    const result = [];
    const length = data.length;
    for (let i = 0; i < length; i += size) {
      result.push(data.slice(i, i + size));
    }
    setTrendData(result);
  }, []);

  const Trend = (trend: Trends[], index: number) => {
    return (
      <View style={{}}>
        <View style={styles.rows}>
          <Text style={styles.tags}>
            {trend[0].tags} <Text style={styles.no}>{trend[0].no}</Text>
          </Text>
        </View>
        {trend.length > 1 ? (
          <View style={[styles.rows, { marginTop: size.getHeightSize(8) }]}>
            <Text style={styles.tags}>
              {trend[0].tags} <Text style={styles.no}>{trend[0].no}</Text>
            </Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={trendData}
        renderItem={({ item, index }) => Trend(item, index)}
        horizontal
      />
    </View>
  );
};

export default Trending;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rows: {
    borderWidth: 1,
    borderColor: appColor.grayLight,
    paddingVertical: size.getHeightSize(8),
    paddingHorizontal: size.getWidthSize(16),
    borderRadius: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: size.getWidthSize(8),
  },
  tags: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    color: appColor.kTextColor,
  },
  no: {
    fontSize: size.fontSize(14),
    lineHeight: size.getHeightSize(18),
    fontFamily: 'Outfit-Regular',
    color: appColor.grayLight,
  },
});
