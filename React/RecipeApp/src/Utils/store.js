import {configureStore} from "@reduxjs/toolkit"
import recipeSLiceREducer from "./RecipeSlice"

const store = configureStore({
    reducer : {
        recipe : recipeSLiceREducer
    }
})


export default store