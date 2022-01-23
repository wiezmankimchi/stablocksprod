import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ApplicationsPage = () => {
  return (
    <>
      <MetaTags title="Applications" description="Applications page" />

      <h1>ApplicationsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ApplicationsPage/ApplicationsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>applications</code>, link to me with `
        <Link to={routes.applications()}>Applications</Link>`
      </p>
    </>
  )
}

export default ApplicationsPage
