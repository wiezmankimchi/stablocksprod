import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const ApplicationsPage = () => {
  return (
    <>
      <PageTitle
        title="Applications"
        breadcrumbs={[{ title: 'Recruiting', to: routes.recruiting() }]}
        search={{ label: 'applications', type: 'application' }}
      />

      <p>
        Find me in{' '}
        <code>./web/src/pages/ApplicationsPage/ApplicationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>applications</code>, link to me with `
        <Link to={routes.applications()}>Applications</Link>`
      </p>
    </>
  )
}

export default ApplicationsPage
