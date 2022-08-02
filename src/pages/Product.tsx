import React, { useState } from 'react'
import { IProduct } from '../types/types'

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
                <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>Customers also purchased</h2>

                <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>

                    <div key={product.id} className='group relative'>
                        <div
                            className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none'>
                            <img
                                src={product.image}
                                alt={product.image}
                                className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                            />
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
                                                <p>{product.description}</p>
                                                <p>Rate: <span className='font-bold'>{product?.rating?.rate}</span></p>
                                            </div>
                                        }
                                    </div>
                                    {/*<a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </a>*/}
                                </h3>
                            </div>
                            <p className='text-sm font-medium text-gray-900'>{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}