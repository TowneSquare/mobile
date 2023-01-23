import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SizedBox } from "sizedbox";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { heightSize, screenHeight } from "../../../constants/sizes";
const ContinueButton = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <SizedBox vertical={screenHeight(0.04)} />
      <View
        className={
          props.color == true
            ? "flex-row  pr-4   h-20 pl-4   "
            : "flex-row  pr-4  pl-4 "
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
            className=" h-12 w-24 pl-3 bg-[#0F111E] flex-row items-center rounded-xl  "
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
          <View className=" h-12 w-36 bg-[#0368FF] flex-row items-center rounded-xl space-x-4 ">
            <Text className="text-white pl-4 font-normal text-base ">
              CONTINUE
            </Text>
            <Icon type="antdesign" name="right" color="white" size={15} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContinueButton;
