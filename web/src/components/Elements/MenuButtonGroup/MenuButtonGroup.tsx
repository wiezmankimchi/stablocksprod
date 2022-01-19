import { Fragment } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export interface ActionButton {
  label: React.ReactNode
  main?: boolean
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
  onClick: () => void
  roles?: string[]
  children?: ActionButton[]
}

interface MenuButtonGroupProps {
  buttons: ActionButton[]
}

const MenuButtonGroup = ({ buttons }: MenuButtonGroupProps) => {
  const { hasRole } = useAuth()

  return (
    <>
      {buttons.map(
        (button, i) =>
          (button.roles ? hasRole(button.roles) : true) && (
            <span
              key={i}
              className="relative z-0 inline-flex shadow-sm rounded-md"
            >
              <button
                onClick={button.onClick}
                type="button"
                className={`${i !== 0 ? 'ml-3 ' : ''}${
                  button.main
                    ? 'btn-primary'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:border-indigo-500'
                } ${
                  button.children ? 'rounded-l-md' : 'rounded-md'
                } relative inline-flex items-center px-4 py-2 border text-sm font-medium space-x-1 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
              >
                {button.icon && <button.icon className="h-4 w-4" />}
                <span>{button.label}</span>
              </button>
              {button.children && button.children.length > 0 && (
                <Menu as="span" className="-ml-px relative block">
                  <Menu.Button
                    className={`${
                      button.main
                        ? 'btn-primary border-l-indigo-400'
                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                    } relative inline-flex items-center px-2 py-2 border rounded-r-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                  >
                    <span className="sr-only">Open options</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {button.children.map((item, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <button
                                onClick={item.onClick}
                                className={`${
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700'
                                } block px-4 py-2 text-sm w-full`}
                              >
                                {item.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </span>
          )
      )}
    </>
  )
}

export default MenuButtonGroup
