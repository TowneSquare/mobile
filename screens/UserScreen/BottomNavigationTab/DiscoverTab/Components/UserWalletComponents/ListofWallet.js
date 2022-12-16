import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../../../../constants/Colors";
const ListofWallet = () => {
  const wallets = [
    {
      logo: require("../../../../../../assets/PNG/solanalogo1.png"),
      name: "SOL",
      amount: "12.34",
      price: "$240.34",
      percent: "5.4%",
    },
    {
      logo: require("../../../../../../assets/PNG/usdc.png"),
      name: "USDC",
      amount: "25,223.10",
      price: "$25,224.34",
      percent: "0.1%",
    },
    {
      logo: require("../../../../../../assets/PNG/slnd.png"),
      name: "SLND",
      amount: "41,234.5",
      price: "$140.4",
      percent: "0.5%",
    },
    {
      logo: require("../../../../../../assets/PNG/slnd.png"),
      name: "SLND",
      amount: "41,234.5",
      price: "$140.4",
      percent: "0.5%",
    },
    {
      logo: require("../../../../../../assets/PNG/slnd.png"),
      name: "SLND",
      amount: "41,234.5",
      price: "$140.4",
      percent: "0.5%",
    },
    {
      logo: require("../../../../../../assets/PNG/slnd.png"),
      name: "SLND",
      amount: "41,234.5",
      price: "$140.4",
      percent: "0.5%",
    },
    {
      logo: require("../../../../../../assets/PNG/usdc.png"),
      name: "USDC",
      amount: "25,223.10",
      price: "$25,224.34",
      percent: "0.1%",
    },
  ];

  const renderItem = (wallet) => {
    return (
      <View
        className={`flex-row `}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Image
          source={wallet.logo}
          style={{
            height: 40,
            width: 40,
          }}
        />
        <View className={`flex-1 ml-3`}>
          <Text className={`text-white  text-lg`}>{wallet.name}</Text>
          <Text className={`text-[#D6BBFB]`}>{wallet.amount}</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <View className={`flex-row`}>
            <View
              className={`flex-row`}
              style={{
                alignItems: "flex-end",
              }}
            >
              <Ionicons name="ios-arrow-up-sharp" color={"#12B76A"} size={16} />

              <Text className={`text-[#027A48]`}>{wallet.percent}</Text>
            </View>
          </View>
          <Text className={`text-[#D6BBFB]`}>{wallet.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      {wallets.map((item, index) => {
        return renderItem(item);
      })}
    </ScrollView>

    // <FlatList data={Wallets} renderItem={({ item }) => renderItem(item)} />
  );
};

export default ListofWallet;
