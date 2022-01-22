import { routes } from '@redwoodjs/router'
import EditOrganizationCell from 'src/components/Essentials/Organization/EditOrganizationCell'
import PageTitle from 'src/components/Layout/PageTitle'

const OrganizationSettingsPage = () => {
  return (
    <>
      <PageTitle
        title="Organization Settings"
        currentCrumbLabel="Settings"
        breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
        search={{ label: 'employees', type: 'employee' }}
      />
      <EditOrganizationCell />
    </>
  )
}

export default OrganizationSettingsPage
