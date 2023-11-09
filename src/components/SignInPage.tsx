import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { throttle } from 'lodash'
import { useTypedDispatch } from '../hooks/useTypedSelector'
import { login } from '../store/actions/authActions'

interface ISignUserInputs {
  username: string
  password: string
}

interface ISignInProps {
  logInHandler: () => void
}

export const SignInPage: React.FC<ISignInProps> = ({ logInHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUserInputs>({
    mode: 'onChange',
  })

  const dispatch = useTypedDispatch()

  const onSubmit: SubmitHandler<ISignUserInputs> =
    (throttle(async ({ username, password }: ISignUserInputs): Promise<void> => {
      dispatch(login({ username, password }))
      logInHandler()
    }, 3000, { 'trailing': false }))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='container mt-5 flex flex-col'>
      <input placeholder='Enter Your Name'
             type='text'
             className='border py-2 px-4 mb-2 w-full outline-0'
             {...register('username', {
               required: 'username is required',
             })}
      />
      {errors.username && <div style={{ color: 'red' }}>{errors.username.message}</div>}
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input type='password'
               className='border py-2 px-5 mb-2 w-full outline-0'
               placeholder='Enter Password'
               {...register('password', {
                 required: 'password is required',
               })}
        />
      </div>
      {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
      <button type='submit'
              className='py-2 px-4 border bg-yellow-400 hover:text-white mx-auto rounded-full mt-3'>
        Sign In
      </button>
    </form>
  )
}