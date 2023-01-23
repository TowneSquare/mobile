import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppDispatch } from "../../../../../Components/Redux/hooks";
import { updateShowGroupModal } from "../Controller/GroupController";
import { Feather } from "@expo/vector-icons";
const AddButton = () => {
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
      <TouchableOpacity onPress={() => {dispatch(updateShowGroupModal())}}>
        <Feather name="plus" color={"white"} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
