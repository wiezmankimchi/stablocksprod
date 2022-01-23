import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const ContactsPage = () => {
  return (
    <>
      <PageTitle
        title="Contacts"
        search={{ label: 'contacts', type: 'contact' }}
      />

      <p>
        Find me in <code>./web/src/pages/ContactsPage/ContactsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>contacts</code>, link to me with `
        <Link to={routes.contacts()}>Contacts</Link>`
      </p>
    </>
  )
}

export default ContactsPage
