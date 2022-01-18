import { useContext } from 'react'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import { Link, navigate, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'
import { CogIcon } from '@heroicons/react/outline'

const OrganizationPage = () => {
  const { organization } = useContext(AppContext)

  return (
    <>
      <PageTitle
        title={organization.name}
        currentCrumbLabel="Organization"
        search={{ label: 'employees', type: 'employee' }}
        buttons={[
          {
            label: (
              <>
                <span className="sr-only">Organization Settings</span>
                <CogIcon className="h-5 w-5" aria-hidden="true" />
              </>
            ),
            onClick: () => navigate(routes.organizationSettings()),
          },
        ]}
      />
      <p>
        Find me in{' '}
        <code>./web/src/pages/OrganizationPage/OrganizationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>organization</code>, link to me with `
        <Link to={routes.organization()}>Organization</Link>`
      </p>
    </>
  )
}

export default OrganizationPage
