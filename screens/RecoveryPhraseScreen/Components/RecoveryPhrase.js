import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import FONTS from "../../../constants/Fonts";
import * as Clipboard from "expo-clipboard";
const RecoveryPhrase = () => {
  const [copiedText, setCopiedText] = useState("");
  const [phrases, setPhrases] = useState([]);
  const fetchCopiedPhrase = async () => {
    const phrase = await Clipboard.getStringAsync();
    setCopiedText(phrase);
    var string = phrase;
    var array = string.split(" ");
    setPhrases(array);
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
    <View>
      <View style={styles.labelContainer}>
        <Text className="text-white ">RECOVERY PHRASE</Text>
      </View>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",

          justifyContent: "center",
        }}
        style={styles.inputContainer}
      >
        {phrases.map((phrase, index) => {
          console.log(`phrase hereeeee ${index + 1}`);
          return (
            <View className="h-12 w-20 ">
              <Text className="text-white text-center">
                {index + 1}. {phrase}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <Text
        style={{
          fontFamily: "LIGHT",
        }}
        className="text-white text-center"
      >
        Supports All Solana Wallet
      </Text>
      <View
        style={{
          justifyContent: "space-between",
        }}
        className="flex-row mt-1 pl-2 pr-2"
      >
        <TouchableOpacity onPress={fetchCopiedPhrase}>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-[#0368FF] text-base"
          >
            PASTE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "SEMIBOLD",
            }}
            className="text-[#0368FF] text-base"
          >
            IMPORT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#0F111E",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 110,
    zIndex: 1,
    elevation: 1,

    shadowColor: "transparent",
    position: "absolute",
    top: -9,
  },
  inputContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",

    fontWeight: 600,
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 20,

    //justifyContent: "space-around",
    alignContent: "center",
    padding: 8,
    zIndex: 0,
    color: "#ff0000",
    borderColor: "white",
    height: 250,
  },
});
export default RecoveryPhrase;
