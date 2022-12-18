import { View, Text, Image } from "react-native";
import React, { ReactNode,FC}from "react";
interface Props {
  children:ReactNode
}
const Background:FC<Props> = ({ children }) => {
  return (
    <View className="flex-1 bg-[#120E24] w-full h-full ">
      {children}
    </View>
  )
}

export default Background;