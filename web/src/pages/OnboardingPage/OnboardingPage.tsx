import { useState } from 'react'
import { Link, Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'

const OnboardingPage = () => {
  const { currentUser } = useAuth()

  const [isCompanyComplete, setIsCompanyComplete] = useState(false)
  const [isPersonalComplete, setIsPersonalComplete] = useState(false)

  return (
    <>
      <MetaTags title="Onboarding" />
      {currentUser && <Redirect to={routes.home()} />}
      <div className="flex items-center justify-center h-full px-4 md:px-12">
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
                  {!isCompanyComplete && (
                    <p className="mt-1 text-sm text-gray-600">
                      This information will be displayed publicly.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                {!isCompanyComplete ? (
                  <form action="#" method="POST">
                    <div className="shadow rounded-md overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="company-name"
                              id="company-name"
                              placeholder="Acme, Inc."
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                https://
                              </span>
                              <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="www.example.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="button"
                          onClick={() => setIsCompanyComplete(true)}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
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
                  {isCompanyComplete && !isPersonalComplete && (
                    <p className="mt-1 text-sm text-gray-600">
                      You will be setup as the initial admin of the
                      organization.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                {isCompanyComplete && !isPersonalComplete ? (
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="button"
                          onClick={() => setIsPersonalComplete(true)}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="flex px-4 sm:px-0 md:justify-end">
                    {isPersonalComplete && (
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

          {isCompanyComplete && isPersonalComplete && (
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
