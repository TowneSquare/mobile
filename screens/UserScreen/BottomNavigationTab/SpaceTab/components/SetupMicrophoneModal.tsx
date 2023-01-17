import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../../constants/Colors";
import { height, width } from "../../../../../constants/utils";
import imageAssets from "../../../../../constants/images";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Components/Redux/hooks";
import Modal from "react-native-modal";
import { updateSpaceModal } from "../controller/SpaceController";
import { useNavigation } from "@react-navigation/native";
const SetupMicrophoneModal = () => {
  const navigation=useNavigation()
  const [isEnabled, setEnable] = useState<boolean>(false);
  const toggleMicSwitch = () => {
    setEnable((previousState) => !previousState);
  };
  const isVisible = useAppSelector((state) => state.spaceController.setMicmodalState);
  const dispatch = useAppDispatch();

  return (
    <Modal
      onBackButtonPress={() => dispatch(updateSpaceModal())}
      onBackdropPress={() => dispatch(updateSpaceModal())}
      swipeDirection="down"
      isVisible={isVisible}
      onSwipeComplete={() => dispatch(updateSpaceModal())}
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
          <View className={`ml-3 mr-3`}>
            <Image
              style={{
                alignSelf: "center",
                marginVertical: 25,
                height: 30,
                width: 30,
              }}
              source={imageAssets.spaceMic}
            />

            <Text className={`text-white text-center font-medium text-lg`}>
              Setup your microphone
            </Text>
            <View className=" flex-row justify-between items-center mt-3">
              <Text className="text-white text-base">Allow mic access</Text>
              <Switch
                trackColor={{
                  false: "#363F72",
                  true: "#363F72",
                }}
                thumbColor="#4E5BA6"
                value={isEnabled}
                onValueChange={toggleMicSwitch}
              />
            </View>
            <Text className="text-white text-sm mb-8">
              Let TowneSquare access your device's mic
            </Text>
            {isEnabled ? (
              <TouchableOpacity
              onPress={async()=>{
                await dispatch(updateSpaceModal())
                navigation.navigate("CreateSpaceScreen" as never)
              }}
              >
                <View
                  style={{
                    width: width * 0.86,
                    height: 44,
                    backgroundColor: "#7F56D9",
                    borderRadius: 10,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text className="text-white text-center font-semibold">
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <View
                  style={{
                    width: width * 0.86,
                    height: 44,
                    backgroundColor: "#7F56D950",
                    borderRadius: 10,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text className="text-white text-center font-semibold">
                    Continue
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SetupMicrophoneModal;
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
    minHeight: height * 0.4,
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
