import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const IncomesPage = () => {
  return (
    <>
      <PageTitle
        title="Income"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
        search={{ label: 'income', type: 'income' }}
      />

      <p>
        Find me in <code>./web/src/pages/IncomesPage/IncomesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>incomes</code>, link to me with `
        <Link to={routes.incomes()}>Incomes</Link>`
      </p>
    </>
  )
}

export default IncomesPage
