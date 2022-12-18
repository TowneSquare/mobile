import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import FONTS from "../constants/Fonts";
import React, {FC} from 'react'
interface Props{
  label:string;
  placeholder:string
}
const Input:FC <Props> = (props) => {
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
        <Text
          style={{
            color: "white",
          }}
          className=""
        >
          {props.label}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 16,
            fontFamily: "SEMIBOLD",
          }}
          className="pl-3"
          placeholder={props.placeholder}
          placeholderTextColor={"white"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#0F111E",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 27,
    zIndex: 1,
    elevation: 1,

    shadowColor: "transparent",
    position: "absolute",
    top: -9,
  },
  inputContainer: {
    fontWeight: 600,
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    zIndex: 0,
    color: "#ff0000",
    borderColor: "white",
  },
});
export default Input;
