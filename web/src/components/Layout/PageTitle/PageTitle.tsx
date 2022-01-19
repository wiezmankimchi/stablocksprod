import { useContext, useEffect } from 'react'
import { MetaTags } from '@redwoodjs/web'
import {
  AppContext,
  SearchItem,
} from 'src/components/Providers/AppProviderCell'
import Breadcrumbs, { Breadcrumb } from 'src/components/Layout/Breadcrumbs'

export interface ActionButton {
  label: React.ReactNode
  main?: boolean
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
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
  const { setSearch } = useContext(AppContext)

  useEffect(() => {
    setSearch(search)
  }, [])

  return (
    <>
      <MetaTags title={title} />

      <div className="page-title mb-12">
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          currentCrumbLabel={currentCrumbLabel || title}
        />

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
                  }btn flex items-center space-x-1`}
                >
                  {button.icon && <button.icon className="h-4 w-4" />}
                  <span>{button.label}</span>
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
