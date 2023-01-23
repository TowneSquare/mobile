import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  updateShowGroupPrivacyModal,
} from "../Controller/GroupController";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import COLORS from "../../../../../constants/Colors";
import { height } from "../../../../../constants/utils";
import { AntDesign } from "@expo/vector-icons";
import imageAssets from "../../../../../constants/images";
import {
  heightSize,
  screenHeight,
  widthSize,
} from "../../../../../constants/sizes";
import {
  GroupPrivacySettings,
  updatePrivacySettings,
} from "../Controller/GroupController";

const GroupPrivacyModal = () => {
  const [selectedSettings, setSettings] = useState<GroupPrivacySettings>();

  const dispatch = useAppDispatch();

  const isVisible = useAppSelector(
    (state) => state.GroupController.showGroupPrivacyModal
  );
  return (
    <Modal
      swipeDirection="down"
      isVisible={isVisible}
      onBackdropPress={() => dispatch(updateShowGroupPrivacyModal())}
      onBackButtonPress={() => {
        selectedSettings && dispatch(updatePrivacySettings(selectedSettings));
        dispatch(updateShowGroupPrivacyModal());
      }}
      onSwipeComplete={() => {
        selectedSettings && dispatch(updatePrivacySettings(selectedSettings));
        dispatch(updateShowGroupPrivacyModal());
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
          <View
            style={{
              height: screenHeight(0.45),
            }}
            className={`ml-3 mr-3 `}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className={`flex-row h-11  mt-5`}
            >
              <View></View>
              <Text className="text-white text-center text-base font-semibold  ">
                Group Privacy
              </Text>
              <TouchableOpacity
                onPress={() => {
                  selectedSettings &&
                    dispatch(updatePrivacySettings(selectedSettings));
                  dispatch(updateShowGroupPrivacyModal());
                }}
              >
                <AntDesign name="close" size={22} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>
            <Pressable
              onPress={() => {
                setSettings(GroupPrivacySettings.Open);
              }}
              style={{
                borderBottomColor: "#363F72",
                borderBottomWidth: 1,
              }}
              className="flex-1 justify-center mb-2"
            >
              <View className="flex-row">
                <Image source={imageAssets.unlockIcon} />
                <Text className="text-white flex-1 ml-3 text-base ">Open</Text>
                {selectedSettings === "Open" && (
                  <View
                    style={{ height: heightSize(24), width: widthSize(71) }}
                    className="rounded-full bg-[#42307D] items-center justify-center"
                  >
                    <Text className="text-[#B692F6]">Selected</Text>
                  </View>
                )}
              </View>
              <Text className="text-[#98A2B3] mt-3">
                This is a hint text to help user
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSettings(GroupPrivacySettings.Private);
              }}
              style={{
                borderBottomColor: "#363F72",
                borderBottomWidth: 1,
              }}
              className="flex-1 justify-center mb-2"
            >
              <View className="flex-row">
                <Image source={imageAssets.lockIcon} />
                <Text className="text-white flex-1 ml-3 text-base ">
                  Private
                </Text>
                {selectedSettings === "Private" && (
                  <View
                    style={{ height: heightSize(24), width: widthSize(71) }}
                    className="rounded-full bg-[#42307D] items-center justify-center"
                  >
                    <Text className="text-[#B692F6]">Selected</Text>
                  </View>
                )}
              </View>
              <Text className="text-[#98A2B3] mt-3">
                This is a hint text to help user
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setSettings(GroupPrivacySettings.InviteOnly);
              }}
              style={{
                borderBottomColor: "#363F72",
                borderBottomWidth: 1,
              }}
              className="flex-1 justify-center mb-2"
            >
              <View className="flex-row">
                <Image source={imageAssets.unlockIcon} />
                <Text className="text-white flex-1 ml-3 text-base ">
                  Invite Only
                </Text>
                {selectedSettings === "Invite Only" && (
                  <View
                    style={{ height: heightSize(24), width: widthSize(71) }}
                    className="rounded-full bg-[#42307D] items-center justify-center"
                  >
                    <Text className="text-[#B692F6]">Selected</Text>
                  </View>
                )}
              </View>
              <Text className="text-[#98A2B3] mt-3">
                This is a hint text to help user
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GroupPrivacyModal;
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: COLORS.GRAYBLUE800,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: height * 0.45,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    alignSelf: "center",
    backgroundColor: COLORS.GRAYBLUE500,
    borderRadius: 3,
  },
});
