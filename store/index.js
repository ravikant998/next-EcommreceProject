import { configureStore } from '@reduxjs/toolkit'
import productCategorySlice from './productCategorySlice'

import productDetailsSlice from './productDetailsSlice'
import productListSilce from './productListSilce'
import searchProductSlice from './searchProductSlice'
export const store = configureStore({
  reducer: {
    product: productListSilce,
    productdetail: productDetailsSlice,
    categories:productCategorySlice,
    searchdata:searchProductSlice
  },

})