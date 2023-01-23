import { View, Image, TouchableOpacity, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import BackButton from "./Components/BackButton";
import Background from "./Components/Background";
import ContnueButton from "./Components/ContnueButton";
import { useFonts } from "expo-font";
import { SizedBox } from "sizedbox";
import FONTS from "../../constants/Fonts";
import imageAssets from "../../constants/images";
import { screenHeight } from "../../constants/sizes";
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
        <SizedBox vertical={screenHeight(0.04)} />
        <Text
          style={{
            fontFamily: "EXTRABOLD",
          }}
          className="text-[#F2F0FF] text-center text-3xl "
        >
          Do you have a wallet?
        </Text>
        <SizedBox vertical={screenHeight(0.12)} />
        <View className="pr-4 pl-4">
          <TouchableOpacity onPress={() => setChecked("first")}>
            <View
              className={
                checked !== "first"
                  ? `rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2`
                  : `rounded-xl bg-[#5899FF] flex-row h-12 items-center pl-2`
              }
            >
              <Image source={imageAssets.phantomLogo} />
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
              <Image source={imageAssets.solflareLogo} />
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
              <Image source={imageAssets.glowLogo} />
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
          className=" pl-3 pr-3"
          style={{
            top: screenHeight(0.3),
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
