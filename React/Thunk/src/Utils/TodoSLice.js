import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const todoThunk = createAsyncThunk(
    "todoSliceThunk",
    async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
            const data = await res.json()
            return data
        } catch (error) {
            throw new Error("Something went wrong")
        }

    }
)

const todoSLice = createSlice({
    name : "todoSLice",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(todoThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(todoThunk.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        .addCase(todoThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    }
})


export default todoSLice.reducer