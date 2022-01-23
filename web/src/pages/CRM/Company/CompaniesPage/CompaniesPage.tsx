import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CompaniesPage = () => {
  return (
    <>
      <MetaTags title="Companies" description="Companies page" />

      <h1>CompaniesPage</h1>
      <p>
        Find me in <code>./web/src/pages/CompaniesPage/CompaniesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>companies</code>, link to me with `
        <Link to={routes.companies()}>Companies</Link>`
      </p>
    </>
  )
}

export default CompaniesPage
