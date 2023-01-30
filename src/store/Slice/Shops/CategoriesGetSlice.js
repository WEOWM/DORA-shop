import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Api";

export const FeatchCategoiesGet = createAsyncThunk(
    "categoies-Get",
    async ({payload, CategoriesGETID},{rejectWithValue})=>{
        try {
            const response = await Api.ActionHandle({
                url:Api.categoriesGET.replace("{id}",CategoriesGETID),
                method:"GET",
            })
            let data = await response;
            if (response.status === 200) {
                let NEWDATA = response.data;
                return NEWDATA;
            } else {
                return rejectWithValue(data);
            }
            
        }
        catch (e) {
            const message = e.toString();
            return rejectWithValue(message);

        }
    }
)
const categoiesGETSlice = createSlice({
    name:"categoies-Get",
    initialState:{
        categoiesGet:{}
    },
    reducers:{},
    extraReducers:(bulider) =>{
        bulider.addCase(FeatchCategoiesGet.fulfilled, (state,payload)=>{
            state.categoiesGet ={}
            payload.forEach(iteam =>{state.categoiesGet.push(iteam)})
        })
    }
})

export default categoiesGETSlice.reducer

