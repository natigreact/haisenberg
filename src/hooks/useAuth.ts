import axios, { AxiosError } from 'axios'
import { useLocalStorage } from './useLocalStorage'
import { IUser } from '../types/types'
import { useState } from 'react'

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', '')
  const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const signIn = (username: string, password: string) => {
    try {
      axios.post(`http://localhost:4200/auth/login`, {
          'username': username,
          'password': password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((response): IUser => setUser(response.data))
    } catch (e) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  const signOut = () => {
    setUser(null)
  }

  return { user, signIn, signOut, authorized, setAuthorized, loading, error }
}