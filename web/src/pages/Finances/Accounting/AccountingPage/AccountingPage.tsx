import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AccountingPage = () => {
  return (
    <>
      <MetaTags title="Accounting" description="Accounting page" />

      <h1>AccountingPage</h1>
      <p>
        Find me in <code>./web/src/pages/AccountingPage/AccountingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>accounting</code>, link to me with `
        <Link to={routes.accounting()}>Accounting</Link>`
      </p>
    </>
  )
}

export default AccountingPage
