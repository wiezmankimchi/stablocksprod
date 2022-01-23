import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContactsPage = () => {
  return (
    <>
      <MetaTags title="Contacts" description="Contacts page" />

      <h1>ContactsPage</h1>
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
