import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const JobsPage = () => {
  return (
    <>
      <PageTitle
        title="Jobs"
        breadcrumbs={[{ title: 'Recruiting', to: routes.recruiting() }]}
        search={{ label: 'jobs', type: 'job' }}
      />

      <p>
        Find me in <code>./web/src/pages/JobsPage/JobsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>jobs</code>, link to me with `
        <Link to={routes.jobs()}>Jobs</Link>`
      </p>
    </>
  )
}

export default JobsPage
