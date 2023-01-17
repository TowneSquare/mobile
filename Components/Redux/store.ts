import {configureStore} from '@reduxjs/toolkit'
import modalStateReducer from "../../screens/UserScreen/BottomNavigationTab/DiscoverTab/Components/Controller/ModalController/ModalController"
import  chatOptionStateReducer  from '../../screens/ChatScreen/Controller/ChatOption'
import SpaceReducer from '../../screens/UserScreen/BottomNavigationTab/SpaceTab/controller/SpaceController'
export const store=configureStore({
    reducer:{
        modalState:modalStateReducer,
        chatOptionState:chatOptionStateReducer,
        spaceController:SpaceReducer
    },
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch