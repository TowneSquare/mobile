import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useRef } from "react";
import { width } from "../../../../../../constants/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateAmountOfToken } from "../Controller/ModalController/ModalController";
import ErrorMessage from "./ErrorMessage";
const AmountTextInput = () => {
  const [amountEntered, setAmountEntered] = useState(0);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const selectedTokenValue = useSelector(
    (state) => state.modalState.tokenToSend
  );
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleAmount = (amount) => {
    dispatch(updateAmountOfToken(amount));
  };
  return (
    <>
      <Pressable
        onPress={() => handleFocus()}
        style={{
          width: width * 0.91,
          minHeight: 44,
          borderWidth: 1,
          borderColor: "#4E5BA6",
          borderRadius: 8,
          alignItems: "center",
        }}
        className={`flex-row mt-2`}
      >
        <View
          style={{
            maxWidth: width * 0.6,
          }}
        >
          <TextInput
            keyboardType="decimal-pad"
            value={amountEntered}
            onChangeText={(amount) => {
              handleAmount(amount);
              setAmountEntered(amount);
            }}
            multiline={true}
            ref={inputRef}
            cursorColor="white"
            placeholder="0"
            placeholderTextColor={"white"}
            style={{
              height: 44,
              paddingLeft: 10,
              fontSize: 16,
              color: amountEntered > 123.766 ? "#D92D20" : "white",
            }}
          />
        </View>
        <Text
          style={{}}
          className={
            amountEntered > 123.766
              ? `text-[#D92D20] flex-1 ml-3`
              : `text-[#717BBC] flex-1 ml-3`
          }
        >
          {selectedTokenValue.tokenSymbol}
        </Text>
        <Text className={`text-[#B692F6] font-semibold mr-3`}>Max</Text>
      </Pressable>
      {amountEntered > 123.766 ? (
        <ErrorMessage errorMessage="Insufficient wallet balance" />
      ) : (
        <></>
      )}
    </>
  );
};

export default AmountTextInput;
