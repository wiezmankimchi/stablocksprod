import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

const ExpensesPage = () => {
  return (
    <>
      <PageTitle
        title="Expenses"
        breadcrumbs={[{ title: 'Finance', to: routes.finance() }]}
        search={{ label: 'expenses', type: 'expense' }}
      />

      <p>
        Find me in <code>./web/src/pages/ExpensesPage/ExpensesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>expenses</code>, link to me with `
        <Link to={routes.expenses()}>Expenses</Link>`
      </p>
    </>
  )
}

export default ExpensesPage
