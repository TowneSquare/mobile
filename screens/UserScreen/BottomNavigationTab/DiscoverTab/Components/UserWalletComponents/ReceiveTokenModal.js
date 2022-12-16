import { View, Text, TouchableOpacity,Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styles from "./ModalStyle";
import Modal from "react-native-modal";
import COLORS from "../../../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import ShareButton from "./ShareButton";
import CopyButton from "./CopyButton";
import {
  changeState,
  changeReceiveModalState,
} from "../Controller/ModalController/ModalController";
import { height } from "../../../../../../constants/utils";
const ReceiveTokenModal = () => {
  const selectedTokenValue = useSelector(
    (state) => state.modalState.selectedToken
  );
  const isModalVisible = useSelector(
    (state) => state.modalState.receiveModalValue
  );
  const dispatch = useDispatch();
  return (
    <Modal
      onBackdropPress={() => dispatch(changeReceiveModalState())}
      onBackButtonPress={() => dispatch(changeReceiveModalState())}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => dispatch(changeReceiveModalState())}
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
                justifyContent: "space-between",
                alignItems:'center'
              }}
              className={`flex-row h-11  mt-5`}
            >
              <TouchableOpacity 
              onPress={()=>{
                dispatch(changeReceiveModalState())
                dispatch(changeState())
              }}
              >
              <AntDesign name="left" size={22} color={COLORS.WHITE} />
              </TouchableOpacity>
              <Text className="text-white text-center text-base ">Receive Token</Text>
              <TouchableOpacity
              onPress={()=>{
                dispatch(changeReceiveModalState())
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
                {console.log(selectedTokenValue.tokenLogo)}
              </View>
              <Text className={`mr-2 text-white text-base font-medium`}>
                {selectedTokenValue.tokenSymbol}
              </Text>
              <Text
                className={`flex-1 text-[${COLORS.PRIMARYCOLOR400}] text-base`}
              >
                {selectedTokenValue.tokenName}
              </Text>
              <Text className={`text-[${COLORS.TEXTGRAYBLUE}]`}>Edit</Text>
            </View>
            <View style={{
              justifyContent:"center",
              alignItems:"center",
              height:height*0.5
            }}>
              <Image source={require("../../../../../../assets/PNG/walletbarcode.png")}/>
            </View>
            <Text className={`text-white mb-2`}>My Address</Text>
            <Text className={`font-semibold text-[#B692F6] mb-2 text-base`}>AEEWppRWXMtvDysp9RzWUMQPNB2isq3gviAMqcjkcjC</Text>
            <View style={{
              justifyContent:"space-between"
            }} className={`flex-row mb-4 `}>
              <CopyButton/>
              <ShareButton/>
            </View>
            <Text className={`text-[#B3B8DB]`}>
              This is solana wallet, only send assets on the Solana blockchain
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReceiveTokenModal;
