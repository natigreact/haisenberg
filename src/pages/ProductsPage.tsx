import React, { useContext } from 'react'
import { Product } from './Product'
import { useProducts } from '../hooks/useProducts'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { IProduct } from '../types/types'
import { ModalContext } from '../context/ModalContext'

export const ProductsPage: React.FC = () => {

    const { products, loading, error, addProduct } = useProducts()
    const { modal, openModal, closeModal } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-10xl pt-5'>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <div className='border py-2 rounded flex flex-col items-center mb-2'>
                {products.map((product, index) => <Product product={product} key={product.id} />)}
            </div>
            {modal &&
                <Modal title='Create new product' onClose={closeModal}>
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            }

            <button className='fixed mr-20 bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2'
                    onClick={openModal}
            >+ Add
                Product
            </button>
        </div>
    )
}