import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counterSlice",
    initialState : 0,
    reducers : {
        increment : (state, action) => {
            return state + 1
        },
        reset : function(state, action){
            return 0
        },
        decrement : function(state, action){
            return state - 1
        }
    }
})



console.log(counterSlice)
export default counterSlice.reducer
export const{increment, reset, decrement} = counterSlice.actions

