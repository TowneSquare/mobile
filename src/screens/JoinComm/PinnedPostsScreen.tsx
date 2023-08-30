import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import { sizes } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../shared/Feed/Header';
import { appColor } from '../../constants';
import ForYou from '../../components/Feed/ForYou';
const data = {
  id: '1',
  pfp: '',
  username: 'Real JC',
  nickname: 'Real',
  timepost: '6d',
  comments: '99k',
  retweet: '99k',
  like: '99k',
  type: 'message only',
  content: {
    message: 'Just joined TowneSquare, a new web3 social platform!',
  },
};
const PinnedPostsScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <Header title="Pinned Posts" />

      <ForYou data={data} />
      <ForYou data={data} />
    </SafeAreaView>
  );
};

export default PinnedPostsScreen;
