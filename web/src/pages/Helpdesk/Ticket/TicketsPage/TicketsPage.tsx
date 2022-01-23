import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const TicketsPage = () => {
  return (
    <>
      <PageTitle
        title="Tickets"
        breadcrumbs={[{ title: 'Helpdesk', to: routes.helpdesk() }]}
        search={{ label: 'tickets', type: 'ticket' }}
      />

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
