import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface ModalState{
    value:boolean
    selectedToken:any
    receiveModalValue:boolean
}
const initialState: ModalState={
    value:false,
    selectedToken:{
        tokenLogo:require("../../../../../../../assets/PNG/solanalogo1.png"),
        tokenSymbol:"SOL",
        tokenName:"Solana"
    },
    receiveModalValue:false
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
        }
    }
})
export const {changeState, updateSelectedToken,changeReceiveModalState}=modalStateSlice.actions
export default modalStateSlice.reducer