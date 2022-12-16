import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import COLORS from '../../../../../../constants/Colors'
import { width } from '../../../../../../constants/utils';
const ShareButton = () => {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:"center",
        borderRadius:8,
        width:width*0.4
    }} className={`bg-[${COLORS.PRIMARYCOLOR600}]  flex-row h-10 `}>
        <Feather name='share' size={22} color={COLORS.WHITE}/>
      <Text className={`ml-2 text-[${COLORS.WHITE}]`}>Share</Text>
    </View>
  )
}

export default ShareButton