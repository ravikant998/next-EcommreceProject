import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../pages/api/index";
import {product} from '../pages/api/endpoints'



const initialState=[]

export const productlist=createAsyncThunk('product',async()=>{
    const response=await Api.get(product).then((res)=>{
        // console.log("res",res)
   return res.data
    })
    return response
})


const productListSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(productlist.fulfilled,(state,action)=>{
            state = action.payload;
            return state
        })
    }
})

export default productListSlice.reducer