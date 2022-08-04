import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'
import { UsersPage } from './pages/UsersPage'

export const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/users' element={<UsersPage />} />
            </Routes>
        </>
    )
}