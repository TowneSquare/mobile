import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { width } from '../../../../../../constants/utils';
import COLORS from '../../../../../../constants/Colors';
const CopyButton = () => {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:"center",
        borderRadius:8,
        width:width*0.4
    }} className={`bg-[${COLORS.PRIMARYCOLOR600}] mr-1 flex-row h-10 w-40`}>
        <Feather name='copy' size={22} color={COLORS.WHITE}/>
      <Text className={`ml-2 text-[${COLORS.WHITE}]`}>Copy</Text>
    </View>
  )
}

export default CopyButton