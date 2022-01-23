import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FinancePage = () => {
  return (
    <>
      <MetaTags title="Finance" description="Finance page" />

      <h1>FinancePage</h1>
      <p>
        Find me in <code>./web/src/pages/FinancePage/FinancePage.tsx</code>
      </p>
      <p>
        My default route is named <code>finance</code>, link to me with `
        <Link to={routes.finance()}>Finance</Link>`
      </p>
    </>
  )
}

export default FinancePage
