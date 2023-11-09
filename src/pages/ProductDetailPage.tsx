import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTypedDispatch, useTypedSelector } from '../hooks/useTypedSelector'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { fetchProducts, removeProduct } from '../store/actions/productsActions'

export const ProductDetailPage: React.FC = () => {
  const { products, loading, error } = useTypedSelector(state => state.products)

  const navigate = useNavigate()
  const dispatch = useTypedDispatch()
  const { id } = useParams()

  const product = products.find((product) => product._id === id)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <Loader />
  if (error) return <ErrorMessage error={error} />

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id)).then(() => {
      navigate('/products')
      window.location.reload()
    })
  }

  return (
    <div className='bg-white'>
      <button className='rounded-full bg-red-500 text-white px-4 py-2 mt-4 ml-2 hover:bg-yellow-400'
              onClick={() => navigate(-1)}>back
      </button>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 w-[500px] ml-[80px]'>Customers also
          purchased</h2>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          <div key={product?._id} className='group relative w-[450px] h-[400px] flex'>
            <div
              className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none'>
              <img
                src={product?.image}
                alt={product?.image}
                className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              />
            </div>
            <div className='mt-4 flex-col mr-[-600px] w-[500px]'>
              <div className='flex w-100'>
                <h3 className='text-sm text-gray-700'>
                  <div>
                    <div className='mt-5'>
                      <p><span className='font-bold'>Name: </span>{product?.title}</p>
                      <p><span
                        className='font-bold'>Description: </span>{product?.description}
                      </p>
                      <p><span className='font-bold'>Category: </span>{product?.category}</p>
                      <p>Rate: <span className='font-bold'></span>{product?.rating?.rate}</p>
                    </div>
                  </div>
                </h3>
              </div>
              <p className='text-lg font-medium text-gray-900 font-bold w-[100px] mt-[220px]'>{product?.price}$</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className='fixed mr-20 bottom-5 right-5 rounded-full bg-red-400 text-white px-4 py-2 hover:bg-yellow-400'
        onClick={handleRemoveProduct}
      >remove product
      </button>
    </div>
  )
}