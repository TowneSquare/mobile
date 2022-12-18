import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import SearchBar from "../../../../../../Components/SearchBarComponent";
import styles from "./ModalStyle";
import SendTokenModal from "./SendTokenModal";
import { changeSendModalValue } from "../Controller/ModalController/ModalController";
import COLORS from "../../../../../../constants/Colors";
import { RootState } from "../../../../../../Components/Redux/store";
const SendToken = () => {
  const isModalVisible = useSelector(
    (state) => state.modalState.sendModalValue
  );
  const dispatch = useDispatch();

  return (
    <Modal
      onBackdropPress={() => dispatch(changeSendModalValue())}
      onBackButtonPress={() => dispatch(changeSendModalValue())}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => dispatch(changeSendModalValue())}
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
            <View className={`ml-3   mr-3`}>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className={`flex-row  h-11 mt-5`}
              >
                <AntDesign name="close" size={22} color={COLORS.GRAYBLUE800} />
                <Text className="text-white text-base ">Select Token</Text>
                <TouchableOpacity
                  onPress={() => dispatch(changeSendModalValue())}
                >
                  <AntDesign name="close" size={22} color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
              <SearchBar
                placeholder="Search"
                borderRadius={10}
                color="#B3B8DB"
                margintop={4}
              />
              <Text className={`text-white font-medium ml-3 mt-5 mb-4`}>
                Select Token
              </Text>
            <SendTokenModal />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default SendToken;
