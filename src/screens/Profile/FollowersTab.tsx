import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FollowingProps, getFollowers } from '../../api';
import { appColor } from '../../constants';
import { useAppSelector } from '../../controller/hooks';
import SearchField from '../../shared/Feed/SearchField';
import UserDisplay from '../../shared/Feed/UserDisplay';
import { sizes } from '../../utils';
const { height, width } = Dimensions.get('window');
const size = new sizes(height, width);
const FollowersTab = () => {
  const token = useAppSelector((state) => state.USER.didToken)
   const [followersData, setFollowersData] = useState<FollowingProps[]>([{
    "_id": "655d71b07123f56056b546d8",
    "fromUserId": "655ab007ce8937ff6d512885",
    "toUserId": "653730c76171091d6b469bf2",
    isFollowing:true,
    "customerInfo": {
      "_id": "653730c76171091d6b469bf2",
      "issuer": "did:ethr:0x705034cee9339f90af12aae5c785c2a0d2a554c4",
      "aptosWallet": "0x705034cee9339f90af12aae5c785c2a0d2a554c4",
      "nickname": "wwerwerewwer",
      "username": "erwerwerwer",
      "email": "",
      "referralCode": "2E19F",
      "createdAt": "2023-11-13T01:26:49.637Z",
      profileImage:""
      
    }
  },
  {
    "_id": "655d71ff7123f56056b546d9",
    "fromUserId": "655ab007ce8937ff6d512885",
    "toUserId": "65517b59c40bc87fe2ac38f8",
    isFollowing:false,
    "customerInfo": {
      "_id": "65517b59c40bc87fe2ac38f8",
      "issuer": "",
      "aptosWallet": "0xcfe8dfc248cef257524ec05374fa6157114e8992",
      "nickname": "NickName",
      "username": "Nick",
      "email": "nick@aaa.com",
      "referralCode": "NZU5J",
      "createdAt": "2023-11-13T01:26:49.637Z",
      profileImage:""
    }
  }]);

  const getFollowingData = async () => {
    const result = await getFollowers(token);
    setFollowersData(result);
  };

  // useEffect( () => {
  //   getFollowingData()
  // }, [token])  // Unconment
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColor.feedBackground,
      }}
    >
      <SearchField placeholder="Search" width={"100%"} />
      <View
        style={{
          flex: 1,
        }}
      >
        {/* <ScrollView
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
        </ScrollView> */}
        <FlatList
          data={followersData}
          renderItem={({ item}) => (
            <UserDisplay
              data={{
                name: item.customerInfo.nickname,
                username: item.customerInfo.username,
                isFollowing:item.isFollowing,
                image:item.customerInfo.profileImage,
                userId: item.customerInfo._id
              }}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default FollowersTab;
