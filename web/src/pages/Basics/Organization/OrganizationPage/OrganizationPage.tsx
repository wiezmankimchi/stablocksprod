import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OrganizationPage = () => {
  return (
    <>
      <MetaTags title="Organization" description="Organization page" />

      <h1>OrganizationPage</h1>
      <p>
        Find me in <code>./web/src/pages/OrganizationPage/OrganizationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>organization</code>, link to me with `
        <Link to={routes.organization()}>Organization</Link>`
      </p>
    </>
  )
}

export default OrganizationPage
