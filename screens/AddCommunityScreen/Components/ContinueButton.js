import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const ContinueButton = (props) => {
  const navigation = useNavigation();
  return (
    <View
      className={
        props.color == true
          ? "flex-row pt-7 pr-4  bg-[#0F111E] h-20 pl-4 mt-20 bottom-0 "
          : "flex-row pt-7 pr-4  pl-4 bottom-20"
      }
      style={{
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={navigation.goBack}>
        <View
          className="bottom-0 mb-10 h-12 w-24 pl-3 bg-[#0F111E] flex-row items-center rounded-xl space-x-2 "
          style={{
            borderColor: "#0368FF",
            borderWidth: 1,
          }}
        >
          <Icon type="antdesign" name="left" color="white" size={15} />
          <Text className="text-white pl-2 font-normal text-base ">BACK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(props.screen);
        }}
      >
        <View className="bottom-0 mb-10 h-12 w-36 bg-[#0368FF] flex-row items-center rounded-xl space-x-4 ">
          <Text className="text-white pl-4 font-normal text-base ">
            CONTINUE
          </Text>
          <Icon type="antdesign" name="right" color="white" size={15} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueButton;
