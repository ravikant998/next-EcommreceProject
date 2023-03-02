import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const paginationAction = createAsyncThunk('pagination', async (setPagination) => {
    const response = await fetch('https://dummyjson.com/products?limit=10&skip=5&select=title,price')
    const data = await response.json()
    // console.log("data>>>",data)
    setPagination(data)
    
})

const paginationSlice = createSlice({
    name: 'paginationdata',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(paginationAction.fulfilled, (action, state) => {
            state = action.payload;
            return state
        })
    }
})
export default paginationSlice.reducer