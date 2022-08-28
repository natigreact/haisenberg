import api from '../../api/api'
import { IProduct } from '../../types/types'
import { AppDispatch } from '../store'
import { productSlice } from '../slices/productSlice'

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching())
            const response = await api.get<IProduct[]>('products', {
                params: {},
            })
            dispatch(productSlice.actions.fetchSuccess(
                response.data,
            ))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))
        }
    }
}

export const addProduct = (product: IProduct) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.addProduct(product))
        } catch (e) {
            dispatch(productSlice.actions.fetchError(e as Error))
        }
    }
}