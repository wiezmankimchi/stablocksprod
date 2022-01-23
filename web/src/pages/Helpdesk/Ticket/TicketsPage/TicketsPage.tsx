import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TicketsPage = () => {
  return (
    <>
      <MetaTags title="Tickets" description="Tickets page" />

      <h1>TicketsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TicketsPage/TicketsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>tickets</code>, link to me with `
        <Link to={routes.tickets()}>Tickets</Link>`
      </p>
    </>
  )
}

export default TicketsPage
