// Optimization for API call 

import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:"Search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})


export const {cacheResults}=createSlice.actions;
export default SearchSlice.reducer;