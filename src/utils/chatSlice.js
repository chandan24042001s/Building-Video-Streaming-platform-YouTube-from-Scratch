import { createSlice } from "@reduxjs/toolkit";
import { OFF_LIVE_CHAT } from "./contants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFF_LIVE_CHAT,1);
            state.messages.push(action.payload);
        },
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;