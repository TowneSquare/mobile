import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface Space{
    setMicmodalState:boolean,
    topicModalState:boolean,
    selectedTopics:string[],
    spaceModal:boolean,
    shareModal:boolean
}
const initialState:Space={
    setMicmodalState:false,
    topicModalState:false,
    selectedTopics:[],
    spaceModal:false,
    shareModal:false
}
export const SpaceController=createSlice({
    name:'spaceController',
    initialState,
    reducers:{
        updateSpaceModal:(state)=>{
            state.setMicmodalState=!state.setMicmodalState
        },
        updateTopicModalState:(state)=>{
            state.topicModalState=!state.topicModalState
        },
        AddTopics:(state, action:PayloadAction<string[]>)=>{
            state.selectedTopics=action.payload
        },
        updateLiveSpaceModal:(state)=>{
            state.spaceModal=!state.spaceModal
        },
        updateShareModal:(state)=>{
            state.shareModal=!state.shareModal
        }
      
    }
})
export const {updateSpaceModal,updateTopicModalState,updateShareModal,updateLiveSpaceModal, AddTopics}=SpaceController.actions
export default SpaceController.reducer