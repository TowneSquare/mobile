import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";

const ImportWalletScreen = ({ navigation }) => {

  const nextRoute = {
    screen: "SetupProfileScreen",
    nextScreen: "SetProfilePics",
  };
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
    <SafeAreaView className="bg-[#0F111E]">
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <View className="items-center">
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
              <View className="rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2 ">
                <Image
                  source={
                    checked === "first"
                      ? require("../../assets/PNG/radiochecked.png")
                      : require("../../assets/PNG/radio1.png")
                  }
                />
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-[#F2F0FF] ml-2 font-normal text-base text-center"
                >
                  Sign in with your mobile wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => setChecked("second")}
            >
              <View className="rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2 ">
                <Image
                  source={
                    checked === "second"
                      ? require("../../assets/PNG/radiochecked.png")
                      : require("../../assets/PNG/radio1.png")
                  }
                />
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-[#F2F0FF] ml-2 font-normal text-base text-center"
                >
                  Sign in with SMS
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => setChecked("third")}
            >
              <View className="rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2 ">
                <Image
                  source={
                    checked === "third"
                      ? require("../../assets/PNG/radiochecked.png")
                      : require("../../assets/PNG/radio1.png")
                  }
                />
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-[#F2F0FF] ml-2 font-normal text-base text-center"
                >
                  Create new wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-5"
              onPress={() => setChecked("fourth")}
            >
              <View className="rounded-xl bg-[#2F2F2F] flex-row h-12 items-center pl-2 ">
                <Image
                  source={
                    checked === "fourth"
                      ? require("../../assets/PNG/radiochecked.png")
                      : require("../../assets/PNG/radio1.png")
                  }
                />
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-[#F2F0FF] ml-2 font-normal text-base text-center"
                >
                  Import wallet using recovery phrase
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Background>
        {checked === "null" ? (
          <View className="opacity-30 absolute bottom-0 mb-10 h-12 w-36 bg-[#0368FF] flex-row items-center rounded-xl space-x-6 ">
            <Text
              style={{
                fontFamily: "SEMIBOLD",
              }}
              className="text-white pl-4   text-base "
            >
              CONTINUE
            </Text>
            <Icon type="antdesign" name="right" color="white" size={15} />
          </View>
        ) : (
          <TouchableOpacity
            className="absolute bottom-0 h-12 mb-10"
            onPress={() => {
              switch (checked) {
                case "first":
                  navigation.navigate("WalletSelectionScreen");
                  break;
                case "second":
                  navigation.navigate("SmsSignInScreen");
                  break;
                case "third":
                  navigation.navigate("WalletAdded", nextRoute);
                  break;
                case "fourth":
                  navigation.navigate("RecoveryPhraseScreen");
                  break;
                default:
                  break;
              }
            }}
          >
            <View className="flex-row items-center bottom-0 space-x-4 mb-10 h-12 w-36 bg-[#0368FF] rounded-xl">
              <Text
                style={{
                  fontFamily: "SEMIBOLD",
                }}
                className="text-white pl-4 text-base "
              >
                CONTINUE
              </Text>
              <Icon
                type="entypo"
                name="chevron-right"
                color="white"
                size={20}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ImportWalletScreen;
