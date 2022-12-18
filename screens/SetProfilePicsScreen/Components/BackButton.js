import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FONTS from '../../../constants/Fonts';
const BackButton = () => {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
      EXTRABOLD: FONTS.EXTRABOLD,
      LIGHT: FONTS.LIGHT,
      SEMIBOLD: FONTS.SEMIBOLD,
    });
  
    if (!fontsLoaded) {
      return null;
    }
  return (
    <TouchableOpacity onPress={navigation.goBack}>
    <View
      className="bottom-0  h-12 w-24 pl-3  flex-row items-center rounded-xl space-x-2 "
      style={{
        borderColor: "#0368FF",
        
        borderWidth: 1,
      }}
    >
      <Icon type="antdesign" name="left" color="white" size={15} />
      <Text 
      style={{
        fontFamily: "SEMIBOLD",
      }} 
       className="text-white pl-2 text-base ">BACK</Text>
    </View>
  </TouchableOpacity>
  )
}

export default BackButton