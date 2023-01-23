import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../../constants/Colors";
import {
  screenHeight,
  heightSize,
  widthSize,
  screenWidth,
} from "../../../constants/sizes";
const OTP = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });
  return (
    <View style={styles.otpContainer}>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.03),
          },
        ]}
      >
        <TextInput
          cursorColor={"white"}
          placeholderTextColor={COLORS.WHITE}
          style={styles.otpText}
          keyboardType="number-pad"
          maxLength={1}
          ref={firstInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 1: text });
            text && secondInput.current.focus();
          }}
        />
      </View>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.07),
          },
        ]}
      >
        <TextInput
          style={styles.otpText}
          cursorColor={"white"}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="number-pad"
          maxLength={1}
          ref={secondInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 2: text });
            text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
        />
      </View>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.07),
          },
        ]}
      >
        <TextInput
          style={styles.otpText}
          cursorColor={"white"}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="number-pad"
          maxLength={1}
          ref={thirdInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 3: text });
            text ? fourthInput.current.focus() : secondInput.current.focus();
          }}
        />
      </View>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.07),
          },
        ]}
      >
        <TextInput
          style={styles.otpText}
          cursorColor={"white"}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="number-pad"
          maxLength={1}
          ref={fourthInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 4: text });
            text ? fifthInput.current.focus() : thirdInput.current.focus();
          }}
        />
      </View>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.07),
          },
        ]}
      >
        <TextInput
          style={styles.otpText}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="number-pad"
          cursorColor={"white"}
          maxLength={1}
          ref={fifthInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 5: text });
            text ? sixthInput.current.focus() : fourthInput.current.focus();
          }}
        />
      </View>
      <View
        style={[
          styles.otpBox,
          {
            height: heightSize(60),
            width: widthSize(62),
            marginLeft: screenWidth(0.07),
            marginRight: screenWidth(0.03),
          },
        ]}
      >
        <TextInput
          style={styles.otpText}
          cursorColor={"white"}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="number-pad"
          maxLength={1}
          ref={sixthInput}
          onChangeText={(text) => {
            setOtp({ ...otp, 6: text });
            !text && fifthInput.current.focus();
          }}
        />
      </View>
    </View>
  );
};

export default OTP;
const styles = StyleSheet.create({
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "#514B4B",
    borderWidth: 1,
  },
  otpText: {
    fontSize: 25,
    color: "white",
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});
