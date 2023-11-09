import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const SettingsPage = () => {
  const { username } = useTypedSelector(state => state.auth)

  return (
    <div className='container mx-auto max-w-10xl pt-5 h-[calc(100vh-64px)]'>
      <header className='bg-gray-400 shadow rounded-3xl'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 h-[700px]'>
          <h1 className='text-3xl font-bold text-gray-900'>Settings Page</h1>
          <p className='mt-8'><span className='font-bold'>user name: </span>{username}</p>
        </div>
      </header>
    </div>
  )
}