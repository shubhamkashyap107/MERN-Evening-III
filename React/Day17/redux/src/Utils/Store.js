import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./DataSlice"

const store = configureStore({
    reducer : {
        data : dataSliceReducer,
    }
})




export default store