import {
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Background from "./Components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import { SizedBox } from "sizedbox";
import Communities from "./Components/Communities";
import DismissKeyboard from "../../Components/DismissKeyboard";
import ContinueButton from "./Components/ContinueButton";
import { fontSize, screenHeight } from "../../constants/sizes";
const AddCommunityScreen = () => {
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1 items-center bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <Background>
      <SizedBox vertical={screenHeight(0.03)} />
        <KeyboardAvoidingView>
          <View className="items-center  pl-10 pr-10">
            <Text
              style={{
                fontFamily: "EXTRABOLD",
                fontSize:fontSize(30)
              }}
              className="text-[#F2F0FF] text-center "
            >
              Add your communities
            </Text>
          </View>

          <Communities placeholder="Search by collection/name" />

          <View></View>
        </KeyboardAvoidingView>
        <ContinueButton color={true} screen="ProfileTabNavigations" />
        
      </Background>
    </SafeAreaView>
  );
};

export default AddCommunityScreen;
