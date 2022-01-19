import { useContext, useEffect } from 'react'
import { MetaTags } from '@redwoodjs/web'
import {
  AppContext,
  SearchItem,
} from 'src/components/Providers/AppProviderCell'
import Breadcrumbs, { Breadcrumb } from 'src/components/Layout/Breadcrumbs'
import MenuButtonGroup, {
  ActionButton,
} from 'src/components/Elements/MenuButtonGroup'

interface UserHeaderProps {
  name: string
  image?: string
  position?: string
  applicant?: boolean
  breadcrumbs?: Breadcrumb[]
  currentCrumbLabel?: string
  buttons?: ActionButton[]
  search?: SearchItem
}

const UserHeader = ({
  name,
  image,
  position,
  applicant,
  breadcrumbs,
  currentCrumbLabel,
  buttons,
  search,
}: UserHeaderProps) => {
  const { setSearch } = useContext(AppContext)

  useEffect(() => {
    setSearch(search)
  }, [])

  return (
    <>
      <MetaTags />
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        currentCrumbLabel={currentCrumbLabel || 'User'}
      />
      <div className="mb-12 mt-2 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-start space-x-5">
          {image && (
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
                  src={image}
                  alt={name}
                />
                <span
                  className="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
          {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            {(applicant || position) && (
              <p className="text-sm font-medium text-gray-500">
                {applicant ? (
                  <>
                    Applied for{' '}
                    <a href="#" className="text-gray-900">
                      {position}
                    </a>{' '}
                    on <time dateTime="2020-08-25">August 25, 2020</time>
                  </>
                ) : (
                  <>{position}</>
                )}
              </p>
            )}
          </div>
        </div>
        {buttons && buttons.length && (
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <MenuButtonGroup buttons={buttons} />
          </div>
        )}
      </div>
    </>
  )
}

export default UserHeader
