import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from "../../../constants";
import Header from "../../../shared/Feed/Header";
const AddAdminsScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: appColor.feedBackground,
        flex: 1,
      }}
    >
      <Header title="Add Admins" />
      <Text
        style={{
          color: appColor.kWhiteColor,
        }}
      >
        AddAdminsScreen
      </Text>
    </SafeAreaView>
  );
};

export default AddAdminsScreen;
