import { View,Image,TouchableOpacity, Text } from 'react-native'
import { useDispatch,useSelector } from 'react-redux';
import { updateSelectedToken,changeReceiveModalState,updateisSendButton, changeState } from '../Controller/ModalController/ModalController';
import React from 'react'
import COLORS from '../../../../../../constants/Colors'
import { height } from '../../../../../../constants/utils';
const TokenLists = () => {
    const selectedTokenValue =useSelector((state:any)=>state.modalState.selectedToken)
    console.log(selectedTokenValue)
    const sendButton =useSelector((state:any)=>state.modalState.sendButton)
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
       
    ]
    const renderItem=(token:any)=>{
        const dispatch=useDispatch()
        const selectedToken={
            tokenLogo:token.logo,
            tokenSymbol:token.symbol,
            tokenName:token.name
        }
        return(
            <TouchableOpacity
            onPress={()=>{
                dispatch(updateSelectedToken(selectedToken))
                dispatch(changeState())

                // check condition here
                if(sendButton==true){
                    dispatch(changeReceiveModalState())
                }
                
                
                
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

export default TokenLists