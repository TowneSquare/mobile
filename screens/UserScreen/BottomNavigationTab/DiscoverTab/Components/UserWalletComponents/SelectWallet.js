import { View,Image,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import COLORS from '../../../../../../constants/Colors';
import { useNavigation } from "@react-navigation/native";
import SelectToken from './SelectTokenModal';

const SelectWallet = () => {
 
    const navigation=useNavigation()
  return (
    <View style={{ 
        alignItems:"center"
    }} className={`h-11  flex-row `}>
      <View className={`ml-2 mt-2`}>
      <Image source={require("../../../../../../assets/PNG/solanalogo1.png")}/></View>
      <Text className={`ml-2 text-white mr-4 font-medium text-lg`}>Solana</Text>
      <Text className={`text-[${COLORS.GRAYBLUEOPACITY}] flex-1 text-base`}>SOL</Text>
      <TouchableOpacity
      onPress={()=>
    {
        navigation.navigate("SelectToken")
    }}
      >
      <Text className={`text-[${COLORS.PRIMARYCOLOR400}] font-bold mr-2 text-lg`}>Switch</Text>
      </TouchableOpacity>
  </View>
  )
}

export default SelectWallet