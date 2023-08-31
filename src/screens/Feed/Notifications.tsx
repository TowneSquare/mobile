import { Dimensions, StyleSheet, FlatList } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');;
import Header from '../../shared/Feed/Header';
import { appColor } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sizes } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import Notification from '../../components/Notification/Notification';
const size = new sizes(height, width);
const Notifications = () => {
  const data = [
    {
      username: 'MonkeyKing',
      type: 'follow',
      time: '2 mins ago',
      message: 'started following you',
      read: false,
    },
    {
      username: 'Decentraman',
      type: 'like',
      time: '2 mins ago',
      message: 'liked your post',
      read: false,
    },
    {
      username: 'Block3_BlockMe',
      type: 'like',
      time: 'yesterday',
      message: 'liked your comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'replied',
      time: '2 days ago',
      message: 'replied to your post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'replied',
      time: '2 days ago',
      message: 'replied to your comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a comment',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'mention',
      time: '2 days ago',
      message: 'mention you in a post',
      read: true,
    },
    {
      username: 'MonkeyKing',
      type: 'invite',
      time: '2 days ago',
      message: 'invited you to a community',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'repost',
      time: '2 days ago',
      message: 'reposted your post',
      read: false,
    },
    {
      username: 'MonkeyKing',
      type: 'offer',
      time: '2 days ago',
      message: 'just posted an offer',
      read: false,
    },
  ];
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <StatusBar style="light" backgroundColor={appColor.kgrayDark2} />

      <Header title="Notification" />
      <FlatList
        data={data}
        renderItem={({ item }) => <Notification data={item} />}
      />
    </SafeAreaView>
  );
};

export default Notifications;
const styles = StyleSheet.create({});
