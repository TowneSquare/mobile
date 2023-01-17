import { View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import COLORS from "../../../../../constants/Colors";
import { width, height } from "../../../../../constants/utils";
import { AntDesign } from "@expo/vector-icons";
import Topics from "./Topics";
import SearchBar from "../../../../../Components/SearchBarComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import DismissKeyboard from "../../../../../Components/DismissKeyboard";
import { updateTopicModalState } from "../controller/SpaceController";
import styles from "../../DiscoverTab/Components/UserWalletComponents/ModalStyle";
import { ScrollView } from "react-native-gesture-handler";
const ChooseTopicModal = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.spaceController.topicModalState
  );
  const selected = useAppSelector(
    (state) => state.spaceController.selectedTopics
  );
  const childRef: any = useRef();
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        dispatch(updateTopicModalState());
        
      }}
      visible={isVisible}
    >
      <DismissKeyboard>
      <View style={[styles.modalContent, { alignContent: "flex-start" }]}>
        <View>
          <View style={styles.barIcon} />
          <View className={`ml-3  mr-3 mb-5`}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className={`flex-row h-11  mt-5`}
            >
              <View></View>
              <Text className="text-white text-center text-base font-semibold  ">
                Choose Topic
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(updateTopicModalState());
                }}
              >
                <AntDesign name="close" size={22} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                height: height * 0.78,
              }}
            >
              <SearchBar
                placeholder="Search"
                borderRadius={10}
                color="#B3B8DB"
                margintop={4}
              />

              <View className="flex-row mt-10  justify-between">
                <Text className="text-white font-bold text-lg ">
                  Most Popular
                </Text>
                <Text className="text-[#98A2B3] text-sm">Selected 0/3</Text>
              </View>
              <Topics ref={childRef} />
            </ScrollView>

            <TouchableOpacity
              onPress={() => {
                childRef.current?.saveTopics();
                dispatch(updateTopicModalState());
              }}
              style={{
                position: "absolute",
                height: 40,
                backgroundColor: "#7F56D9",
                width: width * 0.87,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "baseline",
                top: height * 0.9,
                borderRadius: 8,
              }}
            >
              <Text className={`text-white font-semibold`}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </DismissKeyboard>
    </Modal>
  );
};

export default ChooseTopicModal;
