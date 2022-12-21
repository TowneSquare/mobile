import { View, Text, Image } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ModalStyle";
import {
  updateTransactionSuccessModal,
  updateAmountOfToken,
  updateWalletAddress,
} from "../Controller/ModalController/ModalController";
import { height, width } from "../../../../../../constants/utils";

const TransactionSuccessModal = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector((state) => state.modalState.WalletAddress);
  const isModalVisible = useSelector(
    (state) => state.modalState.TransactionSuccessModal
  );
  return (
    <Modal
      onBackdropPress={() => {
        dispatch(updateTransactionSuccessModal());
        dispatch(updateAmountOfToken(0));
        dispatch(updateWalletAddress(""));
      }}
      onBackButtonPress={() => {
        dispatch(updateTransactionSuccessModal());
        dispatch(updateAmountOfToken(0));
        dispatch(updateWalletAddress(""));
      }}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => {
        dispatch(updateTransactionSuccessModal());
        dispatch(updateAmountOfToken(0));
        dispatch(updateWalletAddress(""));
      }}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View>
          <View style={styles.barIcon} />
          <View className={`ml-3  mr-3`}>
            <View
              style={{
                height: height * 0.95,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../../assets/PNG/sent.png")}
              />
              <Text className={`text-white mt-3`}>Sent</Text>
              <Text className="text-white mt-3">
                Your tokens are sent successfully to address
              </Text>

              <Text className={`text-[#B692F6] mt-3 text-base font-semibold `}>
                {walletAddress}
              </Text>
              <View
                style={{
                  height: 40,
                  backgroundColor: "#7F56D9",
                  width: width * 0.76,
                  justifyContent: "center",
                  alignItems: "center",
                  top: height * 0.37,
                  borderRadius: 8,
                }}
              >
                <Text className={`text-white`}>Show Transaction</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionSuccessModal;
