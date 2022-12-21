import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { updateTokenTosend,changeSendModalValue,updateTransactionModalValue } from '../Controller/ModalController/ModalController';
import { useDispatch,useSelector } from 'react-redux';
import COLORS from '../../../../../../constants/Colors';
const SendTokenModal = () => {
    const selectedTokenValue =useSelector((state)=>state.modalState.tokenToSend)
    const Tokens=[
        {
            logo:require("../../../../../../assets/PNG/solanalogo1.png"),
            symbol:"SOL",
            name:"Solana",
            amount:"12.345"
        },
        {
            logo:require("../../../../../../assets/PNG/usdc.png"),
            symbol:"USDC",
            name:"Usdc",
            amount:"12,345,80"
        },
        {
            logo:require("../../../../../../assets/PNG/slnd.png"),
            symbol:"SLND",
            name:"Solana DAO",
            amount:"12.345"
        },
        {
            logo:require("../../../../../../assets/PNG/solanalogo1.png"),
            symbol:"SOL",
            name:"Solana",
            amount:"12.345"
        },
        {
            logo:require("../../../../../../assets/PNG/usdc.png"),
            symbol:"USDC",
            name:"Usdc",
            amount:"12,345,80"
        },
        {
            logo:require("../../../../../../assets/PNG/slnd.png"),
            symbol:"SLND",
            name:"Solana DAO",
            amount:"12.345"
        },
        {
            logo:require("../../../../../../assets/PNG/solanalogo1.png"),
            symbol:"SOL",
            name:"Solana",
            amount:"12.345"
        },
        {
            logo:require("../../../../../../assets/PNG/usdc.png"),
            symbol:"USDC",
            name:"Usdc",
            amount:"12,345,80"
        },
        {
            logo:require("../../../../../../assets/PNG/slnd.png"),
            symbol:"SLND",
            name:"Solana DAO",
            amount:"12.345"
        },
       
    ]
    const renderItem=(token)=>{
        const dispatch=useDispatch()
        const selectedToken={
            tokenLogo:token.logo,
            tokenSymbol:token.symbol,
            tokenName:token.name
        }
        return(
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
                dispatch(updateTokenTosend(selectedToken))
                dispatch(changeSendModalValue())
                dispatch(updateTransactionModalValue())
              
                
            }}
            >
            <View style={{
                alignItems:"center"
            }} className={`flex-row mb-6  h-11 pr-3 pl-3`}>
                <View className={`mr-2 pt-2`}><Image style={{height:40, width:40}} source={token.logo}/></View>
                <Text className={`mr-2 text-white text-base font-medium`}>{token.symbol}</Text>
                <Text className={`flex-1 text-[${COLORS.PRIMARYCOLOR400}] text-base`}>{token.name}</Text>
                <Text className={`text-[${COLORS.TEXTGRAYBLUE}]`}>{token.amount}</Text>
            </View>
            </TouchableOpacity>
        )
    }
  return (
   
    Tokens.map((token, index)=>{
        return renderItem(token);
    })
   
  )
}

export default SendTokenModal