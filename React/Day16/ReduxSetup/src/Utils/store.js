import {configureStore} from "@reduxjs/toolkit"
import counterSliceReducer from "./CounterSlice"

const store = configureStore({
    reducer : {
        counter : counterSliceReducer
    }
})


export default store