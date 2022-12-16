import { View, Text, Image } from "react-native";
import React from "react";

const Background = ({ children }) => {
  return (
    <View className="flex-1 bg-[#120E24] w-full h-full ">
       <Image className="absolute w-full"
      source={require("../../../assets/PNG/opaque-blob.png")}
      />
     
     
      <Image
        className="absolute w-full "
        source={require("../../../assets/PNG/Ellipse.png")}
      />
      
      {children}
    </View>
  )
}

export default Background;