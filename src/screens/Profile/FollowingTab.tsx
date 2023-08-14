import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { appColor, fonts, images } from '../../constants';
import { sizes } from '../../utils';
import SearchField from '../../shared/Feed/SearchField';
import UserDisplay from '../../shared/Feed/UserDisplay';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const FollowingTab = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <SearchField placeholder="Search" width={'100%'} />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: size.getHeightSize(16),
          }}
        >
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
          <UserDisplay data={{ name: 'User Name', username: '@web3_guru' }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default FollowingTab;
