import { View, Image, TouchableOpacity, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Background from "./Components/Background";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
const WalletSelectionScreen = ({ navigation }) => {
  const nextRoute = { screen: "NFTSetupProfileScreen" };
  const [checked, setChecked] = useState("null");

  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="items-center bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <Background>
        <Text
          style={{
            fontFamily: "EXTRABOLD",
          }}
          className="text-[#F2F0FF] text-center pt-20  text-3xl "
        >
          Do you have a wallet?
        </Text>
        <View className="pr-4 pl-4">
          <TouchableOpacity
            className="mt-40"
            onPress={() => setChecked("first")}
          >
            <View
              className={
                checked !== "first"
                  ? `rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2`
                  : `rounded-xl bg-[#5899FF] flex-row h-12 items-center pl-2`
              }
            >
              <Image source={require("../../assets/PNG/Phantom.png")} />
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-[#F2F0FF] ml-2  text-base text-center"
              >
                Phantom
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-4"
            onPress={() => setChecked("second")}
          >
            <View
              className={
                checked !== "second"
                  ? `rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2`
                  : `rounded-xl bg-[#5899FF] flex-row h-12 items-center pl-2`
              }
            >
              <Image source={require("../../assets/PNG/Solflare.png")} />
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-[#F2F0FF] ml-2  text-base text-center"
              >
                Solflare
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-4"
            onPress={() => setChecked("third")}
          >
            <View
              className={
                checked !== "third"
                  ? `rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2`
                  : `rounded-xl bg-[#5899FF] flex-row h-12 items-center pl-2`
              }
            >
              <Image source={require("../../assets/PNG/Glow.png")} />
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-[#F2F0FF] ml-2  text-base text-center"
              >
                Glow
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          className="flex-1 mb-20 pl-3 pr-3"
          style={{
            // alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <View
            className="flex-row"
            style={{
              justifyContent: "space-between",
            }}
          >
            <BackButton />
            <ContnueButton
              route={nextRoute}
              screen="WalletAdded"
              dim={checked == "null" ? true : false}
            />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default WalletSelectionScreen;
