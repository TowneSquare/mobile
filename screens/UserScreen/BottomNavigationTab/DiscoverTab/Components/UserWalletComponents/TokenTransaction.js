import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import styles from "./ModalStyle";
import Modal from "react-native-modal";
import COLORS from "../../../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import Spinner from "./Spinner";
import InputWalletAddress from "./InputWalletAddress";
// import SwipeToAction from "./slider";
import PasteFunction from "./PasteFunction";

import AmountTextInput from "./AmountTextInput";
import {
  changeSendModalValue,
  updateTransactionModalValue,
  updateSpinner,
} from "../Controller/ModalController/ModalController";

const TokenTransaction = () => {
  const selectedTokenValue = useSelector(
    (state) => state.modalState.tokenToSend
  );
  const isModalVisible = useSelector(
    (state) => state.modalState.TransactionModalValue
  );
  const showSpinner = useSelector((state) => state.modalState.spinner);
  const dispatch = useDispatch();
  return (
    <Modal
      onBackdropPress={() => dispatch(updateTransactionModalValue())}
      onBackButtonPress={() => dispatch(updateTransactionModalValue())}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => dispatch(updateTransactionModalValue())}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <ScrollView>
        <View style={styles.modalContent}>
          <View>
            <View style={styles.barIcon} />
            <View className={`ml-3  mr-3`}>
              {showSpinner ? (
                <Spinner />
              ) : (
                <>
                  <View
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className={`flex-row h-11  mt-5`}
                  >
                    {}
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(updateTransactionModalValue());
                        dispatch(changeSendModalValue());
                      }}
                    >
                      <AntDesign name="left" size={22} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <Text className="text-white text-center text-base ">
                      Receive Token
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(updateTransactionModalValue());
                      }}
                    >
                      <AntDesign name="close" size={22} color={COLORS.WHITE} />
                    </TouchableOpacity>
                  </View>

                  <Text className={`text-white font-medium ml-3 mt-3 mb-3`}>
                    Selected Token
                  </Text>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                    className={`flex-row mt-4  h-11 mb-3 pr-3 pl-3`}
                  >
                    <View className={`mr-2 pt-2`}>
                      <Image
                        style={{ height: 40, width: 40 }}
                        source={selectedTokenValue.tokenLogo}
                      />
                    </View>
                    <Text className={`mr-2 text-white text-base font-medium`}>
                      {selectedTokenValue.tokenSymbol}
                    </Text>
                    <Text
                      className={`flex-1 text-[${COLORS.PRIMARYCOLOR400}] text-base`}
                    >
                      {selectedTokenValue.tokenName}
                    </Text>
                    <Text
                      className={`text-[${COLORS.TEXTGRAYBLUE}] font-semibold`}
                    >
                      Edit
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                    className={`flex-row`}
                  >
                    <Text className={`text-white flex-1 font-medium mt-3`}>
                      Recipent Address
                    </Text>
                    <PasteFunction />
                  </View>

                  {/* Enter Recipent Address */}
                  <InputWalletAddress />

                  <Text className={`text-[${COLORS.WHITE}] mt-4`}>
                    Enter Amount
                  </Text>

                  {/* Enter Amount Container  */}
                  <AmountTextInput />

                  <View className={`flex-row`}>
                    <Text className={`text-[#B692F6] flex-1 mt-3`}>
                      $267,56
                    </Text>
                    <Text className={`text-[#B692F6] mt-3`}>
                      123.766 {selectedTokenValue.tokenSymbol} Available
                    </Text>
                  </View>
                  <View className={`flex-row mt-3 text-base `}>
                    <Text className={`flex-1 text-white font-medium`}>
                      Network Fee
                    </Text>

                    <Text className={`text-white font-medium`}>
                      0,000005 {selectedTokenValue.tokenSymbol}
                    </Text>
                  </View>
                </>
              )}

              {/* <SwipeToAction /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default TokenTransaction;
