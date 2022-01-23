import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RecruitingPage = () => {
  return (
    <>
      <MetaTags title="Recruiting" description="Recruiting page" />

      <h1>RecruitingPage</h1>
      <p>
        Find me in <code>./web/src/pages/RecruitingPage/RecruitingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recruiting</code>, link to me with `
        <Link to={routes.recruiting()}>Recruiting</Link>`
      </p>
    </>
  )
}

export default RecruitingPage
