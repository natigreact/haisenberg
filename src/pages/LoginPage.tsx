import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { Modal } from '../components/Modal'
import { SignInPage } from '../components/SignInPage'


export const LoginPage = () => {
    const { modal, openModal, closeModal } = useContext(ModalContext)

    const logInHandler = () => {
        closeModal()
    }

    return (
        <div className='bg-hero-pattern h-screen flex bg-cover'>
            <header className='bg-amber-400 shadow'>
                <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>Welcome to our Magazine</h1>
                </div>
                <div>
                    <button className='py-2 px-4 border bg-blue-500 hover:text-white mx-auto rounded-full mt-3'
                            onClick={openModal}
                    >
                        Sign In
                    </button>
                </div>
                <div>
                    <button className='py-2 px-4 border bg-blue-500 hover:text-white mx-auto rounded-full mt-3'
                    >
                        Sign Up
                    </button>
                    {modal &&
                        <Modal title='Sign In' onClose={closeModal}>
                            <SignInPage logInHandler={logInHandler} />
                        </Modal>
                    }
                </div>
            </header>
        </div>
    )
}