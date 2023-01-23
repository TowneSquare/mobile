import {
  View,
  Text,
  StatusBar,
  Switch,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SizedBox } from "sizedbox";
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
import { screenHeight, fontSize } from "../../constants/sizes";
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
        <SizedBox vertical={screenHeight(0.015)} />
        <ScrollView>
          <View>
            <View
              className=" pl-5"
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: "EXTRABOLD",
                  fontSize: fontSize(30),
                }}
                className="text-[#F2F0FF] pl-5  "
              >
                Set up profile
              </Text>
            </View>

            <View>
              <SizedBox vertical={screenHeight(0.06)} />
              <View className=" mr-3 ml-3">
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
                className={`text-[${COLORS.LIGHTBLUE}] mt-2 pl-3`}
              >
                USERNAME AVAILABLE
              </Text>
              <SizedBox vertical={screenHeight(0.025)} />
              <View className=" mr-3 ml-3">
                <Input
                  label="Set a passcode for your wallet"
                  placeholder="Passcode"
                />
              </View>

              <View className="pl-3 mt-1" style={{ flexDirection: "row" }}>
                <Text className="text-[#339DFF] pt-1 text-xs">{"\u2022"}</Text>
                <Text
                  className="text-[#339DFF] pt-1 text-xs"
                  style={{
                    flex: 1,
                    fontFamily: "SEMIBOLD",
                    paddingLeft: 5,
                  }}
                >
                  Upper case letter
                </Text>
              </View>
              <View className="pl-3" style={{ flexDirection: "row" }}>
                <Text className="text-[#339DFF] pt-1 text-xs">{"\u2022"}</Text>
                <Text
                  className="text-[#339DFF] pt-1 text-xs"
                  style={{
                    flex: 1,
                    fontFamily: "SEMIBOLD",
                    paddingLeft: 5,
                  }}
                >
                  Numbers
                </Text>
              </View>
              <View className="pl-3" style={{ flexDirection: "row" }}>
                <Text className="text-[#339DFF] pt-1 text-xs">{"\u2022"}</Text>
                <Text
                  className="text-[#339DFF] pt-1 text-xs"
                  style={{
                    flex: 1,
                    fontFamily: "SEMIBOLD",
                    paddingLeft: 5,
                  }}
                >
                  Minimum 8 characters
                </Text>
              </View>
              <View className="pl-3" style={{ flexDirection: "row" }}>
                <Text className="text-[#339DFF] pt-1 text-xs">{"\u2022"}</Text>
                <Text
                  className="text-[#339DFF] pt-1 text-xs"
                  style={{
                    flex: 1,
                    fontFamily: "SEMIBOLD",
                    paddingLeft: 5,
                  }}
                >
                  Special characters
                </Text>
              </View>
              <SizedBox vertical={screenHeight(0.03)} />
              <View className="mr-3 ml-3">
                <Input
                  label="Set a passcode for your wallet"
                  placeholder="Confirm passcode"
                />
              </View>
              <SizedBox vertical={screenHeight(0.025)} />
              <View
                className=" h-10 mr-3 ml-3 flex-row"
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
              <SizedBox vertical={screenHeight(0.08)} />
              <View
                className=" mr-3 ml-3 flex-1"
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
          </View>
        </ScrollView>
      </Background>
    </SafeAreaView>
  );
};

export default SetupProfileScreen;
