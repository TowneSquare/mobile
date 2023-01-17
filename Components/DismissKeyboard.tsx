import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
interface Props {
  children: JSX.Element;
}
const DismissKeyboard: React.FC<Props> = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
