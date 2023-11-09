import React, { useState } from 'react'
import { IProduct } from '../types/types'
import { Link } from 'react-router-dom'

interface IProductProps {
  product: IProduct
}

export const Product: React.FC<IProductProps> = ({ product }) => {
  const [details, setDetails] = useState(false)
  const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 rounded-full hover:text-white', btnClassName]

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          <div key={product._id} className='group relative'>
            <div
              className='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none'>
              <Link
                to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.image}
                  className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                />
              </Link>
              <p><span className='font-bold font-medium'>{product.title}</span></p>
            </div>
            <div className='mt-4 flex justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  <button className={btnClasses.join(' ')}
                          onClick={() => setDetails(prev => !prev)}
                  >
                    {details ? 'Hide Details' : 'Show Details'}
                  </button>
                  <div>
                    {details &&
                      <div className='mt-5'>
                        <p><span className='font-bold'>Title: </span>{product.title}</p>
                        <p><span className='font-bold'>Description: </span>{product.description}
                        </p>
                        <p><span className='font-bold'>Category: </span>{product.category}</p>
                        <p>Rate: <span className='font-bold'>{product?.rating?.rate}</span></p>
                      </div>
                    }
                  </div>
                </h3>
              </div>
              <p className='text-sm font-medium text-gray-900 font-bold mt-2'>{product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}