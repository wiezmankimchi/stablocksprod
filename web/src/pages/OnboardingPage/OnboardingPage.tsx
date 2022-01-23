import { useContext } from 'react'
import { Link, Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import NewOrganization from 'src/components/Essentials/Organization/NewOrganization'
import NewFirstUser from 'src/components/Essentials/User/NewFirstUser'

const OnboardingPage = () => {
  const { currentUser } = useAuth()
  const { organization, userCount } = useContext(AppContext)

  if (organization && userCount && currentUser) {
    return <Redirect to={routes.home()} />
  }

  if (organization && userCount) {
    return <Redirect to={routes.login()} />
  }

  return (
    <>
      <MetaTags title="Onboarding" />
      <div className="flex justify-center h-full py-12 md:py-16 px-4 md:px-12">
        <div className="max-w-5xl w-full mx-auto">
          <div className="pb-5 mb-5 border-b border-gray-200">
            <h3 className="text-3xl leading-6 font-bold text-gray-900">
              Stablocks Onboarding
            </h3>
          </div>

          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Company
                  </h3>
                  {!organization && (
                    <p className="mt-1 text-sm text-gray-600">
                      This information will be displayed publicly.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                {!organization ? (
                  <div className="shadow rounded-md overflow-hidden">
                    <NewOrganization />
                  </div>
                ) : (
                  <div className="flex px-4 sm:px-0 md:justify-end">
                    <BadgeCheckIcon className="h-8 w-8 text-green-600" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  {organization && !userCount && (
                    <p className="mt-1 text-sm text-gray-600">
                      You will be setup as the initial admin of the
                      organization.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                {organization && !userCount ? (
                  <div className="shadow rounded-md overflow-hidden">
                    <NewFirstUser />
                  </div>
                ) : (
                  <div className="flex px-4 sm:px-0 md:justify-end">
                    {userCount && (
                      <BadgeCheckIcon className="h-8 w-8 text-green-600" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          {organization && userCount && (
            <div className="flex justify-end">
              <Link
                to={routes.login()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
                <ArrowNarrowRightIcon
                  className="h-5 w-5 ml-2"
                  aria-hidden="true"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OnboardingPage
