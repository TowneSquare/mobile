import {configureStore} from '@reduxjs/toolkit'
import modalStateReducer from "../../screens/UserScreen/BottomNavigationTab/DiscoverTab/Components/Controller/ModalController/ModalController"
import  chatOptionStateReducer  from '../../screens/ChatScreen/Controller/ChatOption'
export const store=configureStore({
    reducer:{
        modalState:modalStateReducer,
        chatOptionState:chatOptionStateReducer
    },
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch