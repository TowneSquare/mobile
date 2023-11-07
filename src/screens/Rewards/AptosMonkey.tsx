import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../shared/Feed/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColor } from '../../constants';
import AptosMokeyView from '../../components/Rewards/Airdrop/AirdropViews/AptosMokeyView';
import { sizes } from '../../utils';
const AptosMonkey = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={'AptosMonkey'} />
      <AptosMokeyView />
    </SafeAreaView>
  );
};

export default AptosMonkey;

const styles = StyleSheet.create({});
