import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from '../../constants';
import Header from '../../shared/Feed/Header';

const CreateChannelScreen = () => {
  return (
       <SafeAreaView style={{
    backgroundColor:appColor.feedBackground,
    flex:1
   }}>
    <Header title='Create Channel'/>
     <Text style={{
        color:appColor.kWhiteColor
    }}>CreateChannel</Text>
   </SafeAreaView>
  )
}

export default CreateChannelScreen