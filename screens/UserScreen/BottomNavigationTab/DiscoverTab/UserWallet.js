import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";

import React from "react";
import COLORS from "../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import ListofWallet from "./Components/UserWalletComponents/ListofWallet";
import Collections from "./Components/Collections";
import { useSelector, useDispatch } from "react-redux";
import ManageToken from "./Components/UserWalletComponents/ManageToken";
import {
  changeState,
  changeSendModalValue,
  updateisSendButton,
} from "./Components/Controller/ModalController/ModalController";
import ReceiveTokenModal from "./Components/UserWalletComponents/ReceiveTokenModal";
import SelectTokenModal from "./Components/UserWalletComponents/SelectTokenModal";
import WalletBalanceContainer from "./Components/UserWalletComponents/WalletBalanceContainer";
import SendToken from "./Components/UserWalletComponents/SendToken";
import TransactionSuccessModal from "./Components/UserWalletComponents/TransactionSuccessModal";
import TokenTransaction from "./Components/UserWalletComponents/TokenTransaction";
const UserWallet = () => {
  const selectedTokenValue = useSelector(
    (state) => state.modalState.selectedToken
  );
  const dispatch = useDispatch();
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
          <TouchableOpacity
            onPress={() => {
              dispatch(changeState());
            }}
          >
            <Text
              className={`text-[${COLORS.PRIMARYCOLOR400}] font-bold mr-2 text-lg`}
            >
              Switch
            </Text>
          </TouchableOpacity>
          <SelectTokenModal />
          <ReceiveTokenModal />
          <SendToken />
          <TokenTransaction />
          <TransactionSuccessModal />
        </View>
        <Text className="text-white pt-2">Wallet Address</Text>
        <Text
          className={`text-base mr-5 pt-2 text-[${COLORS.LIGHTPURPLE}] font-semibold`}
        >
          21oLUSAA.......Z4oZ
        </Text>
        <WalletBalanceContainer />
        <View className={`flex-row flex-1 mt-3 `}>
          {/* Receive */}

          <Pressable
            onPress={() => {
              dispatch(changeState());
              dispatch(dispatch(updateisSendButton(true)));
            }}
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
          </Pressable>

          {/* Send */}

          <Pressable
            onPress={() => {
              dispatch(changeSendModalValue());
            }}
            style={{
              width: 100,
              borderWidth: 1,
              flex: 1,
              borderColor: "#293056",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text className={`text-center font-semibold text-white`}>Send</Text>
          </Pressable>

          {/* Swap */}

          <Pressable
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
            <Text className={`text-center font-semibold text-white`}>Swap</Text>
          </Pressable>
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

          {/* List of wallets  */}
          <ListofWallet />
        </View>
        <ManageToken />
        <Text className={`text-white font-lg font-bold mt-5 mb`}>
          NFT Inventory
        </Text>
        {/* List of collections */}
        <Collections />
      </View>
    </View>
  );
};

export default UserWallet;
