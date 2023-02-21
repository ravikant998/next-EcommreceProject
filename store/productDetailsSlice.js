import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../pages/api/index";
import {singleProduct} from '../pages/api/endpoints'

const initialState=[]

export const productDetail=createAsyncThunk('productdetails',async(id)=>{
    // console.log("idrrrrrrr>>>>>>",id)
    const response=await Api.get(`${singleProduct}/${id}`).then((res)=>{
        // console.log("res",res)
   return res.data
    })
    return response
})

const productDetailSlice=createSlice({
    name:'produtdetail',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(productDetail.fulfilled,(state,action)=>{
            state = action.payload;
            return state
        })
    }
})

export default productDetailSlice.reducer