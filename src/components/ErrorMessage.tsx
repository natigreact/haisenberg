import React from 'react'

interface IErrorMessage {
  error: string
}

export const ErrorMessage: React.FC<IErrorMessage> = ({ error }) => (
  <p className='text-center text-red-600'>{error}</p>
)
