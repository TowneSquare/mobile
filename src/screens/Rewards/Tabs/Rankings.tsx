import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Earners from '../../../components/Rewards/UserDisplay/Earners';
import MyEarning from '../../../components/Rewards/UserDisplay/MyRank';
import { appColor } from '../../../constants';
import useBackHandler from '../../../hooks/useBackhandler';
import { sizes } from '../../../utils';
import { ranks } from '../../../utils/Rank.dummy';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const Rankings = () => {
  const [showDropdown, setDropdown] = useState(false);
  const [filterIndex, setFilterIndex] = useState(0);
  const filters = ['24h', '7 days', '30 days', 'All time'];
  useFocusEffect(
    React.useCallback(() => {
      return () => setDropdown(false);
    }, [])
  );
  useBackHandler(() => {
    if (showDropdown === true) {
      setDropdown(false);
      return true;
    } else {
      return false;
    }
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <View style={styles.view}>
        <Text style={styles.earners}>Top 500 Earners</Text>

        <Pressable
          onPress={() => {
            setDropdown((previous) => !previous);
          }}
          style={[
            styles.dropDownView,
            {
              borderRadius: showDropdown ? 20 : 40,
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: size.getWidthSize(8),
            }}
          >
            <Text style={styles.selectedDate}>{filters[filterIndex]}</Text>
            <Ionicons
              name={showDropdown ? 'caret-up' : 'caret-down'}
              size={size.getWidthSize(14)}
              color={appColor.kWhiteColor}
              style={{
                margin: size.getHeightSize(6),
              }}
            />
          </View>
          {showDropdown &&
            filters.map((filter, index) => {
              if (index !== filterIndex) {
                return (
                  <Text
                    onPress={() => {
                      setFilterIndex(index);
                      setDropdown((previous) => !previous);
                    }}
                    style={styles.days}
                  >
                    {filter}
                  </Text>
                );
              } else return null;
            })}
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: size.getHeightSize(12),
        }}
      >
        <FlatList
          onScroll={() => setDropdown(false)}
          contentContainerStyle={{
            gap: size.getHeightSize(4),
            paddingHorizontal: size.getWidthSize(4),
          }}
          data={ranks}
          renderItem={({ item }) => Earners(item, () => setDropdown(false))}
        />
      </View>
      <MyEarning
        name=""
        rank={9900}
        username=""
        callBack={() => setDropdown(false)}
      />
    </View>
  );
};

export default Rankings;
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: size.getWidthSize(16),
    marginTop: size.getHeightSize(26),
    marginBottom: size.getHeightSize(14),
    zIndex: 1,
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
    borderWidth: 1,
    gap: size.getHeightSize(8),
    borderColor: appColor.kGrayLight3,
    paddingVertical: size.getHeightSize(8),
    paddingLeft: size.getWidthSize(16),
    paddingRight: size.getWidthSize(8),
    width: size.getWidthSize(114),
    position: 'absolute',
    backgroundColor: appColor.feedBackground,
    right: 0,
    top: size.getHeightSize(-10),
  },
  days: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
  },
  selectedDate: {
    fontSize: size.fontSize(16),
    fontFamily: 'Outfit-Medium',
    color: appColor.kTextColor,
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
    flex: 1,
  },
});
