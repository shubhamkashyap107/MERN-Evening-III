import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHpData = createAsyncThunk(
    "kuchbhi",
    async () => {
        const res = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await res.json()
        return data
    }
)

const hpSLice = createSlice({
    name : "harryPotterSLice",
    initialState : {
        data : [],
        loading : false,
        error : null
    },
    reducers : {
        example : () => {
            console.log("OK")
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getHpData.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getHpData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(getHpData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.error
        })
    }
})


export default hpSLice.reducer
export const{example} = hpSLice.actions