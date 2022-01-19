import { Fragment, useContext, useEffect, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  ChevronRightIcon,
  HomeIcon,
  MenuAlt2Icon,
  OfficeBuildingIcon,
  UserCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { Link, Redirect, routes, useLocation } from '@redwoodjs/router'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import NavLink from 'src/components/Elements/NavLink'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { pathname } = useLocation()
  const { currentUser, logOut } = useAuth()
  const { search } = useContext(AppContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: routes.home(), icon: HomeIcon },
    {
      name: 'Organization',
      href: routes.organization(),
      icon: OfficeBuildingIcon,
      children: [{ name: 'Overview', href: routes.organization() }],
    },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: routes.profile() },
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
      <div className="flex-1 h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
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
                  className="flex-shrink-0 flex items-center px-4"
                >
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </Link>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <NavLink
                            to={item.href}
                            className="group w-full flex items-center pl-2 pr-1 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                            activeClassName="bg-gray-900 text-gray-300"
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6"
                              aria-hidden="true"
                            />
                            {item.name}
                          </NavLink>
                        </div>
                      ) : (
                        <Disclosure
                          as="div"
                          key={item.name}
                          className="space-y-1"
                          defaultOpen={
                            item.href.startsWith(pathname) ? true : false
                          }
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={`${
                                  pathname === item.href
                                    ? 'bg-gray-900 text-gray-300'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                } group w-full flex items-center pl-2 pr-1 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
                              >
                                <item.icon
                                  className="mr-3 flex-shrink-0 h-6 w-6"
                                  aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                                <ChevronRightIcon
                                  className={`${
                                    open
                                      ? 'text-gray-400 rotate-90'
                                      : 'text-gray-300'
                                  } ml-3 flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="space-y-1">
                                {item.children.map((subItem) => (
                                  <Disclosure.Button
                                    key={subItem.name}
                                    as={NavLink}
                                    to={subItem.href}
                                    className="group w-full flex items-center pl-11 pr-2 py-2 text-base font-medium rounded-md text-left focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                    activeClassName="bg-gray-900 text-gray-300"
                                    nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )
                    )}
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
              className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900"
            >
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </Link>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <NavLink
                        to={item.href}
                        className="group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                        activeClassName="bg-gray-900 text-gray-300"
                      >
                        <item.icon
                          className="mr-3 flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </div>
                  ) : (
                    <Disclosure
                      as="div"
                      key={item.name}
                      className="space-y-1"
                      defaultOpen={
                        item.href.startsWith(pathname) ? true : false
                      }
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              pathname === item.href
                                ? 'bg-gray-900 text-gray-300'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <ChevronRightIcon
                              className={`${
                                open
                                  ? 'text-gray-400 rotate-90'
                                  : 'text-gray-300'
                              } ml-3 flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as={NavLink}
                                to={subItem.href}
                                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md text-left focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                activeClassName="bg-gray-900 text-gray-300"
                                nonActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="md:pl-64 h-full flex flex-col">
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
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
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
                            onClick={logOut}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="h-full">
            <div className="p-6 md:px-12 h-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
