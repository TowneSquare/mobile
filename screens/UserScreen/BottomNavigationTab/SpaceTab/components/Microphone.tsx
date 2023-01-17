import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { updateSpaceModal } from "../controller/SpaceController";
import imageAssets from "../../../../../constants/images";
import { useAppDispatch } from "../../../../../Components/Redux/hooks";
const Microphone = () => {
  const dispatch = useAppDispatch();

  return (
    <View
      className="rounded-full items-center justify-center bg-[#7F56D9]"
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        zIndex: 2,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(updateSpaceModal());
        }}
      >
        <Image source={imageAssets.microphone} />
      </TouchableOpacity>
    </View>
  );
};

export default Microphone;
