import {createSlice} from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
interface ChatOption{
    isMenuActive:boolean,
    activeMenu:string,
    isdeleteViewActive:boolean,
    activeDeleteView:string
}
const initialState:ChatOption={
    isMenuActive:false,
    activeMenu:"",
    isdeleteViewActive:false,
    activeDeleteView:""

}
export const chatOptionStateSlice=createSlice({
    name:'chatOptionState',
    initialState,
    reducers:{
        isMenuActive:(state, action)=>{
            state.isMenuActive=action.payload
        },
        activeMenu:(state, action)=>{
            state.activeMenu=action.payload
        },
        isdeleteViewActive:(state, action)=>{
            state.isdeleteViewActive=action.payload
        },
        activeDeleteView:(state, action)=>{
            state.activeDeleteView=action.payload
        }
    }
})
export const {isMenuActive, activeMenu,isdeleteViewActive,activeDeleteView}=chatOptionStateSlice.actions
export default chatOptionStateSlice.reducer