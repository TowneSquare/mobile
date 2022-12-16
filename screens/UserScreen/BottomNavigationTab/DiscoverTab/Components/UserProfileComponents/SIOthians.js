import { View, Text } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Icon, Avatar } from "react-native-elements";
const SIOthian = [
    {
      id: 1,
      name: "Ambassador",
      collectionName: "Solana Monke Business",
      logo: require("../../../../../../assets/PNG/monk.png"),
      referalLink: "REFERRAL LINK",
    },
    {
      id: 1,
      name: "Citizen",
      collectionName: "Solana Monke Business",
      logo: require("../../../../../../assets/PNG/monk.png"),
      referalLink: "REFERRAL LINK",
    },
  ];
const SIOthians = () => {

  const [sioThians, setSioThians] = useState([]);
  useEffect(() => {
    fetchSioThians(SIOthian);
  });
 
  const fetchSioThians = (data) => {
    setSioThians(data);
  };
  return sioThians.map((item, index) => {
    return (
      <View
        style={{
          alignItems: "center",
        }}
        className="flex-row mt-4"
        key={index}
      >
        <Avatar source={item.logo} size={50} />
        <View className="ml-5">
          <Text className="text-white font-semibold text-lg">{item.name}</Text>
          <Text className="text-[#B3B8DB]">{item.collectionName}</Text>
          <Text className="text-[#7F56D9] font-semibold">{item.referalLink}</Text>
        </View>
      </View>
    );
  });
};

export default SIOthians;
