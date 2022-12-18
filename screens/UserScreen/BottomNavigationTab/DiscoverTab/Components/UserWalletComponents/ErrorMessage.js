import { View, Text } from 'react-native'
import React from 'react'
import { width } from '../../../../../../constants/utils'
import { useDispatch, useSelector } from "react-redux";
const ErrorMessage = (props) => {
    const selectedToken=useSelector((state)=>state.modalState.tokenToSend)
    
  return (
    <View style={{
        height:40,
        width: width * 0.86,
        alignItems:"center",
        borderRadius:8
    }} className={`flex-row mt-2 bg-[#7A271A]`}>
        <View style={{
            height:33,
            width:width*0.15,
            justifyContent:"center",
            alignItems:'center',
            borderRadius:4,
           
        }} className={`bg-[#D92D20] ml-1`}><Text className='text-white '>Error</Text></View>
      <Text className={`text-white ml-2`}>{props.errorMessage}</Text>
    </View>
  )
}

export default ErrorMessage