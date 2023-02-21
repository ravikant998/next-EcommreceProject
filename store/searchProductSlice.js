import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../pages/api";
import { productSearch } from "../pages/api/endpoints";

const initialState=[]
 export const searchProduct=createAsyncThunk('search',async(searchInput)=>{
    // console.log("searchInput?????",searchInput)
    const response=await Api.get(`${productSearch}?q=${searchInput}`).then((res)=>{
        // console.log("res>>>>",res)
        return res.data
    })
    return response
})

const searchProductSlice=createSlice({
    name:'searchdata',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(searchProduct.fulfilled,(state,action)=>{
            state=action.payload;
            return state
        })
    }
})

export default searchProductSlice.reducer;

