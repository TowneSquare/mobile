import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForYou from '../../../components/Feed/ForYou';
import { appColor } from '../../../constants';
import Header from '../../../shared/Feed/Header';
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
