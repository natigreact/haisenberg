import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'
import { useAuth } from './hooks/useAuth'
import { LoginPage } from './pages/LoginPage'

export const App = () => {
    const { user, signOut, signIn } = useAuth()

    return (
        <>
            {user ? (
                <>
                    <Navigation signOut={signOut} user={user} />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/products' element={<ProductsPage />} />
                    </Routes>
                </>
            ) : (
                <LoginPage signIn={signIn} />
            )
            }
        </>
    )
}