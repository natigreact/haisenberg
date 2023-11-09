import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const USERNAME_KEY = 'u-username'

interface AuthState {
  username: string
  isAuth: boolean
}

const initialState: AuthState = {
  username: localStorage.getItem(USERNAME_KEY) ?? '',
  isAuth: Boolean(localStorage.getItem(USERNAME_KEY)),
}

interface AuthPayload {
  username: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthPayload>) {
      state.username = action.payload.username
      state.isAuth = Boolean(action.payload)

      localStorage.setItem(USERNAME_KEY, action.payload.username)
    },
    logout(state) {
      state.username = ''
      state.isAuth = false
    },
  },
})

export default authSlice.reducer