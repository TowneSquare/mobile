import { View, Text, Image } from 'react-native'
import React from 'react'

const ManageToken = () => {
  return (
    <View
    
    className={`flex-row items-center mt-3 `}>
        <Image source={require('../../../../../../assets/PNG/manageToken.png')}/>
      <Text className={`text-[#B692F6] ml-5 text-lg font-semibold`}>Manage your Token</Text>
    </View>
  )
}

export default ManageToken