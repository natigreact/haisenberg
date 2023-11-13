import React from 'react'
import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { INavigation } from '../types/types'

interface IMobileNavigationProps {
  navigation: INavigation[]
}


export const MobileNavigation: React.FC<IMobileNavigationProps> = ({ navigation }) => {

  const activeMobileClassName = 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
  const mobileClassName = 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'

  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        {navigation.map(item => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              isActive ? activeMobileClassName : mobileClassName
            }
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </Disclosure.Panel>
  )
}
