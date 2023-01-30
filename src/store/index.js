import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Slice/Shops/CategoriesSlice"
import categoiesGETSlice from "./Slice/Shops/CategoriesGetSlice"

export const store = configureStore({
    reducer: {
        categoriesSlice,
        categoiesGETSlice

    }
})