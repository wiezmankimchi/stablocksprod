import { useContext, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { HomeIcon } from '@heroicons/react/outline'
import { MetaTags } from '@redwoodjs/web'
import { Link, back, useLocation } from '@redwoodjs/router'
import {
  AppContext,
  SearchItem,
} from 'src/components/Providers/AppProviderCell'

interface Breadcrumb {
  title: string
  to: string
}

interface ActionButton {
  label: React.ReactNode
  main?: boolean
  onClick: () => void
}

interface PageTitleProps {
  title: string
  breadcrumbs?: Breadcrumb[]
  currentCrumbLabel?: string
  buttons?: ActionButton[]
  search?: SearchItem
}

const PageTitle = ({
  title,
  breadcrumbs,
  currentCrumbLabel,
  buttons,
  search,
}: PageTitleProps) => {
  const { pathname } = useLocation()
  const { setSearch } = useContext(AppContext)

  useEffect(() => {
    setSearch(search)
  }, [])

  return (
    <>
      <MetaTags title={title} />
      <div className="page-title mb-12">
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <button
              onClick={back}
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ChevronLeftIcon
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Back
            </button>
          </nav>
          {pathname !== '/' && (
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link to="/" className="text-gray-400 hover:text-gray-500">
                      <HomeIcon
                        className="flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                {breadcrumbs?.map((breadcrumb, i) => (
                  <li key={i}>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="mr-4 flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Link
                        to={breadcrumb.to}
                        className="text-sm font-medium rounded-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        {breadcrumb.title}
                      </Link>
                    </div>
                  </li>
                ))}

                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="mr-4 flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span
                      aria-current="page"
                      className="text-sm font-medium text-gray-500"
                    >
                      {currentCrumbLabel || title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          )}
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h1>
          </div>
          {buttons && buttons.length && (
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
              {buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={button.onClick}
                  type="button"
                  className={`${i !== 0 ? 'ml-3 ' : ''}${
                    button.main ? 'btn-primary ' : ''
                  }btn`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PageTitle
