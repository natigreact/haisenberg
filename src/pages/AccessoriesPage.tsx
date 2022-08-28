import React, { useContext, useEffect, useState } from 'react'
import { Product } from './Product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { IProduct, IRating } from '../types/types'
import { ModalContext } from '../context/ModalContext'
import { addProduct, fetchProducts } from '../store/actions/productActions'
import { useTypedDispatch, useTypedSelector } from '../hooks/useTypedSelector'
import { Filter } from '../components/Filter'
import { Accessories } from './Accessoiries'

export const AccessoriesPage: React.FC = () => {

    const dispatch = useTypedDispatch()
    /*const { products, loading, error } = useTypedSelector(state => state.data)*/
    /*const [filteredAccessories, setFilteredAccessories] = useState(accessories)*/

    /*useEffect(() => {
        dispatch(fetchProducts())
    }, [])*/

    const accessories = [
        {
            id: 1,
            title: 'abc',
            price: 123,
            description: 'hello',
            category: 'acs',
            image: 'some',
        },
        {
            id: 1,
            title: 'abc',
            price: 123,
            description: 'hello',
            category: 'acs',
            image: 'some',
        },
        {
            id: 1,
            title: 'abc',
            price: 123,
            description: 'hello',
            category: 'acs',
            image: 'some',
        }
    ]

    const { modal, openModal, closeModal } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        dispatch(addProduct(product))
    }

    return (
        <div className='container mx-auto max-w-10xl pt-5'>
            {/*<Search />*/}
            {/*<Filter setFilteredProducts={setFilteredProducts} />*/}
            {/*{loading && <Loader />}
            {error && <ErrorMessage error={error} />}*/}
            <div className='border py-2 rounded flex flex-col items-center mb-2'>
                {
                    accessories.map((accessories, index) => <Accessories accessories={accessories} key={index} />)
                }
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