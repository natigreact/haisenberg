import React, { useEffect, useState } from 'react'
import { useInput } from '../hooks/useInput'
import { useDebounce } from '../hooks/useDebounce'
import axios from 'axios'
import { IProduct } from '../types/types'

export const Search = () => {
  const input = useInput('')
  const [products, setProducts] = useState<IProduct[]>([])
  const debounced = useDebounce<string>(input.value, 400)

  async function searchProducts() {
    const response = await axios.get<IProduct>('products', {
      params: {
        search: debounced,
      },
    })
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchProducts()
    }
  }, [debounced])

  return (
    <div className='py-2 px-4 mb-4'>
      <input type='text'
             className='border py-2 px-4 outline-0 rounded-3xl'
             placeholder='Search'
             {...input}
      />
    </div>
  )
}
