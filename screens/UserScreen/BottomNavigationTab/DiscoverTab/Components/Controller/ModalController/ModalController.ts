import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import imageAssets from "../../../../../../../constants/images";
interface ModalState{
    value:boolean
    selectedToken:{
        tokenLogo:undefined,
        tokenSymbol:string,
        tokenName:string
    }
    receiveModalValue:boolean
    sendModalValue:boolean,
    tokenToSend:{
        tokenLogo:undefined|string,
        tokenSymbol:string,
        tokenName:string
    },
    TransactionModalValue:boolean,
    WalletAddress:string,
    isAddressValid:boolean,
    amountOfToken:number,
    isAmountToSendValid:boolean,
    spinner:boolean,
    TransactionSuccessModal:boolean,
    sendButton:boolean,

}
const initialState: ModalState={
    value:false,
    selectedToken:{
        tokenLogo:imageAssets.sol,
        tokenSymbol:"SOL",
        tokenName:"Solana"
    },
    receiveModalValue:false,

    sendModalValue:false,
    tokenToSend:{
        tokenLogo:"",
        tokenSymbol:"",
        tokenName:""
    },
    TransactionModalValue:false,
    WalletAddress:"",
    isAddressValid:false,
    amountOfToken:0,
    isAmountToSendValid:false,
    spinner:false,
    TransactionSuccessModal:false,
    sendButton:false

}
export const modalStateSlice=createSlice({
    name:'modalState',
    initialState,
    reducers:{
        changeState:(state)=>{
            state.value=!state.value
        },
        updateSelectedToken:(state, action)=>{
            state.selectedToken=action.payload
        },
        changeReceiveModalState:(state)=>{
            state.receiveModalValue=!state.receiveModalValue
        },
        changeSendModalValue:(state, action)=>{
            state.sendModalValue=!state.sendModalValue
        },
        updateTokenTosend:(state, action)=>{
            state.tokenToSend=action.payload
        },
        updateTransactionModalValue:(state,action)=>{
            state.TransactionModalValue=!state.TransactionModalValue
        },
        updateWalletAddress:(state, action)=>{
            state.WalletAddress=action.payload
        },
        updateisAddressValid:(state, action)=>{
            state.isAddressValid=action.payload
        },
        updateAmountOfToken:(state, action)=>{
            state.amountOfToken=action.payload
        },
        updateAmountValidation:(state,action)=>{
            if(state.amountOfToken>123.766){
                state.isAmountToSendValid=false
            }
            else state.isAmountToSendValid=true
        },
        updateSpinner:(state, action)=>{
            state.spinner=action.payload
        },
        updateTransactionSuccessModal:(state, action)=>{
            state.TransactionSuccessModal=!state.TransactionSuccessModal
        },
        updateisSendButton:(state, action)=>{
            state.sendButton=action.payload
        }


    }
})
export const {
    changeState, 
    updateSelectedToken,
    changeReceiveModalState,
    changeSendModalValue,
    updateTokenTosend,
    updateTransactionModalValue,
    updateWalletAddress,
    updateisAddressValid,
    updateAmountOfToken,
    updateAmountValidation,
    updateSpinner,
    updateTransactionSuccessModal,
    updateisSendButton
    }=modalStateSlice.actions
export default modalStateSlice.reducer