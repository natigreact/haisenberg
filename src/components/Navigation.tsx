import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { useTypedDispatch, useTypedSelector } from '../hooks/useTypedSelector'
import { logout } from '../store/actions/authActions'
import { MobileNavigation } from './MobileNavigation'
import { MenuItem } from './MenuItem'
import { MobileBurgerMenu } from './mobileBurgerMenu'
import logotypeIcon from '../assets/icons/logotypeIcon.svg'
import userMenuIcon from '../assets/icons/userMenuIcon.svg'
import { navigation } from '../variables'


export const Navigation: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { username } = useTypedSelector(state => state.auth)
  const activeClassName = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
  const className = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'

  const signOut = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <Disclosure as='nav' className='bg-gray-800 sticky top-0 z-10'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <MobileBurgerMenu open={open} />
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img src={logotypeIcon} />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map(item => (
                      <NavLink
                        key={item.id}
                        to={item.link}
                        className={({ isActive }) =>
                          isActive ? activeClassName : className
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                <Menu as='div' className='ml-3 relative'>
                  <Menu.Button
                    className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:text-white'>
                    <img src={userMenuIcon} alt='userMenuIcon' />
                  </Menu.Button>
                  <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md
                    shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <MenuItem name={'Welcome'} route={'#'} username={username} />
                    <MenuItem name={'Home'} route={'/'} />
                    <MenuItem name={'Products'} route={'/products'} />
                    <MenuItem name={'Settings'} route={'/settings'} />
                    <MenuItem name={'Sign out'} route={'#'} onClick={signOut} />
                  </Menu.Items>
                </Menu>
                <span className='text-gray-300 ml-5 hover:text-white cursor-default'>{username}</span>
              </div>
            </div>
          </div>
          <MobileNavigation navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}