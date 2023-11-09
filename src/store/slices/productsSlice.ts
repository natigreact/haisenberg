import { IProduct } from '../../types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  loading: boolean
  error: string
  products: IProduct[]
}

const initialState: ProductsState = {
  loading: false,
  error: '',
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchProductsSuccess(state, action: PayloadAction<IProduct[]>) {
      state.loading = false
      state.products = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    },
    addProduct(state, action) {
      state.products.push({ ...action.payload })
    },
    removeProduct(state, action) {
      state.products.filter(product => product._id !== action.payload.id)
    },
  },
})

export default productsSlice.reducer