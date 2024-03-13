import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AptosMokeyView from '../../components/Rewards/Airdrop/AirdropViews/AptosMokeyView';
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';
const AptosMonkey = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title={'AptosMonkeys'} />
      <AptosMokeyView />
    </SafeAreaView>
  );
};

export default AptosMonkey;

const styles = StyleSheet.create({});
