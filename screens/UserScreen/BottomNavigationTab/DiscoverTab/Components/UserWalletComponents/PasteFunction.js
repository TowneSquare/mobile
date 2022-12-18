import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import COLORS from "../../../../../../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import * as Clipboard from "expo-clipboard";
import { updateWalletAddress,updateisAddressValid } from "../Controller/ModalController/ModalController";
const PasteFunction = () => {
  
  const selectedToken=useSelector((state)=>state.modalState.tokenToSend)
  
 
  
  const dispatch = useDispatch();
  const fetchCopiedAddress = async () => {
    const address = await Clipboard.getStringAsync();
    dispatch(updateWalletAddress(address));
    const response =/^[a-z0-9]+$/.test(address)
    if (selectedToken.tokenSymbol == "SOL") {
      
      dispatch(updateisAddressValid(response));
    }
    else if (selectedToken.tokenSymbol == "USDC") {
      dispatch(updateisAddressValid(response));
    }
    else if (selectedToken.tokenSymbol == "SLND") {
      dispatch(updateisAddressValid(response));
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => fetchCopiedAddress()}>
      <Text className={`text-[${COLORS.TEXTGRAYBLUE}] mr-2 mt-3 font-semibold`}>
        PASTE
      </Text>
    </TouchableOpacity>
  );
};

export default PasteFunction;
