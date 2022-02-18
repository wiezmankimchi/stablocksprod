import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const CompaniesPage = () => {
  return (
    <>
      <PageTitle
        title="Companies"
        breadcrumbs={[{ title: 'Contacts', to: routes.contacts() }]}
        search={{ label: 'companies', type: 'company' }}
      />

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
