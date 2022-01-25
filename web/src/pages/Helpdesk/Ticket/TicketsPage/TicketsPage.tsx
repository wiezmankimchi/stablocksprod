import { useState } from 'react'
import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewTicket from 'src/components/NewComponents/NewTicket'
import TicketsCell from 'src/components/Cells/Ticket/TicketsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const TicketsPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Tickets"
        breadcrumbs={[{ title: 'Helpdesk', to: routes.helpdesk() }]}
        search={{ label: 'tickets', type: 'ticket' }}
        buttons={[
          {
            label: 'New Ticket',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New project">
        <NewTicket setOpen={setIsNewOpen} />
      </Popup>

      <TicketsCell />
    </>
  )
}

export default TicketsPage
