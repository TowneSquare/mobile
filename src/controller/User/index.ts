import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState{
    userId:string,
    profileImage:string
}
const initialState:UserState = {
    userId: "",
    profileImage: "",
}

export const userReducers = createSlice({
    name:"userReducers",
    initialState,
    reducers:{
        updateProfileImage:(state, action: PayloadAction<string> ) => {
            state.profileImage = action.payload
        }
    }
})

export const {updateProfileImage} = userReducers.actions
export default userReducers.actions