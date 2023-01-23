import { View, Text, StatusBar, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "./Components/Background";
import SearchBar from "../../Components/SearchBarComponent";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import { SizedBox } from "sizedbox";
import {
  screenHeight,
  screenWidth,
  fontSize,
  heightSize,
} from "../../constants/sizes";
const height = Dimensions.get("window").height;
const SetProfilePics = () => {
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className=" bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <Background>
        <SizedBox vertical={screenHeight(0.02)} />
        <View
          className=" pl-5"
          style={{
            height: height * 0.25,
            alignItems: "flex-start",
            fontSize: fontSize(30),
          }}
        >
          <Text
            style={{
              fontFamily: "EXTRABOLD",
              fontSize: fontSize(30),
            }}
            className="text-[#F2F0FF]  pt-1  "
          >
            Final step!
          </Text>
          <Text
            style={{
              fontFamily: "EXTRABOLD",
              fontSize: fontSize(30),
            }}
            className="text-[#F2F0FF]  pt-1 "
          >
            Choose your profile
          </Text>
          <Text
            style={{
              fontFamily: "EXTRABOLD",
              fontSize: fontSize(30),
            }}
            className="text-[#F2F0FF] pt-1 "
          >
            picture
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
              lineHeight: heightSize(35),
              fontSize: fontSize(16),
            }}
            className="text-[#F2F0FF]   text-base "
          >
            Make an PFP NFT in your wallet your profile
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
              lineHeight: heightSize(35),
              fontSize: fontSize(16),
            }}
            className="text-[#F2F0FF]   text-base "
          >
            picture. If this is a new wallet and has no
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
              lineHeight: heightSize(35),
              fontSize: fontSize(16),
            }}
            className="text-[#F2F0FF] "
          >
            NFT. don't worry, you can set it up later
          </Text>
        </View>
        <View
          style={{
            height: screenHeight(0.1),
          }}
          className="ml-3 mr-3"
        >
          <SearchBar
            borderRadius={50}
            placeholder="Search by name/number"
            margintop={20}
            color="#B5B3BC"
          />
        </View>

        <View
          className="ml-3 mr-3  rounded-xl"
          style={{
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
            height: screenHeight(0.4),
          }}
        >
          <Text
            style={{
              fontFamily: "LIGHT",
            }}
            className="text-[#B5B3BC]  text-center"
          >
            This wallet has no NFT, dont't worry,
          </Text>
          <Text
            style={{
              fontFamily: "LIGHT",
            }}
            className="text-[#B5B3BC]  text-center"
          >
            you can set it up later
          </Text>
        </View>
        <SizedBox vertical={screenHeight(0.05)} />
        <View
          className=" mr-3 ml-3 "
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
            <ContnueButton screen="" />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default SetProfilePics;
