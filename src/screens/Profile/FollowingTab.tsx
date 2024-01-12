import { View, Dimensions, ScrollView } from "react-native";
import { useState, useEffect,useMemo } from "react";
import { appColor } from "../../constants";
import { sizes } from "../../utils";
import SearchField from "../../shared/Feed/SearchField";
import UserDisplay from "../../shared/Feed/UserDisplay";
import { FollowingProps, getFollowings } from "../../api";
import { useAppSelector } from "../../controller/hooks";
import { FlatList } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);
const FollowingTab = () => {
  const [followingData, setFollowingData] = useState<FollowingProps[]>([{
    "_id": "655d71b07123f56056b546d8",
    "fromUserId": "655ab007ce8937ff6d512885",
    "toUserId": "653730c76171091d6b469bf2",
    isFollowing:false,
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
  const token = useAppSelector((state) => state.USER.didToken);
  const getFollowingData = async () => {
    const result = await getFollowings(token);
    setFollowingData(result);
  };

  // useEffect(() => {
  //   getFollowingData();
  // }, []);

  //useMemo(() => getFollowingData, [token]) //Uncomment

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
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
          <UserDisplay data={{ name: "User Name", username: "@web3_guru" }} />
        </ScrollView> */}
        <FlatList
          data={followingData}
          renderItem={({ item}) => (
            <UserDisplay
              data={{
                name: item.customerInfo.nickname,
                username: item.customerInfo.username,
                isFollowing:true,
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

export default FollowingTab;
