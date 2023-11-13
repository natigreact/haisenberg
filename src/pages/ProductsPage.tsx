import React, { useContext, useEffect, useState } from 'react'
import { Product } from './Product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { IProduct } from '../types/types'
import { ModalContext } from '../context/ModalContext'
import { addProduct, fetchProducts } from '../store/actions/productsActions'
import { useTypedDispatch, useTypedSelector } from '../hooks/useTypedSelector'
import { Filter } from '../components/Filter'

export const ProductsPage: React.FC = () => {

  const dispatch = useTypedDispatch()
  const { products, loading, error } = useTypedSelector(state => state.products)
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)

  const allProducts = filteredProducts.length ? filteredProducts : products

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const { modal, openModal, closeModal } = useContext(ModalContext)

  const createHandler = (productData: IProduct) => {
    closeModal()
    dispatch(addProduct(productData))
  }

  return (
    <div className='container mx-auto max-w-10xl pt-5'>
      {/*<Search />*/}
      <Filter setFilteredProducts={setFilteredProducts} />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <div className='py-2 rounded flex flex-col items-center gap-2'>
        {allProducts.map((product, index) => <Product product={product} key={index} />)}
      </div>
      {modal &&
        <Modal title='Create new product' onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      }
      <button
        className='fixed mr-20 bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2 hover:bg-yellow-400'
        onClick={openModal}
      >+ Add
        Product
      </button>
    </div>
  )
}