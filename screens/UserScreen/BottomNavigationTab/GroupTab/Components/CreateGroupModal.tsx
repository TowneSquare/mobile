import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  updateShowGroupModal,
  updateShowGroupPrivacyModal,
  updateCollectionModal,
} from "../Controller/GroupController";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import styles from "../../DiscoverTab/Components/UserWalletComponents/ModalStyle";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import COLORS from "../../../../../constants/Colors";
import {
  fontSize,
  heightSize,
  widthSize,
  screenWidth,
  screenHeight,
} from "../../../../../constants/sizes";
import { useNavigation } from "@react-navigation/native";

const CreateGroupModal = () => {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");
  const selectedGroupSettings = useAppSelector(
    (state) => state.GroupController.privacySettings
  );
  console.log(selectedGroupSettings);
  const selectedCollection = useAppSelector(
    (state) => state.GroupController.selectedCollection
  );
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.GroupController.createGroupModal
  );
  return (
    <Modal
      swipeDirection="down"
      isVisible={isVisible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      onModalHide={() => {
        navigation.navigate("GroupChatScreen" as never);
      }}
      onBackButtonPress={() => {
        dispatch(updateShowGroupModal());
      }}
      onSwipeComplete={() => dispatch(updateShowGroupModal())}
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
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className={`flex-row h-11  mt-5`}
              >
                <TouchableOpacity>
                  <Ionicons
                    name="chevron-back"
                    size={22}
                    color={COLORS.WHITE}
                  />
                </TouchableOpacity>
                <Text className="text-white text-center text-base font-semibold  ">
                  Create
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(updateShowGroupModal());
                  }}
                >
                  <AntDesign name="close" size={22} color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
              <View
                className="flex-row items-center bg-[#363F72] rounded-md mt-3 "
                style={{
                  height: heightSize(44),
                }}
              >
                <View
                  style={{
                    width: screenWidth(0.47),
                    height: heightSize(44),
                  }}
                  className="bg-[#363F72] justify-center rounded-md"
                >
                  <Text
                    style={{
                      fontSize: fontSize(14),
                    }}
                    className=" text-white text-center font-semibold"
                  >
                    COMMUNITY
                  </Text>
                </View>
                <View
                  style={{ width: screenWidth(0.47), height: heightSize(44) }}
                  className="bg-[#7F56D9] justify-center   rounded-md"
                >
                  <Text
                    style={{
                      fontSize: fontSize(14),
                    }}
                    className="text-center text-white font-semibold"
                  >
                    GROUP
                  </Text>
                </View>
              </View>

              <Text className="text-white mt-6 mb-4 text-base font-small">
                Select Collection
              </Text>
              <Pressable
                className="rounded-md items-center px-3 flex-row"
                style={{
                  height: heightSize(50),
                  borderColor: "#4E5BA6",
                  borderWidth: 1,
                  marginTop: 5,
                  width: screenWidth(0.94),
                }}
                onPress={() => {
                  dispatch(updateCollectionModal());
                }}
              >
                {selectedCollection.name ? (
                  <View
                    style={{ width: screenWidth(0.8) }}
                    className="flex-row items-center "
                  >
                    <Image
                      style={{
                        height: heightSize(32),
                        width: widthSize(32),
                        borderRadius: 24,
                      }}
                      source={selectedCollection.image}
                    />
                    <Text className="text-white flex-1 ml-3 text-base">
                      {selectedCollection.name}
                    </Text>
                  </View>
                ) : (
                  <Text className="text-[#717BBC] flex-1 ">Select Options</Text>
                )}

                <Ionicons name="chevron-down" size={18} color={"#FCFCFD"} />
              </Pressable>
              <Text className="text-[#98A2B3] mt-2">
                This is a hint text to help user
              </Text>
              <Text className="text-white text-base font-small mt-8">
                Give your group a name
              </Text>
              <TextInput
                value={groupName}
                onChangeText={(text) => setGroupName(text)}
                className="rounded-md px-3 mt-3"
                style={{
                  height: heightSize(50),
                  width: screenWidth(0.94),
                  borderColor: "#4E5BA6",
                  borderWidth: 1,
                  fontSize: fontSize(16),
                  color: "white",
                }}
                placeholder="Name"
                cursorColor={"white"}
                placeholderTextColor={"#717BBC"}
              />
              <Text className="text-[#98A2B3] mt-3">
                This is how users will find your community
              </Text>
              <Text className="text-white mt-3  font-semibold">
                Group Privacy
              </Text>
              <Pressable
                onPress={() => {
                  dispatch(updateShowGroupPrivacyModal());
                }}
                className="rounded-md items-center px-3  flex-row"
                style={{
                  height: heightSize(50),
                  borderColor: "#4E5BA6",
                  borderWidth: 1,
                  marginTop: 7,
                  width: screenWidth(0.94),
                }}
              >
                <Image source={selectedGroupSettings.icon} />
                <Text className="text-[#717BBC] ml-3 flex-1 text-base ">
                  {selectedGroupSettings.privacy}
                </Text>
                <Ionicons name="chevron-down" size={18} color={"#FCFCFD"} />
              </Pressable>
              <Text className="text-[#98A2B3] mt-3">
                This is a hint text to help the user
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(updateShowGroupModal());
                  setGroupName("");
                }}
                disabled={
                  groupName.length > 0 && selectedCollection.name ? false : true
                }
                style={{
                  position: "absolute",
                  height: 40,
                  backgroundColor:
                    groupName.length > 0 && selectedCollection.name
                      ? "#7F56D9"
                      : "#42307D",
                  width: screenWidth(0.93),
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "baseline",
                  top: screenHeight(0.9),
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color:
                      groupName.length > 0 && selectedCollection.name
                        ? "white"
                        : "#7F56D9",
                  }}
                  className={`text-[#7F56D9] font-semibold`}
                >
                  Create
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default CreateGroupModal;
