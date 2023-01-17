import { View, Text, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { width } from "../../../../../../constants/utils";
import { updateWalletAddress } from "../Controller/ModalController/ModalController";
import ErrorMessage from "./ErrorMessage";
const InputWalletAddress = () => {
  const walletAddress = useSelector((state) => state.modalState.WalletAddress);
  const dispatch = useDispatch();
  const handleWalletAddress = (address) => {
    dispatch(updateWalletAddress(address));
  };
  const isAdressValid = useSelector((state) => state.modalState.isAddressValid);
  const walletInput = useSelector((state) => state.modalState.WalletAddress);
  const selectedToken=useSelector((state)=>state.modalState.tokenToSend)
  return (
    <>
    <TextInput
      style={{
        width: width * 0.91,
        borderRadius: 8,
        marginTop: 10,
        color:
          isAdressValid === false && walletInput.length > 0
            ? "#D92D20"
            : "white",
        minHeight: 44,
        borderWidth: 1,
        borderColor: "#4E5BA6",
        padding: 10,
        fontSize: 16,
      }}
      value={walletAddress}
      onChangeText={handleWalletAddress}
      cursorColor="white"
      multiline={true}
      placeholder="0xMy234..."
      placeholderTextColor="#717BBC"
    />
    {isAdressValid === false && walletInput.length > 0 ? (
      <ErrorMessage errorMessage={`Wallet address on ${selectedToken.tokenName} not valid`}/>
    ) : (
      <Text className={`text-[#B3B8DB] pt-3`}>
        Please enter an address on Solana blockchain.
      </Text>
    )}
    </>
  );
};

export default InputWalletAddress;
