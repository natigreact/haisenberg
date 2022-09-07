import { AppDispatch } from '../store'
import axios from '../../api/api'
import { authSlice } from '../slices/authSlice'

interface AuthResponse {
    username: string
    password: string
}

interface AuthData {
    username: string
    password: string
}

export const login = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            await axios.post<AuthResponse>('auth/login', data)
            dispatch(authSlice.actions.login({
                username: data.username,
            }))
        } catch (e) {
            console.log('error', e)
        }
    }
}