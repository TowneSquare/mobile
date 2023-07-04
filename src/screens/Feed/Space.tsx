import { View, Text } from "react-native";
import React from "react";

const Space = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          textAlign: "center",
          fontSize: 34,
        }}
      >
        Space
      </Text>
    </View>
  );
};

export default Space;
