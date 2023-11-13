import React from 'react'
import { IProduct } from '../types/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { throttle } from 'lodash'

interface ICreateProductInputs {
  title: string
  price: number
  description: string
  image: string
  category: string
}

interface ICreateProductProps {
  onCreate: (product: IProduct) => void
}

export const CreateProduct: React.FC<ICreateProductProps> = ({ onCreate }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICreateProductInputs>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<ICreateProductInputs> =
    (throttle(async ({ title, price, description, image, category }: ICreateProductInputs): Promise<void> => {
      const productData: ICreateProductInputs = {
        title,
        price,
        description,
        image,
        category,
      }
      onCreate(productData)
    }, 3000, { 'trailing': false }))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 flex flex-col'>
      <input placeholder='Enter product title'
             type='text'
             className='border py-2 px-4 mb-2 w-full outline-0'
             {...register('title', {
               required: 'title is required',
             })}
      />
      {errors.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}

      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-1 flex pt-[9px] pointer-events-none'>
          <span className='text-gray-500 sm:text-m'> $ </span>
        </div>
        <input type='number'
               className='border py-2 px-5 mb-2 w-full outline-0'
               placeholder='0.00'
               {...register('price', {
                 required: 'price is required',
               })}
        />
      </div>
      {errors.price && <div style={{ color: 'red' }}>{errors.price.message}</div>}

      <input placeholder='Enter product description'
             type='text'
             className='border py-2 px-4 mb-2 w-full outline-0'
             {...register('description', {
               required: 'description is required',
             })}
      />
      {errors.description && <div style={{ color: 'red' }}>{errors.description.message}</div>}

      <input placeholder='Enter product image url'
             type='text'
             className='border py-2 px-4 mb-2 w-full outline-0'
             {...register('image', {
               required: 'Image url is required',
             })}
      />
      {errors.image && <div style={{ color: 'red' }}>{errors.image.message}</div>}

      <input placeholder='Enter product category'
             type='text'
             className='border py-2 px-4 mb-2 w-full outline-0'
             {...register('category', {
               required: 'category is required',
             })}
      />
      {errors.category && <div style={{ color: 'red' }}>{errors.category.message}</div>}
      <button type='submit'
              className='py-2 px-4 border bg-yellow-400 hover:text-white mx-auto rounded-full mt-3'>
        Create
      </button>
    </form>
  )
}