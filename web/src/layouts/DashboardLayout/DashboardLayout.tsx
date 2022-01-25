import { Fragment, useContext, useEffect, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuAlt2Icon,
  UserCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import {
  Link,
  Redirect,
  SkipNavLink,
  routes,
  useLocation,
} from '@redwoodjs/router'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import Navigation from 'src/components/Layout/Navigation'
import Popup from 'src/components/Elements/Popup'
import Logo from 'src/lib/logo.svg'

import '@reach/skip-nav/styles.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { pathname } = useLocation()
  const { currentUser, logOut, hasRole } = useAuth()
  const { search } = useContext(AppContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [logoutOpen, setLogoutOpen] = useState(false)

  const userNavigation = [
    {
      name: 'Your Profile',
      href: hasRole(['admin', 'employee'])
        ? routes.employee({
            id:
              typeof currentUser.id !== 'string'
                ? currentUser.id.toString()
                : currentUser.id,
          })
        : routes.profile(),
    },
    { name: 'Settings', href: '#' },
  ]

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  if (!currentUser) {
    return <Redirect to={routes.login()} />
  }

  if (!currentUser?.firstName || !currentUser?.lastName) {
    return <Redirect to={routes.userOnboarding()} />
  }

  return (
    <>
      <SkipNavLink contentId="main" />
      <div className="flex-1 min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-50 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <Link
                  to={routes.home()}
                  className="flex items-center flex-shrink-0 px-4 py-4 bg-gray-900 hover:bg-indigo-900"
                >
                  <Logo className="h-8 w-auto fill-current text-indigo-500" />
                  <h2 className="text-white font-bold text-xl ml-3">
                    Stablocks
                  </h2>
                </Link>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    <Navigation />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <Link
              to={routes.home()}
              className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 hover:bg-indigo-900"
            >
              <Logo className="h-8 w-auto fill-current text-indigo-500" />
              <h2 className="text-white font-bold text-xl ml-3">Stablocks</h2>
            </Link>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                <Navigation />
              </nav>
            </div>
          </div>
        </div>

        <div className="md:pl-64 min-h-full flex flex-col">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                {search && (
                  <form className="w-full flex md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search {search.label}
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder={`Search ${search.label}`}
                        type="search"
                        name="search"
                      />
                    </div>
                  </form>
                )}
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button
                      className={`${
                        currentUser.profileImage
                          ? 'max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          : 'bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      }`}
                    >
                      <span className="sr-only">Open user menu</span>
                      {currentUser.profileImage ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      ) : (
                        <UserCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation?.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block w-full text-left px-4 py-2 text-sm text-gray-700'
                            )}
                            onClick={() => setLogoutOpen(true)}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Popup
                  isOpen={logoutOpen}
                  setIsOpen={setLogoutOpen}
                  title="Sign out"
                  description="Are you sure you want to sign out? You will need to log back in to access Stablocks."
                  buttons={[
                    { label: 'Cancel', onClick: () => setLogoutOpen(false) },
                    { label: 'Sign out', onClick: () => logOut(), main: true },
                  ]}
                />
              </div>
            </div>
          </div>

          <main id="main" className="min-h-full">
            <div className="p-6 pb-20 md:px-12 min-h-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
