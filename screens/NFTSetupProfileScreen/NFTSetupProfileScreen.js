import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "./Components/Background";
import Input from "../../Components/TextField";
import SearchBar from "../../Components/SearchBarComponent";
import NFTBox from "./Components/NFTBox";
import ContinueButton from "./Components/ContinueButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import DismissKeyboard from "../../Components/DismissKeyboard";
const NFTSetupProfileScreen = () => {
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <DismissKeyboard>
        <Background>
          <View className="items-center pl-10 pr-10 pb-10">
            <Text
              style={{
                fontFamily: "EXTRABOLD",
              }}
              className="text-[#F2F0FF] text-center pt-10  text-3xl "
            >
              Set up profile
            </Text>
          </View>
          <View className="pl-4 pr-4 mt-1">
            <Input
              label="Set a username for your profile"
              placeholder="Username"
            />
            <Text className="text-[#339DFF] mt-2">USERNAME AVAILABLE</Text>
            <SearchBar
              placeholder="Search by name/number"
              color="white"
              borderRadius={10}
              margintop={40}
            />
            <NFTBox />
          </View>
          <ContinueButton screen="AddCommunityScreen" />
        </Background>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default NFTSetupProfileScreen;
