import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InviteUserDisplay from '../../../components/Community/Community/InviteUserDisplay';
import { appColor } from '../../../constants';
import { useAppSelector } from '../../../controller/hooks';
import SearchField from '../../../shared/Feed/SearchField';

const FollowersInviteTab = () => {
  const COMMUNITY_DATA = useAppSelector(
    (state) => state.COMMUNITY.communityData
  );
  return (
    <View
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <SearchField placeholder="Search" width="90%" />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            marginHorizontal: 32,
          }}
        >
          {COMMUNITY_DATA.map((d) => (
            <InviteUserDisplay
              key={d.id}
              data={d.userData}
              InviteState={d.InviteState}
              userId={d.id}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FollowersInviteTab;
