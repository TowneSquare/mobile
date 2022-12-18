import {
  View,
  Text,
  StatusBar,
  Image,
  Switch,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Background from "./Components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import Input from "../../Components/TextField";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import { useRoute } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
const SetupProfileScreen = () => {
  const route = useRoute();
  const nextScreen = route.params.newRoute;
  console.log(nextScreen);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
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
    <SafeAreaView className={`bg-[${COLORS.APPCOLOR}]`}>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <Background>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <View
              className="mt-10 pl-5"
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: "EXTRABOLD",
                }}
                className="text-[#F2F0FF] pl-5 pt-6   text-3xl "
              >
                Set up profile
              </Text>
            </View>

            <ScrollView className="">
              <View>
                <View className="mb-1 mt-20 mr-3 ml-3">
                  <Input
                    label="Set username for your profile"
                    placeholder="Username"
                    color="white"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "SEMIBOLD",
                  }}
                  className={`text-[${COLORS.LIGHTBLUE}] pl-3`}
                >
                  USERNAME AVAILABLE
                </Text>
                <View className="mb-1 mt-10 mr-3 ml-3">
                  <Input
                    label="Set a passcode for your wallet"
                    placeholder="Passcode"
                  />
                </View>

                <View className="pl-3 mt-1" style={{ flexDirection: "row" }}>
                  <Text className="text-[#339DFF] pt-1 text-xs">
                    {"\u2022"}
                  </Text>
                  <Text
                    className="text-[#339DFF] pt-1 text-xs"
                    style={{ flex: 1, fontFamily: "SEMIBOLD", paddingLeft: 5 }}
                  >
                    Upper case letter
                  </Text>
                </View>
                <View className="pl-3" style={{ flexDirection: "row" }}>
                  <Text className="text-[#339DFF] pt-1 text-xs">
                    {"\u2022"}
                  </Text>
                  <Text
                    className="text-[#339DFF] pt-1 text-xs"
                    style={{ flex: 1, fontFamily: "SEMIBOLD", paddingLeft: 5 }}
                  >
                    Numbers
                  </Text>
                </View>
                <View className="pl-3" style={{ flexDirection: "row" }}>
                  <Text className="text-[#339DFF] pt-1 text-xs">
                    {"\u2022"}
                  </Text>
                  <Text
                    className="text-[#339DFF] pt-1 text-xs"
                    style={{ flex: 1, fontFamily: "SEMIBOLD", paddingLeft: 5 }}
                  >
                    Minimum 8 characters
                  </Text>
                </View>
                <View className="pl-3" style={{ flexDirection: "row" }}>
                  <Text className="text-[#339DFF] pt-1 text-xs">
                    {"\u2022"}
                  </Text>
                  <Text
                    className="text-[#339DFF] pt-1 text-xs"
                    style={{ flex: 1, fontFamily: "SEMIBOLD", paddingLeft: 5 }}
                  >
                    Special characters
                  </Text>
                </View>
                <View className="mb-1 mt-10 mr-3 ml-3">
                  <Input
                    label="Set a passcode for your wallet"
                    placeholder="Confirm passcode"
                  />
                </View>
                <View
                  className="mt-10 h-10 mr-3 ml-3 flex-row"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "EXTRABOLD",
                    }}
                    className="text-white text-sm "
                  >
                    Enable Face unlock?
                  </Text>
                  <Switch
                    trackColor={{
                      false: `${COLORS.LIGHTBLUE}`,
                      true: `${COLORS.LIGHTBLUE}`,
                    }}
                    thumbColor={isEnabled ? COLORS.BLUE : COLORS.LIGHTBLUE}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>

                <View
                  className=" mr-3 ml-3 mb-10  mt-10 flex-1"
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
                    <ContnueButton screen={nextScreen} route="" />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Background>
    </SafeAreaView>
  );
};

export default SetupProfileScreen;
