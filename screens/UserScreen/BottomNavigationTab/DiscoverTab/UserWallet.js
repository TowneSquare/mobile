import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useCallback, useRef, useState } from "react";
import COLORS from "../../../../constants/Colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ListofWallet from "./Components/UserWalletComponents/ListofWallet";
import Collections from "./Components/Collections";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "./Components/Controller/ModalController/ModalController";
import { LinearGradient } from "expo-linear-gradient";
import ReceiveTokenModal from "./Components/UserWalletComponents/ReceiveTokenModal";
import SelectTokenModal from "./Components/UserWalletComponents/SelectTokenModal";
const UserWallet = () => {
  const selectedTokenValue = useSelector(
    (state) => state.modalState.selectedToken
  );
  const dispatch=useDispatch()
  return (
    
    <View className="mr-3 ml-3">
      <View>
        <Text className={`text-[${COLORS.WHITE}] mb-3 font-bold`}>
          Multi-chainSwitch
        </Text>
        <View
          style={{
            alignItems: "center",
          }}
          className={`h-11  flex-row `}
        >
          <View className={`ml-2 mt-2`}>
            <Image source={selectedTokenValue.tokenLogo} />
          </View>
          <Text className={`ml-2 text-white mr-4 font-medium text-lg`}>
          {selectedTokenValue.tokenName}
          </Text>
          <Text className={`text-[${COLORS.GRAYBLUEOPACITY}] flex-1 text-base`}>
          {selectedTokenValue.tokenSymbol}
          </Text>
          <TouchableOpacity onPress={()=>dispatch(changeState())}>
            <Text
              className={`text-[${COLORS.PRIMARYCOLOR400}] font-bold mr-2 text-lg`}
            >
              Switch
            </Text>
          </TouchableOpacity>
          <SelectTokenModal/>
          <ReceiveTokenModal/>
        </View>
        <Text className="text-white pt-2">Wallet Address</Text>
        <Text
          className={`text-base mr-5 pt-2 text-[${COLORS.LIGHTPURPLE}] font-semibold`}
        >
          21oLUSAA.......Z4oZ
        </Text>
        <LinearGradient
          colors={["#1D2939", "#475467"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className={`h-28 flex-row mt-4 bg-[#1D2939] `}
          style={{
            paddingVertical: 5,
            borderRadius: 12,
          }}
        >
          <View
            className={` pt-1 pl-3 flex-1 pb-3 w-48`}
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text className={`text-white font-bold text-3xl`}>26,231 USD</Text>
            <View className={`flex-row`} style={{}}>
              <View
                className={`flex-row`}
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Ionicons
                  name="ios-arrow-up-sharp"
                  color={"#12B76A"}
                  size={16}
                />
                <Text className={`text-[#027A48] pl-1 pr-3`}>0.3%</Text>
              </View>

              <Text style={{}} className={`text-white `}>
                Last 24 hours
              </Text>
            </View>
          </View>
          <Image
            style={{ alignSelf: "flex-end" }}
            className={`mb-3 mr-3`}
            source={require("../../../../assets/PNG/chart.png")}
          />
        </LinearGradient>
        <View className={`flex-row flex-1 mt-3 `}>
          <View
            style={{
              width: 100,
              borderWidth: 1,
              borderBottomLeftRadius: 8,
              borderTopLeftRadius: 8,
              borderColor: "#293056",
              height: 50,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text className={`text-center font-semibold text-white`}>
              Receive
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
              flex: 1,
              borderColor: "#293056",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text className={`text-center font-semibold text-white`}>
              Transfer
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              borderColor: "#293056",
              height: 50,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text className={`text-center font-semibold text-white`}>
              Trade
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#293056",
            borderRadius: 8,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              borderRadius: 8,
            }}
            className={`flex-row  bg-[#293056] h-11`}
          >
            <View className={`flex-row`}>
              <Text className={`text-white  font-semibold`}>Token</Text>
              <View className={`mt-0.5 ml-2`}>
                <AntDesign name="arrowdown" color={COLORS.WHITE} />
              </View>
            </View>
            <View>
              <Text className={`text-white font-semibold`}>24h Change</Text>
            </View>
          </View>
          <ListofWallet />
        </View>
        <Text className={`text-white font-lg font-bold mt-5 mb`}>
          NFT Inventory
        </Text>
        <Collections />
      </View>
    </View>
   
  );
};

export default UserWallet;