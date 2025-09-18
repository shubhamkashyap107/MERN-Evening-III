import { createSlice } from "@reduxjs/toolkit";

const myDataSlice = createSlice({
    name : "dataSlice",
    initialState : [],
    reducers : {
        addText : function(state, action)
        {
            state.push(action.payload)
        },
        deleteText : function(state, action)
        {
            const id = action.payload
            const filteredArray = state.filter((item) => {
                return item.id != id
            })
            console.log(filteredArray)
            // state = filteredArray
            return filteredArray
        }
    }
})

export default myDataSlice.reducer
export const{addText, deleteText} = myDataSlice.actions


