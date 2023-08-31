import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { appColor } from '../../../constants';
import Header from '../../../shared/Feed/Header';
const InviteMembersScreen = () => {
  return (
   <SafeAreaView style={{
    backgroundColor:appColor.feedBackground,
    flex:1
   }}>
    <Header title='InviteMembers'/>
     <Text style={{
        color:appColor.kWhiteColor
    }}>InviteMembers</Text>
   </SafeAreaView>
  )
}

export default InviteMembersScreen