import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FONTS from "../../constants/Fonts";
import { SizedBox } from "sizedbox";
import { screenHeight, screenWidth, fontSize } from "../../constants/sizes";
import imageAssets from "../../constants/images";
const WelcomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    EXTRABOLD: FONTS.EXTRABOLD,
    LIGHT: FONTS.LIGHT,
    SEMIBOLD: FONTS.SEMIBOLD,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-[#120E24]">
      <StatusBar translucent backgroundColor={"transparent"} />
      <View className="flex-1 h-1/2 opacity-80 ">
        <View>
          <Image className="absolute w-full" source={imageAssets.blob} />
          <Image className="absolute w-full" source={imageAssets.elipse} />
          <SizedBox vertical={screenHeight(0.02)} />
          <Image className=" ml-8" source={imageAssets.townSquareLogo} />
          <SizedBox vertical={screenHeight(0.02)} />
          <Text
            style={[styles.textWithShadow, { fontSize: fontSize(44) }]}
            className="font-extrabold  pl-8 leading-9 text-[#F2F0FF]"
          >
            Social,
          </Text>
          <Text
            style={[styles.textWithShadow, { fontSize: fontSize(44) }]}
            className="   pl-8 leading-9 text-[#F2F0FF]"
          >
            the Web 3 way
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" bg-[#120E24]  h-1/2"
      >
        <SizedBox vertical={screenHeight(0.04)} />
        <Text
          style={{
            fontFamily: "SEMIBOLD",
          }}
          className="text-center text-xl text-[#F2F0FF] leading-8 font-normal"
        >
          Join TowneSquare today
        </Text>
        <Text
          style={{
            fontFamily: "SEMIBOLD",
          }}
          className="text-center text-[#F2F0FF] text-base font-semibold leading-8"
        >
          Start by choosing an ecosystem
        </Text>
        <SizedBox vertical={screenHeight(0.02)} />
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.replace("ImportWalletScreen"));
          }}
        >
          <View className="items-center">
            <Image
              className=" object-center "
              source={imageAssets.solanaLogo}
            />
          </View>
        </TouchableOpacity>
        <SizedBox vertical={screenHeight(0.025)} />
        <View className="items-center">
          <Image className=" object-center " source={imageAssets.aptosFrame} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: "rgba(255, 0, 184, 0.65)",
    textShadowOffset: { width: -5, height: 6 },
    textShadowRadius: 13,
    fontFamily: "EXTRABOLD",
  },
});
