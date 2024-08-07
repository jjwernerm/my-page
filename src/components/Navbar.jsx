import { NavLink } from "react-router-dom";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser, faBook, faEnvelope, faBlog, faClipboard } from '@fortawesome/free-solid-svg-icons';

const user = {
  name: 'Joanny Werner',
  email: 'joannywerner@gmail.com',
  imageUrl: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1685731147/myPhoto_xjobbg.png',
}
const navigation = [
  {
    icon: <FontAwesomeIcon icon={faHouseChimney} />, 
    gap: ' ', 
    name: 'Inicio', 
    href: '/', 
    current: false
  },
  { 
    icon: <FontAwesomeIcon icon={faUser} />, 
    gap: ' ', 
    name: 'Joa', 
    href: '/About', 
    current: false
  },
  { 
    icon: <FontAwesomeIcon icon={faBook} />, 
    gap: ' ', 
    name: 'Challenges', 
    href: '/Challenges', 
    current: false
  },
  { 
    icon: <FontAwesomeIcon icon={faEnvelope} />, 
    gap: ' ', 
    name: 'Contacto', 
    href: '/Contact', 
    current: false
  },
]
const userNavigation = [
  { 
    icon: <FontAwesomeIcon icon={faBlog} />, 
    gap: ' ', 
    name: 'Blog', 
    href: '/Blog' 
  },
  { 
    icon: <FontAwesomeIcon icon={faClipboard} />, 
    gap: ' ', 
    name: 'Descargar CV', 
    href: 'https://drive.google.com/file/d/1D6LUxy6Jf_bU7ZhK62MqDn_HrATOVz3m/view?usp=sharing'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  
  return (
    <>
      <div className="flex justify-center">
        <Disclosure as="nav" className="bg-slate-700 w-4/5 rounded-lg">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12"
                        src="https://res.cloudinary.com/dqjnzfsp6/image/upload/v1686012371/logoJoa-_hbupyw.png"
                        alt="My Logo"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                              'block rounded-md px-3 py-2 text-xs lg:text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.icon}
                            {item.gap}
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}

                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Abrir menú del perfil</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="My Photo" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <NavLink
                                    to={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    // target="_blank"
                                  >
                                    {item.icon}
                                    {item.gap}
                                    {item.name}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">

                    {/* Mobile menu button */}

                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      as="a"
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.icon}
                      {item.gap}
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="My Photo" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        as="a"
                        to={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        // target="_blank"
                      >
                        {item.icon}
                        {item.gap}
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>        
      </div>
    </>
  )
}