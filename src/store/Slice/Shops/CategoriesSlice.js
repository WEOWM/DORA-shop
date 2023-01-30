import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api"

export const FeatchCategories = createAsyncThunk(
    "Categories",
    async (payload, { rejectWithValue }) => {
        try {
            const respose = await Api.ActionHandle({
                url: Api.categories,
                method: "GET",
            })
            let data = await respose
            if (respose.status === 200) {
                let newdata = respose
                return newdata
            }
            else {
                rejectWithValue(data)
            }
        }
        catch (e) {

            const message = e
            return rejectWithValue(message)

        }
    }

)

const categoriesSlice = createSlice({
    name: "Categories",
    initialState: {
        categories: [],
    },
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(FeatchCategories.fulfilled, (state, { payload }) => {
            state.categories = [];
            payload.data.products.forEach((iteam) => state.categories.push(iteam))
            console.log("Categoriesslice:", payload);
        })
    }
})
export default categoriesSlice.reducer