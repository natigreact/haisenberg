import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { ModalState } from './context/ModalContext'

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ModalState>
                <App />
            </ModalState>
        </BrowserRouter>
    </Provider>,
)