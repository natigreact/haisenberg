import api from '../../api/api'
import { IProduct } from '../../types/types'
import { AppDispatch } from '../store'
import { productsSlice } from '../slices/productsSlice'

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productsSlice.actions.fetching())
            const response = await api.get<IProduct[]>('products', {
                params: {},
            })
            dispatch(productsSlice.actions.fetchProductsSuccess(
                response.data,
            ))
        } catch (e) {
            dispatch(productsSlice.actions.fetchError(e as Error))
        }
    }
}

export const addProduct = (data: IProduct) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.post<IProduct>('products', data)
            dispatch(productsSlice.actions.addProduct({
                title: response.data.title,
                price: response.data.price,
                description: response.data.description,
                category: response.data.category,
                image: response.data.image,
            }))
        } catch (e) {
            dispatch(productsSlice.actions.fetchError(e as Error))
        }
    }
}

export const removeProduct = (id: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        try {
            await api.delete<IProduct>(`products/${id}`)
            dispatch(productsSlice.actions.removeProduct(id))
        } catch (e) {
            dispatch(productsSlice.actions.fetchError(e as Error))
        }
    }
}