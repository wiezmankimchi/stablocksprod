import { useContext } from 'react'
import { AppContext } from 'src/components/Providers/AppProviderCell'
import { navigate, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'
import EmployeesCell from 'src/components/Essentials/User/EmployeesCell'
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
            label: 'Settings',
            icon: CogIcon,
            onClick: () => navigate(routes.organizationSettings()),
          },
        ]}
      />
      <EmployeesCell />
    </>
  )
}

export default OrganizationPage
