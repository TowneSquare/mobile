import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React from "react";
import Background from "./Components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../Components/TextField";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import OTP from "./Components/OTP.js";
import { useFonts } from "expo-font";
import DropdownComponent from "./Components/SelectCountryDropDown";
import FONTS from "../../constants/Fonts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SizedBox } from "sizedbox";
import imageAssets from "../../constants/images";
import { screenHeight, screenWidth, fontSize } from "../../constants/sizes";
import { height } from "../../constants/utils";

const SmsSignInScreen = () => {
  const nextRoute = {
    screen: "SetupProfileScreen",
    nextScreen: "SetProfilePics",
  };
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
        <KeyboardAwareScrollView>
          <View
            behavior="padding"
            style={{
              height: height,
            }}
          >
            <View
              className=""
              style={{
                height: height * 0.23,
              }}
            >
              <View
                className=" pl-5  "
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontFamily: "EXTRABOLD",
                    fontSize: fontSize(30),
                  }}
                  className="text-[#F2F0FF] "
                >
                  Sign In with your SMS
                </Text>
                <SizedBox vertical={screenHeight(0.02)} />
                <View className="">
                  <Text
                    style={{
                      fontFamily: "SEMIBOLD",
                    }}
                    className="text-white pb-2"
                  >
                    Powered by
                  </Text>
                  <Image source={imageAssets.cupcakeLogo} />
                </View>
              </View>
            </View>

            <View className=" mr-3 ml-3 ">
              <DropdownComponent />
            </View>
            <SizedBox vertical={screenHeight(0.02)} />

            <View className=" mr-3 ml-3">
              <Input
                label="Insert your Number"
                placeholder="+71 345 233 3454"
              />
            </View>
            <SizedBox vertical={screenHeight(0.02)} />
            <View>
              <TouchableOpacity
                className="h-12  ml-3 mr-3 rounded-xl bg-[#0368FF]"
                style={{
                  width: screenWidth(0.93),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-white text-base "
                >
                  GET CODE
                </Text>
              </TouchableOpacity>
            </View>
            <SizedBox vertical={screenHeight(0.015)} />
            <View
              style={{
                height: height * 0.5,
              }}
            >
              <View
                className="h-14"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                    fontSize: fontSize(30),
                  }}
                  className="text-white font-semibold"
                >
                  OTP Verification
                </Text>
              </View>
              <OTP />
              <View
                style={{
                  height: height * 0.25,
                }}
                className=""
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-white text-base text-center "
                >
                  Didnt receive OTP?
                </Text>
                <SizedBox vertical={screenHeight(0.02)} />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "SEMIBOLD",
                    }}
                    className="text-[#0368FF] text-14 text-center "
                  >
                    RESEND
                  </Text>
                </TouchableOpacity>
                <SizedBox vertical={screenHeight(0.033)} />
                <View
                  className="pl-3 pr-3"
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
                    <ContnueButton screen="WalletAdded" route={nextRoute} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Background>
    </SafeAreaView>
  );
};

export default SmsSignInScreen;
