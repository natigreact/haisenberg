import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

interface IMenuItemProps {
  name: string
  route: string
  username?: string
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void
}


export const MenuItem: React.FC<IMenuItemProps> = ({ name, route, username, onClick }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          to={route}
          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
          onClick={onClick}
        >
          {name} {username}
        </Link>
      )}
    </Menu.Item>
  )
}