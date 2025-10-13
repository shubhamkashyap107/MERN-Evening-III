import { configureStore } from "@reduxjs/toolkit";
import hpSLiceReducer from "./HarryPotterSlice"
import todoSliceReducer from "./TodoSLice"

const Store = configureStore({
    reducer : {
        harry : hpSLiceReducer,
        todo : todoSliceReducer
    }
})

export default Store