import { View, Image, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Background from "./Components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions, useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
const WalletAdded = ({ navigation }) => {
  const route = useRoute();
  const nextScreen = route.params.screen;
  const nextRoute = { newRoute: route.params.nextScreen };
  console.log(nextRoute);
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(nextScreen, nextRoute));
    }, 4000);
  }, []);
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
      <StatusBar translucent backgroundColor={"transparent"} />
      <Background>
        <View className="items-center h-full w-full justify-center">
          <Image className="" source={require("../../assets/PNG/Check.png")} />
          <Text
            style={{
              fontFamily: "EXTRABOLD",
            }}
            className="text-white text-xl  leading-10 pt-3"
          >
            Wallet Added
          </Text>
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default WalletAdded;
