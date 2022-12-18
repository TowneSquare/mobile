import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSpinner,updateTransactionModalValue,updateTransactionSuccessModal } from "../Controller/ModalController/ModalController";
import { height } from "../../../../../../constants/utils";
const Spinner = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(updateSpinner());
      dispatch(updateTransactionModalValue());
      dispatch(updateTransactionSuccessModal())
    }, 4000);
  }, []);
  return (
    <View
      style={{
        height: height,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="#7F56D9" />
      <Text
        style={{
          alignSelf: "center",
        }}
        className="text-white mt-3 text-base"
      >
        Sending...
      </Text>
    </View>
  );
};

export default Spinner;
