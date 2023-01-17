import { View, Text, Image,StatusBar, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import COLORS from "../../constants/Colors";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import imageAssets from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
const height = Dimensions.get("window").height;
const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("WelcomeScreen"));
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
    <SafeAreaView className={`bg-[${COLORS.APPCOLOR}]`}>
         <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
      />
      <View
        style={{
          height: height,
          backgroundColor: COLORS.APPCOLOR,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="flex-row ">
          <Image
            className="mr-2"
            source={imageAssets.townSquareLogo}
          />
          <Text 
          style={{
            fontFamily:"LIGHT"
          }}
          className="text-white ml-3 mt-4 text-3xl">TowneSquare</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
