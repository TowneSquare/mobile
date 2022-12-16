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
      <View className="flex-1  h-1/2 opacity-80 ">
        <View>
          <Image
            className="absolute w-full"
            source={require("../../assets/PNG/opaque-blob.png")}
          />
          <Image
            className="absolute w-full"
            source={require("../../assets/PNG/Ellipse.png")}
          />
          <Image
            className="mt-2 ml-8"
            source={require("../../assets/PNG/logo1.png")}
          />
          <View className="w-3/4 h-80 mt-10 ml-7">
            <Text
              style={styles.textWithShadow}
              className="font-extrabold text-4xl pt-3 leading-9 text-[#F2F0FF]"
            >
              Social,
            </Text>
            <Text
              style={styles.textWithShadow}
              className=" text-4xl  pt-3 leading-9 text-[#F2F0FF]"
            >
              the Web 3 way
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" bg-[#120E24] h-1/2 flex-1"
      >
        <Text
          style={{
            fontFamily: "SEMIBOLD",
          }}
          className="text-center text-xl mt-10 text-[#F2F0FF] leading-8 font-normal"
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
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.replace("ImportWalletScreen"));
          }}
        >
          <View className="items-center">
            <Image
              className=" object-center mt-10"
              source={require("../../assets/PNG/solana.png")}
            />
          </View>
        </TouchableOpacity>
        <View className="items-center">
          <Image
            className=" object-center mt-10"
            source={require("../../assets/PNG/AptosFrame.png")}
          />
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
