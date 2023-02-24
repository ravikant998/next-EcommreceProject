import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { Api } from "../pages/api";
import { proCategory } from "../pages/api/endpoints";

const initialState = []
export const categoryList = createAsyncThunk('categories', async (name) => {
    const response = await Api.get(`${proCategory}/${name}`).then((res) => {
        // console.log("res>>>>",res)
        return res.data
    })
    return response
})
const productCategorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(categoryList.fulfilled, (state, action) => {
            state = action.payload
            return state
        })
    }
})
export default productCategorySlice.reducer