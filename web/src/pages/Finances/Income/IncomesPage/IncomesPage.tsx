import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const IncomesPage = () => {
  return (
    <>
      <MetaTags title="Incomes" description="Incomes page" />

      <h1>IncomesPage</h1>
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
