import {
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./ModalStyle";
import {
  changeState,
  updateisSendButton,
} from "../Controller/ModalController/ModalController";
import SearchBar from "../../../../../../Components/SearchBarComponent";
import COLORS from "../../../../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import TokenLists from "./TokenLists";

import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
const SelectTokenModal = () => {
  const isModalVisible = useSelector((state) => state.modalState.value);
  const dispatch = useDispatch();
  return (
    <Modal
      onBackdropPress={() => {
        dispatch(changeState());
        dispatch(updateisSendButton(false));
      }}
      onBackButtonPress={() => {
        dispatch(changeState());

        dispatch(updateisSendButton(false));
      }}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => {
        dispatch(changeState());
        dispatch(updateisSendButton(false));
      }}
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
                  onPress={() => {
                    dispatch(changeState());
                    dispatch(updateisSendButton(false));
                  }}
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

              <TokenLists />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default SelectTokenModal;
