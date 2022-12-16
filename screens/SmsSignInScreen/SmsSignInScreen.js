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
const { height, width } = Dimensions.get("window");
console.log(height, width);
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
        <KeyboardAwareScrollView>
          <View
            behavior="padding"
            style={{
              height: height,
            }}
            className=""
          >
            <View
              style={{
                height: height * 0.05,
              }}
            ></View>
            <View
              className=""
              style={{
                height: height * 0.25,
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
                  }}
                  className="text-[#F2F0FF] text-3xl "
                >
                  Sign In with your SMS
                </Text>
                <View className="mb-10 mt-5">
                  <Text
                    style={{
                      fontFamily: "SEMIBOLD",
                    }}
                    className="text-white pb-2"
                  >
                    Powered by
                  </Text>
                  <Image source={require("../../assets/PNG/cupcake.png")} />
                </View>
              </View>
            </View>
            <View className="mb-5 mr-3 ml-3 ">
              <DropdownComponent />
            </View>

            <View className="mb-5 mr-3 ml-3">
              <Input
                label="Insert your Number"
                placeholder="+71 345 233 3454"
              />
            </View>
            <View>
              <TouchableOpacity
                className="h-12 w-70 ml-3 mr-3 rounded-xl bg-[#0368FF]"
                style={{
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
            <View
              className=""
              style={{
                height: height * 0.5,
              }}
            >
              <View
                className="mt-3 h-14"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-white text-3xl font-semibold"
                >
                  OTP Verification
                </Text>
              </View>
              <OTP />
              <View
                style={{
                  height: height * 0.25,
                }}
                className=" "
              >
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className="text-white text-base text-center mt-6"
                >
                  Didnt receive OTP?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "SEMIBOLD",
                    }}
                    className="text-[#0368FF] text-14 text-center mt-6"
                  >
                    RESEND
                  </Text>
                </TouchableOpacity>
                <View
                  className="flex-1 mb-5 pl-3 pr-3"
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
