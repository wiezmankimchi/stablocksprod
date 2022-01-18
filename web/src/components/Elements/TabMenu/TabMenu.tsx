import React, { useEffect, useState } from 'react'
import { navigate, useLocation } from '@redwoodjs/router'
import { Tab } from '@headlessui/react'

interface TabItem {
  label: string
  slug: string
  count?: number
}

interface TabMenuProps {
  tabs: TabItem[]
  children: React.ReactNode
}

const TabMenu = ({ tabs, children }: TabMenuProps) => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search)
      const page = params.get('page')

      if (page) {
        const index = tabs.findIndex((tab) => tab.slug === page)

        if (index) setDefaultTab(index)
      }
    }
  }, [])

  const [defaultTab, setDefaultTab] = useState(0)

  const onChange = (index: number) => {
    if (index === 0) {
      navigate(pathname)
    } else {
      const slug = tabs[index].slug

      navigate(`${pathname}?page=${slug}`)
    }
  }

  return (
    <Tab.Group onChange={onChange} defaultIndex={defaultTab}>
      <Tab.List className="mb-12 flex space-x-8">
        {tabs.map((tab, i) => (
          <Tab key={i}>
            {({ selected }) => (
              <button
                className={`${
                  selected
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'
                } whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.label}
                {tab.count ? (
                  <span
                    className={`${
                      selected ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200'
                    } hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block`}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {React.Children.map(children, (child) => {
          let element: React.ReactNode

          if (typeof child === 'string') {
            element = child
          } else if (React.isValidElement(child)) {
            element = React.cloneElement(child)
          } else {
            element = child
          }

          return <Tab.Panel>{element}</Tab.Panel>
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TabMenu
