import {
  View,
  Dimensions,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import BackButton from "./Components/BackButton";
import ContnueButton from "./Components/ContnueButton";
import RecoveryPhrase from "./Components/RecoveryPhrase";
const { height, width } = Dimensions.get("window");
const RecoveryPhraseScreen = () => {
  const nextRoute = {
    screen: "SetupProfileScreen",
    nextScreen: "NFTSetupProfileScreen",
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
      <View
        style={{
          height: height,
        }}
        className=" bg-[#0F111E] w-full  "
      >
        <Image
          className="absolute w-full"
          source={require("../../assets/PNG/blob.png")}
        />
        <Image
          className="absolute"
          source={require("../../assets/PNG/Ellipse.png")}
        />
        <View
          className=" pt-12 pl-10"
          style={{
            height: height * 0.3,
          }}
        >
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-white text-3xl pb-2"
          >
            Import with
          </Text>
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-white text-3xl"
          >
            Recovery Phrases
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-white pt-4 text-base"
          >
            Enter your recovery phrases below. It is
          </Text>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-white pt-1 text-base"
          >
            Comprised of 12 or 24 words
          </Text>
        </View>

        <View
          className="ml-3 pt-10 bg-wh mr-3"
          style={{
            height: height * 0.5,
          }}
        >
          <RecoveryPhrase />
        </View>
        <View className="flex-1 pb-10">
          <View
            className="flex-1  pl-3 pr-3"
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
    </SafeAreaView>
  );
};

export default RecoveryPhraseScreen;
