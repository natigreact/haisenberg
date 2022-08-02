import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'

const navigation = [
    { name: 'Home', link: '/', current: true },
    { name: 'Products', link: '/products', current: false },
]

const activeClassName = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
const className = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'

const activeMobileClassName = 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
const mobileClassName = 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const Navigation = () => {
    return (
        <Disclosure as='nav' className='bg-gray-800 sticky top-0 z-10'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button
                                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <svg className='hidden lg:block h-10 w-auto' width='512px' height='512px'
                                         viewBox='0 0 512 512' data-name='Layer 1' id='Layer_1'
                                         xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M432.55,297.16,310.76,254.59l118.75-47.82c8-3.21,16.41-12.17,12.36-21.78C413,116.32,351.33,68.59,276.42,62,206.2,55.77,137.3,90.4,98.27,148.58c-39.36,58.68-42.38,136.73-9.5,198.95,32.5,61.52,97.63,101.13,166.94,103.13C341,453.13,416.11,398,444.91,318.93,448.34,309.52,441,300.11,432.55,297.16ZM278.89,414.38c-56.68,6.25-114-18.54-147.42-65-70.28-97.85-6.62-241.55,114.44-252.08,63.44-5.52,124.89,27.7,155,83.06L258.51,237.7c-11.29.67-17.22,13.94-13.64,24.32,1.85,7,7.22,12.63,14.89,12.18l144.56,50.52C380.7,373.28,333.32,408.37,278.89,414.38Z'
                                            fill='white' />
                                    </svg>
                                </div>
                                <div className='hidden sm:block sm:ml-6'>
                                    <div className='flex space-x-4'>
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
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
                            <div
                                className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                <button
                                    type='button'
                                    className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                >
                                    <span className='sr-only'>View notifications</span>
                                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                                </button>

                                <Menu as='div' className='ml-3 relative'>
                                    <div>
                                        <Menu.Button
                                            className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:text-white'>
                                            <span className='sr-only'>Open user menu</span>
                                            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6'
                                                 viewBox='0 0 20 20' fill='white'>
                                                <path fillRule='evenodd'
                                                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                                                      clipRule='evenodd' />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items
                                            className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href='#'
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href='#'
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href='#'
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
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
                </>
            )}
        </Disclosure>
    )
}