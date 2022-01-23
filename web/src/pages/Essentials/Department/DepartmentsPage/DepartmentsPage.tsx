import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DepartmentsPage = () => {
  return (
    <>
      <MetaTags title="Departments" description="Departments page" />

      <h1>DepartmentsPage</h1>
      <p>
        Find me in <code>./web/src/pages/DepartmentsPage/DepartmentsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>departments</code>, link to me with `
        <Link to={routes.departments()}>Departments</Link>`
      </p>
    </>
  )
}

export default DepartmentsPage
