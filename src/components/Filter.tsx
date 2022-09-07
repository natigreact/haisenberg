import React, { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface IFilterProps {
    setFilteredProducts: any
}

export const Filter: React.FC<IFilterProps> = ({ setFilteredProducts }: any) => {
    const [name, setName] = useState('')
    const { products } = useTypedSelector(state => state.products)

    const filter = (e: any) => {
        const keyword = e.target.value

        if (keyword !== '') {
            const results = products.filter((product) => {
                return product.title.toLowerCase().startsWith(keyword.toLowerCase())
            })
            setFilteredProducts(results)
        } else {
            setFilteredProducts(products)
        }
        setName(keyword)
    }

    return (
        <div className='py-2 px-4 mb-4'>
            <input type='text'
                   className='border py-2 px-4 outline-0 rounded-3xl'
                   placeholder='Search'
                   onChange={filter}
            />
        </div>
    )
}