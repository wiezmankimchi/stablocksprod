import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HelpdeskPage = () => {
  return (
    <>
      <MetaTags title="Helpdesk" description="Helpdesk page" />

      <h1>HelpdeskPage</h1>
      <p>
        Find me in <code>./web/src/pages/HelpdeskPage/HelpdeskPage.tsx</code>
      </p>
      <p>
        My default route is named <code>helpdesk</code>, link to me with `
        <Link to={routes.helpdesk()}>Helpdesk</Link>`
      </p>
    </>
  )
}

export default HelpdeskPage
