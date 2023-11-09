import React, { Dispatch, SetStateAction, ChangeEvent, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IProduct } from '../types/types'

interface IFilterProps {
  setFilteredProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const Filter: React.FC<IFilterProps> = ({ setFilteredProducts }: IFilterProps) => {
  const [name, setName] = useState('')
  const { products } = useTypedSelector(state => state.products)

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = products.filter((product: IProduct) => {
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
      <input
        type='text'
        className='border py-2 px-4 outline-0 rounded-3xl'
        placeholder='Search'
        onChange={filter}
      />
    </div>
  )
}
