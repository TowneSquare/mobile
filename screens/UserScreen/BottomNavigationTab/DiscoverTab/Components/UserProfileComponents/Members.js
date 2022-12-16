import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Membership from "./DummyMembers";

import { Avatar } from "react-native-elements";


const MemberList = () => {
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    fetchCommunities(Membership);
  });
  const fetchCommunities = (data) => {
    setCommunities(data);
  };
  return communities.map((item, index) => {
    return (
      <View
        style={{
          alignItems: "center",
        }}
        className="flex-row mt-8"
        key={index}
      >
        <Avatar source={item.logo} size={50} />
        <View className="ml-5">
          <Text className="text-white font-semibold text-lg">{item.name}</Text>
          <Text className="text-[#B3B8DB]">{item.collectionName}</Text>
        </View>
      </View>
    );
  });
};

export default MemberList;
