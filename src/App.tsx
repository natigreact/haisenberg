import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'
import { LoginPage } from './pages/LoginPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { useTypedSelector } from './hooks/useTypedSelector'
import { SettingsPage } from './pages/SettingsPage'

export const App = () => {
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <>
      {isAuth ? (
        <>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductDetailPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage />
      )
      }
    </>
  )
}