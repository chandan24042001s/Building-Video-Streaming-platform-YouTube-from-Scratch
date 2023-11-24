import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        Search:searchSlice
    }
});

export default store;