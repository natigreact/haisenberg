import { ChangeEvent, useState } from 'react'

interface InputReturn {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useInput(initialValue = ''): InputReturn {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}